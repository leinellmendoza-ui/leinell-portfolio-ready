export default function Hero() {
  return (
    <section id="home" className="hero">
      <p>IT STUDENT · ASPIRING WEB DEVELOPER</p>
      <h1>Hi, I'm Leinell.</h1>
      <h2>Leinell Vhinia B. Mendoza</h2>
      <p className="hero-desc">
        A 21-year-old Bachelor of Science in Information Technology student at Laguna State Polytechnic University. I enjoy building simple, functional, and user-friendly web applications.
      </p>
      <div style={{ marginBottom: '2rem' }}>
        <a href="#projects" className="btn btn-primary">View my projects</a>
        <a href="#contact" className="btn btn-secondary">Get in touch</a>
      </div>
      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>
        <span>BASED IN THE PHILIPPINES</span><span>•</span><span>OPEN TO LEARNING & OPPORTUNITIES</span>
      </div>
    </section>
  );
}