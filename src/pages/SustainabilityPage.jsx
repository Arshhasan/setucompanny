import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'

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
      <PageHero title="SUSTAINABILITY" breadcrumb="Home / Sustainability" />

      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection className="text-center max-w-4xl mx-auto">
            <h2 className="text-[30px] font-bold text-black mb-4">Sustainable Solutions, Lasting Impact</h2>
            <h4 className="text-[48px] font-bold text-blubrand mb-6">Our Commitment to Sustainability</h4>
            <p className="text-[15px] text-body leading-[21px]">
              Sustainability guides how Setu Industrial Partners evaluates and recommends technology. When we consult, source and procure, we favour solutions that reduce energy use, cut waste and support the shift to renewables — because a plant that runs clean also runs profitably.
            </p>
          </AnimSection>
        </div>
      </section>

      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Energy Efficiency', desc: 'We prioritise technologies with heat recovery, vapor recompression and efficient insulation, so the plants we help build consume less energy and carry a smaller carbon footprint.', icon: '⚡' },
              { title: 'Zero Liquid Discharge', desc: 'We recommend water recycling and effluent treatment systems that work toward zero liquid discharge, protecting local water bodies.', icon: '💧' },
              { title: 'Waste Minimization', desc: 'We favour processes that minimize waste and put by-products to work — from spent earth oil recovery to glycerin from biodiesel production.', icon: '♻️' },
              { title: 'Bio-Diesel Promotion', desc: 'We actively support renewable energy by sourcing biodiesel plant solutions that convert waste oils and fats into clean-burning fuel.', icon: '🌱' },
              { title: 'Greener Plants', desc: 'We encourage plant designs that reduce environmental impact through natural lighting, rainwater harvesting and energy-efficient utilities.', icon: '🏗️' },
              { title: 'Social Responsibility', desc: 'We believe industry should give back — supporting education and skill development in the communities where our projects are built.', icon: '❤️' },
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
