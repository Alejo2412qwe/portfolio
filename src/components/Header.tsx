import { useState, useEffect, useCallback } from 'react';

interface NavItem {
    id: string;
    label: string;
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems: NavItem[] = [
        { id: 'projects', label: 'Projects' },
        { id: 'socials', label: 'Socials' },
        { id: 'contact', label: 'Contact' }
    ];

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                closeMenu();
            }
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [closeMenu]);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm py-3 shadow-lg' : 'bg-black py-4'
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#" className="text-xl font-bold text-white">
                    Alejandro Coraspe
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        {navItems.map(item => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className="text-white hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium"
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <div className="w-6 flex flex-col gap-1">
                        <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                        <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden bg-black/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
                    }`}
                aria-hidden={!isMenuOpen}
            >
                <ul className="flex flex-col items-center space-y-4 px-4">
                    {navItems.map(item => (
                        <li key={item.id} className="w-full">
                            <a
                                href={`#${item.id}`}
                                className="block w-full text-center text-white py-3 hover:bg-white/10 rounded-md transition-colors duration-200"
                                onClick={closeMenu}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}