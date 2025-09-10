import React from 'react'

export default function ProjectCard({ title, description, image, stack, demoUrl, codeUrl }) {
  return (
    <article className="card">
      <div className="thumb">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="badges">
        {stack?.map(s => <span key={s} className="badge">{s}</span>)}
      </div>
      <div className="actions">
        {demoUrl && <a className="button primary" href={demoUrl} target="_blank" rel="noreferrer">Live demo</a>}
        {codeUrl && <a className="button secondary" href={codeUrl} target="_blank" rel="noreferrer">Source</a>}
      </div>
    </article>
  )
}
