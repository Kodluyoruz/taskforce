# Branch, Path ve Tag Filtreleri

## Neden Filtrelere İhtiyaç Var?

Bir projede onlarca workflow olabilir. Eğer her push her workflow'u tetiklerse, günde yüzlerce gereksiz çalışma birikiyor. Bu da hem zaman kaybı hem de GitHub Actions dakika tüketimi demek — özellikle private repo'larda doğrudan para.

Filtrelerin amacı şu: workflow'un **ne zaman** çalışacağını tam olarak sen kontrol ediyorsun. Sadece ilgili branch değiştiyse, sadece belirli dosyalar değiştiyse, ya da belirli bir tag push'landıysa tetikle. Gereksiz her şeyi filtrele, geç.

Üç ana filtre tipi var:

- **Branch filtreleri** — hangi branch'lerde çalışsın
- **Path filtreleri** — hangi dosyalar değişince çalışsın
- **Tag filtreleri** — hangi tag'ler push'lanınca çalışsın

---

## Branch Filtreleri

`branches` filtresi ile workflow'un hangi branch'lere yapılan push veya pull request'lerde devreye gireceğini belirlersin. `branches-ignore` ise tam tersi — o branch'leri atla, geri kalanında çalış.

```yaml
on:
  push:
    branches:
      - main                # sadece main branch
      - 'releases/**'       # releases/ altındaki tüm branch'ler
      - 'feature/*'         # feature/login, feature/signup gibi
      - '!hotfix/**'        # hotfix/ branch'lerini bu listeden çıkar
```

`!` ile negatif pattern kullanabilirsin ama dikkat: negatif pattern'ı bir pozitif pattern'dan sonra yazman gerekiyor. Listenin başına tek başına `!` koyarsan çalışmaz.

`branches-ignore` kullanırsan tam tersi mantıkla yazıyorsun:

```yaml
on:
  push:
    branches-ignore:
      - 'wip/**'        # WIP branch'lerini tamamen atla
      - 'draft-*'       # draft- ile başlayan branch'leri atla
```

**Kritik kural:** `branches` ve `branches-ignore`'u aynı event için **birlikte kullanamazsın**. İkisini aynı `push:` bloğuna koyarsan workflow geçersiz olur. Hem dahil et hem hariç tut istiyorsan `branches` içinde `!` kullan.

```yaml
# YANLIS - bu sekilde yapamazsin:
on:
  push:
    branches:
      - main
    branches-ignore:        # HATA: branches ile birlikte kullanılamaz
      - 'wip/**'

# DOGRU - ! ile yap:
on:
  push:
    branches:
      - main
      - 'releases/**'
      - '!releases/old-*'   # releases/old- ile başlayanları çıkar
```

---

## Path Filtreleri

Path filtreleri, workflow'un yalnızca belirli dosyalar değiştiğinde çalışmasını sağlar. Monorepo yapısında ya da frontend/backend ayrımı olan projelerde hayat kurtarır.

Düşün: backend kodu değişmeden sadece `README.md` güncellendi. Bu durumda tüm test suite'ini çalıştırmak anlamsız. `paths` filtresiyle bunu engelliyorsun.

```yaml
on:
  push:
    paths:
      - 'src/**'            # src/ altındaki her şey değişince
      - 'package.json'      # bağımlılıklar değişince
      - '**.ts'             # herhangi bir TypeScript dosyası
    paths-ignore:
      - '**.md'             # markdown dosyaları değişse bile tetiklenme
      - 'docs/**'           # docs/ klasörünü tamamen yoksay
```

Bir başka gerçek senaryo: monorepo'da `apps/frontend/` ve `apps/backend/` ayrı dizinler. Frontend CI workflow'unu sadece frontend kodunu izleyecek şekilde ayarla:

```yaml
on:
  push:
    branches:
      - main
    paths:
      - 'apps/frontend/**'  # sadece frontend değişince bu workflow çalışsın
      - 'packages/ui/**'    # paylaşılan UI paketi de dahil
```

Backend workflow'u da benzer şekilde:

```yaml
on:
  push:
    branches:
      - main
    paths:
      - 'apps/backend/**'   # sadece backend değişince
      - 'packages/shared/**'
```

Böylece frontend'de değişiklik olduğunda backend CI tetiklenmez, tam tersi de öyle.

**Kritik kural:** `paths` ve `paths-ignore`'u aynı event için birlikte **kullanamazsın** — tıpkı branch filtreleri gibi. Birleştirmek istiyorsan `paths` içinde `!` kullan.

