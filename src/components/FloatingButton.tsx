import { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function FloatingButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`floating-button ${isVisible ? 'visible' : 'hidden'}`}
            aria-label="Scroll to top"
        >
            <ChevronUpIcon className="h-6 w-6" />
        </button>
    );
}
