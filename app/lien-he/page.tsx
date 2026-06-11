import type { Metadata } from 'next'
import { Mail, MessageCircle, Clock } from 'lucide-react'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Liên hệ — TJGlow',
  description: 'Liên hệ với đội ngũ TJGlow để được tư vấn và hỗ trợ.',
}

export default function ContactPage() {
  return (
    <div className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">Liên hệ</p>
          <h1 className="text-4xl font-extrabold text-hi">Chúng tôi luôn sẵn sàng hỗ trợ</h1>
          <p className="mt-4 text-lo max-w-md mx-auto">
            Có câu hỏi về TJGlow? Đội ngũ của chúng tôi sẽ phản hồi trong vòng 24 giờ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            {[
              {
                icon: Mail,
                title: 'Email',
                desc: 'support@tjglow.com',
                sub: 'Phản hồi trong 24h',
              },
              {
                icon: MessageCircle,
                title: 'Zalo',
                desc: '0901 234 567',
                sub: 'Hỗ trợ nhanh qua Zalo',
              },
              {
                icon: Clock,
                title: 'Giờ làm việc',
                desc: 'Thứ 2 – Thứ 7',
                sub: '8:00 – 18:00',
              },
            ].map(({ icon: Icon, title, desc, sub }) => (
              <div key={title} className="flex gap-4 p-4 rounded-2xl border border-line bg-card">
                <div className="h-10 w-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <p className="text-xs text-lo font-medium">{title}</p>
                  <p className="text-sm font-semibold text-hi mt-0.5">{desc}</p>
                  <p className="text-xs text-lo mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
