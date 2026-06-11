import { Hero }         from '@/components/home/Hero'
import { Stats }        from '@/components/home/Stats'
import { Features }     from '@/components/home/Features'
import { HowItWorks }   from '@/components/home/HowItWorks'
import { Pricing }      from '@/components/home/Pricing'
import { Testimonials } from '@/components/home/Testimonials'
import { CtaBanner }    from '@/components/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CtaBanner />
    </>
  )
}
