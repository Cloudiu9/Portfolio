import { BrainCircuit, Cloud, Code2, Radar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:px-10">
      {/* Header */}
      <div className="mb-16">
        <p className="mb-3 text-sm text-sky-300 uppercase tracking-[0.5em]">
          Inside the system
        </p>
      </div>
      <div className="flex justify-center mb-12">
        <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
          Building clean interfaces, interactive systems, and projects with real
          functionality.
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Main Card */}
        <div className="rounded-3xl border border-white/15 shadow-2xl shadow-violet-400/5 bg-white/6 p-8 flex justify-between flex-col">
          <div className="flex items-center gap-3 max-lg:mb-4">
            <Cloud className="text-sky-300" size={24} />
            <h3 className="text-xl">Atmospheric Overview</h3>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              I focus on front-end development with React and JavaScript, while
              also building full-stack systems involving Flask APIs,
              recommendation logic, and data-driven features.
            </p>

            <p>
              My projects prioritize usability, visual polish, and practical
              implementation.
            </p>

            <p>
              Currently pursuing a Master’s degree in Programming while
              developing MovieFlix, a Netflix-inspired recommendation platform
              combining machine learning techniques with modern UI design.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Frontend", "React + JS"],
              ["Backend", "Flask APIs"],
              ["Focus", "UX + Systems"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <p className="text-sm text-gray-400">{title}</p>
                <p className="mt-1">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Side Panels */}
        <div className="space-y-6">
          {[
            {
              icon: <Radar className="text-sky-300" size={20} />,
              title: "Current Atmosphere",
              items: [
                "React + JavaScript",
                "Tailwind CSS",
                "Flask + MongoDB",
                "Recommendation Systems",
              ],
            },
            {
              icon: <Code2 className="text-sky-300" size={20} />,
              title: "Active Systems",
              items: [
                "MovieFlix Platform",
                "Portfolio Refinement",
                "UI/UX Improvements",
              ],
            },
            {
              icon: <BrainCircuit className="text-sky-300" size={20} />,
              title: "Learning Front",
              items: [
                "Advanced React Patterns",
                "Data Processing",
                "German Language Studies",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/7 p-6 transition hover:bg-white/10"
            >
              <div className="mb-5 flex items-center gap-3">
                {card.icon}

                <h3>{card.title}</h3>
              </div>

              <ul className="space-y-3 text-base text-gray-300">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
