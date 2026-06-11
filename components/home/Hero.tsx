import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.tjglow.com'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            <Star className="h-3 w-3 fill-brand" />
            Dùng thử miễn phí 14 ngày — không cần thẻ
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-hi leading-tight tracking-tight">
          Quản lý Spa & Salon<br />
          <span className="text-brand">đơn giản hơn bao giờ hết</span>
        </h1>

        <p className="mt-6 text-center text-base sm:text-lg text-lo max-w-2xl mx-auto leading-relaxed">
          TJGlow giúp chủ spa & salon quản lý lịch hẹn, khách hàng, nhân viên và doanh thu —
          tất cả trên một nền tảng. Tiết kiệm hàng giờ mỗi ngày, tăng doanh thu đáng kể.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={`${APP_URL}/register`}
            className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3.5 text-base font-semibold text-[#0B0E11] hover:opacity-90 transition-opacity shadow-lg shadow-brand/20"
          >
            Bắt đầu miễn phí
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/tinh-nang"
            className="inline-flex items-center gap-2 rounded-2xl border border-line px-6 py-3.5 text-base font-medium text-hi hover:bg-panel transition-colors"
          >
            Xem tính năng
          </Link>
        </div>

        {/* Social proof */}
        <p className="mt-5 text-center text-xs text-lo">
          Tin dùng bởi các spa & salon hàng đầu Việt Nam
        </p>

        {/* Dashboard mockup */}
        <div className="mt-14 relative mx-auto max-w-4xl">
          {/* Glow under image */}
          <div className="absolute -inset-4 rounded-3xl bg-brand/5 blur-2xl" />
          <div className="relative rounded-2xl border border-line overflow-hidden shadow-2xl shadow-black/40">
            <Image
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80"
              alt="TJGlow Dashboard"
              width={1200}
              height={680}
              className="w-full object-cover"
              priority
            />
            {/* Overlay gradient at bottom */}
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-bg to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
