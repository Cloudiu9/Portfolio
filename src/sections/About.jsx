import {
  BrainCircuit,
  Briefcase,
  Cloud,
  GraduationCap,
  Languages,
  Radar,
} from "lucide-react";

const sidePanels = [
  {
    icon: <Radar className="text-sky-300" size={20} />,
    title: "Tech stack",
    items: [
      "React + TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Flask + MongoDB / PostgreSQL",
    ],
  },
  {
    icon: <BrainCircuit className="text-sky-300" size={20} />,
    title: "Currently expanding",
    items: ["Flask", "PostgreSQL", "Next.js", "Advanced React patterns"],
  },
  {
    icon: <Languages className="text-sky-300" size={20} />,
    title: "Languages",
    items: ["English: fluent", "Romanian: native", "German: learning"],
  },
];

const experience = [
  {
    title: "Web Developer Intern",
    meta: "Gypaetus Code · Alba Iulia · June–July 2023",
    text: "Built a React + Laravel web app with an OpenAI-powered chatbot, including user authentication, API connections and deployment with Git and Docker.",
  },
];

const education = [
  {
    title: "Master's in Advanced Programming and Databases",
    meta: "Universitatea „1 Decembrie 1918” Alba Iulia · 2024–2026 · Grade 10",
  },
  {
    title: "Bachelor's in Computer Science",
    meta: "Universitatea „1 Decembrie 1918” Alba Iulia · 2021–2024 · Grade 9.51/10",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:px-10">
      {/* Header */}
      <div className="mb-16">
        <p className="mb-3 text-sm text-sky-300 uppercase tracking-[0.5em]">
          About me
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
          <div className="flex items-center gap-3 mb-6">
            <Cloud className="text-sky-300" size={24} />
            <h3 className="text-xl">About me</h3>
          </div>

          <div className="space-y-6 text-left text-slate-200 leading-relaxed">
            <p>
              I'm a junior front-end developer who builds React and TypeScript
              applications, with full-stack experience in Flask and MongoDB.
            </p>

            <p>
              I recently completed a Master's in Advanced Programming and
              Databases, where I built MovieFlix, a recommendation platform with
              a hybrid ML engine and AI-generated explanations.
            </p>

            <p>
              I'm actively strengthening my backend skills to grow into a
              full-stack developer, and I'm particularly interested in remote
              roles. I care about clear, responsive interfaces and code I can
              explain and maintain.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Frontend", "React + TypeScript"],
              ["Backend", "Flask + MongoDB"],
              ["Testing", "Vitest + RTL"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <p className="text-sm text-slate-300">{title}</p>
                <p className="text-lg mt-1">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Side Panels */}
        <div className="space-y-6">
          {sidePanels.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/7 p-6 transition hover:bg-white/10"
            >
              <div className="mb-5 flex items-center gap-3">
                {card.icon}

                <h3>{card.title}</h3>
              </div>

              <ul className="space-y-3 text-base text-slate-200">
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

      {/* Experience + Education */}
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/7 p-6 text-left">
          <div className="mb-5 flex items-center gap-3">
            <Briefcase className="text-sky-300" size={20} />
            <h3>Experience</h3>
          </div>
          <ul className="space-y-5">
            {experience.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-sm text-slate-300">{item.meta}</p>
                <p className="mt-2 text-base text-slate-200">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/7 p-6 text-left">
          <div className="mb-5 flex items-center gap-3">
            <GraduationCap className="text-sky-300" size={20} />
            <h3>Education</h3>
          </div>
          <ul className="space-y-5">
            {education.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-sm text-slate-300">{item.meta}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
