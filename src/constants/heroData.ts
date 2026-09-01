export class HeroConfig {
  static readonly TYPING_SPEED = 100;    // Kecepatan ngetik huruf (ms)
  static readonly DELETING_SPEED = 50;   // Kecepatan hapus huruf (ms)
  static readonly PAUSE_COMPLETE = 1000; // Jeda diam setelah selesai ngetik (ms)
  static readonly PAUSE_CLEARED = 500;   // Jeda setelah hapus bersih (ms)
}

export const HERO_TEXT = {
  firstName: 'NAGATA',
  lastName: 'DARMAWAN.',
  tagline: 'Tech Enthusiast • Finance Enthusiast',
  subHeadline: 'Saya Belum Sampai di Sana.',
  paragraph1: {
    before: 'Seorang mahasiswa ',
    bold1: 'Teknik Informatika',
    middle1: ' yang sedang mencari tahu apa yang ingin ',
    bold2: 'dibangun',
    middle2: ', ',
    bold3: 'dipelajari',
    middle3: ', dan ',
    bold4: 'dicapai',
    after: ', dalam hidup.',
  },
  paragraph2: {
    before: 'Saya masih ',
    bold1: 'belajar',
    middle: ', mencoba berbagai hal, dan terkadang masih mencari arah. Tapi saya percaya, setiap proses kecil tetap membawa saya ',
    bold2: 'lebih dekat',
    after: ' ke tempat yang ingin saya tuju.',
  },
};