type CardProps = {
    image: string,
    title: string,
    descripcion: string,
    technologies?: { name: string, src: string }[]
}

export default function Card({ image, title, descripcion, technologies = [] }: CardProps) {
    return (
        <div className="card">
            <img
                src={image}
                alt="Project"
                className="card-image object-cover"
            />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">
                    {descripcion}
                </p>
                <div className="tech-icons flex flex-wrap justify-center gap-4">
                    {technologies.length > 0 ? (
                        technologies.map((tech) => (
                            <div key={tech.name} className="tech-item flex flex-col items-center">
                                <img
                                    src={tech.src}
                                    alt={tech.name}
                                    title={tech.name}
                                    className="w-12 h-12 object-contain"
                                />
                                <span className="mt-2 text-sm">{tech.name}</span>
                            </div>
                        ))
                    ) : (
                        <p>No technologies listed</p>
                    )}
                </div>
            </div>
        </div>
    );
}
