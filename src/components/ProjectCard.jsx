export default function ProjectCard({ project }) {
  return (
    // 'flex flex-col h-full' makes all cards equal height and align items
    <div className="bg-sky-600/80 border border-white/10 rounded-2xl hover:bg-white/10 p-6 flex flex-col h-full shadow-lg backdrop-blur-sm">
      {/* 'flex-grow' ensures this takes up available space, pushing down the image */}
      <div className="grow">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <div className="text-lg">{project.description}</div>
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              style={{
                animation: `floatPill ${2.4 + idx * 0.3}s ease-in-out infinite alternate`,
              }}
              className="bg-sky-200/60 text-sky-100 border border-sky-300/30 rounded-[40%_60%_50%_40%/40%_40%_50%_50%] px-3 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 'mt-auto' locks it to the exact same starting line across all cards */}
      <img
        src={project.image}
        alt={project.title}
        className="mt-2 aspect-video object-cover rounded-xl w-full"
      />
      <div className="flex gap-4 justify-center mt-4">
        <a
          href={project.links[1].demo}
          className="bg-sky-900 hover:bg-sky-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Live Demo
        </a>
        <a
          href={project.links[0].github}
          className="bg-sky-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
