import { motion } from 'framer-motion'
import { AcademicCapIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function Certifications() {
  const certifications = [
    {
      title: "Microsoft & LinkedIn: Essentials in Software Development",
      issuer: "Microsoft & LinkedIn",
      type: "Professional Certification",
      url: null
    },
    {
      title: "Java & C++",
      issuer: "Udemy",
      type: "Programming Course",
      url: "#"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.35, ease: [0.22, 0.9, 0.35, 1] }
    }
  }

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional certifications and courses that enhance my technical expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -6,
                  transition: { duration: 0.18 }
                }}
                className="bg-gray-50 dark:bg-dark-secondary rounded-custom p-6 shadow-custom hover:shadow-custom-lg border border-gray-200 dark:border-gray-700 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <AcademicCapIcon className="w-6 h-6 text-white" />
                  </div>
                  
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 transition-colors duration-200"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-200">
                  {cert.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {cert.issuer}
                </p>
                
                <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm rounded-full">
                  {cert.type}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
