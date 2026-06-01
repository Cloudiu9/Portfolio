export default function Hero() {
  return (
    <>
      <div className="grid  grid-cols-1 min-[1034px]:grid-cols-2 gap-4 my-20 min-h-150 text-left place-items-center ">
        <div className="text-3xl mb-12 max-w-lg rounded-3xl bg-white/10 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg">
          <div className="font-bold text-5xl text-[rgba(99,159,3)] text-sky-850 text-shadow-sm ">
            Claudiu Bordea
          </div>
          <div className="italic text-3xl">Front-End Developer</div>
          <div>
            Building clean, functional web experiences: from
            {/* link to scroll to project? */}{" "}
            <span className="text-sky-300 font-bold cursor-pointer duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:text-sky-500 transition-colors">
              React SPAs{" "}
            </span>{" "}
            to{" "}
            <span className="text-sky-500 font-bold cursor-pointer duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:text-sky-300 transition-colors">
              ML-powered platforms
            </span>
            .
          </div>
          <div className="flex justify-between gap-2">
            <a
              href="/CV-Bordea-Razvan-Claudiu.pdf"
              download="CV-Bordea-Razvan-Claudiu.pdf"
              className="cursor-pointer mt-6 text-black p-2 bg-sky-600 duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:text-sky-300 transition-colors"
            >
              Download CV
            </a>

            <a
              className="cursor-pointer mt-6 text-black p-2 bg-sky-600 duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:text-sky-300 transition-colors"
              href="https://github.com/Cloudiu9/"
            >
              GitHub
            </a>
            <a
              className="cursor-pointer mt-6 text-black p-2 bg-sky-600 duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:text-sky-300 transition-colors"
              href="https://www.linkedin.com/in/claudiu-bordea/"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="w-full max-w-md mx-auto aspect-square rounded-full bg-[url('./assets/Eu.png')] bg-cover bg-center shadow-xl ring-8 ring-slate-100/50"></div>
      </div>
    </>
  );
}
