const steps = [
  {
    title: 'Send an inquiry',
    description: 'Share what you know about your service member using the form below.',
  },
  {
    title: 'Plan together',
    description: 'I review your details, suggest where to look, and we agree on a number of hours.',
  },
  {
    title: 'Research begins',
    description: 'I search archives, databases, and record repositories, keeping you updated.',
  },
  {
    title: 'Receive your findings',
    description: 'You get an organized summary with sources and copies of the documents found.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-balance text-center font-serif text-3xl font-semibold sm:text-4xl">How it works</h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary font-serif text-lg font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="font-serif text-xl font-semibold">{step.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
