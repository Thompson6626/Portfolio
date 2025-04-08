import { motion } from "framer-motion";

function Hero() {
    return (
        <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
            <div className="flex flex-col items-center justify-center gap-10 text-white">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0 , opacity: 1 }}
                    transition={{ duration:0.8 , delay: 0.2 }}
                >
                    <img src={""} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]" />
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0 , opacity: 1 }}
                    transition={{ duration:0.8 , delay: 0.2 }}
                    className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center "
                >
                    <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
                        Aaron Muñoz
                    </h1>

                    <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
                        Full Stack (Backend) Developer
                    </h3>
                    <p className="md:text-base text-pretty text-sm text-gray-400">
                        I’m a backend enthusiast with a desire to craft solid, scalable systems—while sneaking in some frontend fun along the way. I love solving problems, but I’m also curious enough to dive into the world of buttons and pixels (and divs).                    </p>
                </motion.div>
            </div>
            {/* Invisible div at the bottom center */}
            <div id="technologies and projects" className="bottom-0 left-1/2 transform translate-y-[250px] invisible h-0 w-0">
                {/* You can add content here if needed later, but it's invisible for now */}
            </div>
        </div>
    )
}

export default Hero;