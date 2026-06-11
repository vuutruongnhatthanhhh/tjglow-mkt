import type { Metadata } from 'next'
import { Pricing } from '@/components/home/Pricing'
import { Check, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bảng giá — TJGlow',
  description: 'Gói dùng thử miễn phí 14 ngày, Pro 200.000₫/tháng hoặc 1.990.000₫/năm.',
}

const COMPARE = [
  { feature: 'Quản lý lịch hẹn', free: true,  pro: true  },
  { feature: 'Quản lý khách hàng', free: true, pro: true  },
  { feature: 'Trang đặt lịch online', free: true, pro: true },
  { feature: 'Email xác nhận đặt lịch', free: true, pro: true },
  { feature: 'Quản lý nhân viên', free: false, pro: true  },
  { feature: 'Nhắc lịch email tự động', free: false, pro: true },
  { feature: 'Báo cáo doanh thu nâng cao', free: false, pro: true },
  { feature: 'Xuất báo cáo Excel', free: false, pro: true },
  { feature: 'Thanh toán QR code', free: false, pro: true },
  { feature: 'Hỗ trợ ưu tiên',  free: false, pro: true  },
]

const FAQS = [
  {
    q: 'Dùng thử có cần nhập thẻ không?',
    a: 'Không. 14 ngày dùng thử hoàn toàn miễn phí, không cần thẻ tín dụng hay thông tin thanh toán.',
  },
  {
    q: 'Sau khi hết thử nghiệm, dữ liệu có bị xóa không?',
    a: 'Không. Dữ liệu của bạn được giữ nguyên. Bạn chỉ cần nâng cấp lên gói trả phí để tiếp tục sử dụng.',
  },
  {
    q: 'Có thể hủy gói bất cứ lúc nào không?',
    a: 'Có. Bạn có thể hủy bất cứ lúc nào mà không bị tính thêm phí.',
  },
  {
    q: 'Có hỗ trợ thiết lập ban đầu không?',
    a: 'Có. Đội ngũ TJGlow hỗ trợ thiết lập miễn phí cho tất cả khách hàng mới qua Zalo hoặc email.',
  },
  {
    q: 'Thanh toán qua những phương thức nào?',
    a: 'Chuyển khoản ngân hàng, QR code (VietQR), các ví điện tử thông dụng tại Việt Nam.',
  },
]

export default function PricingPage() {
  return (
    <div className="bg-bg">
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[700px] rounded-full bg-brand/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">Bảng giá</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-hi">
            Đơn giản & minh bạch
          </h1>
          <p className="mt-4 text-lo text-lg">Không phí ẩn. Không bất ngờ.</p>
        </div>
      </section>

      {/* Pricing cards */}
      <Pricing />

      {/* Compare table */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-hi text-center mb-8">So sánh chi tiết</h2>
          <div className="rounded-2xl border border-line overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line bg-panel">
                  <th className="px-4 py-3 text-left text-lo font-medium">Tính năng</th>
                  <th className="px-4 py-3 text-center text-lo font-medium">Dùng thử</th>
                  <th className="px-4 py-3 text-center text-brand font-semibold">Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {COMPARE.map(({ feature, free, pro }) => (
                  <tr key={feature} className="bg-card">
                    <td className="px-4 py-3 text-hi">{feature}</td>
                    <td className="px-4 py-3 text-center">
                      {free
                        ? <Check className="h-4 w-4 text-ok mx-auto" />
                        : <span className="text-lo">—</span>}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {pro
                        ? <Check className="h-4 w-4 text-brand mx-auto" />
                        : <span className="text-lo">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-bg2">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-hi text-center mb-8">Câu hỏi thường gặp</h2>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-line bg-card p-5">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-hi text-sm">{q}</p>
                    <p className="mt-1.5 text-sm text-lo leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
