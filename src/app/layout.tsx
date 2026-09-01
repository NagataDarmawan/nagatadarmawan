import type { Metadata } from 'next';
import './globals.css';
import Preloader from '@/components/common/Preloader';
import SmoothScroll from '@/components/common/SmoothScroll';

export const metadata: Metadata = {
  title: 'NAGATA DARMAWAN — Saya Belum Sampai di Sana',
  description: 'Nagata Darmawan - Seorang mahasiswa Teknik Informatika yang sedang mencari tahu apa yang ingin dibangun, dipelajari, dan dicapai dalam hidup.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-bg-main text-text-primary antialiased">
        {/* Preloader Muncul Saat Pertama Kali Halaman Dimuat */}
        <Preloader />
        
        {/* SmoothScroll Membungkus Konten Utama Website */}
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}