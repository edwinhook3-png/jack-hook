import { FileSearch, Users, Award, MapPin, ScrollText, BookOpen } from 'lucide-react'

const services = [
  {
    icon: FileSearch,
    title: 'Service Record Research',
    description:
      'Locating and requesting military personnel files, enlistment and discharge papers, and draft registrations.',
  },
  {
    icon: Users,
    title: 'Unit & Campaign Histories',
    description:
      'Identifying the units your ancestor served with and where they were stationed, deployed, and fought.',
  },
  {
    icon: Award,
    title: 'Medals & Awards',
    description:
      'Verifying decorations and commendations and explaining what they meant and how they were earned.',
  },
  {
    icon: MapPin,
    title: 'Burial & Memorial Records',
    description:
      'Finding veteran burial locations, headstone applications, and memorial records in national and local cemeteries.',
  },
  {
    icon: ScrollText,
    title: 'Pension & Benefit Files',
    description:
      'Searching pension applications and veteran benefit files, which often hold rich family details.',
  },
  {
    icon: BookOpen,
    title: 'Family History Reports',
    description:
      'A clear written summary of findings with sources and copies of documents to share and preserve.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold sm:text-4xl">Research Services</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Whether you have a name and a war, or a box of old papers and photos, I&apos;ll help you
            piece together your family&apos;s military history.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex flex-col gap-3 rounded-lg border bg-card p-6">
              <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-semibold">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
