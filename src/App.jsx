import About from "./sections/About";
import Contact from "./sections/Contact";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import CloudDivider from "./components/CloudDivider";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-linear-to-b from-slate-800 via-indigo-950 to-sky-800 text-slate-100 font-['NeueMontreal'] text-center text-xl tracking-tight">
      <div className="p-4 md:p-6 space-y-5 mx-auto max-w-7xl">
        <Header />
        <Hero />
        <CloudDivider />
        <About />
        <CloudDivider />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
