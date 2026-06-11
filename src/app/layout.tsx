// This layout is only used for non-intl routes (e.g. /api/*)
// The main layout is in (intl)/[locale]/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
