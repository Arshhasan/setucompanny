import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, mobileNavLinks } from '../../data/navigation'
import setuLogoDark from '../../assets/setu_logo_dark.png'
import setuLogoReal from '../../assets/setu_logo_real.png'

export default function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMega, setActiveMega] = useState(null)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const megaRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('nav-open', mobileOpen)
    return () => document.body.classList.remove('nav-open')
  }, [mobileOpen])

  const navTextColor = sticky ? 'text-black' : 'text-white'
  const logoColor = sticky ? 'text-[#0077B5]' : 'text-white'
  const lineColor = sticky ? 'bg-black' : 'bg-white'

  return (
    <header className={sticky ? 'sticky' : ''}>
      <div className="px-[35px] flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link to="/" className={`navbar-brand font-bold text-xl tracking-wider ${logoColor} flex-shrink-0`}>
          <img
            src={sticky ? setuLogoReal : setuLogoDark}
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
                  <Link
                    to={item.href}
                    className={`block px-[15px] py-[25px] text-[13px] uppercase tracking-[2.74px] font-normal transition-colors ${navTextColor} hover:text-accent`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`block px-[15px] py-[25px] text-[13px] uppercase tracking-[2.74px] font-normal transition-colors ${navTextColor} hover:text-accent-DEFAULT bg-transparent border-0 cursor-pointer`}
                  >
                    {item.label}
                  </button>
                )}

                {/* Simple Dropdown */}
                {item.type === 'dropdown' && activeDropdown === idx && (
                  <div className="absolute top-full left-0 bg-primary min-w-[220px] py-[20px] border-t-2 border-accent-DEFAULT z-[9999]">
                    {item.items.map((sub, si) => (
                      <div key={si} className="px-5">
                        {sub.external ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2.5 text-sm text-white border-b border-white/10 hover:text-[#FFDD00] last:border-0"
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <Link
                            to={sub.href}
                            className="block py-2.5 text-sm text-white border-b border-white/10 hover:text-[#FFDD00] last:border-0"
                          >
                            {sub.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Mega Menu */}
                {item.type === 'mega' && activeMega === idx && (
                  <div className="fixed left-0 top-auto w-full bg-primary border-t-2 border-accent-DEFAULT z-[9999] py-8 px-8 shadow-2xl">
                    <div className="max-w-7xl mx-auto grid grid-cols-7 gap-6">
                      {item.columns.map((col, ci) => (
                        <div key={ci}>
                          <h4 className="text-[#FFB300] text-xs font-bold uppercase tracking-wider mb-3 pb-2 border-b border-white/20">
                            {col.title}
                          </h4>
                          <ul>
                            {col.items.map((sub, si) => (
                              <li key={si}>
                                <Link
                                  to={sub.href}
                                  className="block py-1 text-xs text-white hover:text-[#FFDD00] transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
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
                <span className={`line ${lineColor} block w-[25px] h-[2px] mb-[7px] rounded-lg transition-all duration-700 ${mobileOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
                <span className={`line ${lineColor} block w-[25px] h-[2px] mb-[7px] rounded-lg transition-all duration-700 ${mobileOpen ? 'opacity-0 translate-x-[21px]' : ''}`} />
                <span className={`line ${lineColor} block w-[25px] h-[2px] rounded-lg transition-all duration-700 ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
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
          <span className={`line ${lineColor} block w-[25px] h-[2px] mb-[7px] rounded-lg transition-all duration-700 ${mobileOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
          <span className={`line ${lineColor} block w-[25px] h-[2px] mb-[7px] rounded-lg transition-all duration-700 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`line ${lineColor} block w-[25px] h-[2px] rounded-lg transition-all duration-700 ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Slide-in Nav */}
      <div
        className={`fixed right-0 top-0 bg-primary w-[340px] h-screen z-[1000] flex flex-col justify-center items-start px-10 transition-all duration-[900ms] ${mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-[340px] opacity-0'}`}
        style={{ transition: 'all 900ms cubic-bezier(0.9, 0, 0.33, 1)' }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-white text-2xl bg-transparent border-0 cursor-pointer"
          aria-label="Close menu"
        >
          ✕
        </button>
        <ul className="w-full border-t border-b border-[#FFDD00] py-10 relative before:content-[''] before:absolute before:-top-1 before:left-0 before:w-[66px] before:h-1 before:bg-[#FFDD00]">
          {mobileNavLinks.map((item, i) => (
            <li key={i} className="mb-6">
              <Link
                to={item.href}
                className="text-white hover:text-[#FFDD00] text-base font-normal"
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
