import type { Metadata } from 'next';
import './globals.css';
import Preloader from '@/components/common/Preloader';
import SmoothScroll from '@/components/common/SmoothScroll';

export const metadata: Metadata = {
  title: 'NAGATA DARMAWAN — Personal Website & Portfolio',
  description: 'Situs resmi Nagata Darmawan. Ruang eksplorasi dan proses pemahaman seputar teknologi, bisnis, keuangan, dan pengembangan diri.',
  keywords: [
    'Nagata Darmawan',
    'Nagata',
    'Darmawan',
    'Portofolio Nagata Darmawan',
    'Teknologi',
    'Bisnis',
    'Keuangan',
    'Investasi',
    'Pengembangan Diri'
  ],
  authors: [{ name: 'Nagata Darmawan' }],
  creator: 'Nagata Darmawan',
  metadataBase: new URL('https://nagatadarmawan.vercel.app'),
  verification: {
    google: 'google-site-verification: google348914543dbb932b.html',
  },
  openGraph: {
    title: 'NAGATA DARMAWAN — Personal Website & Portfolio',
    description: 'Situs resmi Nagata Darmawan. Ruang eksplorasi dan proses pemahaman seputar teknologi, bisnis, keuangan, dan pengembangan diri.',
    url: 'https://nagatadarmawan.vercel.app',
    siteName: 'Nagata Darmawan',
    images: [
      {
        url: '/nagataSelf.jpg',
        width: 1200,
        height: 630,
        alt: 'Nagata Darmawan',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* JSON-LD Structured Data agar Google mengenali entitas Person Nagata Darmawan */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Nagata Darmawan',
              url: 'https://nagatadarmawan.vercel.app',
              knowsAbout: [
                'Teknologi',
                'Bisnis',
                'Keuangan & Investasi',
                'Pengembangan Diri'
              ],
            }),
          }}
        />
      </head>
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