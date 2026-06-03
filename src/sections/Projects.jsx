import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "MovieFlix",
      description:
        "Full-stack movie and TV recommendation platform — my Master's dissertation. Catalogues 4,000+ titles and serves hybrid ML recommendations (content-based, collaborative, cold-start). Built with React, TypeScript, Tailwind CSS, Flask, and MongoDB Atlas.",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Flask",
        "MongoDB",
        "scikit-learn",
        "JWT",
        "Groq",
      ],
      links: [
        { github: "https://github.com/Cloudiu9/Disertatie" },
        { demo: "https://disertatie-frontend.vercel.app/" },
      ],
      image: "src/assets/movieflix.png",
    },
    {
      title: "Memory Card League",
      description:
        "A React memory card game built as part of The Odin Project coursework. Picks a random set of League of Legends champions across three difficulty levels and reshuffles the deck on every click. Built to practice hooks and state management.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      links: [
        { github: "github.com/Cloudiu9/MemoryCard" },
        { demo: "https://memorycardleague.netlify.app/" },
      ],
      image: "src/assets/memory-card-league.png",
    },
    {
      title: "Shopping Cart",
      description:
        "A React e-commerce UI with a working cart, product browsing, and quantity management. Focused on component architecture and state flow.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      links: [
        { github: "github.com/Cloudiu9/Shopping-Cart" },
        { demo: "https://shopping-cart-tau-khaki.vercel.app/" },
      ],
      image: "src/assets/shopping-cart.png",
    },
    {
      title: "WebScraperLLM",
      description:
        "A university course project that scraped and structured over a decade of political speeches (Jan 2014 - Nov 2024) using Selenium and BeautifulSoup, with a Streamlit UI and optional LLM processing for structured JSON output.",
      tech: ["Python", "Selenium", "Beautiful Soup", "Streamlit", "Groq"],
      links: [
        { github: "https://github.com/Cloudiu9/WebScraperLLM" },
        { demo: "https://github.com/Cloudiu9/WebScraperLLM" },
      ],
      image: "src/assets/scraper.png",
    },
  ];

  return (
    <div
      id="projects"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
    >
      {projects.map((project, idx) => (
        <ProjectCard project={project} key={idx} />
      ))}
    </div>
  );
}
