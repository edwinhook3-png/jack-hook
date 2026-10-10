import { BUSINESS_NAME, CONTACT_EMAIL, HOURLY_RATE } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>
          &copy; {new Date().getFullYear()} {BUSINESS_NAME}
        </p>
        <p>
          ${HOURLY_RATE}/hour &middot;{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 hover:text-foreground">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  )
}
