export interface FocusItem {
  id: string;
  title: string;
  description: string;
  focusLabel: string;
  skills: string[];
  image: string;
}

export const FOCUS_TEXT = {
  headline: "Apa yang Sedang Saya Pahami?",
  subHeadline: "Proses eksplorasi dan pemahaman berkelanjutan yang terus saya jalani untuk membentuk sudut pandang baru.",
  items: [
    {
      id: "01",
      title: "TEKNOLOGI",
      description: "Mempelajari cara menerjemahkan ide menjadi produk digital yang fungsional melalui pengembangan web, coding, dan eksplorasi alat pemroduktif modern.",
      focusLabel: "Sedang didalami:",
      skills: ["Web Development", "Coding", "UI/UX", "AI Tools"],
      image: "/tech.jpeg",
    },
    {
      id: "02",
      title: "KEUANGAN",
      description: "Mendalami logika pasar modal, analisis fundamental, dan pengelolaan aset untuk membangun ketahanan finansial jangka panjang sejak 2021.",
      focusLabel: "Sedang didalami:",
      skills: ["Investasi", "Pasar Saham", "Analisis Fundamental", "Manajemen Risiko"],
      image: "/finance.jpg",
    },
    {
      id: "03",
      title: "BISNIS",
      description: "Eksplorasi cara kerja bisnis, pemecahan masalah pengguna, riset pasar, dan bagaimana sebuah nilai dapat diubah menjadi peluang yang berkelanjutan.",
      focusLabel: "Sedang didalami:",
      skills: ["Model Bisnis", "Riset Pasar", "Peluang Usaha", "Problem Solving"],
      image: "/bussines.jpg",
    },
    {
      id: "04",
      title: "PENGEMBANGAN DIRI",
      description: "Proses mengasah kedisiplinan, pola pikir, kebiasaan positif, dan arah hidup untuk membentuk versi diri yang lebih baik dari hari ke hari.",
      focusLabel: "Sedang dikerjakan:",
      skills: ["Disiplin", "Konsistensi", "Kebugaran Fisik", "Mindset"],
      image: "/self.jpg",
    },
  ],
};