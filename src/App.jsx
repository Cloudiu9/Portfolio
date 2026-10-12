import About from "./sections/About";
import Contact from "./sections/Contact";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import CloudDivider from "./components/CloudDivider";
import Atmosphere from "./components/Atmosphere";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-800 via-indigo-950 to-sky-800 text-slate-100 font-['NeueMontreal'] text-center text-xl tracking-tight">
      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02),transparent_50%)]" />

      <Atmosphere />

      <main className="relative z-10 p-4 md:p-6 space-y-5 mx-auto max-w-7xl">
        <Header />
        <Hero />

        <CloudDivider />

        <About />

        <CloudDivider />

        <Projects />

        <CloudDivider />

        <Contact />
      </main>
      <Analytics />
    </div>
  );
}
