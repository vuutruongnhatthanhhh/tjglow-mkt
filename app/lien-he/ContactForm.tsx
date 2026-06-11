'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', message: '' })
  const [done, setDone]     = useState(false)
  const [loading, setLoading] = useState(false)

  function update(key: string, value: string) {
    setForm(f => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Giả lập gửi — tích hợp API thực tế sau
    await new Promise(r => setTimeout(r, 1200))
    setDone(true)
    setLoading(false)
  }

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-card p-12 text-center h-full">
        <CheckCircle2 className="h-14 w-14 text-ok" />
        <p className="text-xl font-bold text-hi">Đã nhận được tin nhắn!</p>
        <p className="text-sm text-lo max-w-xs">
          Chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ làm việc.
        </p>
        <button
          onClick={() => { setDone(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
          className="mt-2 text-sm text-brand hover:underline"
        >
          Gửi tin nhắn khác
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-card p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-lo mb-1.5">
            Họ tên <span className="text-red-400">*</span>
          </label>
          <input
            required
            value={form.name}
            onChange={e => update('name', e.target.value)}
            placeholder="Nguyễn Thị Hương"
            className="w-full rounded-xl border border-line bg-bg px-3 py-2.5 text-sm text-hi placeholder:text-lo focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-lo mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            required
            type="email"
            value={form.email}
            onChange={e => update('email', e.target.value)}
            placeholder="example@gmail.com"
            className="w-full rounded-xl border border-line bg-bg px-3 py-2.5 text-sm text-hi placeholder:text-lo focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-lo mb-1.5">Số điện thoại</label>
        <input
          type="tel"
          value={form.phone}
          onChange={e => update('phone', e.target.value)}
          placeholder="0901 234 567"
          className="w-full rounded-xl border border-line bg-bg px-3 py-2.5 text-sm text-hi placeholder:text-lo focus:outline-none focus:border-brand/50 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-lo mb-1.5">
          Nội dung <span className="text-red-400">*</span>
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={e => update('message', e.target.value)}
          placeholder="Mô tả nhu cầu của bạn hoặc câu hỏi cần hỗ trợ..."
          className="w-full rounded-xl border border-line bg-bg px-3 py-2.5 text-sm text-hi placeholder:text-lo focus:outline-none focus:border-brand/50 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-semibold text-[#0B0E11] hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {loading
          ? <span className="h-4 w-4 rounded-full border-2 border-[#0B0E11]/30 border-t-[#0B0E11] animate-spin" />
          : <Send className="h-4 w-4" />}
        {loading ? 'Đang gửi...' : 'Gửi tin nhắn'}
      </button>
    </form>
  )
}
