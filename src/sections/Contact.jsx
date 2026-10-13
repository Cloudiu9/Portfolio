import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

const contactLinks = [
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
];

const availability = [
  ["Location", "Alba Iulia, Romania"],
  ["Work mode", "Remote preferred"],
  ["Focus", "Front-end, growing into full-stack"],
  ["Availability", "Open to junior roles"],
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:px-10">
      <div className="mb-16">
        <p className="mb-3 text-sm text-sky-300 uppercase tracking-[0.5em]">
          Contact
        </p>
      </div>

      <div className="flex justify-center mb-4">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
          Let's work together.
        </h2>
      </div>
      <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-200">
        I'm open to remote junior roles and happy to grow into full-stack work.
        Email is the fastest way to reach me.
      </p>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        {/* Contact Cards (each whole card is a link) */}
        <div className="grid gap-5 max-[410px]:text-base">
          {contactLinks.map((item) => {
            const isExternal = item.href.startsWith("http");
            return (
              <a
                href={item.href}
                key={item.label}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-sky-300/30 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                    {item.icon}
                  </div>

                  {/* text-left fixes the label sitting off-center above the value */}
                  <div className="flex flex-col grow text-left">
                    <p className="text-sm text-slate-300">{item.label}</p>
                    <p>{item.value}</p>
                  </div>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="text-slate-400 transition-colors group-hover:text-sky-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            );
          })}
        </div>

        {/* Availability */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-6 flex items-center gap-3">
            <MapPin className="text-sky-300" />

            <h3 className="text-xl">Availability</h3>
          </div>

          <div className="space-y-5">
            {availability.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 border-b border-white/5 pb-4"
              >
                <span className="text-slate-300">{label}</span>
                <span className="text-right">{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-sky-300/10 bg-sky-400/5 p-5">
            <p className="text-base leading-relaxed text-slate-200">
              Building interfaces focused on clarity, responsiveness, and
              polished user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
