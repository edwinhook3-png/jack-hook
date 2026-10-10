import { Check } from 'lucide-react'
import { HOURLY_RATE } from '@/lib/site'

const included = [
  'Free initial consultation by email',
  'Hours agreed with you before work begins',
  'Regular updates on progress and findings',
  'Written summary with sources and document copies',
]

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-secondary py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-balance font-serif text-3xl font-semibold sm:text-4xl">Simple, honest pricing</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            One flat hourly rate for all research. You decide your budget, and I&apos;ll never go
            beyond the hours you approve without asking first.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Hourly rate</p>
          <p className="mt-2 flex items-baseline gap-1">
            <span className="font-serif text-5xl font-semibold text-primary">${HOURLY_RATE}</span>
            <span className="text-lg text-muted-foreground">/hour</span>
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Fees charged by archives or government agencies for record copies are passed through
            at cost and discussed with you in advance.
          </p>
        </div>
      </div>
    </section>
  )
}
