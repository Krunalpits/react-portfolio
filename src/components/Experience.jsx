import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Experience
            </motion.h2>
            <div className="max-w-4xl mx-auto">
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-1/4 pr-4">
                            <p className="font-semibold">{experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-3/4">
                            <div className="flex items-center mb-2">
                                <h6 className="font-semibold mr-2">{experience.role}</h6>
                                <span className="text-sm text-purple-100">
                                    - {experience.company}
                                </span>
                            </div>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience