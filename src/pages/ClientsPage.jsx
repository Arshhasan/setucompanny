import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'

const reachRegions = [
  { region: 'India', focus: ['Edible oil refining', 'Solvent extraction', 'Oleochemicals', 'Biodiesel'] },
  { region: 'South East Asia', focus: ['Palm oil processing', 'Fractionation', 'Oleochemicals'] },
  { region: 'Middle East', focus: ['Edible oil refining', 'Packaging & filling lines'] },
  { region: 'Africa', focus: ['Turnkey refining projects', 'Plant modernisation'] },
  { region: 'CIS & Russia', focus: ['Sunflower oil processing', 'Extraction technology'] },
  { region: 'Europe & Americas', focus: ['Specialty fats', 'Biodiesel & renewables'] },
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
      <PageHero title="WHO WE SERVE" breadcrumb="Home / Clients" />

      {/* Intro */}
      <section className="py-[70px] bg-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection>
            <h2 className="text-[30px] font-bold text-black mb-4">An Independent Partner You Can Trust</h2>
            <h4 className="text-[48px] font-bold text-blubrand mb-6">Serving Producers Across the Value Chain</h4>
            <p className="text-[15px] text-body leading-[21px] max-w-3xl mx-auto">
              Setu Industrial Partners works with oils &amp; fats processors, oleochemical producers and biodiesel manufacturers — from greenfield projects to plant expansions and upgrades. Our leadership brings 30+ years of relationships across the industry, and every engagement is 100% vendor-neutral.
            </p>
          </AnimSection>
        </div>
      </section>

      {/* Regions */}
      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection className="text-center mb-10">
            <h2 className="text-[30px] font-bold text-black">Where Our Network Reaches</h2>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reachRegions.map((r, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <div className="bg-white p-6 border-l-4 border-blubrand">
                  <h3 className="text-[18px] font-bold text-blubrand mb-4">{r.region}</h3>
                  <ul className="space-y-2">
                    {r.focus.map((c, ci) => (
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
              { num: '30+', label: 'Years of Industry Experience' },
              { num: '3', label: 'Pillars: Procurement, Sourcing, Consulting' },
              { num: '360°', label: 'Delivery, Concept to Commissioning' },
              { num: '100%', label: 'Vendor-Neutral Advice' },
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
