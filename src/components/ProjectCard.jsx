const buttonBase =
  "rounded-lg px-4 py-2 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300";

export default function ProjectCard({ project, featured = false }) {
  const {
    title,
    label,
    description,
    tech,
    image,
    imageAlt,
    github,
    demo,
    demoNote,
    imageCenter,
  } = project;

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-sm shadow-indigo-100 transition-colors hover:bg-white/15 ${
        featured ? "md:col-span-2 lg:col-span-3 md:flex-row md:text-left" : ""
      }`}
    >
      <a
        href={demo ? demo : github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} live demo`}
        className={`block w-full ${featured ? "md:w-1/2 md:self-stretch" : ""}`}
      >
        <img
          src={image}
          alt={imageAlt}
          loading={featured ? "eager" : "lazy"}
          decoding="async"
          className={`aspect-video w-full object-cover ${imageCenter ? "object-center" : "object-top-left"} ${
            featured ? "md:h-full md:aspect-auto" : ""
          }`}
        />
      </a>

      <div className="flex grow flex-col p-6">
        {label && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-sky-300">
            {label}
          </p>
        )}
        <h3 className={`font-bold ${featured ? "text-3xl" : "text-2xl"}`}>
          {title}
        </h3>
        <p className="mt-2 text-base md:text-lg text-slate-200">
          {description}
        </p>

        <ul
          aria-label="Technologies used"
          className={`mt-4 flex flex-wrap justify-center gap-2 ${
            featured ? "md:justify-start" : ""
          }`}
        >
          {tech.map((item, idx) => (
            <li
              key={item}
              style={{
                animation: `floatPill ${2.4 + idx * 0.3}s ease-in-out infinite alternate`,
              }}
              className="rounded-[40%_60%_50%_40%/40%_40%_50%_50%] border border-sky-300/30 bg-sky-950/40 px-3 py-1 text-sm font-medium text-sky-100"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* mt-auto pins the buttons to the bottom so they line up across cards */}
        <div className="mt-auto pt-6">
          <div
            className={`flex flex-wrap items-center justify-center gap-3 ${
              featured ? "md:justify-start" : ""
            }`}
          >
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBase} bg-sky-300 text-slate-900 hover:bg-sky-200`}
              >
                Live Demo
              </a>
            )}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-white/40 text-white hover:bg-white/10`}
            >
              GitHub
            </a>
          </div>
          {demoNote && (
            <p className="mt-3 text-sm text-slate-300">{demoNote}</p>
          )}
        </div>
      </div>
    </article>
  );
}
