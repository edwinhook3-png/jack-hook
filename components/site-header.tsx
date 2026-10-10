import { Medal } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#process', label: 'Process' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <Medal className="size-5 text-accent" aria-hidden="true" />
          <span className="font-serif text-base font-semibold leading-tight sm:text-lg">
            Jack Hook <span className="hidden sm:inline">Military Family Research</span>
          </span>
        </a>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-6">
          <ul className="hidden items-center gap-6 text-sm md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#inquiry"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Start an Inquiry
          </a>
        </nav>
      </div>
    </header>
  )
}
