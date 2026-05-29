import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen min-w-screen bg-linear-to-b from-slate-800 to bg-slate-400 text-slate-100 font-['NeueMontreal'] text-center text-xl">
      <div className="p-1.5 space-y-5 mx-auto max-w-7xl">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
