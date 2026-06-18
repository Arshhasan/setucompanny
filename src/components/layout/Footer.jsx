import { Link } from 'react-router-dom'
import setuLogoReal from '../../assets/setu_logo_real.png'

const footerCols = [
  {
    title: 'ABOUT US',
    titleHref: '/about-us',
    links: [
      { label: 'About Mectech', href: '/about-us' },
      { label: 'Why Mectech', href: '/why-mectech' },
      { label: 'Event & Exhibitions', href: '/event-exhibitions' },
      { label: 'Career', href: '/career' },
      { label: 'Clientele', href: '/clients' },
    ],
  },
  {
    title: 'TECHNOLOGY',
    links: [
      { label: 'Oil Seed Preparation', href: '/seed-preparation' },
      { label: 'Oil Extraction', href: '/solvent-extraction-plant' },
      { label: 'Oil & Fats Refining', href: '/vegetable-oil-refinery-plant' },
      { label: 'Oil Processing', href: '/palm-oil-refining-plant' },
      { label: 'Oleo Chemical', href: '/glycerine-refining-plant' },
      { label: 'Filtration', href: '/mecklear-gravity-filteration-process' },
      { label: 'Bio-Diesel', href: '/bio-diesel-manufacturing-plant' },
      { label: 'Pilot Plant', href: '/pilot-plant-manufacturer' },
      { label: 'Value added Projects / Plants', href: '/bakery-shortening-margarine' },
    ],
  },
  {
    title: 'CAPABILITIES',
    titleHref: '/infrastructure',
    links: [
      { label: 'Design & Development', href: '/infrastructure#Design-Development' },
      { label: 'Manufacturing', href: '/infrastructure#Manufacturing' },
      { label: 'Quality & Testing', href: '/infrastructure#quality' },
      { label: 'Certification', href: '/infrastructure#Certifications' },
    ],
  },
]

const footerCol4 = {
  groups: [
    {
      title: 'SERVICES',
      titleHref: '/services-support',
      links: [
        { label: 'Installation Supervision', href: '/services-support#Installation-Supervision' },
        { label: 'Commissioning Support', href: '/services-support#Installation-Supervision' },
        { label: 'After Sales Support', href: '/services-support#after-sales' },
        { label: 'Spares', href: '/spares' },
      ],
    },
    {
      standalone: [
        { label: 'A Short Glimpse of Mectech', href: '/video', upper: true },
        { label: 'PEOPLE', href: '/people' },
        { label: 'CONTACT US', href: '/enquiry' },
        { label: 'SUSTAINABILITY', href: '/sustainablity' },
        { label: 'HAPPENINGS', href: '/media' },
      ],
    },
  ],
}

