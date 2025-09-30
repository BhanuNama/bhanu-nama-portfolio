import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contact from '../../components/sections/Contact'
import axios from 'axios'

// Mock axios
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

describe('Contact Form', () => {
  beforeEach(() => {
    mockedAxios.post.mockClear()
  })

  it('renders contact form correctly', () => {
    render(<Contact />)
    
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByLabelText('Name *')).toBeInTheDocument()
    expect(screen.getByLabelText('Email *')).toBeInTheDocument()
    expect(screen.getByLabelText('Message *')).toBeInTheDocument()
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('shows validation error on empty submit', async () => {
    render(<Contact />)
    
    const submitButton = screen.getByText('Send Message')
    fireEvent.click(submitButton)
    
    // HTML5 validation should prevent form submission
    const nameInput = screen.getByLabelText('Name *')
    expect(nameInput).toBeRequired()
  })

  it('submits form with valid data', async () => {
    mockedAxios.post.mockResolvedValueOnce({
      data: { message: 'Thanks! I received your message — I will respond within 2 business days.' }
    })

    render(<Contact />)
    
    fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText('Message *'), { target: { value: 'Hello there!' } })
    
    fireEvent.click(screen.getByText('Send Message'))
    
    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith('/api/contact', {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello there!'
      })
    })
  })
})
