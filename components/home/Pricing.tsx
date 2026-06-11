'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Zap } from 'lucide-react'
import clsx from 'clsx'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.tjglow.com'

const FEATURES_FREE = [
  '14 ngày dùng thử đầy đủ tính năng',
  'Quản lý lịch hẹn không giới hạn',
  'Trang đặt lịch cho khách',
  'Quản lý khách hàng',
  'Báo cáo doanh thu cơ bản',
  'Hỗ trợ qua email',
]

const FEATURES_MONTHLY = [
  'Tất cả trong gói Free',
  'Quản lý nhiều nhân viên',
  'Nhắc lịch email tự động',
  'Xuất báo cáo Excel',
  'Quản lý danh mục dịch vụ',
  'Thanh toán QR code',
  'Hỗ trợ ưu tiên',
]

const FEATURES_YEARLY = [
  'Tất cả trong gói Monthly',
  'Tiết kiệm ~17% so với trả tháng',
  'Ưu tiên tính năng mới',
  'Hỗ trợ riêng qua Zalo',
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="bang-gia" className="py-20 md:py-28 bg-bg2">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">Bảng giá</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hi">
            Đơn giản, minh bạch
          </h2>
          <p className="mt-4 text-lo">Bắt đầu miễn phí, nâng cấp khi sẵn sàng.</p>

          {/* Toggle */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-line bg-panel p-1">
            <button
              onClick={() => setYearly(false)}
              className={clsx(
                'px-4 py-1.5 rounded-xl text-sm font-medium transition-colors',
                !yearly ? 'bg-brand text-[#0B0E11]' : 'text-lo hover:text-hi'
              )}
            >
              Theo tháng
            </button>
            <button
              onClick={() => setYearly(true)}
              className={clsx(
                'px-4 py-1.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-1.5',
                yearly ? 'bg-brand text-[#0B0E11]' : 'text-lo hover:text-hi'
              )}
            >
              Theo năm
              <span className={clsx(
                'text-[10px] font-bold px-1.5 py-0.5 rounded-full',
                yearly ? 'bg-[#0B0E11]/20 text-[#0B0E11]' : 'bg-emerald-400/10 text-emerald-400'
              )}>
                -17%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Free trial */}
          <div className="rounded-2xl border border-line bg-card p-6 flex flex-col">
            <p className="text-sm font-semibold text-lo uppercase tracking-wide">Dùng thử</p>
            <div className="mt-3 mb-5">
              <span className="text-4xl font-extrabold text-hi">0₫</span>
              <span className="text-lo text-sm ml-1">/ 14 ngày</span>
            </div>
            <ul className="space-y-2.5 flex-1 mb-6">
              {FEATURES_FREE.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-hi">
                  <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={`${APP_URL}/register`}
              className="block text-center rounded-xl border border-brand/40 py-2.5 text-sm font-semibold text-brand hover:bg-brand/10 transition-colors"
            >
              Bắt đầu miễn phí
            </Link>
          </div>

          {/* Monthly / most popular */}
          <div className="relative rounded-2xl border-2 border-brand bg-card p-6 flex flex-col shadow-xl shadow-brand/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand px-3 py-0.5 text-[11px] font-bold text-[#0B0E11]">
                <Zap className="h-3 w-3" /> Phổ biến nhất
              </span>
            </div>
            <p className="text-sm font-semibold text-lo uppercase tracking-wide">Pro</p>
            <div className="mt-3 mb-5">
              <span className="text-4xl font-extrabold text-hi">
                {yearly ? '166K' : '200K'}
              </span>
              <span className="text-lo text-sm ml-1">₫ / tháng</span>
              {yearly && (
                <p className="text-xs text-emerald-400 mt-1">Thanh toán 1.990.000₫ / năm</p>
              )}
            </div>
            <ul className="space-y-2.5 flex-1 mb-6">
              {FEATURES_MONTHLY.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-hi">
                  <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={`${APP_URL}/register`}
              className="block text-center rounded-xl bg-brand py-2.5 text-sm font-semibold text-[#0B0E11] hover:opacity-90 transition-opacity"
            >
              Dùng thử 14 ngày
            </Link>
          </div>

          {/* Yearly */}
          <div className="rounded-2xl border border-line bg-card p-6 flex flex-col">
            <p className="text-sm font-semibold text-lo uppercase tracking-wide">Pro Năm</p>
            <div className="mt-3 mb-5">
              <span className="text-4xl font-extrabold text-hi">1.990K</span>
              <span className="text-lo text-sm ml-1">₫ / năm</span>
              <p className="text-xs text-emerald-400 mt-1">Tiết kiệm 410.000₫ so với trả tháng</p>
            </div>
            <ul className="space-y-2.5 flex-1 mb-6">
              {FEATURES_YEARLY.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-hi">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={`${APP_URL}/register`}
              className="block text-center rounded-xl border border-line py-2.5 text-sm font-semibold text-hi hover:bg-panel transition-colors"
            >
              Chọn gói năm
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
