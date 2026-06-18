import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'

const BASE = 'https://mectech.co.in/public/f/images/'

function AnimSection({ children, className = '', delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }} className={className}>
      {children}
    </motion.div>
  )
}

export default function InfrastructurePage() {
  return (
    <div>
      <PageHero title="INFRASTRUCTURE" breadcrumb="Home / Infrastructure" />

      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection>
            <h2 className="text-[30px] font-bold text-black mb-2">World-Class Manufacturing</h2>
            <h4 className="text-[48px] font-bold text-blubrand mb-6">Our Facilities</h4>
            <p className="text-[15px] text-body leading-[21px]">
              Mectech operates two state-of-the-art manufacturing facilities equipped with advanced machinery and qualified workforce to deliver world-class equipment for the Oil & Fats Industry.
            </p>
          </AnimSection>
        </div>
      </section>

      {[
        { id: 'Design-Development', title: 'Design & Development', icon: '⚙️', desc: 'Our in-house design and engineering team uses the latest CAD/CAE software to design custom oil processing plants tailored to client requirements. Every plant goes through rigorous engineering analysis before fabrication begins.' },
        { id: 'Manufacturing', title: 'Manufacturing', icon: '🏭', desc: 'Our manufacturing facilities in Gurgaon, Haryana span over 50,000 sq. ft. with advanced fabrication equipment including CNC machines, plasma cutting, welding stations, and pressure vessel manufacturing lines.' },
        { id: 'quality', title: 'Quality & Testing', icon: '✅', desc: 'Every piece of equipment undergoes stringent quality checks including NDT testing, hydrostatic pressure testing, dimensional inspections, and functional testing before dispatch. Our QA team ensures all equipment meets design specifications.' },
        { id: 'Certifications', title: 'Certifications', icon: '🏆', desc: 'Mectech holds ASME U & U2 Stamp, ISO 9001:2015, IBR approval, and third-party approvals from DNV GL, Lloyd\'s Register, and Bureau Veritas — enabling supply to the most demanding international markets.' },
      ].map((section, i) => (
        <section key={i} id={section.id} className={`py-[70px] ${i % 2 === 0 ? 'bg-lightbg' : 'bg-white'}`}>
          <div className="container mx-auto px-4 max-w-7xl">
            <AnimSection>
              <div className="flex items-start gap-6">
                <span className="text-5xl">{section.icon}</span>
                <div>
                  <h2 className="text-[30px] font-bold text-black mb-4">{section.title}</h2>
                  <p className="text-[15px] text-body leading-[21px]">{section.desc}</p>
                </div>
              </div>
            </AnimSection>
          </div>
        </section>
      ))}
    </div>
  )
}
