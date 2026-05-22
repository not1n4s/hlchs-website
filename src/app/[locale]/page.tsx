import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  Globe,
  HandHeart,
  Handshake,
  HeartPulse,
  Languages,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { LanguageToggle } from "@/components/language-toggle";
import { getSiteContent } from "@/content/site-content";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);

  const quickActionIcons = [PhoneCall, MapPin, HandHeart];
  const trustIcons = [Languages, ShieldCheck, Users];
  const programIcons = [HeartPulse, Handshake, Sparkles, FileText];
  const pathwayIcons = [HeartPulse, HandHeart, Handshake];

  return (
    <main className="page-shell">
      <section className="px-4 pb-16 pt-5 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <header className="surface-panel sticky top-4 z-20 rounded-[28px] px-4 py-3 sm:px-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-brand flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-soft">
                  <HeartPulse className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    {content.brand.abbreviation}
                  </p>
                  <h1 className="display-text text-lg font-semibold sm:text-xl">
                    {content.brand.name}
                  </h1>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <nav aria-label={content.nav.label} className="overflow-x-auto">
                  <ul className="flex min-w-max items-center gap-2 pr-1">
                    {content.nav.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="nav-link inline-flex rounded-full px-3 py-2 text-sm font-medium"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <LanguageToggle
                  labels={content.languageSwitch}
                  currentLocale={locale}
                />
              </div>
            </div>
          </header>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="surface-panel overflow-hidden rounded-[34px] px-6 py-8 sm:px-8 sm:py-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-medium text-brand">
                <Globe className="h-4 w-4" aria-hidden="true" />
                {content.hero.eyebrow}
              </div>
              <div className="mt-6 max-w-3xl">
                <h2 className="display-text max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
                  {content.hero.title}
                </h2>
                <p className="text-muted mt-5 max-w-2xl text-lg leading-8">
                  {content.hero.description}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={content.hero.primaryCta.href}
                  className="bg-brand inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow-soft hover:-translate-y-0.5"
                >
                  {content.hero.primaryCta.label}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link
                  href={content.hero.secondaryCta.href}
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[rgba(15,107,99,0.18)] bg-white/70 px-6 py-3 text-base font-semibold text-brand hover:-translate-y-0.5"
                >
                  {content.hero.secondaryCta.label}
                </Link>
                <a
                  href={content.hero.tertiaryCta.href}
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-transparent px-3 py-3 text-base font-semibold text-brand"
                >
                  <FileText className="h-5 w-5" aria-hidden="true" />
                  {content.hero.tertiaryCta.label}
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {content.hero.supportPoints.map((point, index) => (
                  <div
                    key={point}
                    className="stat-chip rounded-3xl px-4 py-4 text-sm font-medium text-brand"
                  >
                    <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand">
                      {index + 1}
                    </span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </section>

            <aside className="space-y-5">
              <div className="surface-panel rounded-[30px] px-5 py-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
                  {content.quickActions.title}
                </p>
                <div className="mt-4 space-y-3">
                  {content.quickActions.items.map((item, index) => {
                    const Icon = quickActionIcons[index];

                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        className="group flex items-start gap-4 rounded-[24px] border border-white/80 bg-white/72 px-4 py-4 hover:-translate-y-0.5"
                      >
                        <span className="bg-accent flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-base font-semibold text-brand">
                            {item.title}
                          </span>
                          <span className="text-muted mt-1 block text-sm leading-6">
                            {item.description}
                          </span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-brand rounded-[30px] px-5 py-6 text-white shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
                  {content.trustPanel.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {content.trustPanel.items.map((item, index) => {
                    const Icon = trustIcons[index];

                    return (
                      <li key={item.title} className="rounded-[24px] bg-white/10 px-4 py-4">
                        <div className="flex items-start gap-3">
                          <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                          <div>
                            <p className="text-base font-semibold">{item.title}</p>
                            <p className="mt-1 text-sm leading-6 text-white/78">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="about" className="section-band border-y border-white/70 px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              {content.programs.eyebrow}
            </p>
            <h2 className="display-text mt-3 text-3xl font-semibold sm:text-4xl">
              {content.programs.title}
            </h2>
            <p className="text-muted mt-4 text-lg leading-8">
              {content.programs.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.programs.items.map((item, index) => {
              const Icon = programIcons[index];

              return (
                <article
                  key={item.title}
                  className="surface-panel rounded-[28px] px-5 py-6"
                >
                  <div className="bg-brand flex h-12 w-12 items-center justify-center rounded-2xl text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted mt-3 text-sm leading-7">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-panel rounded-[32px] px-6 py-7 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              {content.pathways.eyebrow}
            </p>
            <h2 className="display-text mt-3 text-3xl font-semibold sm:text-4xl">
              {content.pathways.title}
            </h2>
            <p className="text-muted mt-4 text-lg leading-8">
              {content.pathways.description}
            </p>
            <ol className="mt-8 space-y-4">
              {content.pathways.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-[26px] border border-white/80 bg-white/72 px-5 py-5"
                >
                  <div className="flex gap-4">
                    <div className="bg-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand">{step.title}</h3>
                      <p className="text-muted mt-2 text-sm leading-7">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-4">
            {content.pathways.cards.map((card, index) => {
              const Icon = pathwayIcons[index];

              return (
                <article
                  key={card.title}
                  className="surface-panel rounded-[30px] px-6 py-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
                        {card.kicker}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold">{card.title}</h3>
                      <p className="text-muted mt-3 text-base leading-7">
                        {card.description}
                      </p>
                    </div>
                    <div className="bg-brand flex h-12 w-12 items-center justify-center rounded-2xl text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="info" className="section-band border-y border-white/70 px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                {content.impact.eyebrow}
              </p>
              <h2 className="display-text mt-3 text-3xl font-semibold sm:text-4xl">
                {content.impact.title}
              </h2>
              <p className="text-muted mt-4 text-lg leading-8">
                {content.impact.description}
              </p>
            </div>
            <p className="max-w-md text-sm leading-7 text-brand">
              {content.impact.note}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.impact.items.map((item) => (
              <article
                key={item.label}
                className="surface-panel rounded-[28px] px-5 py-6"
              >
                <p className="display-text text-4xl font-semibold text-brand">
                  {item.value}
                </p>
                <h3 className="mt-4 text-lg font-semibold">{item.label}</h3>
                <p className="text-muted mt-2 text-sm leading-7">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              {content.faq.eyebrow}
            </p>
            <h2 className="display-text mt-3 text-3xl font-semibold sm:text-4xl">
              {content.faq.title}
            </h2>
            <p className="text-muted mt-4 text-lg leading-8">
              {content.faq.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {content.faq.items.map((item) => (
              <details
                key={item.question}
                className="surface-panel group rounded-[28px] px-5 py-5"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold text-brand">
                  <span>{item.question}</span>
                  <ChevronDown
                    className="mt-1 h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="text-muted mt-4 pr-8 text-sm leading-7">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="bg-brand rounded-[34px] px-6 py-8 text-white shadow-soft sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              {content.contact.eyebrow}
            </p>
            <h2 className="display-text mt-3 text-3xl font-semibold sm:text-4xl">
              {content.contact.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-white/82">
              {content.contact.description}
            </p>

            <div className="mt-8 space-y-4">
              {content.contact.details.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="block rounded-[26px] bg-white/10 px-5 py-5 hover:bg-white/14"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/68">
                    {detail.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold">{detail.value}</p>
                  <p className="mt-2 text-sm leading-7 text-white/74">
                    {detail.helper}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="surface-panel rounded-[34px] px-6 py-8 sm:px-8">
            <div className="grid gap-4 md:grid-cols-2">
              {content.contact.cards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[26px] border border-white/80 bg-white/72 px-5 py-5"
                >
                  <h3 className="text-xl font-semibold text-brand">{card.title}</h3>
                  <p className="text-muted mt-3 text-sm leading-7">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-[30px] border border-[rgba(15,107,99,0.16)] bg-white/70 px-5 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
                {content.contact.reviewBanner.title}
              </p>
              <p className="text-muted mt-3 text-sm leading-7">
                {content.contact.reviewBanner.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="legal" className="section-band border-y border-white/70 px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              {content.legal.eyebrow}
            </p>
            <h2 className="display-text mt-3 text-3xl font-semibold sm:text-4xl">
              {content.legal.title}
            </h2>
            <p className="text-muted mt-4 text-lg leading-8">
              {content.legal.description}
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="surface-panel rounded-[32px] px-6 py-7 sm:px-8">
              <h3 className="text-2xl font-semibold text-brand">
                {content.legal.privacyTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {content.legal.privacyPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-[22px] border border-white/80 bg-white/72 px-4 py-4 text-sm leading-7 text-muted"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>

            <article className="surface-panel rounded-[32px] px-6 py-7 sm:px-8">
              <h3 className="text-2xl font-semibold text-brand">
                {content.legal.termsTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {content.legal.termsPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-[22px] border border-white/80 bg-white/72 px-4 py-4 text-sm leading-7 text-muted"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="surface-panel mt-6 rounded-[28px] px-5 py-5 text-sm leading-7 text-muted">
            {content.legal.note}
          </div>
        </div>
      </section>

      <footer className="px-4 pb-24 sm:px-6 lg:px-10 lg:pb-10">
        <div className="surface-panel mx-auto flex max-w-7xl flex-col gap-4 rounded-[28px] px-5 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{content.footer.note}</p>
          <div className="flex items-center gap-2 text-brand">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            <span>{content.footer.security}</span>
          </div>
        </div>

        <div className="fixed inset-x-4 bottom-4 z-30 lg:hidden">
          <div className="surface-panel grid grid-cols-3 rounded-[24px] px-2 py-2">
            {content.mobileBar.map((item, index) => {
              const Icon = quickActionIcons[index];

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-[18px] px-2 py-2 text-center text-[13px] font-semibold text-brand"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </main>
  );
}
