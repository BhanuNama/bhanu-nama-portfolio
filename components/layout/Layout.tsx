import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import SkipToContent from '../accessibility/SkipToContent'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-primary transition-colors duration-200">
      <SkipToContent />
      <Header />
      <main id="main-content" className="relative">
        {children}
      </main>
      <Footer />
    </div>
  )
}
