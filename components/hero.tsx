import Image from 'next/image'
import { HOURLY_RATE } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Military Genealogy &amp; Service History
          </p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Honor their service by uncovering their story.
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-primary-foreground/80">
            I help families trace the military service of parents, grandparents, and ancestors
            &mdash; from service records and unit histories to medals, enlistment details, and
            final resting places.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#inquiry"
              className="rounded-md bg-accent px-6 py-3 text-center font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Request Research
            </a>
            <a
              href="#services"
              className="rounded-md border border-primary-foreground/30 px-6 py-3 text-center font-medium transition-colors hover:bg-primary-foreground/10"
            >
              View Services
            </a>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Straightforward pricing: <strong className="text-primary-foreground">${HOURLY_RATE}/hour</strong>
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-primary-foreground/10 shadow-2xl">
          <Image
            src="/images/hero-archives.png"
            alt="Military service records, a vintage soldier portrait, and a medal on a research desk"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
