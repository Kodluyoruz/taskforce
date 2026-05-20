# Proje 1 - Countries GraphQL API

Kıtaları, ülkeleri ve bu ülkelerde konuşulan dilleri ilişkili bir biçimde görüntüleyebileceğimiz bir GraphQL backend geliştirmeniz gerekiyor.

Örnek çalışmaya [şuradan](https://countries.trevorblades.com/) ulaşabilirsiniz.

## Gereksinimler
- [ ] Tüm ülkeleri ve id bazlı tek bir ülkeyi getirecek olan query'ler yazılmalıdır.
- [ ] Tüm dilleri ve id bazlı tek bir dili getirecek olan query'ler yazılmalıdır.
- [ ] Tüm kıtaları ve id bazlı tek bir kıtayı getirecek olan query'ler yazılmalıdır.
- [ ] Kıtalar, ülkeler ve diller birbirleriyle ilişkili olmalıdır. Örneğin aşağıdaki query örnekleri doğru şekilde çalışabilmelidir.


  Tüm ülkeler sorgulanırken;
  ```
  query AllCountries {
    countries {
      name
      emoji
      continent {
        name
      }
      languages {
        name
        native
      }
    }
  }
  ```

  Veya tek bir ülke sorgulanmak istendiğinde;

  ```
    query Single {
      country(code: "TR") {
        name
        emoji
        continent {
          name
        }
        languages {
          name
          native
        }
      }
    }
  ```

Kolaylıklar :)
