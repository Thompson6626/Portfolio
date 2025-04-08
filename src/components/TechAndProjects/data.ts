

export const techStackMap = new Map<string,Set<string>>([
    ["SpringBoot", new Set(["ComponentHub", "Ecommerce", "Movie Streaming","Ecommerce Microservices"])],
    ["Java", new Set(["Ecommerce", "Movie Streaming", "Maven Local Repository Cleaner CLI", "ComponentHub","Ecommerce Microservices"])],
    ["Angular", new Set(["ComponentHub"])],
    ["PostgreSQL", new Set(["Ecommerce", "Movie Streaming", "ComponentHub", "Stackronyms","Ecommerce Microservices"])],
    ["TailwindCSS", new Set(["ComponentHub", "Stackronyms"])],
    ["Docker", new Set(["Movie Streaming", "ComponentHub","Ecommerce Microservices"])],
    ["Maven", new Set(["Movie Streaming", "ComponentHub","Ecommerce Microservices"])],
    ["Gradle", new Set(["Ecommerce"])],
    ["Javascript", new Set(["Universidad Mayor de San Marcos Scores"])],
    ["Typescript", new Set(["ComponentHub", "Stackronyms"])],
    ["Css", new Set(["ComponentHub", "Universidad Mayor de San Marcos Scores", "Stackronyms"])],
    ["Html", new Set(["ComponentHub", "Universidad Mayor de San Marcos Scores"])],
    ["Neon", new Set(["Stackronyms"])],
    ["React", new Set(["Stackronyms"])],
    ["Rust", new Set(["Env Example Generator CLI", "Last Accessed CLI"])],
    ["Python", new Set(["Universidad Mayor de San Marcos Scores", "Whisper Subtitles Overlay", "SRT Transcriber"])],
    ["Django", new Set(["Universidad Mayor de San Marcos Scores"])],
    ["FastApi", new Set(["SRT Transcriber"])],
    ["Polars", new Set(["Universidad Mayor de San Marcos Scores"])],
    ["MongoDB", new Set(["Ecommerce Microservices"])]
]);

export type Project = {
    image?: string,
    description: string,
    technologiesUsed: string[],
    githubLink: string,
    demoLink?: string,
}

export const projectsMap = new Map<string, Project>([
    [
        "ComponentHub",
        {
            image: "projects/x.jpg",
            description: "A collaborative platform for frontend developers to share and discover reusable UI components. Ideal for developers looking to quickly build and customize beautiful interfaces.",
            githubLink: "https://github.com/Thompson6626/ComponentHub",
            technologiesUsed: ["Angular", "TailwindCSS", "Docker", "Maven","Html","Css","Typescript","Java"]
        },
    ],
    [
        "Ecommerce",
        {
            image: "projects/x.jpg",
            description: "A project that extracts the admission exam scores from the Universidad Nacional Mayor de San Marcos. It also includes a feature that allows users to ask questions to an AI, which attempts to convert the queries into database queries and returns the results in a table format. Perfect for those who want quick and easy access to the information.",
            githubLink: "https://github.com/Thompson6626/Ecommerce",
            technologiesUsed: ["Java", "SpringBoot", "PostgreSQL", "Docker"]
        },
    ],
    [
        "Stackronyms",
        {
            image: "projects/x.jpg",
            description: "A fun web app that generates hilarious and creative tech-related acronyms.",
            githubLink: "https://github.com/Thompson6626/Stackronyms",
            demoLink: "https://stackronyms.vercel.app/",
            technologiesUsed: ["React", "Neon", "TailwindCSS","Html","Css","Typescript"]
        },
    ],
    [
        "Universidad Mayor de San Marcos Scores",
        {
            image: "projects/x.jpg",
            description: "Proyecto que extrae puntajes del examen de admisión de la Universidad Nacional Mayor de San Marcos. Incluye una IA que transforma preguntas en consultas SQL para devolver resultados en forma de tabla. Ideal para explorar datos de manera rápida e intuitiva.",
            githubLink: "https://github.com/Thompson6626/Universidad-Mayor-de-San-Marcos-Scores",
            technologiesUsed: ["Javascript", "Django", "Python", "Polars","Html","Css"]
        },
    ],
    [
        "Movie Streaming",
        {
            image: "projects/x.jpg",
            description: "A backend API for a movie streaming platform. Handles user authentication, movie catalog management, and RESTful API endpoints for smooth frontend integration.",
            githubLink: "https://github.com/Thompson6626/Movie-Streaming",
            technologiesUsed: ["Java", "SpringBoot", "PostgreSQL", "Docker", "Maven"]
        },
    ],
    [
        "SRT Transcriber",
        {
            image: "projects/x.jpg",
            description: "A FastAPI-based web service that transcribes audio files (e.g., MP3) into SRT subtitle format. Features optional translation and Romaji transcription capabilities.",
            githubLink: "https://github.com/Thompson6626/SRT-Transcriber",
            technologiesUsed: ["FastApi", "Python"]
        },
    ],
    [
        "Whisper Subtitles Overlay",
        {
            image: "projects/x.jpg",
            description: "A Python desktop app using FasterWhisper for real-time speech-to-text transcription. Includes a PyQt6 GUI and audio processing via SoundCard and NumPy.",
            githubLink: "https://github.com/Thompson6626/Live-Subtitles",
            technologiesUsed: ["Python"]
        },
    ],
    [
        "Maven Local Repository Cleaner CLI",
        {
            image: "projects/x.jpg",
            description: "A command-line utility that cleans up your local Maven repository by removing old or redundant versions, based on custom criteria.",
            githubLink: "https://github.com/Thompson6626/Maven-Local-Repository-Cleaner-CLI",
            technologiesUsed: ["Java", "Maven"]
        },
    ],
    [
        "Env Example Generator CLI",
        {
            image: "projects/x.jpg",
            description: "A CLI tool to generate or update `.env.example` files from existing `.env` files, helping teams maintain environment variable consistency.",
            githubLink: "https://github.com/Thompson6626/Env-example-generator",
            technologiesUsed: ["Rust"]
        },
    ],
    [
        "Last Accessed CLI",
        {
            image: "projects/x.jpg",
            description: "A CLI written in Rust that lists files in a directory based on their last accessed time. Supports sorting, filtering, and directory scanning.",
            githubLink: "https://github.com/Thompson6626/last-accessed-cli",
            technologiesUsed: ["Rust"]
        },
    ],
    [
        "Ecommerce Microservices",
        {
            image: "projects/x.jpg",
            description: "An ecommerce backend done with the microservices architecture",
            githubLink: "https://github.com/Thompson6626/Ecommerce-Microservices",
            technologiesUsed: ["Java", "SpringBoot", "PostgreSQL", "Docker", "Maven", "MongoDB"]
        },
    ]
]);
