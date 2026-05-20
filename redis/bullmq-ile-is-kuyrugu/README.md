# BullMQ ile İş Kuyruğu Yönetimi

Bu eğitim boyunca Redis komutlarını elle kullanarak queue'lar kurdun. Gerçek projelerde çoğu zaman bu sıfırdan yazmak yerine olgun bir kütüphane kullanmak daha akıllıca. **BullMQ**, Redis üzerine inşa edilmiş Node.js/TypeScript iş kuyruğu kütüphanesidir — retry, delay, priority, rate limiting, monitoring gibi özellikleri kutudan çıkar halde getirir.

## BullMQ Nedir?

BullMQ, Redis'i arka planda kullanan ancak karmaşıklığı senin yerine yöneten bir framework. Daha eski `Bull` kütüphanesinin halefı — TypeScript desteği güçlü, daha verimli, aktif geliştirilen bir proje.

Arka planda Redis List (bekleyen ve aktif işler), Sorted Set (gecikmeli ve öncelikli işler) ve Hash (iş durumu) veri yapılarını kullanır. Pub/Sub olayları yayınlamak için de kullanılır. Lua scriptleri ile bu operasyonları atomik hale getirir.

Kimin kullandığı: Monday.com, Netlify, Typeform ve dünya genelinde 50.000+ npm projesi.

## Kurulum

```bash
npm install bullmq
```

Redis 5.0+ gerektirir.

## Temel Kavramlar

**Queue:** Bir adla tanımlanmış iş kuyruğu. Redis'te birden fazla key ile yönetilir.

**Job:** Kuyruğa eklenen bir iş birimi. ID, data, options alanları var.

**Worker:** Queue'daki işleri işleyen consumer. Kendi process'inde veya thread'inde çalışabilir.

**QueueEvents:** Kuyruk olaylarını (tamamlandı, başarısız, ilerledi) dinlemek için.

## İlk Örnek: Email Kuyruğu

### Producer — İş Ekle

```javascript
// producer.js
const { Queue } = require("bullmq");

// Queue oluştur — Redis'e otomatik bağlanır
const emailKuyrugu = new Queue("email-gonderim", {
  connection: {
    host: "localhost",
    port: 6379,
  },
});

async function emailGonderimEkle(emailBilgisi) {
  const is = await emailKuyrugu.add(
    "email-gonder",        // İş adı (tip)
    emailBilgisi,          // İş verisi (herhangi bir JSON)
    {
      attempts: 3,          // Başarısızsa 3 kez dene
      backoff: {
        type: "exponential",
        delay: 1000,        // 1s, 2s, 4s artan bekleme
      },
    }
  );

  console.log(`İş eklendi: ${is.id}`);
  return is;
}

async function main() {
  await emailGonderimEkle({
    kime: "ali@test.com",
    konu: "Siparişin onaylandı",
    siparis_no: "ORD-001",
  });

  await emailGonderimEkle({
    kime: "veli@test.com",
    konu: "Kargo bilgisi",
    kargo_kodu: "TRK-XYZ",
  });

  await emailKuyrugu.close();
}

main();
```

### Worker — İşleri İşle

```javascript
// worker.js
const { Worker } = require("bullmq");
const nodemailer = require("nodemailer"); // Örnek olarak

const transporter = nodemailer.createTransport({
  // SMTP ayarları
  host: "smtp.example.com",
  port: 587,
  auth: { user: "user", pass: "pass" },
});

const emailWorker = new Worker(
  "email-gonderim",
  async (is) => {
    console.log(`İşleniyor: ${is.id} → ${is.data.kime}`);

    // İlerleme raporla
    await is.updateProgress(25);

    await transporter.sendMail({
      to: is.data.kime,
      subject: is.data.konu,
      text: `Siparişiniz onaylandı: ${is.data.siparis_no}`,
    });

    await is.updateProgress(100);
    console.log(`Email gönderildi: ${is.data.kime}`);

    // Return değeri job result olarak saklanır
    return { basarili: true, zaman: new Date().toISOString() };
  },
  {
    connection: { host: "localhost", port: 6379 },
    concurrency: 5, // Aynı anda 5 iş paralel işle
  }
);

// Olayları dinle
emailWorker.on("completed", (is, sonuc) => {
  console.log(`✓ Tamamlandı: ${is.id}`, sonuc);
});

emailWorker.on("failed", (is, hata) => {
  console.error(`✗ Başarısız: ${is.id} — ${hata.message}`);
});

emailWorker.on("progress", (is, ilerleme) => {
  console.log(`[${is.id}] İlerleme: %${ilerleme}`);
});

console.log("Email worker başladı");
```

