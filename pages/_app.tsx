import type { AppProps } from 'next/app'
import { ThemeProvider } from '../components/providers/ThemeProvider'
import { Analytics } from '../components/analytics/Analytics'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}
