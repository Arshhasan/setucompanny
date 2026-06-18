import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'

const BASE = 'https://mectech.co.in/public/f/images/'

const differentiators = [
  {
    icon: '/assets/images/images/m-icon1.png',
    title: 'Cost Effective',
    desc: 'Our solutions offer the lowest cost of production while maintaining the highest quality standards.',
  },
  {
    icon: '/assets/images/images/m-icon2.png',
    title: 'Energy Efficient',
    desc: 'State-of-the-art designs that minimize energy consumption and operating costs.',
  },
  {
    icon: '/assets/images/images/m-icon3.png',
    title: 'Proven Technology',
    desc: 'Over 50 years of refined processes tested in plants across 30+ countries.',
  },
  {
    icon: '/assets/images/images/m-icon4.png',
    title: 'Quality Equipment',
    desc: 'ASME, IBR and ISO certified manufacturing facilities ensuring highest quality.',
  },
  {
    icon: '/assets/images/images/m-icon5.png',
    title: 'After Sales Support',
    desc: '24/7 dedicated after-sales support team for quick resolution of any issues.',
  },
  {
    icon: '/assets/images/images/m-icon6.png',
    title: 'Global Presence',
    desc: 'Successfully supplied plants in 30+ countries across Asia, Africa, Europe, and Americas.',
  },
  {
    icon: '/assets/images/images/m-icon7.png',
    title: 'Innovation',
    desc: 'Continuous R&D investment to stay ahead of industry trends and requirements.',
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

export default function WhyMectechPage() {
  return (
    <div>
      <PageHero title="WHY MECTECH" breadcrumb="Home / Why Mectech" />

      {/* Intro */}
      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection className="text-center max-w-4xl mx-auto">
            <h2 className="text-[30px] font-bold text-black mb-4">Why Choose Mectech?</h2>
            <h4 className="text-[48px] font-bold text-blubrand mb-6">The Mectech Advantage</h4>
            <p className="text-[15px] text-body leading-[21px]">
              With over 50 years in the Oil & Fats Industry, Mectech has established itself as the preferred partner for turnkey plant solutions. Our comprehensive approach — from concept to commissioning — ensures your plant performs at its optimal best.
            </p>
          </AnimSection>
        </div>
      </section>

      {/* Differentiators Grid */}
      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className="mb-5">
                    <img src={d.icon} alt={d.title} className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-[18px] font-bold text-black mb-3 group-hover:text-blubrand transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-[13px] text-body leading-[21px]">{d.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-[70px] bg-primary text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection className="text-center mb-10">
            <h2 className="text-[30px] font-bold mb-2">Mectech vs. Conventional Suppliers</h2>
            <h4 className="text-[48px] font-bold text-accent">See the Difference</h4>
          </AnimSection>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 pr-8 text-accent font-bold">Parameter</th>
                  <th className="text-center py-4 px-6 text-accent font-bold">Mectech</th>
                  <th className="text-center py-4 px-6 text-white/60 font-bold">Industry Average</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Experience', '50+ Years', '10-20 Years'],
                  ['Projects Completed', '650+', '50-200'],
                  ['Countries Served', '30+', '5-15'],
                  ['Technology', 'In-house R&D', 'Licensed'],
                  ['After Sales', 'Dedicated 24/7', 'Limited'],
                  ['Certifications', 'ASME, IBR, ISO, DNV', '1-2 Certs'],
                  ['Energy Efficiency', 'Best in Class', 'Standard'],
                  ['Cost of Production', 'Lowest', 'Higher'],
                ].map(([param, mectech, industry], i) => (
                  <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 pr-8 font-medium">{param}</td>
                    <td className="py-4 px-6 text-center text-accent font-bold">{mectech}</td>
                    <td className="py-4 px-6 text-center text-white/50">{industry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <AnimSection>
            <h2 className="text-[30px] font-bold text-black mb-4">Global Reach</h2>
            <h4 className="text-[48px] font-bold text-blubrand mb-8">Plants Supplied Across 30+ Countries</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { region: 'Asia', countries: 'India, Bangladesh, Vietnam, Indonesia, Malaysia, Thailand' },
                { region: 'Middle East', countries: 'UAE, Saudi Arabia, Jordan, Iran, Turkey' },
                { region: 'Africa', countries: 'Nigeria, Kenya, Egypt, Ethiopia, Tanzania' },
                { region: 'Europe & Americas', countries: 'Germany, UK, Canada, Brazil, Mexico' },
              ].map((r, i) => (
                <div key={i} className="bg-lightbg p-6 text-left">
                  <h5 className="font-bold text-blubrand mb-2">{r.region}</h5>
                  <p className="text-xs text-body">{r.countries}</p>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>
    </div>
  )
}
