import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <HomeContent />
}

function HomeContent() {
  const t = useTranslations('Home')

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--muted)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
        {t('badge')}
      </div>

      {/* Heading */}
      <h1 className="mb-4 max-w-3xl text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
        {t('headline')}
      </h1>

      {/* Subheading */}
      <p className="mb-8 max-w-xl text-lg text-[var(--muted)]">
        {t('subheadline')}
      </p>

      {/* CTA buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/about"
          className="rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-fg)] transition-colors hover:bg-[var(--primary-hover)]"
        >
          {t('cta.primary')}
        </Link>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
        >
          {t('cta.secondary')}
        </a>
      </div>

      {/* Feature grid */}
      <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl w-full text-start">
        {(['rtl', 'darkMode', 'prisma', 'i18n', 'tailwind', 'typescript'] as const).map((key) => (
          <div
            key={key}
            className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-5 transition-colors hover:bg-[var(--surface)]"
          >
            <div className="mb-2 text-2xl">{t(`features.${key}.icon`)}</div>
            <h3 className="mb-1 font-semibold text-[var(--foreground)]">
              {t(`features.${key}.title`)}
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {t(`features.${key}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