---

## Tag Filtreleri

Tag filtreleri genellikle release pipeline'larında kullanılır. `v1.0.0` gibi bir tag push'lanınca production deploy workflow'unu tetiklemek istiyorsan bu filtre tam sana göre.

```yaml
on:
  push:
    tags:
      - 'v*'                          # v1.0.0, v2.3.1, v10.0.0-beta gibi tüm sürüm tag'leri
      - 'v[0-9]+.[0-9]+.[0-9]+'       # Semantic versioning: x.y.z formatı
```

Sadece belirli major versiyonları yakalamak istiyorsan:

```yaml
on:
  push:
    tags:
      - 'v1.*'    # sadece v1.x.x serisi
      - 'v2.*'    # sadece v2.x.x serisi
```

`tags-ignore` ile belirli tag'leri dışarıda bırakabilirsin:

```yaml
on:
  push:
    tags-ignore:
      - '*-alpha'     # alpha tag'lerini tetikleme
      - '*-beta'      # beta tag'lerini tetikleme
      - '*-rc*'       # release candidate'leri atla
```

Yine aynı kural: `tags` ve `tags-ignore` birlikte kullanılamaz.

---

## Glob Pattern Kuralları

Filtre değerlerinin tümü glob pattern destekler. Hangi karakterin ne anlama geldiğini bilmeden doğru pattern yazamazsın:

| Karakter | Anlamı |
|---|---|
| `*` | `/` hariç herhangi bir karakter dizisi |
| `**` | `/` dahil herhangi bir karakter dizisi (alt dizinler) |
| `?` | Tek bir karakter (/ hariç) |
| `!` | Negatif pattern — bu pattern'ı hariç tut |
| `[abc]` | Karakter sınıfı — a, b veya c |
| `[0-9]` | Karakter aralığı — 0'dan 9'a kadar herhangi bir rakam |

Pratikte ne fark eder:

| Pattern | Eşleşir | Eşleşmez |
|---|---|---|
| `*.js` | `index.js` | `src/index.js` |
| `**/*.js` | `src/index.js`, `a/b/c.js` | `index.ts` |
| `src/**` | `src/a.js`, `src/b/c.js` | `test/a.js` |
| `**.ts` | `index.ts`, `src/utils.ts` | `index.js` |
| `feature/*` | `feature/login` | `feature/auth/login` |
| `feature/**` | `feature/login`, `feature/auth/login` | `main` |

---

## Branch ve Path Filtrelerini Birlikte Kullanmak

Branch ve path filtreleri **AND mantığıyla** çalışır. Yani her ikisi de sağlanmalı ki workflow tetiklensin.

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
    paths:
      - 'src/**'
      - 'package.json'
```

Bu örnekte workflow çalışmak için şu iki koşulun **ikisi birden** sağlanmalı:

1. Push, `main` veya `releases/**` branch'ine yapılmış olmalı
2. Değişen dosyalar `src/**` veya `package.json` içinde olmalı

Eğer `main`'e push yapıldı ama sadece `README.md` değiştiyse — workflow tetiklenmez. Path koşulu sağlanmadı.

Bu AND davranışı branch+path arasındadır. Aynı filtre tipi içindeki pattern'lar ise OR mantığıyla çalışır: `branches` altında `main` veya `releases/**` yazıyorsa, ikisinden **biri** eşleşirse yeterli.

---

## Önemli Sınırlama: 1000 Commit Kuralı

Path filtresi kullansanız bile, bir push'ta 1000'den fazla commit varsa veya GitHub diff oluşturamıyorsa (timeout vb.), workflow her zaman çalışır. Path filtresi bu durumda devre dışı kalır. Bu kenar durumu büyük batch push'larında karşına çıkabilir.

---

## Özet: Hangi Filtre Neyi Çözer?

| Durum | Kullan |
|---|---|
| Sadece `main`'e push'ta çalıştır | `branches: [main]` |
| WIP branch'lerini atla | `branches-ignore: ['wip/**']` |
| Sadece kaynak kod değişince çalıştır | `paths: ['src/**']` |
| Markdown değişince çalışma | `paths-ignore: ['**.md']` |
| Sürüm tag'i push'lanınca deploy et | `tags: ['v*']` |
| Frontend ve backend CI'ı ayır | `paths` ile dizin bazlı filtreleme |
