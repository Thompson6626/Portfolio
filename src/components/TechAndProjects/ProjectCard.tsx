import { motion } from 'framer-motion';
import {ReactNode} from "react";
import {Project} from "./data";

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
type Props = {
    project?: Project;
}

function ProjectCard({ project }: Props) {
    return (
        <ScrollReveal>
            <div>

            </div>
        </ScrollReveal>
    );
}

export default ProjectCard;
