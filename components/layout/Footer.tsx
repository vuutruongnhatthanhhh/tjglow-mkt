import Link from 'next/link'
import { Sparkles } from 'lucide-react'

const LINKS = {
  'Sản phẩm': [
    { label: 'Tính năng',    href: '/tinh-nang' },
    { label: 'Bảng giá',     href: '/bang-gia' },
    { label: 'Đăng ký dùng thử', href: 'https://app.tjglow.com/register' },
  ],
  'Công ty': [
    { label: 'Về chúng tôi', href: '/#about' },
    { label: 'Liên hệ',      href: '/lien-he' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg2">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-[#0B0E11]">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-hi">TJ<span className="text-brand">Glow</span></span>
            </Link>
            <p className="mt-3 text-sm text-lo leading-relaxed max-w-xs">
              Nền tảng quản lý spa & salon hiện đại dành cho thị trường Việt Nam.
            </p>
          </div>

          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-wider text-lo mb-3">{group}</p>
              <ul className="space-y-2">
                {items.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-lo hover:text-hi transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-lo mb-3">Liên hệ</p>
            <ul className="space-y-2 text-sm text-lo">
              <li>support@tjglow.com</li>
              <li>Việt Nam</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-lo">
          <p>© {new Date().getFullYear()} TJGlow. All rights reserved.</p>
          <p>Được xây dựng với ❤️ cho các spa & salon Việt Nam</p>
        </div>
      </div>
    </footer>
  )
}
