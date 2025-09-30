import { render, screen } from '@testing-library/react'
import Header from '../../components/layout/Header'
import { ThemeProvider } from '../../components/providers/ThemeProvider'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

const MockedHeader = () => (
  <ThemeProvider>
    <Header />
  </ThemeProvider>
)

describe('Header', () => {
  it('renders navigation links', () => {
    render(<MockedHeader />)
    
    expect(screen.getByText('Bhanu Nama')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<MockedHeader />)
    
    const mobileMenuButton = screen.getByLabelText('Toggle mobile menu')
    expect(mobileMenuButton).toBeInTheDocument()
  })
})