## İş Seçenekleri

### Öncelik (Priority)

```javascript
// Yüksek öncelikli iş
await kuyruk.add("kritik-is", veri, { priority: 1 });

// Normal
await kuyruk.add("normal-is", veri, { priority: 5 });

// Düşük öncelik
await kuyruk.add("dusuk-is", veri, { priority: 10 });

// Düşük sayı = yüksek öncelik (1 en önce işlenir)
```

### Gecikmeli İşler (Delay)

```javascript
// 5 dakika sonra işle
await kuyruk.add("hatirlatma", veri, {
  delay: 5 * 60 * 1000, // milisaniye
});

// Sipariş 30 dakika sonra onaylanmadıysa iptal mesajı gönder
await kuyruk.add("siparis-iptal-kontrol", { siparisId: "ORD-001" }, {
  delay: 30 * 60 * 1000,
});
```

### Tekrarlanan İşler (Repeatable Jobs)

```javascript
// Her gece saat 02:00'da çalış (cron syntax)
await kuyruk.add(
  "gunluk-rapor",
  { rapor_tipi: "satis" },
  {
    repeat: {
      pattern: "0 2 * * *", // Cron
    },
  }
);

// Her 5 dakikada bir
await kuyruk.add("saglik-kontrolu", {}, {
  repeat: { every: 5 * 60 * 1000 },
});
```

### Rate Limiting

```javascript
// Worker başına saniyede maksimum 10 iş
const worker = new Worker("email-gonderim", isleyici, {
  connection,
  limiter: {
    max: 10,
    duration: 1000, // milisaniye
  },
});
```

## Retry ve Backoff

```javascript
await kuyruk.add("odeme-isleme", odemeVerisi, {
  attempts: 5, // 5 kez dene

  backoff: {
    type: "exponential", // 1s, 2s, 4s, 8s, 16s artan bekleme
    delay: 1000,
  },

  // Ya da sabit bekleme:
  // backoff: { type: "fixed", delay: 5000 }
});
```

Worker'da `UnrecoverableError` atarsan retry yapılmaz:

```javascript
const { UnrecoverableError } = require("bullmq");

async function isleyici(is) {
  if (is.data.email_gecersiz) {
    // Bu hatadan kurtarılamaz, tekrar deneme
    throw new UnrecoverableError("Geçersiz email, retry yapma");
  }

  await emailGonder(is.data);
}
```

## QueueEvents — Olayları İzle

Ayrı bir process'ten (ör. monitoring servisi) kuyruk olaylarını dinle:

```javascript
const { QueueEvents } = require("bullmq");

const kuyrukOlaylari = new QueueEvents("email-gonderim", {
  connection: { host: "localhost", port: 6379 },
});

kuyrukOlaylari.on("completed", ({ jobId, returnvalue }) => {
  console.log(`✓ ${jobId} tamamlandı:`, returnvalue);
});

kuyrukOlaylari.on("failed", ({ jobId, failedReason }) => {
  console.error(`✗ ${jobId} başarısız: ${failedReason}`);
});

kuyrukOlaylari.on("delayed", ({ jobId, delay }) => {
  console.log(`⏰ ${jobId} geciktirildi: ${delay}ms`);
});

kuyrukOlaylari.on("waiting", ({ jobId }) => {
  console.log(`⏳ ${jobId} sıra bekliyor`);
});
```

## Kuyruk Durumu Sorgulama

```javascript
const { Queue } = require("bullmq");
const kuyruk = new Queue("email-gonderim", { connection });

async function durumRaporu() {
  const bekleyenler = await kuyruk.getWaitingCount();
  const aktifler = await kuyruk.getActiveCount();
  const tamamlananlar = await kuyruk.getCompletedCount();
  const basarisizlar = await kuyruk.getFailedCount();
  const gecikmeli = await kuyruk.getDelayedCount();

  console.log({
    bekleyen: bekleyenler,
    aktif: aktifler,
    tamamlanan: tamamlananlar,
    basarisiz: basarisizlar,
    gecikmeli: gecikmeli,
  });
}

durumRaporu();
```

