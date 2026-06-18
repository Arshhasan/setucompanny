import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'

const clientLogos = Array.from({ length: 19 }, (_, i) =>
  `/assets/clients/snew_logo${String(i + 2).padStart(2, '0')}.png`
)

const clientRegions = [
  { region: 'India', companies: ['Adani Wilmar', 'Ruchi Soya', 'Cargill India', 'ITC Agro', 'Godrej Agrovet', 'Marico', 'Emami Agrotech'] },
  { region: 'South East Asia', companies: ['IOI Group (Malaysia)', 'Wilmar International (Singapore)', 'Golden Agri (Indonesia)', 'KLK (Malaysia)'] },
  { region: 'Middle East', companies: ['Savola Group (Saudi Arabia)', 'United Edible Oils (UAE)', 'Jordan Vegetable Oil (Jordan)'] },
  { region: 'Africa', companies: ['Unilever Nigeria', 'Bidco Africa (Kenya)', 'Golden Star (Ethiopia)'] },
  { region: 'Europe', companies: ['ADM (Germany)', 'Bunge (Netherlands)', 'Fuji Oil (Belgium)'] },
  { region: 'Americas', companies: ['ADM (USA)', 'Bunge (Brazil)', 'Cargill (Canada)'] },
]

function AnimSection({ children, className = '', delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ClientsPage() {
  return (
    <div>
      <PageHero title="OUR TOP CLIENTS" breadcrumb="Home / Clients" />

      {/* Intro */}
      <section className="py-[70px] bg-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection>
            <h2 className="text-[30px] font-bold text-black mb-4">Trusted by Industry Leaders</h2>
            <h4 className="text-[48px] font-bold text-blubrand mb-6">Our Clients Worldwide</h4>
            <p className="text-[15px] text-body leading-[21px] max-w-3xl mx-auto">
              Mectech has earned the trust of leading oil processing companies across 30+ countries. From multinational corporations to regional leaders, our plants power the world's oil production.
            </p>
          </AnimSection>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-6 items-center justify-items-center">
            {clientLogos.map((logo, i) => (
              <AnimSection key={i} delay={i * 0.03}>
                <div className="bg-white p-4 shadow-sm hover:shadow-md transition-all w-full flex items-center justify-center" style={{ height: '80px' }}>
                  <img
                    src={logo}
                    alt={`Client ${i + 1}`}
                    className="max-w-full max-h-[50px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Client Regions */}
      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection className="text-center mb-10">
            <h2 className="text-[30px] font-bold text-black">Global Client Base</h2>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientRegions.map((r, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <div className="bg-lightbg p-6 border-l-4 border-blubrand">
                  <h3 className="text-[18px] font-bold text-blubrand mb-4">{r.region}</h3>
                  <ul className="space-y-2">
                    {r.companies.map((c, ci) => (
                      <li key={ci} className="flex items-center gap-2 text-[13px] text-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-[70px] bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '650+', label: 'Plants Supplied' },
              { num: '30+', label: 'Countries' },
              { num: '500+', label: 'Satisfied Clients' },
              { num: '50+', label: 'Years of Trust' },
            ].map((s, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <h3 className="text-[48px] font-bold text-accent">{s.num}</h3>
                <p className="text-[15px] text-white/80">{s.label}</p>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
