# RHS Studio — Website Updated

## Perubahan
- Seluruh tampilan CSS disesuaikan dengan warna utama orange `#EC4822`.
- Header sticky dengan tombol menu garis tiga dan shortcut delapan halaman layanan.
- Delapan halaman layanan: Wedding Organizer, Studio Photo, Live Streaming, Photography, Videografi, Wedding Content Creator, Photo Booth, Video Booth.
- Tiap halaman layanan memiliki hero, portfolio horizontal dengan tombol slide dan dukungan swipe di HP, pricelist, serta tombol konsultasi WhatsApp.
- Halaman Studio Photo kini memiliki empat paket resmi: File Only Rp 250.000, Basic Rp 500.000, Premium Rp 800.000, dan Spesial VIP Rp 1.200.000, lengkap dengan detail cetak/frame.
- Homepage memiliki slider hero, kartu layanan, filter portfolio, bagian tentang, promo, testimoni, Instagram, dan kontak.
- Memakai kembali foto-foto lokal dalam folder `assets/images` dari proyek asli.
- CSS dan JavaScript tetap dipisah menjadi `css/style.css` dan `js/script.js`.

## Cara mencoba
1. Ekstrak ZIP.
2. Buka `index.html` di browser. Untuk hasil terbaik, jalankan melalui local server atau hosting statis.
3. Pricelist Studio Photo sudah diisi sesuai rincian paket yang diberikan. Harga layanan lainnya masih dapat dikonsultasikan.
4. Nomor WhatsApp tetap mengikuti proyek sebelumnya: `6285179526502`.

## Struktur
- `index.html`
- `css/style.css`
- `js/script.js`
- `assets/images/`


## Pembaruan responsif (12 Oktober 2026)

Versi ini mempertahankan desain, aset foto, warna, dan fungsi website asli. Penyesuaian dilakukan pada CSS responsif untuk laptop, tablet, HP, serta layar HP kecil (hingga sekitar 320 px). Perbaikan markup kecil juga dilakukan pada navigasi desktop agar tautan Videography dan Kontak tersusun benar.


## Update slide sampul Home
Tiga gambar sampul Home sekarang menggunakan file lokal berikut:
- `assets/images/home-slide-1.jpg`
- `assets/images/home-slide-2.jpg`
- `assets/images/home-slide-3.jpg`

Untuk mengganti gambar lagi, pertahankan nama file tersebut atau ubah path di bagian `.hero-slider` pada `index.html`.


## Pengaturan video YouTube Pelaminan
- Pemutar YouTube kini tampil langsung di halaman Pelaminan tanpa kolom input tautan.
- Untuk memilih video yang diputar, buka `js/script.js` dan cari `const PELAMINAN_YOUTUBE_URL`.
- Ganti `TEMPEL_LINK_YOUTUBE_DI_SINI` dengan tautan video YouTube, misalnya `https://www.youtube.com/watch?v=VIDEO_ID_ANDA`.
- Simpan file dan unggah ulang `js/script.js` ke hosting. Halaman Pelaminan hanya menampilkan pemutar videonya.


## Media khusus paket Pelaminan

Halaman Pelaminan sekarang menggunakan 10 foto terpisah untuk masing-masing paket Gold, Royal, dan Ultimate. Video YouTube juga dikonfigurasi secara terpisah untuk setiap paket di `js/script.js`, pada objek `PELAMINAN_YOUTUBE_URLS`. Isi tiga nilai URL tersebut dengan tautan video YouTube yang sesuai. Saat pengunjung memilih paket, galeri dan pemutar video mengikuti paket yang dipilih.
