'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { CONTACT_EMAIL, BUSINESS_NAME } from '@/lib/site'

const inputClass =
  'w-full rounded-md border border-input bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
const labelClass = 'text-sm font-medium'

const fields = [
  ['name', 'Your name'],
  ['email', 'Your email'],
  ['phone', 'Phone (optional)'],
  ['veteranName', 'Service member’s name'],
  ['relationship', 'Relationship to you'],
  ['branch', 'Branch of service'],
  ['era', 'Conflict or era of service'],
  ['details', 'What you already know'],
  ['goals', 'What you hope to learn'],
  ['budget', 'Estimated research hours / budget'],
] as const

export function InquiryForm() {
  const [draftOpened, setDraftOpened] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const value = (key: string) => String(data.get(key) ?? '').trim() || 'Not provided'

    const lines = fields.map(([key, label]) => `${label}:\n${value(key)}\n`)
    const body = [
      `Hello ${BUSINESS_NAME},`,
      '',
      'I would like to inquire about military family research. Here are my details:',
      '',
      ...lines,
      'Thank you,',
      value('name'),
    ].join('\n')

    const subject = `Research Inquiry: ${value('veteranName')}`
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setDraftOpened(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-lg bg-card p-6 text-card-foreground shadow-xl sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>Your name *</label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>Your email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="veteranName" className={labelClass}>Service member&apos;s name *</label>
          <input id="veteranName" name="veteranName" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="relationship" className={labelClass}>Relationship to you</label>
          <input id="relationship" name="relationship" placeholder="e.g. Grandfather" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="branch" className={labelClass}>Branch of service</label>
          <select id="branch" name="branch" defaultValue="" className={inputClass}>
            <option value="">Select a branch</option>
            <option>Army</option>
            <option>Navy</option>
            <option>Marine Corps</option>
            <option>Air Force / Army Air Forces</option>
            <option>Coast Guard</option>
            <option>National Guard</option>
            <option>Merchant Marine</option>
            <option>Not sure</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="era" className={labelClass}>Conflict or era of service</label>
          <input id="era" name="era" placeholder="e.g. WWII, Korea, Vietnam, Civil War" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="details" className={labelClass}>What you already know</label>
          <textarea
            id="details"
            name="details"
            rows={4}
            placeholder="Dates, places, units, documents or photos you have..."
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="goals" className={labelClass}>What you hope to learn *</label>
          <textarea id="goals" name="goals" rows={3} required className={inputClass} />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="budget" className={labelClass}>Estimated research hours / budget</label>
          <input id="budget" name="budget" placeholder="e.g. 5 hours ($150)" className={inputClass} />
        </div>
      </div>

      <button
        type="submit"
        className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Create Email Draft
      </button>
      <p className="text-center text-sm text-muted-foreground">
        This opens a draft in your email app addressed to {CONTACT_EMAIL}. Review it, then press Send.
      </p>

      {draftOpened && (
        <div role="status" className="flex items-start gap-3 rounded-md border bg-secondary p-4 text-sm">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="leading-relaxed">
            Your email draft should now be open. <strong>Please review it and press Send</strong>{' '}
            to deliver your inquiry. If no email app opened, email your details directly to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      )}
    </form>
  )
}
