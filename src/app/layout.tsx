import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Azure Config Converter',
  description: 'Hate trying to diff configs manually? We got you covered.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
