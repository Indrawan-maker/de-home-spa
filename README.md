<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="Project logo"></a>
</p>
<h3 align="center">home-spa</h3>

---

<p align="center"> Pemesanan tukang pijat online
    <br> 
</p>

## 📝 Table of Contents

- [Masalah yang diselesaikan](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Setting up a local environment](#getting_started)
- [Technology Stack](#tech_stack)
- [Authors](#authors)

## 🧐 Masalah yang diselesaikan <a name = "problem_statement"></a>


- Keadaan yang Diinginkan: Pengguna bisa memesan pijat yang sesuai keluhan secara instan dari rumah, tanpa bingung memilih treatment atau khawatir tekanan tidak cocok.
- Keadaan Saat Ini: Website booking pijat umumnya hanya menampilkan daftar panjang treatment dengan istilah teknis (30+ pilihan) tanpa panduan personal. Tidak ada konsultasi, preferensi tekanan pengabaikan, sehingga pengguna sering salah pilih dan kecewa.
- Jika tidak diperbaiki: Jika tidak diperbaiki, pengguna meninggalkan website, bisnis kehilangan pelanggan, dan potensi pasar layanan home service tidak optimal.


## 💡 Ide dan Solusi <a name = "idea"></a>

de HOME SPA – landing page booking pijat dengan AI + WhatsApp. Pengguna menulis keluhan (bahasa sehari-hari), AI tiga model berlapis (GPT-OSS-120B, Llama-3.3-70B, Llama-3.1-8B) via Groq API langsung memberi rekomendasi treatment (nama, durasi, aroma, tekanan) + tips pereda sakit. Preferensi tekanan (lembut/normal/keras) terbaca otomatis. Booking cukup form singkat (nama, alamat, jadwal, no HP, metode bayar) lalu pesan terkirim ke admin via WA. Website juga punya pricelist interaktif 26+ treatment, 4 durasi, modal pilih harga, tanpa database & login, responsif Tailwind CSS. Proses booking < 1 meni

## ⛓️ Batasan <a name = "limitations"></a>

- Hanya untuk wilayah samarinda
- Ini karena de home spa masih belum membuka cabang di tempat lain
- Jika di seluruh tempat, contoh: biaya akan menambah 1 juta hanya untuk tiket pesawat
## 🚀 Fitur yang bisa ditambahkan di masa depan <a name = "future_scope"></a>

ini bisa ditingkatkan lagi dengan banyak fitur seperti:
- detail perkepala atau tangan dan kaki yg bisa diklik

## 🏁 Getting Started <a name = "getting_started"></a>

Ikuti instruksi ini menjalankana project di environment anda sendiri

### syarat menjalankan project

sebelum menjalankan project pastikan anda menginstall nodejs

```
node -v
```


### Installing

Setelah anda clone project pastikan anda mengikuti step ini

menginstall semua dependency project

```
npm install
```

mengambil key env grok ai, fontee, midtrans anda

```
ini ada di .env.example
```



## ⛏️ Built With <a name = "tech_stack"></a>


- [NextJs](https://www.nextjs.org) - Web Framework
- [Shadcn](https://www.nextjs.org) - UI library
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@mufacoders](https://github.com/kylelobo) - ai recomendation and wa gateway
- [@Indrawan-maker](https://github.com/kylelobo) - Payment gateway and clickable human body


