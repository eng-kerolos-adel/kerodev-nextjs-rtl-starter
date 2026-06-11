import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 text-sm text-[var(--muted)]">
        <span>{t('copyright', { year: new Date().getFullYear() })}</span>
        <a
          href="https://github.com/kerolos-adel"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[var(--foreground)]"
        >
          GitHub ↗
        </a>
      </div>
    </footer>
  )
}
