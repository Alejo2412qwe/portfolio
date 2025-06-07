import { ServerIcon, CodeBracketIcon, CpuChipIcon } from '@heroicons/react/24/outline';

export default function Presentation() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white pt-20 pb-32">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-fixed opacity-10" />
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                        <img
                            src="/fotoPerfil.jpg"
                            alt="Alejandro Coraspe"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="text-center lg:text-left max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Alejandro Coraspe
                        </h1>

                        <div className="space-y-3 mb-8">
                            <p className="text-xl flex items-center justify-center lg:justify-start gap-3">
                                <CpuChipIcon className="h-6 w-6 text-blue-400" />
                                <span>Software Development Technologist</span>
                            </p>
                            <p className="text-xl flex items-center justify-center lg:justify-start gap-3">
                                <ServerIcon className="h-6 w-6 text-blue-400" />
                                <span>Backend Developer</span>
                            </p>
                            <p className="text-xl flex items-center justify-center lg:justify-start gap-3">
                                <CodeBracketIcon className="h-6 w-6 text-blue-400" />
                                <span>DevOps Enthusiast</span>
                            </p>
                        </div>

                        <p className="text-lg text-gray-300 mb-8">
                            Welcome to my portfolio! I'm a passionate software developer from Venezuela with expertise in building robust backend systems and implementing DevOps practices.
                        </p>

                        <div className="flex gap-4 justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-transparent border border-white hover:bg-white/10 rounded-lg font-medium transition-colors"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}