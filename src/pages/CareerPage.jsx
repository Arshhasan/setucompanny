import { useState } from 'react'
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

const openings = [
  { title: 'Process Engineer', dept: 'Engineering', exp: '2-5 years', location: 'Gurgaon, India' },
  { title: 'Mechanical Design Engineer', dept: 'Engineering', exp: '3-7 years', location: 'Gurgaon, India' },
  { title: 'Sales Engineer (International)', dept: 'Sales', exp: '2-5 years', location: 'Gurgaon, India' },
  { title: 'Project Manager', dept: 'Projects', exp: '7-12 years', location: 'Gurgaon, India' },
  { title: 'Commissioning Engineer', dept: 'Projects', exp: '3-8 years', location: 'Pan India / Abroad' },
]

export default function CareerPage() {
  const [applied, setApplied] = useState(null)

  return (
    <div>
      <PageHero title="CAREER" breadcrumb="Home / Career" />

      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <AnimSection>
            <h2 className="text-[30px] font-bold text-black mb-4">Join Our Team</h2>
            <h4 className="text-[48px] font-bold text-blubrand mb-6">Build Your Career at Mectech</h4>
            <p className="text-[15px] text-body leading-[21px] max-w-3xl mx-auto">
              At Mectech, we're always looking for talented and passionate individuals to join our growing team. We offer challenging work, global exposure, and excellent growth opportunities.
            </p>
          </AnimSection>
        </div>
      </section>

      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection className="mb-8">
            <h2 className="text-[24px] font-bold text-black">Current Openings</h2>
          </AnimSection>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <div className="bg-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
                  <div>
                    <h3 className="text-[18px] font-bold text-black">{job.title}</h3>
                    <p className="text-[13px] text-body">{job.dept} | {job.exp} | {job.location}</p>
                  </div>
                  <button
                    onClick={() => setApplied(i)}
                    className={`flex-shrink-0 px-6 py-3 text-sm font-bold transition-colors ${
                      applied === i
                        ? 'bg-green-600 text-white'
                        : 'bg-blubrand text-white hover:bg-primary'
                    }`}
                  >
                    {applied === i ? 'Applied ✓' : 'Apply Now'}
                  </button>
                </div>
              </AnimSection>
            ))}
          </div>

          <AnimSection delay={0.3} className="mt-12 bg-primary text-white p-8 text-center">
            <h3 className="text-[24px] font-bold mb-4">Don't see a suitable opening?</h3>
            <p className="text-[15px] mb-6">Send your CV to us and we'll keep you in mind for future openings.</p>
            <a
              href="mailto:hr@mectech.co.in"
              className="inline-block bg-accent text-black font-bold px-8 py-3 hover:bg-accent-dark transition-colors"
            >
              Send CV to hr@mectech.co.in
            </a>
          </AnimSection>
        </div>
      </section>
    </div>
  )
}
