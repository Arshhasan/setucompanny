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

export default function VideoPage() {
  return (
    <div>
      <PageHero title="A SHORT GLIMPSE OF MECTECH" breadcrumb="Home / Video" />

      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection className="text-center mb-10">
            <h2 className="text-[30px] font-bold text-black">Our Projects in Action</h2>
            <h4 className="text-[48px] font-bold text-blubrand">See Mectech at Work</h4>
          </AnimSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimSection>
              <div className="bg-black aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/C_L8R5VWgCg"
                  title="Mectech Video"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ minHeight: '300px' }}
                />
              </div>
              <div className="bg-white p-6">
                <h3 className="text-[18px] font-bold text-black mb-2">Mectech Process Engineers - Company Overview</h3>
                <p className="text-[13px] text-body">A comprehensive overview of Mectech's capabilities, facilities, and global project portfolio.</p>
              </div>
            </AnimSection>

            <AnimSection delay={0.2}>
              <div className="bg-black aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/C_L8R5VWgCg"
                  title="Mectech CSR Video"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ minHeight: '300px' }}
                />
              </div>
              <div className="bg-white p-6">
                <h3 className="text-[18px] font-bold text-black mb-2">Transforming Minds, Shaping Futures</h3>
                <p className="text-[13px] text-body">Raghunath Sahai Charitable Trust - Mectech's CSR initiatives for community development.</p>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>
    </div>
  )
}
