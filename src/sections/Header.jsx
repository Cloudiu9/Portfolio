import { Link } from "react-scroll";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 text-2xl">
        <nav className="right-0 left-0 backdrop-blur-2xl">
          <ul className="flex gap-4 max-[602px]:gap-1 justify-between mx-4 tracking-widest flex-wrap">
            <li className="mr-auto">Bordea Claudiu</li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:bg-slate-700 hover:text-sky-300 transition-colors"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:bg-slate-700 hover:text-sky-300 transition-colors"
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:bg-slate-700 hover:text-sky-300 transition-colors"
              >
                CONTACT
              </Link>
            </li>
          </ul>

          <hr />
        </nav>
      </header>
    </>
  );
}
