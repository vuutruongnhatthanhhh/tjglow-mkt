import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Nguyễn Thị Lan',
    role: 'Chủ Lan Beauty Spa — TP.HCM',
    avatar: 'L',
    color: 'bg-pink-500',
    text: 'TJGlow giúp tôi tiết kiệm ít nhất 2 tiếng mỗi ngày so với ghi lịch bằng tay. Khách hàng cũng rất thích tính năng tự đặt lịch online.',
    stars: 5,
  },
  {
    name: 'Trần Minh Tuấn',
    role: 'Chủ T-Nail Salon — Hà Nội',
    avatar: 'T',
    color: 'bg-brand',
    text: 'Báo cáo doanh thu rõ ràng, xuất Excel dễ dàng. Từ khi dùng TJGlow, tôi hiểu rõ hơn dịch vụ nào đang chạy tốt để tập trung đầu tư.',
    stars: 5,
  },
  {
    name: 'Phạm Bích Ngọc',
    role: 'Quản lý Glow Beauty Center — Đà Nẵng',
    avatar: 'N',
    color: 'bg-violet-500',
    text: 'Tính năng nhắc lịch tự động là best! Khách vắng mặt giảm đáng kể. Nhân viên cũng quản lý ca làm việc dễ hơn nhiều.',
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">Khách hàng nói gì</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hi">
            Được tin dùng bởi hàng trăm spa & salon
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, role, avatar, color, text, stars }) => (
            <div key={name} className="rounded-2xl border border-line bg-card p-6 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="text-sm text-hi leading-relaxed flex-1">"{text}"</p>
              <div className="flex items-center gap-3">
                <span className={`h-9 w-9 rounded-full ${color} flex items-center justify-center text-sm font-bold text-white shrink-0`}>
                  {avatar}
                </span>
                <div>
                  <p className="text-sm font-semibold text-hi">{name}</p>
                  <p className="text-xs text-lo">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
