import React from 'react'

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/favicon.svg" alt="CD logo" />
        <span className="brand">Clarence Daing</span>
      </div>
      <nav>
        <a href="#projects">Projects</a>
        <a href="mailto:clarencedaing@gmail.com">Contact</a>
      </nav>
    </header>
  )
}
