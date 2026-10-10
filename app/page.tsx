import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Pricing } from '@/components/pricing'
import { Process } from '@/components/process'
import { Inquiry } from '@/components/inquiry'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Process />
        <Inquiry />
      </main>
      <SiteFooter />
    </>
  )
}
