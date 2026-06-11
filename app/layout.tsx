import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'TJGlow — Phần mềm quản lý Spa & Salon',
  description: 'Nền tảng quản lý spa & salon hiện đại dành cho thị trường Việt Nam. Quản lý lịch hẹn, khách hàng, doanh thu — tất cả trong một ứng dụng.',
  keywords: 'phần mềm quản lý spa, quản lý salon, đặt lịch spa, phần mềm salon tóc',
  openGraph: {
    title: 'TJGlow — Phần mềm quản lý Spa & Salon',
    description: 'Nền tảng quản lý spa & salon hiện đại dành cho thị trường Việt Nam.',
    locale: 'vi_VN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-bg text-hi`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
