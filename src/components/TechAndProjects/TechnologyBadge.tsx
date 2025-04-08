import { motion } from "framer-motion";
import React, { forwardRef } from "react";

type Props = {
    tech: string;
    isSelected: boolean;
    onClick: () => void;
};

// Forward ref to the div in TechnologyBadge
const TechnologyBadge = forwardRef<HTMLDivElement, Props>(({ tech, isSelected, onClick }: Props, ref) => {

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-5 
                text-2xl sm:text-3xl md:text-4xl`}
            onClick={onClick}
            ref={ref} // Attach the ref here to the div element
        >
            <div
                className={`w-[60px] h-[60px] p-2 rounded-xl 
                    ${isSelected ? "bg-white text-black shadow-md shadow-white/40" : "bg-white/10 text-white/80"} 
                    flex items-center justify-center`}
            >
                <img
                    src={`technologies/${tech.toLowerCase()}.svg`}
                    alt={`${tech} icon`}
                    className="w-full h-full object-contain"
                />
            </div>
            <p className="text-sm mt-2 opacity-80 text-white">{tech}</p>
        </motion.div>
    );
});

export default TechnologyBadge;
