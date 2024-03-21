## Adım 3: Kamera için bir odak noktası oluştur

Kameranın oyun etrafında akıcı ve sinematik bir şekilde dönmesini istiyorsak, onu bir odak noktası ile adanın merkezine sabitlememiz gerekiyor.

- Empty Object (boş nesne) oluştur ve “Focal Point” (odak noktası) olarak adlandır. 
- Konumunu başlangıç noktasına (0, 0, 0) sıfırla ve Camera’yı bunun bir alt nesnesi yap.
- Yeni bir “Scripts” (kod dosyaları) olarak adlandırılmış dosya oluştur ve içine “RotateCamera” (kamerayı yönlendir) olarak adlandırılan script (kod dosyası)  yerleştir.
- **“RotateCamera” script’ini FocalPoint olarak adlandırılan nesneye bağla.**
