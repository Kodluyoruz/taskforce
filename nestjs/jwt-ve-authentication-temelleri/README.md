# JWT ve Authentication Temelleri

Bir API geliştirdiğinde, en kritik sorulardan biri şudur: "Bu isteği gönderen kişi kim ve ne yapmasına izin var?" Bu soruyu yanıtlamak için iki farklı kavramı anlamak gerekir: authentication ve authorization.

## Authentication ve Authorization Farkı

Bu iki kavram sıklıkla birbirine karıştırılır, ama aslında birbirini takip eden iki ayrı adımdır.

**Authentication** — "Sen kimsin?" sorusunu yanıtlar. Kullanıcının kimliğini doğrulama işlemidir. E-posta ve şifre kombinasyonuyla giriş yapmak, parmak iziyle telefonu açmak ya da bir token sunmak — bunların hepsi authentication örnekleridir. Sonuç ya "bu kişi gerçekten Ali" ya da "bu kişi kim olduğunu kanıtlayamadı" şeklinde çıkar.

**Authorization** — "Ne yapabilirsin?" sorusunu yanıtlar. Kimliği doğrulanmış bir kullanıcının hangi kaynaklara erişebileceğini, hangi işlemleri yapabileceğini belirler. Ali sisteme girebildi (authentication başarılı), peki Ali admin paneline erişebilir mi? Başka bir kullanıcının verisini silebilir mi? Bunları authorization belirler.

JWT (JSON Web Token), öncelikle bir authentication aracıdır. Sunucu bir token üretir, istemci bu token'ı her istekte gönderir, sunucu token'ı doğrulayarak kullanıcının kim olduğunu öğrenir. Token içine rol bilgisi de eklenebileceğinden authorization için de kullanılabilir — ama temel işlevi kimlik doğrulamaktır.

## JWT Nedir?

JWT, "JSON Web Token" ifadesinin kısaltmasıdır. İçinde JSON verisi taşıyan, imzalanmış bir token formatıdır. Temel özelliği **stateless** olmasıdır: sunucu, kullanıcı oturumlarını bir yerde (veritabanı, memory cache vb.) saklamak zorunda değildir. Token'ın kendisi, içinde taşıdığı bilgilerle birlikte doğrulanabilir.

Geleneksel session tabanlı sistemlerde sunucu her oturumu bir yerde tutar. Kullanıcı her istekte session ID gönderir, sunucu bu ID'yi kendi storage'ında arar. JWT'de ise durum farklıdır: token tüm gerekli bilgiyi zaten içerir. Sunucu sadece token'ın geçerli olup olmadığını kontrol eder — herhangi bir storage araması gerekmez.

Önemli bir nokta: JWT **şifrelenmez**, sadece **imzalanır**. Token içindeki payload Base64URL ile kodlanmıştır, bu bir şifreleme değildir. Token'ı ele geçiren herhangi biri payload içeriğini okuyabilir. Güvenlik, içeriğin gizliliğinden değil, **imzanın sahte üretilememesinden** gelir. İmzayı oluşturmak için sunucudaki secret gerekir; secret olmadan geçerli bir imza üretilemez.

## JWT'nin Üç Parçası

Bir JWT üç bölümden oluşur ve her bölüm birbirinden nokta (`.`) ile ayrılır:

```
JWT formatı: xxxxx.yyyyy.zzzzz

Header (Base64URL decode edilmiş):
{
  "alg": "HS256",
  "typ": "JWT"
}

Payload (Base64URL decode edilmiş):
{
  "sub": 42,
  "email": "ali@ornek.com",
  "iat": 1716192000,
  "exp": 1716278400
}

NOT: Payload şifrelenmez — sadece imzalanır.
     Token'ı olan herkes payload'u okuyabilir.
     Bu yüzden hassas veri (şifre, kredi kartı vb.) payload'a YAZILMAZ.
```

**Header** — Token hakkında meta bilgi içerir. `alg` alanı kullanılan algoritmayı (`HS256`, `RS256` gibi), `typ` alanı ise token tipini belirtir. Bu bilgiler Base64URL ile kodlanır ve token'ın ilk parçasını oluşturur.

**Payload** — Token'ın asıl veri kısmıdır. İçindeki alanlara "claim" denir. Bazı claim'ler standarttır:
- `sub` (subject): Token'ın ait olduğu kullanıcının ID'si
- `iat` (issued at): Token'ın üretildiği Unix timestamp
- `exp` (expiration): Token'ın geçersiz olacağı Unix timestamp

Bunların yanı sıra istediğin claim'leri ekleyebilirsin — `email`, `role` gibi. Payload da Base64URL ile kodlanır; şifrelenmez.

**Signature** — İmza, token'ın sahte olmadığını kanıtlar. Header ve payload'un Base64URL kodlanmış halleri nokta ile birleştirilerek, sunucudaki secret kullanılarak `HMACSHA256` (ya da seçilen algoritma) ile imzalanır:

