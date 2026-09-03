export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: string;
  role: string; // Keterangan tambahan (misal: Frontend)
  image: string;
  demoUrl?: string;
}

export const PROJECTS_TEXT = {
  sectionTag: "HAL-HAL YANG PERNAH SAYA BANGUN",
  headline: "Bukan Pencapaian, Hanya Proses.",
  subHeadline:
    "Saya tidak ingin menjadikan website ini sebagai daftar pencapaian. Saya lebih suka menunjukkan hal-hal yang pernah saya coba bangun. Karena setiap project, sekecil apa pun, selalu memberikan sesuatu untuk dipelajari.",
  closingQuote: "Tidak semua project harus selesai untuk menjadi sesuatu yang berarti.",
  items: [
    {
      id: "01",
      category: "FINANCE APP",
      title: "ANGONDUIT.",
      subtitle: "Dashboard Investasi Pribadi",
      description:
        "Konsep dashboard untuk membantu memantau portofolio investasi, aset, keuntungan, dan kondisi keuangan dalam satu tempat.",
      tags: ["React", "TypeScript", "Finance"],
      status: "Concept App",
      role: "Frontend",
      image: "/AngonDuit.jpg",
      demoUrl: "https://demo.investdash.com",
    },
    {
      id: "02",
      category: "EDUCATION",
      title: "eduStock",
      subtitle: "Website Edukasi",
      description:
        "Konsep Website edukasi saham sederhana yang mempelajari jenis-jenis emiten, strategi alokasi sektor, proses transaksi bid/offer, hingga manajemen risiko dan dividen.",
      tags: ["React", "Node.js", "Google Sheets"],
      status: "Concept App",
      role: "Frontend",
      image: "/bussines.jpg",
      demoUrl: "#",
    },
    {
      id: "03",
      category: "TRAVEL & CONTENT",
      title: "OPEN TRIP",
      subtitle: "Website Open Trip",
      description:
        "Konsep website untuk menampilkan dan mengelola paket open trip, destinasi, galeri, artikel, dan jadwal perjalanan.",
      tags: ["Web Development", "CMS"],
      status: "Concept App",
      role: "Frontend",
      image: "/tech.jpeg",
      demoUrl: "#",
    },
    {
      id: "04",
      category: "POINT OF SALE",
      title: "POS",
      subtitle: "Sistem Kasir Sederhana",
      description:
        "Konsep sistem point of sale untuk membantu bisnis kecil mengelola produk, transaksi, stok, dan laporan.",
      tags: ["React", "Node.js", "Database"],
      status: "Concept App",
      role: "Frontend",
      image: "/self.jpg",
      demoUrl: "#",
    },
    {
      id: "05",
      category: "PERSONAL BRANDING",
title: "NAGATA DARMAWAN",
subtitle: "Eksplorasi, Mindset, & Proses Belajar",
description:
  "Representasi dari perjalanan saya sebagai mahasiswa Teknik Informatika yang terus belajar, mencoba hal baru, dan berproses mendekati tujuan. Menampilkan minat saya di bidang teknologi web dan lanskap finansial.",
tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      status: "Live Website",
      role: "Frontend",
      image: "/WebPersonalBrand.jpg",
      demoUrl: "https://nagatadarmawan.vercel.app",
    }
  ],
};