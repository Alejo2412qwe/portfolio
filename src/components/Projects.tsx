import Card from "./Card";

export default function Projects() {
    return (
        <section id='projects' className='relative p-4 text-black w-full flex flex-col items-center py-32 md:py-56 bg-cover bg-center'>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
                <h1 className='text-3xl md:text-4xl font-bold mb-10'>Projects</h1>
                <div className="card-container text-black flex flex-wrap justify-center gap-6">
                    <Card
                        image="/inmoFOTO.png"
                        title="Real Estate System CIC Portal"
                        descripcion="I created a system for the real estate agency allowing control of users, including administrators, owners, tenants, etc. Rental control, also review of receipts uploaded to the system by tenants, in addition to allowing the creation of new contracts."
                        technologies={[
                            { name: 'Angular', src: '/angularLogo.png' },
                            { name: 'Spring', src: '/springLogo.png' },
                            { name: 'MySql', src: 'https://th.bing.com/th/id/R.255b77e251b19a6d0600634d2ff9b006?rik=k3edqLFjWyFC1Q&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmysql%2fmysql_PNG22.png&ehk=ffHItQzD%2fUaKL%2bPOiED3dtDd9YUI%2fJRUzYL5raCZnR8%3d&risl=&pid=ImgRaw&r=0' },
                            { name: 'TypeScript', src: '/typeLogo.png' },
                            { name: 'Hostinger', src: 'https://logowik.com/content/uploads/images/hostinger8547.jpg' }
                        ]}
                    />

                    <Card
                        image="/snc.png"
                        title="SENESCYT Management System"
                        descripcion="I developed a management system for SENESCYT (Secretariat of Higher Education, Science, Technology and Innovation), where license requests could be made, assistance could be provided to each user, etc. I was responsible for both the BackEnd and the FrontEnd and my activities were building CRUDs, implementing Tokens for security, implementing GUARDs in the front, among others."
                        technologies={[
                            { name: 'Angular', src: '/angularLogo.png' },
                            { name: 'Spring', src: '/springLogo.png' },
                            { name: 'MySql', src: 'https://th.bing.com/th/id/R.255b77e251b19a6d0600634d2ff9b006?rik=k3edqLFjWyFC1Q&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmysql%2fmysql_PNG22.png&ehk=ffHItQzD%2fUaKL%2bPOiED3dtDd9YUI%2fJRUzYL5raCZnR8%3d&risl=&pid=ImgRaw&r=0' },
                            { name: 'TypeScript', src: '/typeLogo.png' },
                        ]}
                    />

                </div>
            </div>
        </section>
    )
}
