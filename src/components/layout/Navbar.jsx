import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, mobileNavLinks } from '../../data/navigation'
import setuLogoReal from '../../assets/setu_logo_real.png'

function Chevron({ open }) {
  return (
    <svg
      className={`w-3 h-3 ml-1.5 inline-block transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMega, setActiveMega] = useState(null)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveMega(null)
    setActiveDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('nav-open', mobileOpen)
    return () => document.body.classList.remove('nav-open')
  }, [mobileOpen])

  const linkBase =
    'relative flex items-center px-[15px] py-[24px] text-[12.5px] uppercase tracking-[2px] font-semibold text-[#003055] transition-colors hover:text-[#0077B5] ' +
    "after:content-[''] after:absolute after:left-[15px] after:right-[15px] after:bottom-[16px] after:h-[2px] after:bg-[#0077B5] after:rounded-full " +
    'after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'

  return (
    <header className={sticky ? 'sticky' : ''}>
      <div className="glass-bar px-[35px] flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link to="/" className="navbar-brand flex-shrink-0">
          <img
            src={setuLogoReal}
            alt="Setu Industrial Partners"
            className="h-12 w-auto py-1"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center">
            {navLinks.map((item, idx) => (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => {
                  if (item.type === 'mega') setActiveMega(idx)
                  else if (item.type === 'dropdown') setActiveDropdown(idx)
                }}
                onMouseLeave={() => {
                  setActiveMega(null)
                  setActiveDropdown(null)
                }}
              >
                {item.type === 'link' ? (
                  <Link to={item.href} className={linkBase}>
                    {item.label}
                  </Link>
                ) : (
                  <button className={`${linkBase} bg-transparent border-0 cursor-pointer`}>
                    {item.label}
                    <Chevron open={(item.type === 'mega' ? activeMega : activeDropdown) === idx} />
                  </button>
                )}

                {/* Simple Dropdown */}
                {item.type === 'dropdown' && activeDropdown === idx && (
                  <div className="absolute top-full left-0 pt-2 z-[9999]">
                    <div className="bg-white/95 backdrop-blur-xl min-w-[240px] py-3 rounded-2xl shadow-[0_20px_50px_rgba(0,48,85,0.18)] ring-1 ring-black/5 overflow-hidden animate-menuIn">
                      {item.items.map((sub, si) => (
                        <div key={si} className="px-2">
                          {sub.external ? (
                            <a
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2.5 text-sm text-[#292929] rounded-lg hover:bg-[#0077B5]/[0.07] hover:text-[#0077B5] transition-colors"
                            >
                              {sub.label}
                            </a>
                          ) : (
                            <Link
                              to={sub.href}
                              className="block px-4 py-2.5 text-sm text-[#292929] rounded-lg hover:bg-[#0077B5]/[0.07] hover:text-[#0077B5] transition-colors"
                            >
                              {sub.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mega Menu */}
                {item.type === 'mega' && activeMega === idx && (
                  <div className="fixed left-1/2 -translate-x-1/2 top-auto pt-2 z-[9999] w-[min(1240px,calc(100vw-48px))]">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_30px_70px_rgba(0,48,85,0.22)] ring-1 ring-black/5 py-8 px-9 animate-menuIn">
                      <div className="grid grid-cols-6 gap-x-8 gap-y-6">
                        {item.columns.map((col, ci) => (
                          <div key={ci}>
                            <h4 className="text-[#0077B5] text-[11px] font-bold uppercase tracking-[1.5px] mb-3 pb-2 border-b-2 border-[#FFB300]/70">
                              {col.title}
                            </h4>
                            <ul>
                              {col.items.map((sub, si) => (
                                <li key={si}>
                                  <Link
                                    to={sub.href}
                                    className="group flex items-center gap-0 py-[5px] text-[12.5px] text-[#4a5568] hover:text-[#003055] transition-all"
                                  >
                                    <span className="w-0 group-hover:w-2.5 h-[2px] bg-[#FFB300] rounded-full transition-all duration-200 group-hover:mr-1.5" />
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}

            {/* Hamburger */}
            <li className="ml-4">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative p-[19px_0] w-[30px] cursor-pointer bg-transparent border-0 flex flex-col justify-center items-center"
                aria-label="Menu"
              >
                <span className={`line block w-[25px] h-[2px] mb-[7px] rounded-lg transition-all duration-700 ${mobileOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
                <span className={`line block w-[25px] h-[2px] mb-[7px] rounded-lg transition-all duration-700 ${mobileOpen ? 'opacity-0 translate-x-[21px]' : ''}`} />
                <span className={`line block w-[25px] h-[2px] rounded-lg transition-all duration-700 ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 cursor-pointer bg-transparent border-0"
          aria-label="Menu"
        >
          <span className={`line block w-[25px] h-[2px] mb-[7px] rounded-lg transition-all duration-700 ${mobileOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
          <span className={`line block w-[25px] h-[2px] mb-[7px] rounded-lg transition-all duration-700 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`line block w-[25px] h-[2px] rounded-lg transition-all duration-700 ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Slide-in Nav */}
      <div
        className={`fixed right-0 top-0 bg-white/90 backdrop-blur-2xl w-[340px] h-screen z-[1000] flex flex-col justify-center items-start px-10 shadow-[-20px_0_60px_rgba(0,48,85,0.15)] ${mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-[340px] opacity-0'}`}
        style={{ transition: 'all 900ms cubic-bezier(0.9, 0, 0.33, 1)' }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-[#003055] text-2xl bg-transparent border-0 cursor-pointer"
          aria-label="Close menu"
        >
          ✕
        </button>
        <ul className="w-full border-t border-b border-[#0077B5]/20 py-10 relative before:content-[''] before:absolute before:-top-[2px] before:left-0 before:w-[66px] before:h-[3px] before:bg-[#FFB300] before:rounded-full">
          {mobileNavLinks.map((item, i) => (
            <li key={i} className="mb-6">
              <Link
                to={item.href}
                className="text-[#003055] hover:text-[#0077B5] text-base font-semibold tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
