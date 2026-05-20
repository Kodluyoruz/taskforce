# Dinamik Rotalar

Next.js'te her sayfa statik bir URL'ye karşılık gelmek zorunda değil. Blog yazıları, ürün sayfaları, kullanıcı profilleri gibi içerikler URL'de değişken bir parça içerir. İşte burada dinamik rotalar devreye giriyor.

## Dinamik Segment Nedir?

Köşeli parantez içinde bir klasör adı oluşturduğunda o klasör bir dinamik segment olur. Örneğin `app/blog/[slug]/page.tsx` dosyası, `/blog/nextjs-nedir`, `/blog/react-hooks` gibi sonsuz sayıda URL'i tek bir dosyayla karşılar.

```
app/
  blog/
    [slug]/
      page.tsx   ← /blog/:slug yolunu karşılar
```

Aynı mantık birden fazla segment için de çalışır:

```
app/
  products/
    [category]/
      [id]/
        page.tsx   ← /products/:category/:id
```

## `params` Prop'u ile Slug Okuma

Next.js 16'da `params` **asenkron** hale geldi. Değeri okumak için `await` kullanman gerekiyor:

```tsx
// app/blog/[slug]/page.tsx

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  // params artık async — await ile açıyoruz
  const { slug } = await params;

  const post = await fetchPost(slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
```

Birden fazla segment varsa hepsini aynı anda alabilirsin:

```tsx
// app/products/[category]/[id]/page.tsx

type Props = {
  params: Promise<{ category: string; id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { category, id } = await params;

  const product = await fetchProduct(category, id);

  return <div>{product.name}</div>;
}
```

## `generateStaticParams` ile Build Anında Sayfa Üretme

Blog gibi içerik ağırlıklı sitelerde tüm sayfaları build anında üretmek (SSG) performans açısından avantajlıdır. `generateStaticParams` fonksiyonu, hangi `params` kombinasyonlarının önceden üretileceğini Next.js'e bildirir.

```tsx
// app/blog/[slug]/page.tsx

// Build anında çalışır — tüm blog postlarını çek
export async function generateStaticParams() {
  const posts = await fetchAllPosts(); // [{ slug: 'nextjs-nedir' }, ...]

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
    </article>
  );
}
```

100 blog yazısı varsa `generateStaticParams` 100 eleman döner ve Next.js hepsini build sırasında HTML olarak üretir. İstek geldiğinde hazır HTML sunulur.

## `dynamicParams` ile Tanımlanmayan Slug'ları Yönetme

`generateStaticParams` sadece belirli slug'ları kapsar. Peki `generateStaticParams`'ta yer almayan bir URL'e istek gelirse ne olur? Varsayılan davranış, o sayfayı dinamik olarak üretmektir.

Bunu kapatmak istersen `dynamicParams = false` ayarını kullan:

```tsx
// app/blog/[slug]/page.tsx

// generateStaticParams dışındaki slug → 404
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await fetchAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  // ...
}
```

Bu sayede sadece build anında tanımlı olan sayfalar erişilebilir olur; diğerleri otomatik 404 döner.

## Catch-all Segments: `[...slug]`

Tek bir dinamik segment yeterli olmadığında, yani URL'in kaç parçadan oluşacağını önceden bilmediğinde catch-all segment kullanırsın.

`[...slug]` şeklinde oluşturulan bir klasör `/a`, `/a/b`, `/a/b/c` gibi her derinliği yakalar ve `slug` değeri bir dizi olarak gelir.

```tsx
// app/docs/[...path]/page.tsx

type Props = {
  params: Promise<{ path: string[] }>;
};

export default async function DocsPage({ params }: Props) {
  const { path } = await params;
  // /docs/api/routes → path = ['api', 'routes']
  // /docs/guide/intro/setup → path = ['guide', 'intro', 'setup']

  const fullPath = path.join('/'); // 'api/routes'
  const doc = await fetchDoc(fullPath);

  return (
    <main>
      <nav aria-label="Breadcrumb">
        {path.map((segment, i) => (
          <span key={i}>{segment} / </span>
        ))}
      </nav>
      <article>{doc.content}</article>
    </main>
  );
}
```

## Optional Catch-all: `[[...slug]]`

Çift köşeli parantez, root URL'yi de yakalar. `[...slug]` ile `/docs` yolu 404 döner; `[[...slug]]` ile bu URL da karşılanır ve `slug` değeri `undefined` olur.

```
app/
  docs/
    [[...slug]]/
      page.tsx
```

Bu yapı hem `/docs` hem `/docs/api` hem `/docs/api/reference` yollarını tek dosyayla karşılar:

```tsx
// app/docs/[[...slug]]/page.tsx

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function DocsPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    // /docs root sayfası
    return <DocsHomePage />;
  }

  const doc = await fetchDoc(slug.join('/'));
  return <DocContent doc={doc} />;
}
```

## URL Parametrelerini Okuma: `searchParams`

Dinamik rotalarda `params` route segmentlerini verirken `searchParams` query string'i verir. `/blog?q=nextjs&page=2` gibi bir URL için:

```tsx
// app/blog/page.tsx

type Props = {
  searchParams: Promise<{ q?: string; page?: string }>;
};

export default async function BlogListPage({ searchParams }: Props) {
  // searchParams da artık async
  const { q, page } = await searchParams;

  const currentPage = Number(page ?? '1');
  const posts = await searchPosts(q, currentPage);

  return (
    <div>
      {q && <p>"{q}" için sonuçlar:</p>}
      {posts.map((post) => (
        <article key={post.slug}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  );
}
```

`params` ile `searchParams`'ı aynı anda kullanabilirsin:

```tsx
// app/shop/[category]/page.tsx

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ sort?: string; page?: string }>;
};

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  const { sort = 'newest', page = '1' } = await searchParams;

  const products = await fetchProducts(category, {
    sort,
    page: Number(page),
  });

  return <ProductGrid products={products} />;
}
```

## Gerçek Kullanım Senaryoları

**Blog sistemi** — en yaygın kullanım alanı. Her yazı `/blog/[slug]` altında, `generateStaticParams` ile build anında üretilir.

**E-ticaret ürün sayfaları** — `/products/[category]/[id]` yapısı hem kategori hem ürün ID bilgisini URL'den alır.

**Dokümantasyon siteleri** — `[[...slug]]` ile herhangi bir derinlikteki path tek bir sayfayla karşılanır.

**Kullanıcı profilleri** — `/u/[username]` ile her kullanıcı için ayrı sayfa.

Dinamik rotalar, tek bir `page.tsx` dosyasıyla yüzlerce hatta binlerce benzersiz URL'i yönetmeni sağlar. `generateStaticParams` ile bunları build anında üretebilir, `dynamicParams = false` ile sınırlandırabilirsin.