## Gerçek Dünya Örneği: Video İşleme Pipeline

```javascript
// video_pipeline.js
const { Queue, Worker, FlowProducer } = require("bullmq");
const connection = { host: "localhost", port: 6379 };

// 3 farklı kuyruk — pipeline
const indirme = new Queue("video-indir", { connection });
const isleme = new Queue("video-isle", { connection });
const yukleme = new Queue("video-yukle", { connection });

// FlowProducer ile bağımlı işler zinciri
const flow = new FlowProducer({ connection });

async function videoIslemeyeGonder(videoUrl, kullanicıId) {
  // Üç işi zincir olarak ekle: indirme → işleme → yükleme
  await flow.add({
    name: "video-yukle",
    queueName: "video-yukle",
    children: [
      {
        name: "video-isle",
        queueName: "video-isle",
        children: [
          {
            name: "video-indir",
            queueName: "video-indir",
            data: { url: videoUrl, kullanicıId },
          },
        ],
      },
    ],
  });
}

// Worker'lar
const indirmeWorker = new Worker("video-indir", async (is) => {
  console.log("İndiriliyor:", is.data.url);
  // İndirme işlemi
  return { yerelDosya: `/tmp/video_${is.id}.mp4` };
}, { connection });

const islemeWorker = new Worker("video-isle", async (is) => {
  const { yerelDosya } = await is.getChildrenValues();
  console.log("İşleniyor:", yerelDosya);
  // Transcode işlemi
  return { islenmisler: [`720p_${is.id}.mp4`, `480p_${is.id}.mp4`] };
}, { connection });

const yuklemeWorker = new Worker("video-yukle", async (is) => {
  const { islenmisler } = await is.getChildrenValues();
  console.log("Yükleniyor:", islenmisler);
  // CDN'e yükleme
  return { durum: "yayinda" };
}, { connection });

// Pipeline başlat
videoIslemeyeGonder("https://example.com/video.mp4", "user_42");
```

## BullMQ Board — Monitoring

BullMQ için açık kaynaklı monitoring arayüzü:

```bash
npm install -g @bull-board/cli
bull-board --queues email-gonderim,video-isle --redis localhost:6379
```

Tarayıcıda `http://localhost:3000` adresi kuyrukların durumunu, başarısız işleri, retry geçmişini gösterir.

## BullMQ vs Elle Redis Komutları

| Özellik | Elle Redis | BullMQ |
|---|---|---|
| **Kurulum süresi** | Uzun | Dakikalar |
| **Retry/Backoff** | Manuel kod | Kutudan çıkar |
| **Öncelik** | Sorted Set | `priority` seçeneği |
| **Gecikmeli iş** | Manuel timestamp | `delay` ms |
| **Cron** | Cron kütüphanesi + Redis | `repeat.pattern` |
| **Monitoring** | Yoktur, elle yaz | Bull Board |
| **Rate Limiting** | Manuel | `limiter` seçeneği |
| **Worker concurrency** | Manuel | `concurrency` |
| **Bağımlı işler** | Yoktur | FlowProducer |

BullMQ kullan — prodüksiyona hazır kuyruk sistemi kurmak için.

## Özet

BullMQ, Redis'in güçlü yapısını kullanıcı dostu bir API'ya saran olgun bir kütüphane. Queue oluşturmak, Worker başlatmak, retry/delay/priority ayarlamak birkaç satır kod. Production'da kullandığın her iş kuyruğu büyük ihtimalle BullMQ veya benzeri bir kütüphane üzerine oturur — altında Redis var.

Bu eğitimle Redis'te queue'ların nasıl çalıştığını, List'ten Streams'e, Pub/Sub'dan öncelikli kuyruklara kadar gördün. Şimdi BullMQ gibi araçları kullanırken altında ne döndüğünü ve ne zaman özelleştirmen gerektiğini biliyorsun.
