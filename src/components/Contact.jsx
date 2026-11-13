import { useState } from 'react';
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! (Demo)');
    setForm({ name: '', email: '', message: '' });
  };
  return (
    <section id="contact" className="section">
      <p style={{ color: 'var(--accent)', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '1rem' }}>07 / CONTACT</p>
      <h2 className="section-title">Let's connect.</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Your name</label>
          <input type="text" placeholder="Enter your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email address</label>
          <input type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message</label>
          <textarea rows="5" placeholder="Write your message here..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
        </div>
        <button type="submit" className="btn btn-primary">Send message ✈️</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}