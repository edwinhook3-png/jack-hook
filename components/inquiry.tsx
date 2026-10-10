import { Mail, Info } from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/site'
import { InquiryForm } from '@/components/inquiry-form'

export function Inquiry() {
  return (
    <section id="inquiry" className="scroll-mt-16 bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <h2 className="text-balance font-serif text-3xl font-semibold sm:text-4xl">Start your research inquiry</h2>
          <p className="text-pretty leading-relaxed text-primary-foreground/80">
            Tell me about the service member you&apos;d like to research. Share whatever you know
            &mdash; even partial details help.
          </p>
          <div className="flex items-start gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4">
            <Info className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-primary-foreground/90">
              <strong>How this form works:</strong> clicking &ldquo;Create Email Draft&rdquo; opens
              your email app with a new message addressed to me, with your answers already filled
              in. The message is <strong>not sent automatically</strong> &mdash; please review it
              and press <strong>Send</strong> in your email app to complete your inquiry.
            </p>
          </div>
          <p className="flex items-center gap-2 text-primary-foreground/80">
            <Mail className="size-5 text-accent" aria-hidden="true" />
            <span>
              Or email directly:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-primary-foreground underline underline-offset-4">
                {CONTACT_EMAIL}
              </a>
            </span>
          </p>
        </div>
        <div className="lg:col-span-3">
          <InquiryForm />
        </div>
      </div>
    </section>
  )
}
