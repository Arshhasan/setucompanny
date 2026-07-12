import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Project Consulting',
    id: 'consulting',
    desc: 'Every successful plant begins with the right decisions on paper. We study your product mix, feedstock, capacity targets and budget, then translate them into clear technical requirements — so you invest in the right technology the first time, with 100% vendor-neutral advice.',
    items: [
      'Project feasibility assessment',
      'Technology and process selection',
      'Capacity and configuration planning',
      'Budgetary estimates and comparisons',
      'Technical specification development',
    ],
  },
  {
    title: 'Right-Partner Sourcing',
    id: 'sourcing',
    desc: 'We are not tied to any single manufacturer or product line. Drawing on 30+ years across the oils & fats, oleochemical and biodiesel industries, we identify, evaluate and shortlist the technology providers best suited to your project — on merit, not commission.',
    items: [
      'Vendor identification and screening',
      'Techno-commercial bid evaluation',
      'Reference plant verification',
      'Negotiation support',
      'Contract and scope alignment',
    ],
  },
  {
    title: 'Procurement Services',
    id: 'procurement',
    desc: 'One accountable partner for your entire purchasing cycle. From process equipment and filtration systems to critical spares, we manage sourcing end to end — coordinating vendors, timelines and quality so your project stays on schedule and on budget.',
    items: [
      'Equipment and package procurement',
      'Spares and consumables sourcing',
      'Quality and inspection coordination',
      'Delivery and logistics follow-up',
      'Documentation and compliance support',
    ],
  },
  {
    title: 'Project Execution Support',
    id: 'execution',
    desc: 'We stay engaged from concept to commissioning. Our team coordinates between you, technology suppliers and site contractors during installation and start-up, making sure the plant you were promised is the plant that gets delivered.',
    items: [
      'Installation and erection coordination',
      'Pre-commissioning readiness reviews',
      'Start-up and trial run support',
      'Performance guarantee follow-through',
      'Single point of contact across vendors',
    ],
  },
  {
    title: 'Plant Improvement & Modernisation',
    id: 'modernisation',
    desc: 'For running plants, we help you get more from what you already own — sourcing the right technology partners for capacity expansion, energy savings, automation and product quality upgrades in oils & fats, oleochemical and biodiesel operations.',
    items: [
      'Capacity debottlenecking studies',
      'Energy and yield improvement',
      'Automation and control upgrades',
      'Product diversification options',
      'Obsolete equipment replacement sourcing',
    ],
  },
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

export default function ServicesPage() {
  return (
    <div>
      <PageHero title="SERVICES & SUPPORT" breadcrumb="Home / Services" />

      {/* Intro */}
      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <AnimSection>
            <h2 className="text-[30px] font-bold text-black mb-4">Our Services</h2>
            <h4 className="text-[48px] font-bold text-blubrand mb-6">One Partner, Concept to Commissioning</h4>
            <p className="text-[15px] text-body leading-[21px] max-w-3xl mx-auto">
              Setu Industrial Partners is your single point of contact for procurement, right-partner sourcing and consulting in the oils & fats, oleochemical and biodiesel sectors — built right, sourced smart, running profitably.
            </p>
          </AnimSection>
        </div>
      </section>

      {/* Services List */}
      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-10">
            {services.map((s, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <div id={s.id} className={`bg-white p-8 flex flex-col lg:flex-row gap-8 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <h3 className="text-[24px] font-bold text-blubrand mb-4">{s.title}</h3>
                    <p className="text-[13px] text-body leading-[21px] mb-5">{s.desc}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {s.items.map((item, ii) => (
                        <li key={ii} className="flex items-center gap-2 text-[13px] text-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[70px] bg-primary text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimSection>
            <h2 className="text-[30px] font-bold text-white mb-4">Planning a Project?</h2>
            <p className="text-[15px] text-white/80 mb-8">
              Talk to us about your plant, expansion or sourcing requirement — we'll help you find the right way forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919896369557"
                className="inline-flex items-center gap-2 bg-accent text-black font-bold px-8 py-4 hover:bg-accent-dark transition-colors"
              >
                📞 +91 98963 69557
              </a>
              <Link
                to="/enquiry"
                className="inline-block border border-white text-white font-bold px-8 py-4 hover:bg-white hover:text-black transition-colors"
              >
                Send Enquiry
              </Link>
            </div>
          </AnimSection>
        </div>
      </section>
    </div>
  )
}
