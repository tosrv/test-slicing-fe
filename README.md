# Front-End Technical Test

Implementasi desain Figma ke dalam aplikasi web menggunakan **React (TypeScript)** dan **CSS**, dengan tampilan yang responsif sesuai desain yang diberikan.

## Tech Stack

- React
- TypeScript
- Vite
- CSS (Vanilla CSS)

## Features

- Login Page
- Vehicle List Page
- Responsive Layout

## Getting Started

### Clone Repository

```bash
git clone https://github.com/tosrv/test-slicing-fe.git
cd test-slicing-fe
```

### Environment

Salin file environment lalu sesuaikan jika diperlukan:

```bash
cp .env.example .env
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

## Styling

Project ini menggunakan **Vanilla CSS** tanpa framework CSS agar implementasi sesuai dengan requirement technical test.

Struktur CSS:

```
src/styles/
├── layout.css
├── sidebar.css
├── navbar.css
├── login.css
├── vehicle-list.css
└── coming-soon.css
```

## Responsive

Layout dioptimalkan untuk:

- Mobile
- Tablet
- Desktop

## Catatan: Konflik Soal vs Desain Figma

Beberapa bagian soal dan desain Figma tidak sepenuhnya sama. Keputusan implementasi mengikuti prinsip:

- **Data & logika** → mengikuti **soal + API**
- **Layout & visual** → mengikuti **Figma**

| Area | Soal / API | Figma | Keputusan |
|------|------------|-------|-----------|
| Footer vehicle card | Wajib tampilkan `activation_time` | Label `Data Terakhir` (`last_update`) | Menggunakan **`Activation : {activation_time}`** sesuai soal |
| Label login | API memakai `username` | Label "Email address" | Label diubah menjadi **Username** |

## Author

Technical Test Submission