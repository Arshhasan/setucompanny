import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'
import { Link } from 'react-router-dom'

const BASE = 'https://mectech.co.in/public/f/images/'

const services = [
  {
    icon: '/assets/images/m-services.svg',
    title: 'Installation Supervision',
    id: 'Installation-Supervision',
    desc: 'Mectech provides expert installation supervision by qualified engineers at your plant site. Our experienced team ensures proper equipment positioning, alignment, and connection according to engineering drawings and specifications.',
    items: [
      'Site preparation guidance',
      'Equipment installation support',
      'Civil work supervision',
      'Utility connections',
      'Erection and alignment',
    ],
  },
  {
    icon: '/assets/images/m-services.svg',
    title: 'Commissioning Support',
    id: 'commissioning',
    desc: 'Our commissioning team works side-by-side with your operators to ensure the plant starts up smoothly and achieves design performance parameters. We provide hands-on training during commissioning.',
    items: [
      'Pre-commissioning checks',
      'Trial runs and optimization',
      'Performance testing',
      'Operator training',
      'Process fine-tuning',
    ],
  },
  {
    icon: '/assets/images/m-services.svg',
    title: 'After Sales Support',
    id: 'after-sales',
    desc: 'Mectech\'s commitment doesn\'t end at commissioning. We provide comprehensive after-sales support to ensure your plant continues to operate at peak efficiency throughout its life.',
    items: [
      '24/7 technical helpline',
      'On-site troubleshooting visits',
      'Annual maintenance contracts',
      'Plant performance audits',
      'Process optimization support',
    ],
  },
  {
    icon: '/assets/images/m-services.svg',
    title: 'Spares Supply',
    id: 'spares',
    desc: 'We maintain a comprehensive stock of critical spare parts for all Mectech equipment. Our spares supply service ensures minimum downtime for your plant operations.',
    items: [
      'Genuine Mectech spare parts',
      'Quick dispatch from stock',
      'Annual spares contracts',
      'Emergency spares supply',
      'Obsolete parts replacement',
    ],
  },
  {
    icon: '/assets/images/m-services.svg',
    title: 'Revamping & Upgradation',
    id: 'revamping',
    desc: 'Mectech offers plant revamping services to upgrade existing plants with newer technology, increase capacity, or improve efficiency and product quality.',
    items: [
      'Capacity enhancement',
      'Energy efficiency improvement',
      'Technology upgradation',
      'Automation upgrades',
      'Quality improvement modifications',
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
            <h2 className="text-[30px] font-bold text-black mb-4">Comprehensive Services</h2>
            <h4 className="text-[48px] font-bold text-blubrand mb-6">We're With You Every Step</h4>
            <p className="text-[15px] text-body leading-[21px] max-w-3xl mx-auto">
              From the design stage to operation of your plant and beyond, Mectech is there. Our comprehensive service support ensures your plant performs at its best throughout its lifecycle.
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
                  <div className="lg:w-1/6 flex items-start justify-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <img src={s.icon} alt="" className="w-10 h-10 invert" onError={e => { e.target.style.display = 'none' }} />
                    </div>
                  </div>
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
            <h2 className="text-[30px] font-bold text-white mb-4">Need Service Support?</h2>
            <p className="text-[15px] text-white/80 mb-8">
              Contact our service team for prompt assistance with your plant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+91-0124-4700800"
                className="inline-flex items-center gap-2 bg-accent text-black font-bold px-8 py-4 hover:bg-accent-dark transition-colors"
              >
                📞 +91-(0124)-4700800
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
