import { motion } from "framer-motion";

type Props = {
    tech: string;
    isSelected: boolean;
    onClick: () => void;
};

const TechnologyBadge = ({ tech, isSelected, onClick }: Props) => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-5
                text-2xl sm:text-3xl md:text-4xl"
            onClick={onClick}
        >
            <div className={`relative w-[60px] h-[60px] p-2 rounded-xl flex items-center justify-center 
                ${isSelected ? "bg-white text-black rainbow-border" : "bg-white/10 text-white/80"}`}>
                <img
                    src={`technologies/${tech.toLowerCase()}.svg`}
                    alt={`${tech} icon`}
                    className="w-full h-full object-contain relative z-10"
                />
            </div>
            <p className="text-sm mt-2 opacity-80 text-white">{tech}</p>
        </motion.div>
    );
};

export default TechnologyBadge;
