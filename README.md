# AutoCV - CV Builder & Job Recommendation

AutoCV adalah aplikasi web berbasis HTML, CSS, dan JavaScript yang membantu pengguna untuk membuat CV secara otomatis dan memberikan rekomendasi pekerjaan beserta perusahaan yang cocok berdasarkan data diri dan skill pengguna. Aplikasi ini cocok untuk mempermudah proses melamar kerja, terutama bagi fresh graduate atau pengguna yang ingin mempercepat pembuatan CV profesional.

## 🔹 Fitur Utama
- Form input data diri: Nama, Email, Telepon, Pendidikan, Jurusan, Pengalaman Kerja, Skill, dan Hobi.
- Generate CV otomatis dengan preview langsung.
- Rekomendasi pekerjaan & perusahaan sesuai skill dan pendidikan.
- Multi-template CV (opsional pengembangan berikutnya).
- Export CV ke PDF atau Word (opsional pengembangan berikutnya).
- Cover Letter otomatis (opsional pengembangan berikutnya).

## 🔹 Teknologi yang Digunakan
- **HTML** untuk struktur halaman.
- **CSS** untuk tampilan dan styling.
- **JavaScript** untuk logika form, generate CV, dan rekomendasi pekerjaan.
- **JSON** untuk database pekerjaan dan perusahaan.
- (Opsional) [jsPDF](https://github.com/parallax/jsPDF) untuk export CV ke PDF.

## 🔹 Struktur
AutoCV/
│
├─ index.html # Halaman utama & form input
├─ style.css # Styling tampilan
├─ script.js # Logika CV & rekomendasi pekerjaan
├─ jobs.json # Database pekerjaan & perusahaan
└─ assets/
└─ logo.png # Logo atau ikon (opsional)

## 🔹 Cara Menjalankan
1. Clone repository ini:
```bash
git clone https://github.com/username/AutoCV.git

2. Buka Folder Project:
```bash
cd AutoCV

3. Buka Fila index.html di browser untuk mencoba aplikasi:
```bash
Jika ingin mengubah database pekerjaan, edit file jobs.json

---

## 🔹 Penutup

Terima kasih telah menggunakan **AutoCV**.  
Aplikasi ini dibuat sebagai proyek pembelajaran dan demonstrasi pembuatan CV otomatis serta rekomendasi pekerjaan berbasis web.

**Pembuat:** Ssycha  
**Kontak:** [email@example.com](mailto:email@example.com)  

Jika Anda memiliki saran, kritik, atau ide pengembangan lebih lanjut, silakan hubungi saya melalui email atau buat issue di repository ini.  

Semoga AutoCV dapat membantu mempermudah proses membuat CV dan mendapatkan pekerjaan impian!
