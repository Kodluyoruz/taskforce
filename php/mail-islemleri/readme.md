### Mail İşlemleri / Composer / PhpMailer

````apacheconf
composer init
````
````apacheconf
composer require phpmailer/phpmailer
````
````php
<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Debug mod açık
    $mail->isSMTP();                                            //SMTP Kullanarak Gönder
    $mail->Host       = 'smtp.example.com';                     //SMTP Host
    $mail->SMTPAuth   = true;                                   //SMTP Doğrulaması
    $mail->Username   = 'user@example.com';                     //SMTP Kullanıcı Adı
    $mail->Password   = 'secret';                               //SMTP Şifre
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //SSL/TLS Ayarı
    $mail->Port       = 465;                                    // PORT Ayaro
    $mail->CharSet = 'UTF-8'; //Karekter seti
    $mail->setLanguage('tr', '/optional/path/to/language/directory/'); // Dil Ayarı
    
    //Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('joe@example.net', 'Joe User');     //Alıcı E-Posta - İsim
    $mail->addAddress('ellen@example.com');               //İsim Eklemek Zorunlu Değil
    $mail->addReplyTo('info@example.com', 'Information'); //Alıcı cevapla dediğinde mailin gideceği adres.
    $mail->addCC('cc@example.com'); // Bilgi Kişisi
    $mail->addBCC('bcc@example.com'); // Gizli Bilgi Kişisi
    $mail->CharSet = 'UTF-8'
    //Attachments
    $mail->addAttachment('/var/tmp/file.tar.gz');         //Dosya Eki
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Dosya Eki İsimlendirmeli

    //Content
    $mail->isHTML(true);                                  //E-Posta HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
````