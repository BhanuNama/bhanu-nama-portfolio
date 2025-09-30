import { motion } from 'framer-motion'
import { AcademicCapIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function About() {
  const education = [
    {
      institution: "Keshav Memorial Institute of Technology",
      degree: "B.Tech in Computer Science and Engineering",
      grade: "CGPA: 8.3",
      period: "Dec 2021 - June 2025"
    },
    {
      institution: "Sri Gayatri College",
      degree: "Telangana State Board, MPC",
      grade: "Percentage: 97%",
      period: "2019 - 2021"
    },
    {
      institution: "Prerana High School",
      degree: "Board of Secondary Education, Nalgonda",
      grade: "GPA: 10.0",
      period: "2019"
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-blue mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Bio */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Who I Am
              </h3>
              <div className="prose prose-lg text-gray-600 dark:text-gray-300">
                <p className="mb-6">
                  I am an aspiring Software Developer and recent B.Tech Computer Science and Engineering graduate from Keshav Memorial Institute of Technology with an 8.3 CGPA. I build full-stack web applications using the MERN stack and develop ML/DL solutions for real-world problems. I am passionate about secure and scalable systems, clean UI/UX, and data-driven features.
                </p>
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-400 mt-6">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>Hyderabad, India</span>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <AcademicCapIcon className="h-6 w-6 mr-2" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-dark-primary/50 p-6 rounded-custom shadow-custom border border-gray-200 dark:border-gray-700"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.institution}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">
                      {edu.degree}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary-500 font-medium">
                        {edu.grade}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {edu.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
