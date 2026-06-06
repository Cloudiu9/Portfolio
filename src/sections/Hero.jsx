export default function Hero() {
  return (
    <>
      <div className="grid  grid-cols-1 min-[1034px]:grid-cols-2 gap-4 my-20 min-h-150 text-left place-items-center">
        <div className="text-3xl mb-12 max-w-lg rounded-3xl bg-white/10 p-8 shadow-2xl ring-1 ring-white/10">
          <div className="font-bold text-5xl text-[rgba(99,159,3)] text-sky-850 text-shadow-sm">
            Claudiu Bordea
          </div>
          <div className="italic text-3xl text-sky-300">
            Junior Front-End Developer
          </div>
          <div>
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
          <div className="flex justify-between gap-2">
            <a
              href="/CV-Bordea-Razvan-Claudiu.pdf"
              download="CV-Bordea-Razvan-Claudiu.pdf"
              className="cursor-pointer mt-6 text-black p-2 bg-sky-600 duration-300 ease-out hover:-translate-y-1 hover:text-sky-300 transition-colors text-[18px] md:text-3xl"
            >
              Download CV
            </a>

            <a
              className="cursor-pointer mt-6 text-black p-2 bg-sky-600 duration-300 ease-out hover:-translate-y-1 hover:text-sky-300 transition-colors text-[18px] md:text-3xl"
              href="https://github.com/Cloudiu9/"
            >
              GitHub
            </a>
            <a
              className="cursor-pointer mt-6 text-black p-2 bg-sky-600 duration-300 ease-out hover:-translate-y-1 hover:text-sky-300 transition-colors text-[18px] md:text-3xl"
              href="https://www.linkedin.com/in/claudiu-bordea/"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="w-full max-w-md mx-auto aspect-square rounded-full bg-[url('./assets/Eu.png')] bg-cover bg-center ring-8 ring-slate-100/50"></div>
      </div>
    </>
  );
}
