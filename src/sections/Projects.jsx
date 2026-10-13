import ProjectCard from "../components/ProjectCard";
import scraperImg from "../assets/scraper.png";
import movieImg from "../assets/movieflix.png";
import jobListingImg from "../assets/job-listing.png";
import typingSpeedImg from "../assets/typing-speed.png";

const projects = [
  {
    title: "MovieFlix",
    label: "Featured · Master's dissertation",
    description:
      "A full-stack movie and TV recommendation platform with 4,000+ titles. Combines content-based and collaborative filtering to handle new users, with AI-generated explanations and JWT authentication.",
    tech: ["React", "TypeScript", "Flask", "MongoDB", "scikit-learn", "JWT"],
    github: "https://github.com/Cloudiu9/movieflix",
    demo: "https://disertatie-frontend.vercel.app/",
    demoNote: "The backend runs on free hosting and may take ~50s to wake up.",
    image: movieImg,
    imageAlt:
      "MovieFlix home page with a featured movie banner and a row of titles",
  },
  {
    title: "Job Listings",
    description:
      "A job listings platform with multi-tag filtering across roles, levels, languages and tools. Filter state lives in Redux Toolkit, and list changes are animated with Framer Motion.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
    ],
    github: "https://github.com/Cloudiu9/job-listings",
    demo: "https://job-listings-chi-ten.vercel.app/",
    image: jobListingImg,
    imageAlt: "Job Listings page showing filterable job cards with skill tags",
  },
  {
    title: "Typing Speed Test",
    description:
      "A typing speed test that calculates live WPM and accuracy as you type. Includes three difficulty levels, two game modes and a personal best saved in localStorage.",
    tech: ["TypeScript", "Tailwind CSS", "Vitest", "localStorage"],
    github: "https://github.com/Cloudiu9/TypingSpeed",
    demo: "https://typingspeed-cyan.vercel.app/",
    image: typingSpeedImg,
    imageAlt:
      "Typing Speed Test showing a passage of text with live WPM, accuracy and time",
    imageCenter: true,
  },
  {
    title: "WebScraperLLM",
    label: "University project",
    description:
      "Scrapes and structures over a decade of political speeches (Jan 2014 – Nov 2024) with Selenium and BeautifulSoup, with a Streamlit UI and optional LLM processing for structured JSON output.",
    tech: ["Python", "Selenium", "Beautiful Soup", "Streamlit", "Groq"],
    github: "https://github.com/Cloudiu9/WebScraperLLM",
    image: scraperImg,
    imageAlt: "WebScraperLLM Streamlit interface with scraping options",
  },
];

export default function Projects() {
  const [featured, ...others] = projects;

  return (
    <section id="projects" className="py-24 md:px-10">
      <div className="mb-16">
        <p className="mb-3 text-sm text-sky-300 uppercase tracking-[0.5em]">
          Projects
        </p>
      </div>
      <div className="flex justify-center mb-12">
        <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
          Selected work
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard project={featured} featured />
        {others.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
