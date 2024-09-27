import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Socials() {
    return (
        <section id='socials' className='relative p-4 text-black w-full flex flex-col items-center py-32 md:py-64 bg-cover bg-center'>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
                <h1 className='text-3xl md:text-4xl font-bold mb-10'>Socials</h1>
                <div className="text-white flex flex-wrap justify-center gap-10">
                    <a href="https://discordapp.com/users/599778645455667220" target="_blank" rel="noopener noreferrer" className="text-black text-5xl md:text-7xl hover:text-slate-900">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                    <a href="https://www.linkedin.com/in/coraspealejo" target="_blank" rel="noopener noreferrer" className="text-black text-5xl md:text-7xl hover:text-slate-900">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.facebook.com/alejandro.coraspe.56" target="_blank" rel="noopener noreferrer" className="text-black text-5xl md:text-7xl hover:text-slate-900">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://github.com/Alejo2412qwe" target="_blank" rel="noopener noreferrer" className="text-black text-5xl md:text-7xl hover:text-slate-900">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </section>
    );
}
