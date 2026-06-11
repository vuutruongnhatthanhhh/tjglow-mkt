import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CalendarDays, Users, BarChart3, Bell, Scissors,
  Receipt, Shield, Smartphone, ArrowRight, Check,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tính năng — TJGlow',
  description: 'Khám phá toàn bộ tính năng quản lý spa & salon của TJGlow: lịch hẹn, khách hàng, doanh thu, nhắc lịch và nhiều hơn nữa.',
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.tjglow.com'

const SECTIONS = [
  {
    icon: CalendarDays,
    color: 'text-brand bg-brand/10',
    title: 'Quản lý lịch hẹn thông minh',
    subtitle: 'Nhìn toàn cảnh, kiểm soát tức thì',
    desc: 'Xem lịch theo ngày, tuần hoặc tháng trên giao diện trực quan. Kéo thả để điều chỉnh lịch, tránh đặt trùng nhân viên tự động. Mọi thay đổi được cập nhật ngay lập tức.',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80',
    features: ['Giao diện lịch kéo-thả', 'Cảnh báo đặt trùng nhân viên', 'Tìm kiếm lịch theo khách/nhân viên', 'Xem trạng thái từng lịch hẹn'],
  },
  {
    icon: Users,
    color: 'text-sky-400 bg-sky-400/10',
    title: 'CRM khách hàng chuyên sâu',
    subtitle: 'Biết rõ từng khách hàng',
    desc: 'Lưu trữ hồ sơ, lịch sử dịch vụ, sở thích và ghi chú riêng cho từng khách. Xây dựng mối quan hệ lâu dài để khách quay lại nhiều hơn.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    features: ['Hồ sơ khách hàng chi tiết', 'Lịch sử dịch vụ toàn diện', 'Ghi chú cá nhân hóa', 'Tìm kiếm & lọc nhanh'],
  },
  {
    icon: BarChart3,
    color: 'text-emerald-400 bg-emerald-400/10',
    title: 'Báo cáo doanh thu trực quan',
    subtitle: 'Hiểu rõ kinh doanh của mình',
    desc: 'Dashboard tổng quan theo ngày, tuần, tháng. Phân tích doanh thu theo dịch vụ và nhân viên. Xuất báo cáo Excel đẹp mắt để chia sẻ với đối tác.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    features: ['Dashboard tổng quan realtime', 'Phân tích theo dịch vụ/nhân viên', 'Xuất Excel có định dạng đẹp', 'So sánh theo kỳ'],
  },
  {
    icon: Bell,
    color: 'text-amber-400 bg-amber-400/10',
    title: 'Nhắc lịch tự động',
    subtitle: 'Giảm no-show, tăng chuyên nghiệp',
    desc: 'Tự động gửi email xác nhận ngay khi khách đặt lịch và nhắc nhở trước 24h. Khách vắng mặt giảm đáng kể, hình ảnh chuyên nghiệp tăng lên.',
    img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80',
    features: ['Email xác nhận tức thì', 'Nhắc nhở trước 24 giờ', 'Nội dung email chuyên nghiệp', 'Không cần cài đặt thêm'],
  },
]

export default function FeaturesPage() {
  return (
    <div className="bg-bg">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-brand/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">Tính năng</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-hi leading-tight">
            Mọi công cụ bạn cần<br />
            <span className="text-brand">trong một ứng dụng</span>
          </h1>
          <p className="mt-5 text-lo text-lg">
            TJGlow được xây dựng dành riêng cho spa & salon Việt Nam — từ quản lý lịch hẹn đến báo cáo tài chính.
          </p>
        </div>
      </section>

      {/* Feature sections */}
      <div className="divide-y divide-line">
        {SECTIONS.map(({ icon: Icon, color, title, subtitle, desc, img, features }, i) => (
          <section key={title} className={`py-16 md:py-24 ${i % 2 === 1 ? 'bg-bg2' : 'bg-bg'}`}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl mb-4 ${color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium text-lo mb-1">{subtitle}</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-hi mb-4">{title}</h2>
                  <p className="text-lo leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-2">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-hi">
                        <Check className="h-4 w-4 text-brand shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-2xl overflow-hidden border border-line shadow-xl">
                    <Image
                      src={img}
                      alt={title}
                      width={800}
                      height={500}
                      className="w-full object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 bg-bg text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-3xl font-extrabold text-hi mb-4">Trải nghiệm ngay hôm nay</h2>
          <p className="text-lo mb-7">14 ngày dùng thử miễn phí, không cần thẻ tín dụng.</p>
          <Link
            href={`${APP_URL}/register`}
            className="inline-flex items-center gap-2 rounded-2xl bg-brand px-7 py-3.5 font-semibold text-[#0B0E11] hover:opacity-90 transition-opacity"
          >
            Bắt đầu miễn phí <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
