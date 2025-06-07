import Card from './Card';
import SectionTitle from './SectionTitle';

export default function Projects() {
    const projects = [
        {
            id: 1,
            image: "/inmoFOTO.png",
            title: "Real Estate System CIC Portal",
            description: "Developed a comprehensive system for a real estate agency featuring user management (administrators, owners, tenants), rental control, receipt management, and contract creation functionality.",
            technologies: [
                { name: 'Angular', src: '/angularLogo.png' },
                { name: 'Spring', src: '/springLogo.png' },
                { name: 'MySQL', src: '/mysql.png' },
                { name: 'TypeScript', src: '/typeLogo.png' },
                { name: 'Hostinger', src: '/hostinger.jpg' }
            ]
        },
        {
            id: 2,
            image: "/snc.png",
            title: "SENESCYT Management System",
            description: "Built a management system for Ecuador's Secretariat of Higher Education featuring license requests, user assistance, and administrative functions. Implemented JWT authentication, guards, and comprehensive CRUD operations.",
            technologies: [
                { name: 'Angular', src: '/angularLogo.png' },
                { name: 'Spring', src: '/springLogo.png' },
                { name: 'MySQL', src: '/mysql.png' },
                { name: 'TypeScript', src: '/typeLogo.png' },
            ]
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="My Projects"
                    subtitle="Some of my recent work"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projects.map(project => (
                        <Card
                            key={project.id}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}