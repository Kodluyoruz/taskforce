# JavaScript/Node.js ile Entegrasyon

Ollama'nın resmi JavaScript kütüphanesi Node.js, Deno ve Bun ortamlarında çalışır. Hem ESM hem CommonJS desteklenir; modern projelerde ESM'i tercih et.

## Kurulum

```bash
npm install ollama
```

Yarn veya pnpm kullanıyorsan:

```bash
yarn add ollama
# veya
pnpm add ollama
```

## ESM ve CommonJS

Kütüphane her iki modül sistemini destekler. `package.json`'ında `"type": "module"` varsa ESM otomatik olarak devreye girer:

```javascript
// ESM (önerilen)
import ollama from "ollama";

// CommonJS
const ollama = require("ollama").default;
```

TypeScript kullanıyorsan ekstra bir adım gerekmez; kütüphane tip tanımlarıyla gelir.

## Temel Kullanım

`ollama.chat()` ve `ollama.generate()` Promise döner; her ikisi de `await` ile kullanılır.

```javascript
import ollama from "ollama";

// Basit chat
async function sor(prompt) {
  const yanit = await ollama.chat({
    model: "llama3.2",
    messages: [{ role: "user", content: prompt }],
  });
  return yanit.message.content;
}

// Streaming ile gerçek zamanlı çıktı
async function streamSor(prompt) {
  const akis = await ollama.chat({
    model: "llama3.2",
    messages: [{ role: "user", content: prompt }],
    stream: true,
  });
  for await (const parca of akis) {
    process.stdout.write(parca.message.content);
  }
  console.log();
}

// Basit kullanım
const cevap = await sor("JavaScript closure nedir?");
console.log(cevap);
```

`ollama.generate()` ise ham metin üretimi içindir; mesaj listesi yerine tek bir `prompt` alır:

```javascript
const sonuc = await ollama.generate({
  model: "llama3.2",
  prompt: "Node.js event loop'u kısaca açıkla:",
});
console.log(sonuc.response);
```

## Streaming ile Async Iterator

`stream: true` ayarıyla model yanıtı parça parça gelir. `for await...of` döngüsü her token'ı gelir gelmez işler. Bu pattern hem terminalde hem de web uygulamalarında kullanılır.

```javascript
import ollama from "ollama";

async function streamliChat(mesajlar) {
  const akis = await ollama.chat({
    model: "llama3.2",
    messages: mesajlar,
    stream: true,
  });

  let tamYanit = "";
  for await (const parca of akis) {
    const metin = parca.message.content;
    process.stdout.write(metin);
    tamYanit += metin; // gerekirse tam yanıtı topla
  }
  console.log();
  return tamYanit;
}
```

## openai Paketi ile Uyumluluk Modu

Mevcut kodun `openai` npm paketini kullanıyorsa `baseURL`'i değiştirmek yeterlidir. Ollama, OpenAI uyumlu bir REST endpoint sunar:

```javascript
import OpenAI from "openai";

const istemci = new OpenAI({
  baseURL: "http://localhost:11434/v1",
  apiKey: "ollama", // zorunlu ama değeri önemli değil
});

const yanit = await istemci.chat.completions.create({
  model: "llama3.2",
  messages: [{ role: "user", content: "Merhaba!" }],
});
console.log(yanit.choices[0].message.content);
```

Bu yaklaşım, cloud OpenAI'dan yerel modele geçerken kodun geri kalanını değiştirmek istemediğinde işe yarar.

## Express.js ile Streaming SSE Endpoint

Gerçek bir web uygulamasında streaming yanıtları Server-Sent Events (SSE) üzerinden istemciye iletmek yaygın bir pattern'dır. Her token geldiğinde SSE event'i yazılır; frontend `EventSource` API'siyle bunu anlık okur.

```javascript
import express from "express";
import ollama from "ollama";

const app = express();
app.use(express.json());

// Streaming SSE endpoint
app.post("/chat", async (req, res) => {
  const { mesaj } = req.body;

  // Server-Sent Events başlıkları
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const akis = await ollama.chat({
    model: "llama3.2",
    messages: [{ role: "user", content: mesaj }],
    stream: true,
  });

  for await (const parca of akis) {
    // Her token'ı SSE formatında gönder
    res.write(`data: ${JSON.stringify({ metin: parca.message.content })}\n\n`);
  }

  // Stream bitti sinyali
  res.write("data: [DONE]\n\n");
  res.end();
});

app.listen(3000, () => console.log("Sunucu: http://localhost:3000"));
```

Frontend'de bu endpoint'i şöyle tüketebilirsin:

```javascript
// fetch ile streaming okuma
async function streamliSor(mesaj) {
  const yanit = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mesaj }),
  });

  const okuyucu = yanit.body.getReader();
  const cozucu = new TextDecoder();

  while (true) {
    const { done, value } = await okuyucu.read();
    if (done) break;

    // Her chunk'ı parse et ve ekrana yansıt
    const satirlar = cozucu.decode(value).split("\n");
    for (const satir of satirlar) {
      if (satir.startsWith("data: ") && satir !== "data: [DONE]") {
        const veri = JSON.parse(satir.slice(6));
        document.getElementById("cevap").textContent += veri.metin;
      }
    }
  }
}
```

## Konuşma Geçmişi

`ollama.chat()` state tutmaz; geçmişi sen yönetirsin:

```javascript
const mesajlar = [
  { role: "system", content: "Sen kısa ve net cevaplar veren bir asistansın." }
];

async function sor(girdi) {
  mesajlar.push({ role: "user", content: girdi });
  const yanit = await ollama.chat({ model: "llama3.2", messages: mesajlar });
  const cevap = yanit.message.content;
  mesajlar.push({ role: "assistant", content: cevap });
  return cevap;
}
```

Çalıştırmadan önce Ollama'nın ayakta olduğunu ve `llama3.2` modelinin yüklü olduğunu kontrol et: `ollama ls`. Express örneğini çalıştırmak için `npm install express ollama` yeterlidir.
