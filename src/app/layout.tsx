import './globals.css'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#fafafa] text-neutral-700 dark:bg-[#0a0a0a] dark:text-neutral-300">
      <body className={`${sans.className} mx-auto flex min-h-screen w-full max-w-screen-xl flex-col overflow-y-auto`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}