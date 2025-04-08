import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Project } from './data';

// Scroll reveal wrapper
const ScrollReveal = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

type Props = {
    projectTitle: string;
    project?: Project;
};

function ProjectCard({ projectTitle, project }: Props) {
    if (!project) return null;

    return (
        <ScrollReveal>
            <motion.div
                className="text-white rounded-2xl p-6 flex flex-col shadow-xl thover:shadow-[0_0_30px_rgba(34,197,94,0.2)] ransition-all duration-300 border border-white/10"
                whileHover={{ scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            >
                <h2 className="text-2xl font-bold mb-2">{projectTitle}</h2>

                {project.description && (
                    <p className="text-white/90 leading-relaxed mb-5 text-md">{project.description}</p>
                )}

                <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologiesUsed.map((tech) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="w-10 h-10 bg-white/90 rounded-xl p-1.5 shadow-md">
                                <img
                                    src={`technologies/${tech.toLowerCase()}.svg`}
                                    alt={`${tech} icon`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex gap-4 mt-auto">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition-all shadow hover:shadow-lg text-sm"
                    >
                        Code
                    </a>
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-semibold px-4 py-2 rounded-lg transition-all shadow hover:shadow-lg text-sm"
                        >
                            Demo
                        </a>
                    )}
                </div>
            </motion.div>
        </ScrollReveal>
    );
}

export default ProjectCard;
