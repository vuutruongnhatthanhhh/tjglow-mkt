'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react'
import clsx from 'clsx'

const NAV = [
  { href: '/',            label: 'Trang chủ',  exact: true },
  { href: '/tinh-nang',   label: 'Tính năng' },
  { href: '/bang-gia',    label: 'Bảng giá' },
  { href: '/lien-he',     label: 'Liên hệ' },
]

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.tjglow.com'

export function Header() {
  const pathname  = usePathname()
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-[#0B0E11]">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-hi">TJ<span className="text-brand">Glow</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(({ href, label, exact }) => {
            const active = exact ? pathname === href : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  active ? 'text-brand' : 'text-lo hover:text-hi'
                )}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-lg p-2 text-lo hover:text-hi hover:bg-panel transition-colors"
            aria-label="Đổi giao diện"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Link
            href={APP_URL}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-[#0B0E11] hover:opacity-90 transition-opacity"
          >
            Dùng miễn phí
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden rounded-lg p-2 text-lo hover:text-hi transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-bg px-4 pb-4 pt-2 space-y-1">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-hi hover:bg-panel transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href={APP_URL}
            className="mt-2 flex items-center justify-center rounded-xl bg-brand py-2.5 text-sm font-semibold text-[#0B0E11]"
          >
            Dùng miễn phí
          </Link>
        </div>
      )}
    </header>
  )
}
