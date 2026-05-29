import CloudDivider from "./CloudDivider";

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 my-20 h-150 text-left place-items-center ">
        <div className="text-3xl mb-20">
          <div className="font-bold">Claudiu Bordea</div>
          <div className="italic">Front-End Developer</div>
          <div>
            Building clean, functional web experiences: from
            {/* link to scroll to project? */}{" "}
            <span className="text-sky-300 font-bold cursor-pointer hover:bg-slate-700 hover:text-sky-500 transition-colors">
              React SPAs{" "}
            </span>{" "}
            to{" "}
            <span className="text-sky-500 font-bold cursor-pointer hover:bg-slate-700 hover:text-sky-300 transition-colors">
              ML-powered platforms
            </span>
            .
          </div>
          <div className="flex justify-between gap-2">
            <a
              href="/CV-Bordea-Razvan-Claudiu.pdf"
              download="CV-Bordea-Razvan-Claudiu.pdf"
              className="cursor-pointer text-sky-600 hover:bg-slate-700 hover:text-sky-300 transition-colors"
            >
              [Download CV]
            </a>

            <a
              className="cursor-pointer text-sky-600 hover:bg-slate-700 hover:text-sky-300 transition-colors"
              href="https://github.com/Cloudiu9/"
            >
              [GitHub]
            </a>
            <a
              className="cursor-pointer text-sky-600 hover:bg-slate-700 hover:text-sky-300 transition-colors"
              href="https://www.linkedin.com/in/claudiu-bordea/"
            >
              [LinkedIn]
            </a>
          </div>
        </div>
        <div className="bg-[url(./assets\Eu.png)] h-full w-130 object-fill bg-no-repeat rounded-full"></div>
      </div>
      <CloudDivider />
    </>
  );
}
