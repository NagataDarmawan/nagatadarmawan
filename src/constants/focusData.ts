export interface FocusItem {
  id: string;
  title: string;
  p1: string;
  p2: string;
  focusLabel: string;
  skills: string[];
  image: string;
}

export const FOCUS_TEXT = {
  headline: "Apa yang Sedang Saya Pahami?",
  subHeadline: "Ada banyak hal yang sampai sekarang masih saya cari jawabannya.",
  items: [
    {
      id: "01",
      title: "TEKNOLOGI",
      p1: "Saya tertarik bagaimana teknologi dapat digunakan untuk membuat sesuatu yang benar-benar berguna.",
      p2: "Saat ini saya sedang belajar membangun website, aplikasi, dan berbagai project digital sambil memahami bagaimana sebuah ide dapat diubah menjadi sesuatu yang nyata.",
      focusLabel: "Sedang didalami:",
      skills: ["React", "TypeScript", "Node.js", "Database", "API", "UI/UX"],
      image: "/tech.jpeg", // Ganti dengan path foto masing-masing
    },
    {
      id: "02",
      title: "KEUANGAN",
      p1: "Saya mulai mengenal investasi sejak sekitar 2021–2022 dan sejak saat itu semakin tertarik memahami bagaimana uang, bisnis, dan investasi bekerja.",
      p2: "Saya ingin memahami bagaimana cara membangun kondisi keuangan yang lebih baik dalam jangka panjang.",
      focusLabel: "Sedang didalami:",
      skills: ["Investasi", "Pasar Saham", "Analisis Fundamental", "Manajemen Portofolio", "Personal Finance"],
      image: "/Finance.jpg",
    },
    {
      id: "03",
      title: "BISNIS",
      p1: "Saya ingin memahami bagaimana sebuah ide dapat berubah menjadi sesuatu yang benar-benar dibutuhkan orang.",
      p2: "Bukan hanya tentang membuat produk, tetapi juga memahami masalah, pengguna, nilai, dan bagaimana sebuah bisnis dapat berkembang.",
      focusLabel: "Sedang didalami:",
      skills: ["Product Thinking", "Model Bisnis", "Marketing", "Entrepreneurship"],
      image: "/bussines.jpg",
    },
    {
      id: "04",
      title: "DIRI SENDIRI",
      p1: "Mungkin ini adalah bagian yang paling sulit.",
      p2: "Saya masih mencari tahu apa yang sebenarnya saya sukai, apa yang ingin saya kuasai, dan kehidupan seperti apa yang ingin saya bangun.",
      focusLabel: "Sedang dikerjakan:",
      skills: ["Disiplin", "Konsistensi", "Kesehatan", "Pengembangan Diri"],
      image: "/self.jpg",
    },
  ],
};