import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'
import { Link } from 'react-router-dom'

const BASE = 'https://mectech.co.in/public/f/images/'

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

const leaders = [
  {
    name: 'Mr. Ishwar Sahai',
    title: 'Founder & Visionary',
    href: '/the-visionary-mr-ishwar-sahai',
    img: BASE + 'Mr-Ishwar-Sahai.jpg',
    desc: 'The visionary founder of Mectech, Mr. Ishwar Sahai, laid the foundation of an industry-leading enterprise in 1978 with a singular mission: to make India a global powerhouse in oil processing technology.',
  },
  {
    name: 'Mr. Ankoor Sahai',
    title: 'Managing Director',
    href: '/mr-ankoor-sahaii',
    img: BASE + 'Mr-Ankoor-Sahai.jpg',
    desc: 'Mr. Ankoor Sahai carries forward the legacy of Mectech, bringing fresh perspectives and innovative thinking to continue the company\'s growth trajectory and global expansion.',
  },
]

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
              At Mectech Process Engineers Pvt. Ltd., we firmly believe that behind every technological marvel and innovative solution is the collective brilliance of our people. Our leadership team drives the company's vision forward with expertise, passion, and commitment.
            </p>
          </AnimSection>
        </div>
      </section>

      {/* Leadership Cards */}
      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {leaders.map((l, i) => (
              <AnimSection key={i} delay={i * 0.2}>
                <div className="bg-white shadow-sm group">
                  <div className="overflow-hidden" style={{ height: '400px' }}>
                    <img
                      src={l.img}
                      alt={l.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={e => { e.target.src = BASE + 'user-icon.png' }}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-[24px] font-bold text-blubrand mb-1">{l.name}</h3>
                    <p className="text-[13px] font-bold text-accent mb-4 uppercase tracking-wider">{l.title}</p>
                    <p className="text-[13px] text-body leading-[21px] mb-6">{l.desc}</p>
                    <Link
                      to={l.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blubrand border border-blubrand px-6 py-2 hover:bg-blubrand hover:text-white transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Mectech */}
      <section className="py-[70px] bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimSection>
            <h2 className="text-[30px] font-bold mb-4">Life at Mectech</h2>
            <h4 className="text-[48px] font-bold text-accent mb-6">A Culture of Excellence</h4>
            <p className="text-[15px] leading-[21px] mb-8">
              At Mectech, our people are our greatest asset. We foster a culture of continuous learning, innovation, and collaboration. From engineers to management, every team member plays a vital role in delivering exceptional results for our clients.
            </p>
            <Link
              to="/life-at-mectech"
              className="inline-block border border-accent text-accent px-8 py-3 text-sm font-bold hover:bg-accent hover:text-black transition-colors"
            >
              Explore Life at Mectech
            </Link>
          </AnimSection>
        </div>
      </section>
    </div>
  )
}
