const skillsData = [
  { category: 'Front-end development', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { category: 'Back-end & databases', items: ['Node.js', 'Express', 'SQLite', 'Prisma ORM'] },
  { category: 'Soft skills', items: ['Teamwork', 'Communication', 'Problem-solving', 'Willingness to learn'] },
];
export default function Skills() {
  return (
    <section id="skills" className="section">
      <p style={{ color: 'var(--accent)', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '1rem' }}>02 / SKILLS</p>
      <h2 className="section-title">What I work with.</h2>
      <div className="skills-grid">
        {skillsData.map((skillGroup, idx) => (
          <div key={idx} className="skill-category">
            <h3>{skillGroup.category}</h3>
            <ul>{skillGroup.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}