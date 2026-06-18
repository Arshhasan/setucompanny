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

export default function SustainabilityPage() {
  return (
    <div>
      <PageHero title="SUSTAINABILITY" breadcrumb="Home / Sustainability" bgImage={BASE + 'Sustainabilityimages.jpg'} />

      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection className="text-center max-w-4xl mx-auto">
            <h2 className="text-[30px] font-bold text-black mb-4">Sustainable Solutions, Lasting Impact</h2>
            <h4 className="text-[48px] font-bold text-blubrand mb-6">Our Commitment to Sustainability</h4>
            <p className="text-[15px] text-body leading-[21px]">
              In a world increasingly conscious of its environmental impact, Mectech Process Engineers Pvt. Ltd. takes the lead in marrying innovation with sustainability. Our plants are designed to minimize environmental impact while maximizing efficiency.
            </p>
          </AnimSection>
        </div>
      </section>

      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Energy Efficiency', desc: 'Our plants incorporate heat recovery systems, vapor recompression, and advanced insulation to minimize energy consumption and reduce carbon footprint.', icon: '⚡' },
              { title: 'Zero Liquid Discharge', desc: 'We design plants with water recycling and effluent treatment systems to achieve zero liquid discharge, protecting local water bodies.', icon: '💧' },
              { title: 'Waste Minimization', desc: 'Our processes are designed to minimize waste generation and maximize utilization of by-products including spent earth oil recovery and glycerin from biodiesel.', icon: '♻️' },
              { title: 'Bio-Diesel Promotion', desc: 'Mectech actively promotes renewable energy by manufacturing bio-diesel plants that convert waste oils and fats into clean-burning fuel.', icon: '🌱' },
              { title: 'Green Building', desc: 'Our manufacturing facilities are designed to minimize environmental impact with natural lighting, rainwater harvesting, and energy-efficient systems.', icon: '🏗️' },
              { title: 'Social Responsibility', desc: 'Through the Raghunath Sahai Charitable Trust, Mectech invests in education and community development initiatives.', icon: '❤️' },
            ].map((item, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <div className="bg-white p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-[18px] font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-[13px] text-body leading-[21px]">{item.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
