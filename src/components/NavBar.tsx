import { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs"
import {BiMenu, BiX} from "react-icons/bi"

function NavBar() {

    const sections = ["Home", "Technologies And Projects", "Contact"];

    const socialLinks = [
        { icon: <BsLinkedin />, link: "https://www.linkedin.com/in/aaronmu%C3%B1oz/" },
        { icon: <BsGithub />, link: "https://github.com/Thompson6626" },
    ];

    const [ isOpen, setIsOpen ] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-16 text-white backdrop-blur-md md:justify-evenly">
            <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">
                Aaron
            </a>
            <ul className="hidden md:flex gap-10 justify-evenly">
                { sections.map((text, index) => (
                    <a
                        href={`#${text.toLowerCase()}`}
                        className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                        key={index}
                    >
                        <li key={index}>
                            {text}
                        </li>
                    </a>
                ))}
            </ul>
            <ul className="hidden md:flex gap-10">
                { socialLinks.map((social, index) => (
                    <li key={index} className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                            {social.icon}
                        </a>
                    </li>
                ))}
            </ul>

            { isOpen ? (
                <BiX className="block md:hidden text-4xl z-10" onClick={menuOpen}/>
            ):(
                <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
            )}

            { isOpen && (
                <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${isOpen ? "block":"hidden"}`}>
                    <ul className="flex flex-col gap-8 ">
                        { sections.map((text, index) => (
                            <a
                                href={`#${text.toLowerCase()}`}
                                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                                key={index}
                            >
                                <li key={index}>
                                    {text}
                                </li>
                            </a>
                        ))}

                    </ul>
                    <ul className="flex flex-wrap gap-5">
                        { socialLinks.map((social, index) => (
                            <li key={index} className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                                <a href={social.link} target="_blank" rel="noopener noreferrer">
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ) }

        </nav>
    )
}

export default NavBar;
