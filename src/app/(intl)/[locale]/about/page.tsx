import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <AboutContent />
}

function AboutContent() {
  const t = useTranslations('About')
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="mb-3 text-3xl font-bold text-[var(--foreground)]">{t('title')}</h1>
      <p className="mb-6 text-lg text-[var(--primary)]">{t('description')}</p>
      <p className="text-[var(--muted)] leading-relaxed">{t('body')}</p>
    </div>
  )
}
