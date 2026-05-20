## Adım 6: Oyuncunun çift zıplamasını engelle

Fark etmiş olabileceğiniz gibi, oyuncu boşluk çubuğunu spam yapabilir ve karakteri gökyüzüne fırlatabilir. Bu gülünç spamı durdurmak ve zıplamayı daha gerçekçi hale getirmek için oyuncunun zıplamadan önce yerde olduğundan emin olan bir if-ifadesine ihtiyacımız var.

- Yeni bir public bool isOnGround değişkeni ekleyin ve onu true değerine eşitleyin.
- Oyuncunun zıplamasına neden olan if ifadesinde, **isOnGround = false** olarak ayarlayın, ardından **test edin.**
- if-ifadesine bir koşul **&& isOnGround** ekleyin
- Yeni bir void OnCollisionEnter yöntemi ekleyin, bu yöntemde isOnGround = true değerini ayarlayın, ardından **test edin.**

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/prevent-player-from-double-jumping/figures/CWC_B.1.2_image4.png)
