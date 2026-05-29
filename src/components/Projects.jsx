// MAKE CLOUD-FEELING CARDS FOR EACH PROJECT

// 2 x 2 cards (2 rows 2 columns) with screenshots

export default function Projects() {
  return (
    <div id="projects" className="">
      <ul className="flex flex-col justify-center align-middle items-center text-red-400">
        <li>
          MovieFlix -- Full-stack movie and TV recommendation platform — my
          Master's dissertation. Catalogues 4,000+ titles and serves hybrid ML
          recommendations (content-based, collaborative, cold-start). Built with
          React, TypeScript, Tailwind CSS, Flask, and MongoDB Atlas.
        </li>
        <li>
          Memory Card League -- A React memory card game built as part of The
          Odin Project coursework. Picks a random set of League of Legends
          champions across three difficulty levels and reshuffles the deck on
          every click. Built to practice hooks and state management.
        </li>
        <li>
          Shopping Cart -- A React e-commerce UI with a working cart, product
          browsing, and quantity management. Focused on component architecture
          and state flow.
        </li>
        <li>
          WebScraperLLM -- A university course project that scraped and
          structured over a decade of political speeches (Jan 2014 – Nov 2024)
          using Selenium and BeautifulSoup, with a Streamlit UI and optional LLM
          processing for structured JSON output.
        </li>
      </ul>
    </div>
  );
}
