const projectsData = [
  { title: "Olivia's Barong & Gown Rental", year: "PROJECT 01 · 2ND YEAR", desc: "An academic group project where we developed a website for an existing physical barong and gown rental store, helping present its offerings online.", tech: ['Web Development', 'Group Project', 'Academic'] },
  { title: "React Tic-Tac-Toe", year: "PROJECT 02 · REACT", desc: "A simple interactive Tic-Tac-Toe game built using React, featuring a two-player game board and basic game logic.", tech: ['React', 'JavaScript', 'CSS'] }
];
export default function Projects() {
  return (
    <section id="projects" className="section">
      <p style={{ color: 'var(--accent)', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '1rem' }}>03 / SELECTED WORK</p>
      <h2 className="section-title">Projects I've worked on.</h2>
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <div key={idx} className="project-card">
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{project.year}</p>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tech-tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}