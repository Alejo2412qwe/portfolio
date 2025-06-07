import { faLinkedin, faGithub, faDiscord, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionTitle from './SectionTitle';

export default function Socials() {
    const socialLinks = [
        {
            id: 1,
            icon: faLinkedin,
            url: 'https://www.linkedin.com/in/coraspealejo',
            label: 'LinkedIn Profile'
        },
        {
            id: 2,
            icon: faGithub,
            url: 'https://github.com/Alejo2412qwe',
            label: 'GitHub Profile'
        },
        {
            id: 3,
            icon: faDiscord,
            url: 'https://discordapp.com/users/599778645455667220',
            label: 'Discord Profile'
        },
        {
            id: 4,
            icon: faFacebook,
            url: 'https://www.facebook.com/alejandro.coraspe.56',
            label: 'Facebook Profile'
        }
    ];

    return (
        <section id="socials" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <SectionTitle
                    title="Connect With Me"
                    subtitle="Let's get in touch on social media"
                />

                <div className="flex flex-wrap justify-center gap-8 mt-12">
                    {socialLinks.map(social => (
                        <a
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-blue-50 hover:shadow-lg transition-all duration-300 text-gray-800 hover:text-blue-600"
                        >
                            <FontAwesomeIcon icon={social.icon} className="text-3xl" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}