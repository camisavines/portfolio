import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        
        {/* Placeholder sections - will be implemented next */}
        <section id="about" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-cream)' }}>
          <div className="container">
            <h2 className="heading-2" style={{ textAlign: 'center' }}>About Section</h2>
            <p style={{ textAlign: 'center', color: 'var(--color-slate)' }}>Coming soon...</p>
          </div>
        </section>

        <section id="skills" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-sand)' }}>
          <div className="container">
            <h2 className="heading-2" style={{ textAlign: 'center' }}>Skills Section</h2>
            <p style={{ textAlign: 'center', color: 'var(--color-slate)' }}>Coming soon...</p>
          </div>
        </section>

        <section id="projects" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-cream)' }}>
          <div className="container">
            <h2 className="heading-2" style={{ textAlign: 'center' }}>Projects Section</h2>
            <p style={{ textAlign: 'center', color: 'var(--color-slate)' }}>Coming soon...</p>
          </div>
        </section>

        <section id="contact" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-sand)' }}>
          <div className="container">
            <h2 className="heading-2" style={{ textAlign: 'center' }}>Contact Section</h2>
            <p style={{ textAlign: 'center', color: 'var(--color-slate)' }}>Coming soon...</p>
          </div>
        </section>
      </main>

      <footer style={{ padding: 'var(--space-8) 0', textAlign: 'center', background: 'var(--color-charcoal)', color: 'var(--color-mist)' }}>
        <div className="container">
          <p className="body-small">© 2026 Cami Savines. Built with ❤️, ☕, and React.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

// Made with Bob
