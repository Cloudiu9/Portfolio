import { ArrowUpRight, CloudLightning, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:px-10">
      <div className="mb-16">
        <p className="mb-3 text-sm text-sky-300 uppercase tracking-[0.5em]">
          Open Channel
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
          Interested in learning and practicing on real, useful web projects.
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        {/* Contact Cards */}
        <div className="grid gap-5 max-[410px]:text-base">
          {[
            {
              icon: <Mail size={22} />,
              label: "Email",
              value: "claudiubordea5@gmail.com",
              href: "mailto:claudiubordea5@gmail.com",
            },
            {
              icon: <GithubIcon size={22} />,
              label: "GitHub",
              value: "github.com/Cloudiu9",
              href: "https://github.com/Cloudiu9",
            },
            {
              icon: <LinkedinIcon size={22} />,
              label: "LinkedIn",
              value: "linkedin.com/in/claudiu-bordea/",
              href: "https://www.linkedin.com/in/claudiu-bordea/",
            },
          ].map((item) => (
            <a
              href={item.href}
              key={item.label}
              rel="noreferrer"
              target="_blank"
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-sky-300/30 hover:bg-white/[0.07]"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                  {item.icon}
                </div>

                <div className="flex flex-col grow">
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p>{item.value}</p>
                </div>
              </div>
              <ArrowUpRight className="text-gray-500 transition-colors group-hover:text-sky-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          ))}
        </div>

        {/* Status */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-6 flex items-center gap-3">
            <CloudLightning className="text-sky-300" />

            <h3 className="text-xl">Atmospheric Status</h3>
          </div>

          <div className="space-y-5">
            {[
              ["Location", "Romania"],
              ["Current Focus", "Frontend + Full Stack"],
              ["Preferred Stack", "React / JavaScript"],
              ["Availability", "Open to opportunities"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-white/5 pb-4"
              >
                <span className="text-gray-400">{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-sky-300/10 bg-sky-400/5 p-5">
            <p className="text-base leading-relaxed text-gray-300">
              Building interfaces focused on clarity, responsiveness, and
              polished user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
