import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const projects = [
    {
      id: 'snaptrip',
      title: 'SnapTrip — One-tap trip snapshots',
      description: 'Capture a clean snapshot of a trip in seconds—route, quick notes, and a couple photos—then share a lightweight link. Built for speed and zero friction.',
      image: '/snaptrip-placeholder.jpg',
      stack: ['React', 'Vite', 'Node/Express', 'Socket.IO'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'anti-doomscroll',
      title: 'Anti-Doomscrolling — Intentional browsing',
      description: 'A tiny helper that asks your intent, timeboxes a session, and gives gentle nudges before you drift. Stay focused without feeling policed.',
      image: '/anti-doomscroll-placeholder.jpg',
      stack: ['React', 'Manifest v3', 'Local Storage'],
      demoUrl: '#',
      codeUrl: '#'
    }
  ]

  return (
    <>
      <section className="hero">
        <h1>Hi, I’m Clarence — I build simple, useful apps.</h1>
        <p>
          Focused on clean UX and real problems. Below are a couple of small projects:
          SnapTrip and the Anti-Doomscrolling helper. Nothing fancy — just fast and clear.
        </p>
      </section>

      <section id="projects" className="grid">
        {projects.map(p => (
          <div key={p.id} className="project">
            <ProjectCard {...p} />
          </div>
        ))}
      </section>
    </>
  )
}
