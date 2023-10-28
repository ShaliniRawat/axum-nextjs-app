import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import '../styles/globals.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`bg-gruvbox-light0 ${openSans.className}`}>
      <Header />
      <AnimatePresence
        mode='wait'
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </main>
  )
}
