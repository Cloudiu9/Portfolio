import portrait from "../assets/Eu.png";

const buttonBase =
  "text-sm sm:text-base md:text-lg px-4 py-2 rounded-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300";
const primaryButton = `${buttonBase} bg-sky-300 text-slate-900 hover:bg-sky-200`;
const secondaryButton = `${buttonBase} border border-white/40 text-white hover:bg-white/10`;

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8 md:my-16 lg:min-h-[calc(100svh-10rem)] place-items-center">
      <div className="order-2 lg:order-1 w-full max-w-lg rounded-3xl bg-white/10 p-4 sm:p-6 md:p-8 shadow-2xl ring-1 ring-white/10">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white">
          Claudiu Bordea
        </h1>
        <p className="mt-1 text-lg sm:text-2xl md:text-3xl text-sky-300">
          Front-End Developer
        </p>
        <p className="mt-1 text-sm sm:text-base text-slate-300 tracking-wide">
          React · TypeScript · Tailwind CSS
        </p>

        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-100">
          Front-end developer building React and TypeScript apps, growing into
          full-stack with Python and Flask.
        </p>

        <p className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-sm sm:text-base text-emerald-100">
          <span
            className="h-2 w-2 rounded-full bg-emerald-300"
            aria-hidden="true"
          />
          Open to remote junior roles · Growing into full-stack
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="public\CV Bordea Razvan-Claudiu.pdf"
            download="CV-Bordea-Razvan-Claudiu.pdf"
            className={primaryButton}
          >
            Download CV
          </a>
          <a
            className={secondaryButton}
            href="https://github.com/Cloudiu9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className={secondaryButton}
            href="https://www.linkedin.com/in/claudiu-bordea/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <img
        src={portrait}
        alt="Portrait of Claudiu Bordea"
        fetchPriority="high"
        className="order-1 lg:order-2 w-56 sm:w-72 md:w-80 lg:w-96 aspect-square rounded-full object-cover ring-4 sm:ring-8 ring-slate-100/50"
      />
    </div>
  );
}
