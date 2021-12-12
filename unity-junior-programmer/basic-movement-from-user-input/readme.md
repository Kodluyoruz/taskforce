## Adım 2: Kullanıcı girdisinden temel hareket

Programlayacağımız ilk şey, oyuncunun kullanıcı girdisine dayalı çok temel hareketidir.

- Yeni bir özel kayan nokta hızı değişkeni bildirin
- Fizik kullanıyorsanız, bunun için yeni bir Rigidbody playerRb değişkeni tanımlayın ve onu Start()'ta başlatın.
- Ok tuşlarını kullanıyorsanız, yeni verticalInput ve/veya horizontalInput değişkenlerini tanımlayın
- Hareketinizi bir tuşa basmaya dayandırıyorsanız, KeyCode'u test etmek için if ifadesini oluşturun.
- Karakterinizi hareket ettirmek için Translate yöntemini veya AddForce yöntemini (fizik kullanıyorsanız) kullanın

Bu adımın sonunda, oynatıcı, kullanıcı girdisine göre istediğiniz şekilde hareket edebilmelidir.
