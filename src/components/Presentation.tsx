import { ServerIcon, CommandLineIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'; // Importa íconos adecuados

export default function Presentation() {
    return (
        <main className="relative p-4 text-black w-full flex flex-col items-center py-32 md:py-56 bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
            <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:text-left">
                <img
                    src="/fotoPerfil.jpg"
                    alt="foto perfil"
                    className="rounded h-48 md:h-56 mb-4 md:mb-0 md:mr-8"
                />
                <div className="mt-4 md:mt-0">
                    <p className="text-3xl md:text-4xl font-bold">ALEJANDRO CORASPE</p>
                    <p className="text-xl md:text-2xl flex items-center justify-center md:justify-start mt-2 md:mt-4">
                        <ComputerDesktopIcon className="h-6 w-6 mr-2" /> Technologist in Software Development
                    </p>
                    <p className="text-xl md:text-2xl flex items-center justify-center md:justify-start mt-2">
                        <ServerIcon className="h-6 w-6 mr-2" /> BackEnd
                        <CommandLineIcon className="h-6 w-6 ml-4 mr-2" /> DevOps
                    </p>
                </div>
            </div>
        </main>
    )
}
