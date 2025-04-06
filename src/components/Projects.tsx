import { motion } from 'framer-motion';
import {ReactNode} from "react";

type Project = {
    image: string;
    title: string;
    description: string;
    technologies: string[];
};

const projectsData: Project[] = [
    {
        image: "https://via.placeholder.com/300", // Placeholder image
        title: "Project Title",
        description: "A short description of the project goes here. It provides details about what the project does and how it works.",
        technologies: ["React", "TypeScript", "TailwindCSS"]
    }
];

const ScrollReveal = ({ children }: { children: ReactNode}) => {
    return (
        <motion.div
        initial={{ opacity: 0, y:100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once:true }}
        transition={{ duration:0.8 }}
        >
            {children}
        </motion.div>
    )
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <ScrollReveal>
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
                />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <p className="text-gray-400">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="bg-gray-800 text-white px-3 py-1 rounded-lg">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
}

function Projects() {
    return (
        <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
            <ScrollReveal>
                <h1 className="text-4xl font-light text-white md:text-6xl">
                    My Projects
                </h1>
            </ScrollReveal>
            <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
                {projectsData.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
