Bu videoda projelerinizi canlı ortama alma süreci anlatılmaktadır.. Bu süreç, projenizi geliştirme aşamasından canlıya taşıma sürecini içerir. İşte adım adım yapılması gerekenler:
**1. Veritabanı Hazırlığı:**
- Projede kullanacağınız veritabanını belirleyin. 
- Genellikle PostgreSQL tercih edilir.
- Render gibi bir platformda ücretsiz bir PostgreSQL veritabanı oluşturun.
- Veritabanı adını ve diğer seçenekleri belirleyin. Render'da, ücretsiz bir RAM ve alan alırsınız.
**2. Projeyi Ayarlama:**
- Projedeki application.properties dosyasını düzenleyin. Burada, veritabanı URL'sini, kullanıcı adını ve şifreyi güncelleyin. Dışarıdan erişilebilir olduğu için bu bilgileri doğru girin.
**3. Docker Dosyası Oluşturma:**
- Projeyi Docker ile canlıya almak için bir Docker dosyası oluşturun. Bu dosya, projenizi çalıştıracak komutları içerecektir.
```
FROM maven:3.8.4-openjdk-17 AS build

WORKDIR /app

COPY ./pom.xml /app
COPY ./src /app/src

RUN mvn clean package -Dmaven.test.skip=true

FROM openjdk:17-jdk

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
```
**4. Projeyi GitHub'a Yükleme:**
- Projeyi GitHub'a yükleyin. Render projenizi buradan okur ve değişikliklerin canlıya yansıması için buranın güncellenmesi gerekir. 
**5. Projeyi Render Üzerinde Canlıya Alma:**
- Render platformunda, GitHub hesabınızı bağlayın.
- GitHub'dan projenizi seçin ve canlıya almak için gerekli ayarları yapın.
- Bölge seçimini veri tabanı bölgesi ile aynı yapın.
- Projenin yer aldığı branch’ı doğru seçtiğinizden emin olun. Genellikle master branch’ında yer alır.
- Runtime kısmından Docker seçilmelidir.
- Veritabanı ve diğer seçenekleri belirleyin ve projeyi canlıya alın.
**6. Frontend Kısmını Canlıya Alma:**
- Frontend kısmını canlıya almak için Vercel/Netlfy gibi bir platform kullanabilirsiniz.
- Vercel kullanarak GitHub hesabınızı bağlayın, projeyi seçin ve canlıya alın.
**7. Sonuç:**
- Artık projeniz canlı ortamda çalışıyor! Projenin kaynak kodlarında bir değişiklik yapıp GitHub’a pushladığınızda Render ve Vercel platformlarından build aldığından emin olun.
- GitHub reposunda yaptığınız her güncelleme, Render ve Vercel tarafından algılanacak ve otomatik olarak servisinize yansıtılacaktır.
Bu şekilde, Java Spring projenizi geliştirme aşamasından canlıya alma sürecini tamamlamış olursunuz. Bu adımları izleyerek, projenizi kolayca canlıya alabilir ve kullanıcılarınızın erişimine sunabilirsiniz.
