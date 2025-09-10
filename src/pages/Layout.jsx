import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function Layout() {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <footer>
        © {new Date().getFullYear()} Clarence Daing · <a href="mailto:clarencedaing@gmail.com">clarencedaing@gmail.com</a>
      </footer>
    </div>
  )
}
