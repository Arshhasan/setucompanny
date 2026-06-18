import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'
import { Link } from 'react-router-dom'

const BASE = 'https://mectech.co.in/public/f/images/'

const stats = [
  { num: '02', label: 'Manufacturing Facilities' },
  { num: '50+', label: 'Years of experience' },
  { num: '30+', label: 'Countries' },
  { num: '650+', label: 'Projects Supplied' },
]

const certifications = [
  'ISO 9001:2015',
  'ASME U & U2 Stamp',
  'IBR Approved',
  "Lloyd's Register",
  'DNV GL',
  'BV Certification',
]

const milestones = [
  { year: '1978', title: 'Founded', desc: 'Mectech Process Engineers Pvt. Ltd. was founded with a vision to serve the Oil & Fats Industry.' },
  { year: '1983', title: 'First Export', desc: 'First export of oil processing equipment to international markets.' },
  { year: '1986', title: 'Expansion', desc: 'Expanded manufacturing capabilities with new facility.' },
  { year: '1990', title: 'Technology Tie-ups', desc: 'Established key technology partnerships for advanced refining processes.' },
  { year: '1996', title: 'International Growth', desc: 'Expanded footprint to 30+ countries worldwide.' },
  { year: '2000', title: 'ISO Certification', desc: 'Achieved ISO 9001 certification for Quality Management.' },
  { year: '2004', title: 'New Technologies', desc: 'Introduced new filtration and oleo chemical technologies.' },
  { year: '2011', title: 'ASME Stamp', desc: 'Received ASME U & U2 Stamp for pressure vessel manufacturing.' },
  { year: '2015', title: '500+ Projects', desc: 'Crossed 500 successful projects milestone.' },
  { year: '2017', title: 'Bio-Diesel', desc: 'Launched bio-diesel plant manufacturing capability.' },
  { year: '2018', title: '50 Years Journey', desc: 'Celebrated 40 years of innovation and excellence.' },
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

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="ABOUT US"
        breadcrumb="Home / About Us"
        bgImage="/assets/images/about-mectech-about-1.jpg"
      />

      {/* Company Overview */}
      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimSection>
              <h2 className="text-[30px] font-bold text-black mb-4">
                Mectech - "A Legacy of Innovation and Excellence."
              </h2>
              <p className="text-[13px] text-body leading-[21px] mb-4">
                Mectech Process Engineers Pvt. Ltd. is one of the leading manufacturers and exporters of complete Oil Processing Plants and Machinery. With over 50 years of experience, we have successfully commissioned 650+ plants in 30+ countries worldwide.
              </p>
              <p className="text-[13px] text-body leading-[21px] mb-4">
                Our expertise spans across Oil Seed Preparation, Oil Extraction, Oil & Fats Refining, Oleo Chemicals, Filtration, Bio-Diesel, and Value-Added Products. We provide end-to-end solutions from design, engineering, manufacturing, installation to commissioning.
              </p>
              <p className="text-[13px] text-body leading-[21px]">
                Our state-of-the-art manufacturing facilities are equipped with advanced machinery and qualified engineers to deliver world-class equipment meeting international standards.
              </p>
            </AnimSection>
            <AnimSection delay={0.2}>
              <figure>
                <img src="/assets/images/about-mectech-about-1.jpg" alt="About Mectech" className="w-full" />
              </figure>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-[60px] bg-primary">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <h4 className="text-[59px] font-bold text-blubrand">{s.num}</h4>
                <p className="text-white text-[15px]">{s.label}</p>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimSection>
              <div className="bg-white p-10 h-full border-l-4 border-blubrand">
                <h2 className="text-[30px] font-bold text-blubrand mb-5">Mission</h2>
                <p className="text-[13px] text-body leading-[21px]">
                  To be a globally recognized leader in providing innovative and sustainable oil processing plant solutions, continuously pushing boundaries through technology, engineering excellence, and customer-centric approach to deliver unmatched value to our clients worldwide.
                </p>
              </div>
            </AnimSection>
            <AnimSection delay={0.2}>
              <div className="bg-white p-10 h-full border-l-4 border-accent">
                <h2 className="text-[30px] font-bold text-blubrand mb-5">Vision</h2>
                <p className="text-[13px] text-body leading-[21px]">
                  To empower the Oil & Fats Industry through cutting-edge technologies and comprehensive solutions, fostering sustainable growth while setting new benchmarks in quality, reliability, and environmental responsibility for future generations.
                </p>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection className="mb-10">
            <h4 className="text-[24px] font-bold text-black">
              The manufacturing facilities of Mectech are equipped with the following Certifications
            </h4>
          </AnimSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <div className="bg-lightbg p-6 text-center border border-[#ddd] hover:border-blubrand transition-colors">
                  <p className="text-sm font-bold text-primary">{cert}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection className="mb-10">
            <h2 className="text-[30px] font-bold text-black">Milestone</h2>
          </AnimSection>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#ddd] hidden lg:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <AnimSection key={i} delay={i * 0.05}>
                  <div className={`flex items-start gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="flex-1 lg:text-right">
                      {i % 2 === 0 && (
                        <div className="bg-white p-6 shadow-sm border border-[#ddd]">
                          <h4 className="text-2xl font-bold text-blubrand mb-2">{m.year}</h4>
                          <h5 className="font-bold text-black mb-2">{m.title}</h5>
                          <p className="text-[13px] text-body">{m.desc}</p>
                        </div>
                      )}
                    </div>
                    <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-blubrand text-white font-bold text-sm flex-shrink-0 relative z-10">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      {i % 2 !== 0 && (
                        <div className="bg-white p-6 shadow-sm border border-[#ddd]">
                          <h4 className="text-2xl font-bold text-blubrand mb-2">{m.year}</h4>
                          <h5 className="font-bold text-black mb-2">{m.title}</h5>
                          <p className="text-[13px] text-body">{m.desc}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </AnimSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
