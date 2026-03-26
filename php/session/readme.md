### Session İşlemleri


``session_start();`` ile oturum başlatılır.

``$_SESSION['session_anahtar'] = 'deger' `` ile session ataması yapılır.

``echo $_SESSION['session_anahtar'] `` ile session değerine ulaşılır.

``unset($_SESSION['session_anahtar']);`` ile bir anahtara air session değeri silinir.

``session_destroy();`` ile oturum sonlandırılır.
