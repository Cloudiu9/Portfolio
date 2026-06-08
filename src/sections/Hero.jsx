export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8 md:my-20 min-h-auto lg:min-h-150 place-items-center">
        <div className="order-2 lg:order-1 w-full max-w-lg rounded-3xl bg-white/10 p-4 sm:p-6 md:p-8 shadow-2xl ring-1 ring-white/10">
          <div className="font-bold text-3xl sm:text-4xl md:text-5xl text-[rgba(99,159,3)] text-shadow-sm">
            Claudiu Bordea
          </div>
          <div className="italic text-lg sm:text-2xl md:text-3xl text-sky-300">
            Junior Front-End Developer
          </div>
          <div className="mt-4 text-base sm:text-lg md:text-xl">
            Building clean, functional web experiences: from
            {/* link to scroll to project? */}{" "}
            <span className="text-sky-300 font-bold duration-300 ease-out hover:-translate-y-1 hover:text-sky-500 transition-colors">
              React SPAs{" "}
            </span>{" "}
            to{" "}
            <span className="text-sky-500 font-bold duration-300 ease-out hover:-translate-y-1 hover:text-sky-300 transition-colors">
              ML-powered platforms
            </span>
            .
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/CV-Bordea-Razvan-Claudiu.pdf"
              download="CV-Bordea-Razvan-Claudiu.pdf"
              className="cursor-pointer text-sm sm:text-base md:text-xl bg-sky-900 hover:bg-slate-800 text-white px-3 py-2 sm:px-4 rounded-lg font-medium transition-colors"
            >
              Download CV
            </a>

            <a
              className="cursor-pointer text-sm sm:text-base md:text-xl bg-sky-900 hover:bg-slate-800 text-white px-3 py-2 sm:px-4 rounded-lg font-medium transition-colors"
              href="https://github.com/Cloudiu9/"
            >
              GitHub
            </a>
            <a
              className="cursor-pointer text-sm sm:text-base md:text-xl bg-sky-900 hover:bg-slate-800 text-white px-3 py-2 sm:px-4 rounded-lg font-medium transition-colors"
              href="https://www.linkedin.com/in/claudiu-bordea/"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-56 sm:w-72 md:w-80 lg:w-96 aspect-square rounded-full bg-[url('./assets/Eu.png')] bg-cover bg-center ring-4 sm:ring-8 ring-slate-100/50"></div>
      </div>
    </>
  );
}
