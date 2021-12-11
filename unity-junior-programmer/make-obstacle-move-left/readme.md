## Adım 7: Bir engel yapın ve sola hareket ettirin

Havada zıplayan oyuncumuz var ama şimdi üzerinden atlayacakları bir şeye ihtiyaçları var. Engelleri somutlaştırmak ve onları oyuncunun yoluna atmak için bazı tanıdık kodlar kullanacağız.

- Course Library > Obstacles ‘dan bir engel ekleyin, “Obstacle” olarak yeniden adlandırın, ortaya çıkması gereken yere konumlandırın.
- Bir **Rigidbody ve Box Collider** bileşeni uygulayın, ardından collider sınırlarını engele uyacak şekilde düzenleyin
- Yeni bir “Prefabs” klasörü oluşturun ve yeni bir **Original Prefab **oluşturmak için onu sürükleyin.
- Yeni bir “MoveLeft” scripti oluşturun, onu engele atın ve açın.
- MoveLeft.cs'de, hız değişkenine göre sola çevirmek için kodu yazın
- MoveLeft scriptini **Background**’a uygulayın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/make-obstacle-move-left/figures/CWC_B.1.2_image5.png)
