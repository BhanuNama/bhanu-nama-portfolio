import { motion } from 'framer-motion'
import { ArrowDownIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Bhanu_Nama_Resume.pdf'
    link.click()
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 0.9, 0.35, 1] }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 0.9, 0.35, 1] }}
            >
              Hi — I'm{' '}
              <span className="bg-gradient-to-r from-primary-500 to-accent-blue bg-clip-text text-transparent">
                Bhanu Nama
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2, ease: [0.22, 0.9, 0.35, 1] }}
            >
              Aspiring Software Developer | MERN Stack & AI Enthusiast
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3, ease: [0.22, 0.9, 0.35, 1] }}
            >
              Passionate about building innovative, user-friendly, and intelligent applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.4, ease: [0.22, 0.9, 0.35, 1] }}
            >
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center px-8 py-3 bg-primary-500 text-white font-medium rounded-custom hover:bg-primary-600 hover:-translate-y-0.5 transition-all duration-200 shadow-custom hover:shadow-custom-lg group"
              >
                View Projects
                <ArrowDownIcon className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-200" />
              </button>
              
              <button
                onClick={downloadResume}
                className="inline-flex items-center px-8 py-3 border-2 border-primary-500 text-primary-500 dark:text-primary-400 font-medium rounded-custom hover:bg-primary-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200 group"
              >
                Download Resume
                <DocumentArrowDownIcon className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-200" />
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.2, ease: [0.22, 0.9, 0.35, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-custom-lg">
                <Image
                  src="/assets/bhanu-headshot.jpg"
                  alt="Bhanu Nama headshot - circular portrait"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-blue rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent-green to-accent-blue rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
