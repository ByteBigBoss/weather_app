import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

        <main>
        {children}
        </main>

  )
}
