import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="section">
          <p style={{ color: 'var(--accent)', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '1rem' }}>01 / ABOUT ME</p>
          <h2 className="section-title">A little about me.</h2>
          <p style={{ color: 'var(--text-main)', maxWidth: '800px', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            I'm an Information Technology student who is interested in web development and creating digital solutions that are practical and easy to use.
          </p>
          <p style={{ color: 'var(--text-muted)', maxWidth: '800px', fontSize: '1.1rem', marginBottom: '3rem' }}>
            Through academic projects, I've gained hands-on experience working with websites, React applications, and basic database concepts. I'm continuously improving my skills as I prepare for opportunities in the IT industry.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
            <div><p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 'bold' }}>NAME</p><p>Leinell Vhinia B. Mendoza</p></div>
            <div><p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 'bold' }}>AGE</p><p>21 years old</p></div>
            <div><p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 'bold' }}>FIELD</p><p>Information Technology</p></div>
            <div><p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 'bold' }}>LOCATION</p><p>Philippines</p></div>
          </div>
        </section>
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer><p>© 2026 Leinell Vhinia B. Mendoza. All rights reserved.</p></footer>
    </>
  );
}
export default App;