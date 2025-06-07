interface Technology {
    name: string;
    src: string;
}

interface CardProps {
    image: string;
    title: string;
    description: string;
    technologies?: Technology[];
}

export default function Card({ image, title, description, technologies = [] }: CardProps) {
    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] max-w-md w-full">
            <div className="h-48 w-full">
                <img
                    src={image}
                    alt={`${title} project screenshot`}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>

                {technologies.length > 0 ? (
                    <div className="flex flex-wrap gap-4 justify-center">
                        {technologies.map((tech) => (
                            <div key={tech.name} className="flex flex-col items-center w-16">
                                <div className="h-12 w-12">
                                    <img
                                        src={tech.src}
                                        alt={tech.name}
                                        className="w-full h-full object-contain"
                                        title={tech.name}
                                    />
                                </div>
                                <span className="text-xs mt-1 text-center">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400 text-sm italic">No technologies specified</p>
                )}
            </div>
        </article>
    );
}