import { Navigation } from "./components/layout/Navigation";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { News } from "./components/sections/News";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <News />
      </main>

      <footer
        style={{
          padding: "var(--space-8) 0",
          textAlign: "center",
          background: "var(--color-cream)",
          color: "var(--color-slate)",
          borderTop: "1px solid var(--color-clay)",
        }}
      >
        <div className="container">
          <p className="body-small">
            © 2026 Camisa Vines. Built with ❤️, ☕, and React.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

// Made with Bob
