

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
            description: "A platform for frontend developers to share and discover reusable UI components.",
            githubLink: "https://github.com/Thompson6626/ComponentHub",
            technologiesUsed: ["Angular", "TailwindCSS", "Docker", "Maven","Html","Css","Typescript","Java","SpringBoot"]
        },
    ],
    [
        "Ecommerce",
        {
            image: "projects/x.jpg",
            description: "A backend for an ecommerce platform with features like product catalog management, shopping cart, and user authentication",
            githubLink: "https://github.com/Thompson6626/Ecommerce",
            technologiesUsed: ["Java", "SpringBoot", "PostgreSQL", "Docker"]
        },
    ],
    [
        "Stackronyms",
        {
            image: "projects/x.jpg",
            description: "A web app generating fun and creative tech-related acronyms.",
            githubLink: "https://github.com/Thompson6626/Stackronyms",
            demoLink: "https://stackronyms.vercel.app/",
            technologiesUsed: ["React", "Neon", "TailwindCSS","Html","Css","Typescripts"]
        },
    ],
    [
        "Universidad Mayor de San Marcos Scores",
        {
            image: "projects/x.jpg",
            description: "Extracts admission exam scores from Universidad Nacional Mayor de San Marcos and provides AI-powered query results.",
            githubLink: "https://github.com/Thompson6626/Universidad-Mayor-de-San-Marcos-Scores",
            technologiesUsed: ["Javascript", "Django", "Python", "Polars","Html","Css"]
        },
    ],
    [
        "Movie Streaming",
        {
            image: "projects/x.jpg",
            description: "A backend API for a movie streaming platform with user authentication and movie management.",
            githubLink: "https://github.com/Thompson6626/Movie-Streaming",
            technologiesUsed: ["Java", "SpringBoot", "PostgreSQL", "Docker", "Maven"]
        },
    ],
    [
        "SRT Transcriber",
        {
            image: "projects/x.jpg",
            description: "A FastAPI web service that converts audio files into SRT subtitles with optional translation.",
            githubLink: "https://github.com/Thompson6626/SRT-Transcriber",
            technologiesUsed: ["FastApi", "Python"]
        },
    ],
    [
        "Whisper Subtitles Overlay",
        {
            image: "projects/x.jpg",
            description: "A Python app using FasterWhisper for real-time speech-to-text transcription with a GUI.",
            githubLink: "https://github.com/Thompson6626/Live-Subtitles",
            technologiesUsed: ["Python"]
        },
    ],
    [
        "Maven Local Repository Cleaner CLI",
        {
            image: "projects/x.jpg",
            description: "A CLI tool that cleans up old or redundant versions from the local Maven repository.",
            githubLink: "https://github.com/Thompson6626/Maven-Local-Repository-Cleaner-CLI",
            technologiesUsed: ["Java", "Maven"]
        },
    ],
    [
        "Env Example Generator CLI",
        {
            image: "projects/x.jpg",
            description: "A CLI tool for generating or updating .env.example files for consistent environment variables.",
            githubLink: "https://github.com/Thompson6626/Env-example-generator",
            technologiesUsed: ["Rust"]
        },
    ],
    [
        "Last Accessed CLI",
        {
            image: "projects/x.jpg",
            description: "A Rust CLI that lists files by their last accessed time, with sorting and filtering options.",
            githubLink: "https://github.com/Thompson6626/last-accessed-cli",
            technologiesUsed: ["Rust"]
        },
    ],
    [
        "Ecommerce Microservices",
        {
            image: "projects/x.jpg",
            description: "An ecommerce backend built with a microservices architecture.",
            githubLink: "https://github.com/Thompson6626/Ecommerce-Microservices",
            technologiesUsed: ["Java", "SpringBoot", "PostgreSQL", "Docker", "Maven", "MongoDB"]
        },
    ]
]);
