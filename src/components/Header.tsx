import { useState, useEffect } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="bg-black w-full h-16 flex justify-center items-center px-4 md:px-6 text-white font-bold relative shadow">
            <nav id="content" className="hidden md:flex">
                <ul className="flex space-x-6">
                    <li><a href="#projects" className="relative group">Projects</a></li>
                    <li><a href="#socials" className="relative group">Socials</a></li>
                    <li><a href="#contact" className="relative group">Contact Me</a></li>
                </ul>
            </nav>
            <button
                className="md:hidden text-white text-2xl"
                onClick={toggleMenu}
            >
                ☰
            </button>

            <div
                className={`absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                style={{ zIndex: 50 }}
            >
                <ul className="flex flex-col space-y-2 py-4 text-center w-full">
                    <li><a href="#projects" className="block w-full relative group">Projects</a></li>
                    <li><a href="#socials" className="block w-full relative group">Socials</a></li>
                    <li><a href="#contact" className="block w-full relative group">Contact Me</a></li>
                </ul>
            </div>
        </header>
    );
}