export default function Footer() {
  return (
    <>
      {/* Desktop Footer */}
      <footer className="desktop-footer hidden md:block bg-lightbg pt-[70px] pb-[15px]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex gap-6">
            {/* Left 9 cols */}
            <div className="flex-1">
              <div className="grid grid-cols-4 gap-6 mb-6">
                {footerCols.map((col, ci) => (
                  <div key={ci}>
                    <ul className="mb-7 relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[26px] after:h-[1px]">
                      <li>
                        <h3 className="text-[13px] text-primary font-bold mb-5">
                          {col.titleHref ? (
                            <Link to={col.titleHref}>{col.title}</Link>
                          ) : (
                            col.title
                          )}
                        </h3>
                        {col.links.map((l, li) => (
                          <Link
                            key={li}
                            to={l.href}
                            className="block text-body text-[13px] mb-[10px] hover:text-[#d06060] transition-colors"
                          >
                            {l.label}
                          </Link>
                        ))}
                      </li>
                    </ul>
                  </div>
                ))}

                {/* Col 4 */}
                <div>
                  {footerCol4.groups.map((grp, gi) => (
                    <ul key={gi} className="mb-7 relative pb-5">
                      <li>
                        {grp.title && (
                          <h3 className="text-[13px] text-primary font-bold mb-5">
                            {grp.titleHref ? (
                              <Link to={grp.titleHref}>{grp.title}</Link>
                            ) : (
                              grp.title
                            )}
                          </h3>
                        )}
                        {grp.links?.map((l, li) => (
                          <Link
                            key={li}
                            to={l.href}
                            className="block text-body text-[13px] mb-[10px] hover:text-[#d06060] transition-colors"
                          >
                            {l.label}
                          </Link>
                        ))}
                        {grp.standalone?.map((l, li) => (
                          <h3 key={li} className="text-[13px] text-primary font-bold mb-5">
                            <Link to={l.href} className={l.upper ? 'uppercase' : ''}>
                              {l.label}
                            </Link>
                          </h3>
                        ))}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>

            {/* Right address col */}
            <div className="w-[220px] flex-shrink-0">
              <div className="text-center md:text-left">
                <Link to="/" className="block mb-8">
                  <img src={setuLogoReal} alt="Setu Industrial Partners" className="h-10 w-auto" />
                </Link>
                

                <h3 className="text-[13px] text-primary font-bold mb-5 uppercase">Mectech Corporate Office</h3>
                <p className="text-xs text-body font-cairo mb-4">366, Phase - 2, Udyog Vihar, Gurgaon-122 016, Haryana, India.</p>
                <ul className="border-b border-white/30 pb-6 mb-7">
                  <li className="flex items-center text-xs text-body mb-3">
                    <figure className="w-[9px] h-[9px] mr-[15px] flex-shrink-0">
                      <img src="/assets/images/Icon-awesome-phone.svg" alt="" className="w-full" />
                    </figure>
                    <a href="tel:+91-0124-4700800" className="text-body hover:text-[#d06060]">+91-(9999982065) </a>
                  </li>
                  <li className="flex items-center text-xs text-body">
                    <figure className="w-[9px] h-[9px] mr-[15px] flex-shrink-0">
                      <img src="/assets/images/Icon-material-email.svg" alt="" className="w-full" />
                    </figure>
                    <a href="mailto:enquiries@mectech.co.in" className="text-body hover:text-[#d06060]">enquiries@mectech.co.in</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between border-t border-[#ddd] pt-[25px] pb-[25px]">
            <div className="flex gap-3">
              <Link to="/privacy-policy" className="text-black font-bold text-xs mr-[9px] hover:text-primary">Privacy Policy</Link>
              <Link to="/terms-conditions" className="text-black font-bold text-xs mr-[9px] hover:text-primary">Terms & Conditions</Link>
              <Link to="/sitemap" className="text-black font-bold text-xs hover:text-primary">Site Map</Link>
            </div>

            <div className="flex items-center gap-4">
              <p className="m-0 text-xs text-primary font-bold uppercase">Follow Us</p>
              <ul className="flex gap-3">
                <li>
                  <a href="https://www.facebook.com/share/1DH6j8KXst/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/facebook.svg" alt="Facebook" className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=C_L8R5VWgCg" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/youtube-svgrepo-com.svg" alt="YouTube" className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/mectechprocess/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/instagram-svgrepo-com.svg" alt="Instagram" className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/mectechprocessnengineers/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-xs text-right text-body m-0">
              © 2026 - All Rights Reserved <Link to="/" className="text-body hover:text-primary">Mectech</Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <div className="mobile-footer block md:hidden border-t border-[#ddd] pb-9 bg-lightbg">
        <div className="m-footer-link1 py-8 px-4">
          <ul className="flex flex-wrap">
            {[
              { label: 'HOME', href: '/' },
              { label: 'ABOUT US', href: '/about-us' },
              { label: 'TECHNOLOGY', href: '/technology' },
              { label: 'PROJECTS', href: '/video' },
              { label: 'SERVICES', href: '/services-support' },
              { label: 'CONTACT US', href: '/enquiry' },
            ].map((l, i) => (
              <li key={i} className="w-1/2 mb-[18px] text-center">
                <Link to={l.href} className="text-primary font-bold text-sm">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <a href="https://www.facebook.com/share/1DH6j8KXst/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/watch?v=C_L8R5VWgCg" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/youtube-svgrepo-com.svg" alt="YouTube" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/mectechprocess/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/instagram-svgrepo-com.svg" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/company/mectechprocessnengineers/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center px-4">
          <h3 className="text-[13px] text-primary font-bold mb-5 uppercase">Mectech Corporate Office</h3>
          <p className="text-xs text-body mb-3">366, Phase - 2, Udyog Vihar, Gurgaon-122 016, Haryana, India.</p>
          <p className="text-xs mb-1"><a href="tel:+91-0124-4700800" className="text-body">+91-(0124)-4700800</a></p>
          <p className="text-xs"><a href="mailto:enquiries@mectech.co.in" className="text-body">enquiries@mectech.co.in</a></p>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <Link to="/privacy-policy" className="text-xs text-body">Privacy Policy</Link>
          <Link to="/terms-conditions" className="text-xs text-body">Terms & Conditions</Link>
        </div>
        <p className="text-xs text-center text-body mt-3">© 2026 - All Rights Reserved Mectech</p>
      </div>
    </>
  )
}
