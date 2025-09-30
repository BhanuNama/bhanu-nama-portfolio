import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Project } from '../../types'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
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
    <section id="projects" className="py-20 bg-white dark:bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my skills in MERN stack development and AI/ML integration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -6,
                  transition: { duration: 0.18 }
                }}
                className="bg-gray-50 dark:bg-dark-secondary rounded-custom overflow-hidden shadow-custom hover:shadow-custom-lg border border-gray-200 dark:border-gray-700 group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.images[0]?.src || '/assets/projects/placeholder.png'}
                    alt={project.images[0]?.alt || `${project.title} screenshot`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Role & Metrics */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <span className="font-medium">Role:</span> {project.role}
                    </p>
                    {project.metrics && (
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <p key={key} className="capitalize">
                            <span className="font-medium">{key.replace('_', ' ')}:</span> {value}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 hover:-translate-y-0.5 transition-all duration-180 group/btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-180" />
                        Live Demo
                      </a>
                    )}
                    
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:-translate-y-0.5 transition-all duration-180 group/btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <CodeBracketIcon className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-180" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
