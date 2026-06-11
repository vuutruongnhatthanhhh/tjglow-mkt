import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.tjglow.com'

export function CtaBanner() {
  return (
    <section className="py-20 md:py-28 bg-bg2">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        {/* Glow */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-hi leading-tight">
              Sẵn sàng nâng cấp<br />
              <span className="text-brand">spa của bạn?</span>
            </h2>
            <p className="mt-5 text-lo text-lg max-w-xl mx-auto">
              Dùng thử miễn phí 14 ngày, không cần thẻ tín dụng.
              Hỗ trợ thiết lập miễn phí cho tất cả khách hàng mới.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={`${APP_URL}/register`}
                className="inline-flex items-center gap-2 rounded-2xl bg-brand px-8 py-4 text-base font-semibold text-[#0B0E11] hover:opacity-90 transition-opacity shadow-xl shadow-brand/30"
              >
                Bắt đầu miễn phí ngay
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex items-center rounded-2xl border border-line px-8 py-4 text-base font-medium text-hi hover:bg-panel transition-colors"
              >
                Liên hệ tư vấn
              </Link>
            </div>
            <p className="mt-4 text-xs text-lo">
              Không cần thẻ · Hủy bất cứ lúc nào · Hỗ trợ tiếng Việt
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
