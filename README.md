<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="Project logo"></a>
</p>
<h3 align="center">home-spa</h3>

<div align="center">

[![Hackathon](https://img.shields.io/badge/hackathon-name-orange.svg)](http://hackathon.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>


- IDEAL (Keadaan yang Diinginkan): Pengguna bisa memesan pijat yang sesuai keluhan secara instan dari rumah, tanpa bingung memilih treatment atau khawatir tekanan tidak cocok.
- REALITY (Keadaan Saat Ini): Website booking pijat umumnya hanya menampilkan daftar panjang treatment dengan istilah teknis (30+ pilihan) tanpa panduan personal. Tidak ada konsultasi, preferensi tekanan pengabaikan, sehingga pengguna sering salah pilih dan kecewa.
- CONSEQUENCES: Jika tidak diperbaiki, pengguna meninggalkan website, bisnis kehilangan pelanggan, dan potensi pasar layanan home service tidak optimal.


## 💡 Idea / Solution <a name = "idea"></a>

de HOME SPA – landing page booking pijat dengan AI + WhatsApp. Pengguna menulis keluhan (bahasa sehari-hari), AI tiga model berlapis (GPT-OSS-120B, Llama-3.3-70B, Llama-3.1-8B) via Groq API langsung memberi rekomendasi treatment (nama, durasi, aroma, tekanan) + tips pereda sakit. Preferensi tekanan (lembut/normal/keras) terbaca otomatis. Booking cukup form singkat (nama, alamat, jadwal, no HP, metode bayar) lalu pesan terkirim ke admin via WA. Website juga punya pricelist interaktif 26+ treatment, 4 durasi, modal pilih harga, tanpa database & login, responsif Tailwind CSS. Proses booking < 1 meni

## ⛓️ Dependencies / Limitations <a name = "limitations"></a>

- Hanya untuk wilayah samarinda
- Ini karena de home spa masih belum membuka cabang di tempat lain
- Jika di seluruh tempat, contoh: biaya akan menambah 1 juta hanya untuk tiker pesawat
## 🚀 Future Scope <a name = "future_scope"></a>

ini bisa ditingkatkan lagi dengan banyak fitur seperti:
- detail perkepala atau tangan dan kaki yg bisa diklik

## 🏁 Getting Started <a name = "getting_started"></a>

Ikuti instruksi ini menjalankana project di environment anda sendiri

### Prerequisites

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


## 🎈 Usage <a name="usage"></a>

Add notes about how to use the system.

## ⛏️ Built With <a name = "tech_stack"></a>


- [NextJs](https://www.nextjs..org) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@mufacoders](https://github.com/kylelobo) - ai recomendation
- [@Indrawan-maker](https://github.com/kylelobo) - Payment gateway and clickable human body


