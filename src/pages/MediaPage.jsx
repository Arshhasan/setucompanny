import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'

const mediaItems = [
  {
    title: 'Setu Industrial Partners Launches',
    date: '2025',
    desc: 'Setu Industrial Partners begins operations as an independent procurement, sourcing and consulting partner for the oils & fats, oleochemical and biodiesel sectors.',
  },
  {
    title: 'Building a Vendor-Neutral Technology Network',
    date: '2025',
    desc: 'We are steadily expanding our network of proven technology providers across extraction, refining, value addition, filtration and biodiesel — so every client recommendation is made on merit.',
  },
  {
    title: 'Meet Us at Industry Events',
    date: 'Ongoing',
    desc: 'Our team regularly attends oils & fats and oleochemical industry exhibitions and forums across India and international markets. Get in touch to schedule a meeting.',
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

export default function MediaPage() {
  return (
    <div>
      <PageHero title="HAPPENINGS" breadcrumb="Home / Media" />

      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection className="text-center mb-10">
            <h2 className="text-[30px] font-bold text-black">Latest News & Media</h2>
            <h4 className="text-[48px] font-bold text-blubrand">Setu in Motion</h4>
          </AnimSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <div className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden border-t-4 border-accent">
                  <div className="p-6">
                    <span className="text-xs text-accent font-bold uppercase tracking-wider">{item.date}</span>
                    <h3 className="text-[15px] font-bold text-black mt-2 mb-3 group-hover:text-blubrand transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-body leading-[21px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
