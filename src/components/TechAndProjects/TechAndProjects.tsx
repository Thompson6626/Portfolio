import { motion } from "framer-motion";
import React, { createRef, useEffect, useRef, useState } from "react";
import TechnologyBadge from "./TechnologyBadge";
import { projectsMap, techStackMap } from "./data";
import ProjectCard from "@/components/TechAndProjects/ProjectCard";

interface Coordinate {
    x: number;
    y: number;
}

function TechAndProjects() {
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(["SpringBoot"]);
    const [projectsShown, setProjectsShown] = useState<string[]>([...techStackMap.get("SpringBoot")!]);
    const [coordinates, setCoordinates] = useState<Record<string, Coordinate>>({});
    const [loading, setLoading] = useState(true); // Loading state to wait for coordinates to be available

    function addRemove(technology: string) {
        if (selectedTechnologies.includes(technology)) {
            setSelectedTechnologies(selectedTechnologies.filter((tech) => tech !== technology));
            return;
        }
        setSelectedTechnologies([...selectedTechnologies, technology]);
    }

    useEffect(() => {
        function intersectSets<T>(setA: Set<T>, setB: Set<T>): Set<T> {
            return new Set([...setA].filter((item) => setB.has(item)));
        }

        if (selectedTechnologies.length === 0) {
            setProjectsShown([...projectsMap.keys()]);
            return;
        }

        let updated_shown = techStackMap.get(selectedTechnologies[0])!;
        for (let i = 1; i < selectedTechnologies.length; i++) {
            updated_shown = intersectSets(updated_shown, techStackMap.get(selectedTechnologies[i])!);
        }
        setProjectsShown([...updated_shown]);
    }, [selectedTechnologies]);

    const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        const getCoordinates = () => {
            const newCoordinates: Record<string, Coordinate> = {};

            Object.keys(itemRefs.current).forEach((key) => {
                const ref = itemRefs.current[key];
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    newCoordinates[key] = { x: rect.left, y: rect.top };
                }
            });

            setCoordinates(newCoordinates); // Update state with new coordinates
            setLoading(false); // Coordinates are now available, set loading to false
        };

        // Call this function after mounting and whenever the tech list changes
        setTimeout(getCoordinates, 100);
        window.addEventListener('resize', getCoordinates);

        return () => {
            window.removeEventListener('resize', getCoordinates);
        };
    }, []);

    return (
        <div id="technologies" className="flex min-h-screen w-full flex-col items-center justify-center gap-6 overflow-auto">
            <motion.h1
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                className="text-4xl font-light text-white md:text-6xl"
            >
                Technologies And Projects
            </motion.h1>

            <div className="flex flex-wrap items-center justify-center gap-y-10 gap-x-5 py-5 max-w-screen-lg w-full px-5 md:px-10">
                {Array.from(techStackMap.keys()).map((tech) => (
                    <TechnologyBadge
                        key={tech}
                        tech={tech}
                        ref={(el) => (itemRefs.current[tech] = el)}  // Set ref correctly
                        isSelected={selectedTechnologies.includes(tech)}
                        onClick={() => addRemove(tech)}
                    />
                ))}
            </div>

            <div className="grid p-10 gap-10 md:grid-cols-2 lg:grid-cols-3 grid-rows-1">
                {projectsShown.map((project) => {
                    const proj = projectsMap.get(project)!;
                    return (
                        <div
                            key={project}
                            className="bg-gray-800 text-white rounded-lg p-6 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="text-2xl font-semibold mb-3">{project}</div>
                            <div className="text-sm text-gray-300 mb-4">{proj.description}</div>

                            <div className="flex flex-wrap gap-3 mb-4">
                                {!loading &&
                                    proj.technologiesUsed.map((tech) => {
                                        const coord = coordinates[tech];

                                        return (
                                            <motion.div
                                                initial={{ from: tech , opacity: 0 }}
                                                animate={{ opacity: 1, scale: 1.1 , x:0 , y:0}}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <div key={tech} className="w-12 h-12 bg-white/90 rounded-2xl p-2">
                                                    <img
                                                        src={`technologies/${tech.toLowerCase()}.svg`}
                                                        alt={`${tech} icon`}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            </motion.div>

                                        );
                                    })}
                            </div>

                            <div className="flex gap-7 text-sm">
                                <div className="font-semibold text-blue-500 hover:underline cursor-pointer">
                                    <a href={proj.githubLink} target="_blank" rel="noopener noreferrer">
                                        Code
                                    </a>
                                </div>
                                {proj.demoLink && (
                                    <div className="font-semibold text-green-500 hover:underline cursor-pointer">
                                        <a href={proj.demoLink} target="_blank" rel="noopener noreferrer">
                                            Demo
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default TechAndProjects;
