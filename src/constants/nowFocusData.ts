export interface NowFocusItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string; // URL Foto untuk Masking di dalam Angka
}

export const NOW_FOCUS_TEXT = {
  sectionTag: "FOKUS SAYA SEKARANG",
  headline: "Saat Ini, Saya Sedang Fokus Pada Tiga Hal",
  items: [
    {
      id: "01",
      number: "1",
      title: "MEMBANGUN",
      description:
        "Mengubah lebih banyak ide menjadi sesuatu yang nyata. Tidak harus besar. Sebuah project sederhana tetap lebih baik daripada ide yang tidak pernah dibuat.",
      image: "/nagata.jpg",
    },
    {
      id: "02",
      number: "2",
      title: "BELAJAR",
      description:
        "Memahami sesuatu lebih dalam, bukan hanya sekadar bisa menggunakannya. Teknologi, keuangan, bisnis, dan berbagai hal yang mungkin berguna untuk masa depan.",
      image: "/nagata.jpg",
    },
    {
      id: "03",
      number: "3",
      title: "BERKEMBANG",
      description:
        "Tidak hanya secara akademik atau profesional, tetapi juga menjadi pribadi yang lebih disiplin, sehat, dan konsisten. Tujuannya bukan memiliki semuanya sekarang. Tujuannya adalah terus bergerak menuju versi diri yang lebih baik.",
      image: "/nagata.jpg",
    },
  ],
};