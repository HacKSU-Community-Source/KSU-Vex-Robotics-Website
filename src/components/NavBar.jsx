import { useState } from 'react'
import { Link, NavLink } from 'react-router'

const links = [
  { label: 'About', to: '/about' },
  { label: 'Team', to: '/team' },
  { label: 'Sponsors', to: '/sponsors' },
  { label: 'Contact', to: '/contact' },
]

function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ksu-blue text-white shadow-md">
      <nav
        aria-label="Main"
        className="flex items-center justify-between px-6 py-3"
      >
        <Link to="/" className="flex items-center gap-3 text-lg font-bold tracking-tight text-ksu-gold">
          <img src="/logo.svg" alt="KSU Vex Robotics logo" className="h-14 w-auto" />
          KSU Vex Robotics
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `border-b-2 py-1 transition hover:text-ksu-gold ${
                    isActive
                      ? 'border-ksu-gold text-ksu-gold'
                      : 'border-transparent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded p-2 hover:bg-ksu-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="space-y-1 bg-ksu-navy px-4 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block border-l-4 px-3 py-2 hover:text-ksu-gold ${
                    isActive
                      ? 'border-ksu-gold text-ksu-gold'
                      : 'border-transparent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default NavBar