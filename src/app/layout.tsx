import type { Metadata } from 'next'
import { Montserrat as FontMontserrat } from 'next/font/google'
import { cn } from '@/common/lib/utils'
import '@/common/styles/globals.css'
import { Toaster } from 'react-hot-toast'
import ActiveSectionContextProvider from '@/common/stores/active-section'
import { ThemeProvider } from '@/common/theme/theme-provider'
import Header from '@/common/components/shared/header'
import Footer from '@/common/components/shared/footer'
import { ModeToggle } from '@/common/theme/mode-toggler'

export const metadata: Metadata = {
  title: 'Huỳnh Vĩnh Tiến - NextJS - TS',
  description:
    'Huỳnh Vĩnh Tiến Đây!',
}

const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
      <link rel="icon" href="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" />
      </head>
      <body
        className={cn(
          'flex justify-center items-center relative',
          fontMontserrat.className
        )}
      >
        <div className="flex flex-col min-h-screen w-full">
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
              <div className="fixed top-1 left-1 sm:left-6 sm:bottom-6 sm:top-auto right-auto z-[99]">
                <ModeToggle />
              </div>
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  )
}
