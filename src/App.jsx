import React from 'react'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'

export default function App() {
  const projects = [
    {
      id: 'snaptrip',
      title: 'SnapTrip — One‑tap trip snapshots',
      description: 'A lightweight tool to capture and share quick trip summaries (route, cost, photos) with a single tap. Built for speed and zero‑friction sharing.',
      image: '/snaptrip-placeholder.jpg',
      stack: ['React', 'Vite', 'Node/Express', 'Socket.IO'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'anti-doomscroll',
      title: 'Anti‑Doomscrolling — Intentional browsing',
      description: 'A browser helper that nudges you to state intent, timebox sessions, and get gentle reminders before attention drifts.',
      image: '/anti-doomscroll-placeholder.jpg',
      stack: ['React', 'Manifest v3', 'Local Storage'],
      demoUrl: '#',
      codeUrl: '#'
    }
  ]

  return (
    <div className="container">
      <Header />
      <section className="hero">
        <h1>Hi, I’m Clarence — I build simple, useful apps.</h1>
        <p>
          Focused on clean UX and real problems. Below are a couple of small projects:
          SnapTrip and the Anti‑Doomscrolling helper. Nothing fancy — just fast and clear.
        </p>
      </section>

      <section className="grid">
        {projects.map(p => (
          <div key={p.id} className="project">
            <ProjectCard {...p} />
          </div>
        ))}
      </section>

      <footer>
        © {new Date().getFullYear()} Clarence Daing · <a href="mailto:clarencedaing@gmail.com">clarencedaing@gmail.com</a>
      </footer>
    </div>
  )
}
