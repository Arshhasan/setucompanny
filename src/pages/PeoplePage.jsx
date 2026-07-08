import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'
import { Link } from 'react-router-dom'

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

const leader = {
  name: 'Mr. Hasan',
  title: 'Founder & Managing Director',
  img: '/papa.jpeg',
  highlights: [
    '30+ years in process-equipment industries',
    'Senior management roles in business development and project execution',
    'Manufacturing of critical process equipment and turnkey plant delivery',
    'International market development across Africa, Iran and Russia',
    'Procurement, vendor development and concept-to-commissioning expertise',
  ],
}

export default function PeoplePage() {
  return (
    <div>
      <PageHero title="PEOPLE" breadcrumb="Home / People" />

      {/* Intro */}
      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <AnimSection>
            <h2 className="text-[30px] font-bold text-black mb-4">Empowering Success through People</h2>
            <h4 className="text-[48px] font-bold text-blubrand mb-6">Our Leadership</h4>
            <p className="text-[15px] text-body leading-[21px] max-w-3xl mx-auto">
              At Setu Industrial Partners, we firmly believe that behind every technological marvel and innovative solution is the collective brilliance of our people. Our leadership drives the company's vision forward with expertise, passion, and commitment.
            </p>
          </AnimSection>
        </div>
      </section>

      {/* Leadership Cards */}
      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection>
            <div className="bg-white shadow-sm grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-[24px] font-bold text-blubrand mb-1">{leader.name}</h3>
                <p className="text-[13px] font-bold text-accent mb-8 uppercase tracking-wider">{leader.title}</p>
                <h4 className="text-[18px] font-bold text-black mb-4">Career Highlights</h4>
                <ul className="space-y-3">
                  {leader.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-body leading-[21px]">
                      <span className="text-accent">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: '400px', maxHeight: '620px' }}
                />
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* Life at Setu */}
      <section className="py-[70px] bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimSection>
            <h2 className="text-[30px] font-bold mb-4">Life at Setu</h2>
            <h4 className="text-[48px] font-bold text-accent mb-6">A Culture of Excellence</h4>
            <p className="text-[15px] leading-[21px] mb-8">
              At Setu Industrial Partners, our people are our greatest asset. We foster a culture of continuous learning, innovation, and collaboration. From engineers to management, every team member plays a vital role in delivering exceptional results for our clients.
            </p>
            <Link
              to="/career"
              className="inline-block border border-accent text-accent px-8 py-3 text-sm font-bold hover:bg-accent hover:text-black transition-colors"
            >
              Explore Careers at Setu
            </Link>
          </AnimSection>
        </div>
      </section>
    </div>
  )
}
