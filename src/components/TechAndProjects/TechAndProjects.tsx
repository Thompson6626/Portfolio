import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TechnologyBadge from "./TechnologyBadge";
import { projectsMap, techStackMap } from "./data";
import ProjectCard from "./ProjectCard";

function TechAndProjects() {
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(["SpringBoot"]);
    const [projectsShown, setProjectsShown] = useState<string[]>([...techStackMap.get("SpringBoot")!]);

    // Function to handle adding/removing technologies
    function addRemove(technology: string) {
        setSelectedTechnologies(prevState =>
            prevState.includes(technology)
                ? prevState.filter((tech) => tech !== technology)
                : [...prevState, technology]
        );
    }

    useEffect(() => {
        function intersectSets<T>(setA: Set<T>, setB: Set<T>): Set<T> {
            return new Set([...setA].filter((item) => setB.has(item)));
        }

        if (selectedTechnologies.length === 0) {
            setProjectsShown([...projectsMap.keys()]);
            return;
        }

        if (selectedTechnologies.length === 1) {
            setProjectsShown([...techStackMap.get(selectedTechnologies[0])!]);
            return;
        }

        const selectedTechSets = selectedTechnologies.map(tech => techStackMap.get(tech)!);
        const updated_shown = selectedTechSets.reduce((acc, currentSet) => intersectSets(acc, currentSet));

        setProjectsShown([...updated_shown]);
    }, [selectedTechnologies]);


    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 overflow-auto px-5">
            <motion.h1
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                className="text-4xl font-light text-white md:text-6xl text-center"
            >
                Technologies And Projects
            </motion.h1>

            <div className="flex flex-wrap items-center justify-center gap-y-8 gap-x-5 py-5 max-w-screen-lg w-full px-5 md:px-10 mb-10">
                {Array.from(techStackMap.keys()).map((tech) => (
                    <TechnologyBadge
                        key={tech}
                        tech={tech}
                        isSelected={selectedTechnologies.includes(tech)}
                        onClick={() => addRemove(tech)}
                    />
                ))}
            </div>

            {/* Use motion.div here to trigger reanimation */}
            <motion.div
                key={selectedTechnologies.join(",")} // Trigger reanimation when selected technologies change
                className="grid gap-8 px-5 pb-20 max-w-screen-xl w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {projectsShown.map((title) => {
                    const proj = projectsMap.get(title);
                    return (
                        <ProjectCard key={title} project={proj} projectTitle={title} />
                    );
                })}
            </motion.div>
        </div>
    );
}

export default TechAndProjects;
