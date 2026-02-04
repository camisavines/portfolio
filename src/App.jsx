import { Navigation } from "./components/layout/Navigation";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <About />

        <section
          id="skills"
          className="section"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--color-sand)",
          }}
        >
          <div className="container">
            <h2 className="heading-2" style={{ textAlign: "center" }}>
              Skills Section
            </h2>
            <p style={{ textAlign: "center", color: "var(--color-slate)" }}>
              Coming soon...
            </p>
          </div>
        </section>

        <Projects />

        <section
          id="contact"
          className="section"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--color-sand)",
          }}
        >
          <div className="container">
            <h2 className="heading-2" style={{ textAlign: "center" }}>
              Contact Section
            </h2>
            <p style={{ textAlign: "center", color: "var(--color-slate)" }}>
              Coming soon...
            </p>
          </div>
        </section>
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
            © 2026 Cami Savines. Built with ❤️, ☕, and React.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

// Made with Bob
