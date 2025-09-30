import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  GlobeAltIcon, 
  CloudIcon, 
  CpuChipIcon 
} from '@heroicons/react/24/outline'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: CodeBracketIcon,
      skills: ["Java", "Python", "JavaScript"],
      color: "from-primary-500 to-accent-blue"
    },
    {
      title: "Web",
      icon: GlobeAltIcon,
      skills: ["HTML", "CSS", "ReactJS", "Node.js", "Express.js", "TypeScript"],
      color: "from-accent-blue to-accent-green"
    },
    {
      title: "DB & Cloud",
      icon: CloudIcon,
      skills: ["SQL", "MongoDB", "AWS"],
      color: "from-accent-green to-primary-500"
    },
    {
      title: "Specialized",
      icon: CpuChipIcon,
      skills: ["Machine Learning", "Deep Learning", "Data Structures & Algorithms", "DBMS", "Operating Systems"],
      color: "from-purple-500 to-pink-500"
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and skills I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -6,
                  transition: { duration: 0.18 }
                }}
                className="bg-white dark:bg-dark-primary rounded-custom p-6 shadow-custom hover:shadow-custom-lg border border-gray-200 dark:border-gray-700 group"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <category.icon className="w-full h-full text-white" />
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: skillIndex * 0.05,
                        ease: [0.22, 0.9, 0.35, 1]
                      }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3 opacity-70`}></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
