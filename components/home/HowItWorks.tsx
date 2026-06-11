import Image from 'next/image'

const STEPS = [
  {
    step: '01',
    title: 'Đăng ký & thiết lập shop',
    desc: 'Tạo tài khoản miễn phí trong 2 phút. Thêm dịch vụ, nhân viên và cài đặt giờ làm việc của bạn.',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
  },
  {
    step: '02',
    title: 'Chia sẻ link đặt lịch',
    desc: 'Mỗi shop có trang đặt lịch riêng. Chia sẻ qua Zalo, Facebook hay in QR code — khách tự đặt 24/7.',
    img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80',
  },
  {
    step: '03',
    title: 'Quản lý & phát triển',
    desc: 'Theo dõi lịch hẹn theo thời gian thực, xem báo cáo doanh thu và tối ưu hoạt động kinh doanh.',
    img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">Cách hoạt động</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hi">
            Bắt đầu trong 3 bước đơn giản
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {STEPS.map(({ step, title, desc, img }, i) => (
            <div
              key={step}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Text */}
              <div className="flex-1">
                <span className="text-5xl font-black text-brand/20 dark:text-brand/10 select-none">
                  {step}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-hi">{title}</h3>
                <p className="mt-3 text-lo leading-relaxed">{desc}</p>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-line shadow-xl">
                  <Image
                    src={img}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full object-cover aspect-[3/2]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
