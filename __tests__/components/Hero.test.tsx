import { render, screen, fireEvent } from '@testing-library/react'
import Hero from '../../components/sections/Hero'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}))

// Mock Next.js Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

describe('Hero', () => {
  it('renders hero content correctly', () => {
    render(<Hero />)
    
    expect(screen.getByText(/Hi — I'm/)).toBeInTheDocument()
    expect(screen.getByText('Bhanu Nama')).toBeInTheDocument()
    expect(screen.getByText('Aspiring Software Developer | MERN Stack & AI Enthusiast')).toBeInTheDocument()
    expect(screen.getByText('Passionate about building innovative, user-friendly, and intelligent applications.')).toBeInTheDocument()
  })

  it('has working CTA buttons', () => {
    render(<Hero />)
    
    const viewProjectsBtn = screen.getByText('View Projects')
    const downloadResumeBtn = screen.getByText('Download Resume')
    
    expect(viewProjectsBtn).toBeInTheDocument()
    expect(downloadResumeBtn).toBeInTheDocument()
    
    // Test that buttons are clickable
    fireEvent.click(viewProjectsBtn)
    fireEvent.click(downloadResumeBtn)
  })
})
