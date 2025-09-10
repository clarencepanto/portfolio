import React, { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const YOUR_EMAIL = "youremail@example.com"; // TODO: set to your real email

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name || "someone"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact">
      <h1>Contact</h1>
      <p className="muted">
        Say hi or tell me about a problem you want solved.
      </p>

      <div className="contact-flex">
        {/* Info column styled like the left column of a project section */}
        <div className="contact-info card">
          <h3>Reach me</h3>
          <ul className="info-list">
            <li>
              <strong>Name:</strong> Clarence Daing
            </li>
            <li>
              <strong>Location:</strong> Vancouver, BC
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${YOUR_EMAIL}`}>{YOUR_EMAIL}</a>
            </li>
            <li>
              <strong>Social:</strong>{" "}
              <a href="#" target="_blank" rel="noreferrer">
                Twitter
              </a>{" "}
              ·{" "}
              <a href="#" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
          <p className="muted small">
            Replace these placeholders with your real info later.
          </p>
        </div>

        {/* Form column wrapped in a .card, mirroring ProjectCard visual rhythm */}
        <div className="card contact-card">
          <h3>Send an inquiry</h3>
          <form className="contact-form-flex" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@email.com"
                required
              />
            </label>
            <label className="full">
              <span>Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or problem…"
                rows={6}
                required
              />
            </label>

            <div className="actions">
              <button type="submit" className="button primary">
                Send inquiry
              </button>
              <a className="button secondary" href={`mailto:${YOUR_EMAIL}`}>
                Email me directly
              </a>
            </div>
            <p className="muted small details">
              This form opens your email client with a pre‑filled draft for
              reliability. No server required.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
