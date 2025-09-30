import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message }: ContactFormData = req.body

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  if (!email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' })
  }

  try {
    // Configure nodemailer
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'bhanunama08@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    res.status(200).json({ 
      message: 'Thanks! I received your message — I will respond within 2 business days.' 
    })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ 
      message: 'Something went wrong. Please try again later or email bhanunama08@gmail.com.' 
    })
  }
}
