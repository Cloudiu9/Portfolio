import { Link } from "react-scroll";

const links = [
  { to: "about", label: "About" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <nav
        aria-label="Main"
        className="border-b border-white/20 bg-slate-900/40 backdrop-blur-2xl"
      >
        {/* Text size and letter-spacing step down on small screens so the nav fits on one line */}
        <ul className="mx-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 py-2 text-sm tracking-normal sm:mx-4 sm:gap-x-4 sm:text-xl sm:tracking-widest md:text-2xl">
          <li className="mr-auto">Claudiu Bordea</li>
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                href={`#${to}`}
                smooth={true}
                duration={500}
                offset={-70} // keeps the section heading clear of the sticky nav
                spy={true} // highlights the link of the section you're viewing
                activeClass="!border-sky-300 text-sky-300"
                className="cursor-pointer border-b-2 border-transparent uppercase transition-colors hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
