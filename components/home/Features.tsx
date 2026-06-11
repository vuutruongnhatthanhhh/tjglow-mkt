import { CalendarDays, Users, BarChart3, Bell, Scissors, Receipt, Shield, Smartphone } from 'lucide-react'

const FEATURES = [
  {
    icon: CalendarDays,
    title: 'Quản lý lịch hẹn',
    desc: 'Xem lịch theo ngày, tuần, tháng. Thêm, sửa, hủy lịch trong vài giây. Tránh đặt trùng nhân viên.',
    color: 'text-brand bg-brand/10',
  },
  {
    icon: Users,
    title: 'Quản lý khách hàng',
    desc: 'Lưu thông tin, lịch sử dịch vụ, ghi chú riêng từng khách. Xây dựng quan hệ khách hàng lâu dài.',
    color: 'text-sky-400 bg-sky-400/10',
  },
  {
    icon: BarChart3,
    title: 'Báo cáo doanh thu',
    desc: 'Dashboard trực quan theo ngày, tuần, tháng. Xuất Excel, phân tích theo dịch vụ và nhân viên.',
    color: 'text-emerald-400 bg-emerald-400/10',
  },
  {
    icon: Bell,
    title: 'Nhắc lịch tự động',
    desc: 'Tự động gửi email nhắc khách trước 24h. Giảm thiểu khách không đến, tăng uy tín chuyên nghiệp.',
    color: 'text-amber-400 bg-amber-400/10',
  },
  {
    icon: Scissors,
    title: 'Danh mục dịch vụ',
    desc: 'Quản lý toàn bộ dịch vụ, giá tiền, thời lượng. Hiển thị trực tiếp trên trang đặt lịch của khách.',
    color: 'text-pink-400 bg-pink-400/10',
  },
  {
    icon: Receipt,
    title: 'Thu tiền & Xuất bill',
    desc: 'Ghi nhận thanh toán, xuất hóa đơn chuyên nghiệp. Hỗ trợ QR code thanh toán tự động.',
    color: 'text-violet-400 bg-violet-400/10',
  },
  {
    icon: Shield,
    title: 'Bảo mật cao',
    desc: 'Dữ liệu mã hóa end-to-end, backup tự động hàng ngày. Phân quyền nhân viên linh hoạt.',
    color: 'text-red-400 bg-red-400/10',
  },
  {
    icon: Smartphone,
    title: 'Đặt lịch online',
    desc: 'Trang đặt lịch riêng cho từng shop, khách tự đặt 24/7 qua điện thoại mà không cần cài app.',
    color: 'text-cyan-400 bg-cyan-400/10',
  },
]

export function Features() {
  return (
    <section id="tinh-nang" className="bg-bg2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">Tính năng</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hi">
            Mọi thứ bạn cần để vận hành
          </h2>
          <p className="mt-4 text-lo max-w-xl mx-auto">
            Từ lịch hẹn đến doanh thu — TJGlow lo toàn bộ để bạn tập trung vào việc chăm sóc khách hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="rounded-2xl border border-line bg-card p-5 hover:border-brand/30 transition-colors group"
            >
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl mb-4 ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-hi mb-1.5 text-sm">{title}</h3>
              <p className="text-xs text-lo leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
