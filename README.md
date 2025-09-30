# Bhanu Nama — Portfolio

A modern, responsive portfolio website showcasing MERN stack and AI/ML projects built with Next.js, TypeScript, and Tailwind CSS.

![Portfolio Preview](/public/assets/og-image.png)

## ✨ Features

- **Modern Design**: Clean, minimal interface with dark/light mode support
- **Responsive**: Optimized for all devices and screen sizes
- **Performance**: Built with Next.js for optimal loading speeds
- **Accessible**: WCAG compliant with keyboard navigation support
- **SEO Optimized**: Meta tags, structured data, and sitemap included
- **Interactive**: Smooth animations with Framer Motion
- **Contact Form**: Working serverless contact form with email notifications

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **animations**: Framer Motion
- **Icons**: Heroicons
- **Email**: Nodemailer
- **Testing**: Jest + React Testing Library
- **Deployment**: Vercel

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BhanuNama/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
# SMTP Configuration for contact form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=bhanunama08@gmail.com

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📧 Email Configuration

To enable the contact form:

1. **Gmail Setup** (recommended):
   - Enable 2-factor authentication
   - Generate an App Password
   - Use your Gmail address and app password in the env variables

2. **Other SMTP providers**:
   - Update `SMTP_HOST` and `SMTP_PORT` accordingly
   - Provide appropriate credentials

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## 🏗️ Build & Deploy

### Build for production:
```bash
npm run build
npm start
```

### Deploy to Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

Alternatively, deploy manually:
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify:

1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Set environment variables in Netlify dashboard

## 📊 Lighthouse Scores

Target scores (maintained via CI):
- **Performance**: ≥90
- **Accessibility**: ≥90  
- **Best Practices**: ≥90
- **SEO**: ≥90

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```js
colors: {
  primary: {
    500: '#14b8a6', // Teal
  },
  accent: {
    blue: '#38bdf8',
    green: '#22c55e',
  }
}
```

### Content
- Update personal information in components
- Modify projects in `data/projects.json`
- Replace images in `public/assets/`

### Fonts
The site uses Poppins and Inter fonts. To change:

1. Update `pages/_document.tsx` Google Fonts link
2. Modify `tailwind.config.js` font family

## 📁 Project Structure

```
├── components/          # React components
│   ├── layout/         # Header, Footer, Layout
│   ├── sections/       # Page sections (Hero, About, etc.)
│   ├── ui/            # Reusable UI components
│   └── providers/     # React context providers
├── data/              # Static data (projects.json)
├── pages/             # Next.js pages and API routes
├── public/            # Static assets
├── styles/            # Global CSS
├── types/             # TypeScript type definitions
└── __tests__/         # Jest test files
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Bhanu Nama**
- Email: bhanunama08@gmail.com
- Phone: +91-7993073400
- Location: Hyderabad, India
- Portfolio: [bhanunama.netlify.app](https://bhanunama.netlify.app)

---

⭐ If this portfolio helped you, please give it a star!
