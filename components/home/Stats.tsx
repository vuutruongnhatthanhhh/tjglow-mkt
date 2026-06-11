const STATS = [
  { value: '500+',    label: 'Spa & Salon đang dùng' },
  { value: '50.000+', label: 'Lịch hẹn được quản lý' },
  { value: '98%',     label: 'Khách hàng hài lòng' },
  { value: '2h/ngày', label: 'Thời gian tiết kiệm trung bình' },
]

export function Stats() {
  return (
    <section className="border-y border-line bg-panel py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-extrabold text-brand">{value}</p>
              <p className="mt-1 text-sm text-lo">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
