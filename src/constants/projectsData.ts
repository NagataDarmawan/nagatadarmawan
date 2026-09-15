export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  role: string;
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
        "Konsep dashboard untuk memantau portofolio investasi, aset, keuntungan, dan kondisi keuangan secara ringkas dalam satu tempat.",
      status: "Concept App",
      role: "Frontend",
      image: "/AngonDuit.jpg",
      demoUrl: "https://demo.investdash.com",
    },
    {
      id: "02",
      category: "Open Trip Platform",
      title: "RibuanMDPL.id",
      subtitle: "Landing Page Open Trip Pendakian Gunung",
      description:
        "Platform open trip pendakian gunung untuk membantu pendaki memilih paket perjalanan dan menjelajahi pegunungan Indonesia dengan lebih praktis.",
      status: "Live Website",
      role: "Frontend",
      image: "/ribuanmdpl.jpeg",
      demoUrl: "https://ribuanmdpl.vercel.app",
    },
    {
      id: "03",
      category: "PERSONAL BRANDING",
      title: "NAGATA DARMAWAN",
      subtitle: "Landing Page Personal Branding",
      description:
        "Representasi perjalanan pribadi dalam belajar dan mencoba hal baru, sekaligus menampilkan minat di bidang web development dan finansial.",
      status: "Live Website",
      role: "Frontend",
      image: "/WebPersonalBrand.jpg",
      demoUrl: "https://nagatadarmawan.vercel.app",
    },
    {
      id: "04",
      category: "Booking Platform",
      title: "AgroFly",
      subtitle: "Landing Page Sewa Drone Pertanian",
      description:
        "Website company profile untuk layanan drone pertanian, menyediakan jasa penyemprotan, pengangkutan, tebar benih, dan penyerbukan buatan.",
      status: "Live Website",
      role: "Frontend",
      image: "/AgroFly.jpg",
      demoUrl: "https://agrofly.vercel.app/",
    },
  ],
};