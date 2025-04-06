import {
    BiLogoDocker,
    BiLogoJavascript,
    BiLogoSpringBoot,
    BiLogoReact,
    BiLogoTypescript,
    BiLogoAngular,
    BiLogoJava,
    BiLogoCss3,
    BiLogoHtml5,
    BiLogoPython
} from "react-icons/bi";
import {SiMongodb, SiNodedotjs, SiPostgresql} from "react-icons/si";
import { motion  } from "framer-motion";

// Make technologies and projects kinda the same, clicking each one should make display of the given project, with animations of visibility too and pagination 


function Technologies() {
    const techStack = [
        { icon: <BiLogoReact />, color: "text-blue-500", name: "React" },
        { icon: <BiLogoAngular />, color: "text-red-500", name: "Angular" },
        { icon: <BiLogoSpringBoot />, color: "text-green-500", name: "Spring Boot" },
        { icon: <BiLogoDocker />, color: "text-blue-600", name: "Docker" },
        { icon: <BiLogoTypescript />, color: "text-sky-500", name: "TypeScript" },
        { icon: <BiLogoJavascript />, color: "text-yellow-400", name: "JavaScript" },
        { icon: <SiNodedotjs />, color: "text-green-600", name: "Node.js" },
        { icon: <SiMongodb />, color: "text-green-500", name: "MongoDB" },
        { icon: <SiPostgresql />, color: "text-blue-500", name: "PostgreSQL" },
        { icon: <BiLogoJava />, color: "text-sky-500", name: "Java" },
        { icon: <BiLogoHtml5 />, color: "text-orange-500", name: "Java" },
        { icon: <BiLogoCss3 />, color: "text-blue-500", name: "Java" },
        { icon: <BiLogoPython />, color: "text-green-300", name: "Python" }
    ];

    const variants = {
        hidden: { opacity: 0, y:50 },
        visible: { opacity: 1, y: 0 },

    }
    
    return (
        <div id="technologies" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:gap-32 overflow-auto">
            <motion.h1
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                className="text-4xl font-light text-white md:text-6xl"
            >
                Technologies
            </motion.h1>

            {/* CONTAINER WITH RESPONSIVE WIDTH CONTROL */}
            <div className="flex flex-wrap items-center justify-center gap-y-10 gap-x-7 py-5 max-w-screen-lg w-full px-5 md:px-10">
                {techStack.map((tech, index) => (
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        key={index}
                        className={`flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-5 
                text-2xl sm:text-3xl md:text-4xl ${tech.color}`}
                    >
                        {tech.icon}
                        <p className="text-sm md:text-lg mt-2 opacity-80">{tech.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>

    );
}

export default Technologies;