```
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

Birisi token'ın payload'unu değiştirip kullanıcı ID'sini başkasınınkiyle değiştirmeye çalışsa, imza artık geçersiz olur. Sunucu token'ı doğrularken imzayı yeniden hesaplar ve karşılaştırır — eşleşmezse token reddedilir.

## NestJS'te Auth Akışı

NestJS'te authentication akışı üç ana adımdan oluşur. Passport kullanmadan, sadece `@nestjs/jwt` paketiyle bu akışı doğrudan implemente edebilirsin.

**Adım 1 — Kayıt (`POST /auth/kayit`)**

1. Gelen e-posta zaten kayıtlı mı? → `ConflictException`
2. Şifreyi `bcrypt` ile hash'le
3. Kullanıcıyı veritabanına kaydet
4. Kullanıcı için JWT üret ve döndür

**Adım 2 — Giriş (`POST /auth/giris`)**

1. E-posta ile kullanıcıyı bul
2. Bulunamadıysa → `UnauthorizedException` (güvenlik: "kullanıcı bulunamadı" deme)
3. `bcrypt.compare()` ile şifreyi doğrula
4. Yanlışsa → aynı `UnauthorizedException` mesajı
5. JWT üret ve döndür

**Adım 3 — Korumalı endpoint (`GET /profil`)**

1. İstek `Authorization: Bearer <token>` header'ı taşımalı
2. Custom `AuthGuard`, header'dan token'ı çıkarır
3. `JwtService.verifyAsync(token)` ile token doğrulanır
4. Token geçerliyse, payload'daki kullanıcı bilgisi request nesnesine eklenir
5. Controller handler çalışır ve kullanıcı verisini döndürür

Passport'suz bu akışta guard sınıfı doğrudan `JwtService`'i inject eder. `CanActivate` interface'ini implement eden bir guard yazar, token'ı manuel çıkarır ve `verifyAsync()` ile doğrularsın. Daha az soyutlama, daha fazla kontrol.

## Access Token ve Güvenlik

Token güvenliği, uygulamanın genel güvenliğinin kritik bir parçasıdır. Dikkat edilmesi gereken birkaç önemli kural vardır.

**Kısa süre geçerlilik kullan.** Access token'lar için 15 dakika ile 24 saat arası bir `expiresIn` değeri best practice olarak kabul edilir. Token çalınırsa bile kısa sürede geçersiz olur. Kullanıcı her giriş yaptığında yeni bir token alır, bu da uzun süreli exposure riskini azaltır.

**Secret'ı environment variable'da tut.** JWT secret'ı kaynak koduna gömme — asla. Şu an `git push` yaptığında GitHub'a gider, oradan herkes okuyabilir. `.env` dosyasını `.gitignore`'a ekle, secret'ı `ConfigService` aracılığıyla oku. Secret en az 32 karakter uzunluğunda, rastgele bir değer olmalı.

**HTTPS zorunlu.** HTTP üzerinde token taşırsın, token açıkta iletilir ve MITM (Man-in-the-Middle) saldırılarına açık olursun. Production ortamında HTTPS şart. Geliştirme ortamında bile mümkünse HTTPS kullan.

**Payload'a hassas veri yazma.** Şifre (hash'lenmiş olsa bile), kredi kartı numarası, kimlik numarası, gizli iş verisi — bunların hiçbiri payload'a girmemeli. Payload şifrelenmez; token'ı ele geçiren herkes bu verilere erişir. Payload'da sadece kullanıcıyı tanımlamak için gereken minimum bilgiyi tut: `sub` (kullanıcı ID) ve `email` genellikle yeterlidir.

**Token'ı güvenli sakla.** Frontend tarafında token nerede tutulacağı da önemlidir. `localStorage` XSS saldırılarına açıktır. `httpOnly cookie` daha güvenlidir ama CSRF koruması gerektirir. Hangi yöntem seçilirse seçilsin, trade-off'ları anlamak gerekir.

## Gerekli Paketler

NestJS'te JWT authentication için gereken paketler şunlardır:

```bash
npm install @nestjs/jwt @nestjs/config bcrypt
npm install -D @types/bcrypt
```

- `@nestjs/jwt` — JWT üretimi ve doğrulaması için `JwtService`'i sağlar. Passport gerektirmez.
- `@nestjs/config` — `.env` dosyasını okumak ve `ConfigService` aracılığıyla erişmek için.
- `bcrypt` — Şifreleri hash'lemek ve karşılaştırmak için. Timing-safe karşılaştırma built-in olarak gelir.
- `@types/bcrypt` — `bcrypt` için TypeScript tip tanımlamaları. Development dependency.

Dikkat: bu kurulumda `@nestjs/passport`, `passport` veya `passport-jwt` **yok**. NestJS resmi dokümantasyonu hem Passport tabanlı hem de doğrudan `@nestjs/jwt` kullanan Passport-free yaklaşımı belgelemektedir. Bu kurs Passport'suz yolu tercih ediyor: daha az bağımlılık, daha az soyutlama katmanı, daha anlaşılır kod.

Environment değişkenlerini ayrı bir `.env` dosyasında tut:

```typescript
// .env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
JWT_SECRET="en-az-32-karakter-uzun-gizli-anahtar"
JWT_EXPIRES_IN="24h"
```

Bu dosyayı `.gitignore`'a eklemeyi unutma. Production ortamında bu değişkenleri hosting platformunun (Railway, Heroku, Render vb.) environment variables arayüzünden ayarla — `.env` dosyasını production'a taşıma.

Bir sonraki adımda bu temeller üzerine tam bir `AuthModule` inşa edeceksin: `register`, `login` endpoint'leri, custom JWT guard ve korumalı route'lar.
