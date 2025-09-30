import { GetStaticProps } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Certifications from '../components/sections/Certifications'
import Contact from '../components/sections/Contact'
import { Project } from '../types'
import projectsData from '../data/projects.json'

interface HomeProps {
  projects: Project[]
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 0.9, 0.35, 1] }
  }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

export default function Home({ projects }: HomeProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bhanu Nama",
    "jobTitle": "Aspiring Software Developer",
    "url": "https://bhanunama.netlify.app",
    "email": "bhanunama08@gmail.com",
    "telephone": "+91-7993073400",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressCountry": "India"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Keshav Memorial Institute of Technology"
    },
    "knowsAbout": ["MERN Stack", "Machine Learning", "Deep Learning", "Web Development"],
    "sameAs": [
      "https://github.com/BhanuNama",
      "https://linkedin.com/in/bhanunama"
    ]
  }

  return (
    <>
      <Head>
        <title>Bhanu Nama — Aspiring Software Developer | MERN & AI</title>
        <meta name="description" content="Portfolio of Bhanu Nama — B.Tech CSE. MERN Stack developer with machine learning and deep learning projects. Explore Campus Connect, Nutri Guide, and FakeBuster (AI Deepfake Detection)." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bhanunama.netlify.app/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Bhanu Nama — Aspiring Software Developer" />
        <meta property="og:description" content="MERN + AI projects: Campus Connect, Nutri Guide, FakeBuster." />
        <meta property="og:image" content="/assets/og-image.png" />
        <meta property="og:url" content="https://bhanunama.netlify.app/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bhanu Nama — Aspiring Software Developer" />
        <meta name="twitter:description" content="MERN + AI projects: Campus Connect, Nutri Guide, FakeBuster." />
        <meta name="twitter:image" content="/assets/og-image.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Layout>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.section variants={fadeInVariants}>
            <Hero />
          </motion.section>
          
          <motion.section variants={fadeInVariants}>
            <About />
          </motion.section>
          
          <motion.section variants={fadeInVariants}>
            <Projects projects={projects} />
          </motion.section>
          
          <motion.section variants={fadeInVariants}>
            <Skills />
          </motion.section>
          
          <motion.section variants={fadeInVariants}>
            <Certifications />
          </motion.section>
          
          <motion.section variants={fadeInVariants}>
            <Contact />
          </motion.section>
        </motion.div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: projectsData
    }
  }
}
