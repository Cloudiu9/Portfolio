import { animateScroll } from "react-scroll";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-7xl border-t border-white/10 px-6 py-8 text-base text-slate-300">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p>© {new Date().getFullYear()} Claudiu Bordea</p>
        <button
          type="button"
          onClick={() => animateScroll.scrollToTop({ duration: 500 })}
          className="cursor-pointer transition-colors hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
