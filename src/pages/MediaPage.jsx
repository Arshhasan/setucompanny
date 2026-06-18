import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'

const BASE = 'https://mectech.co.in/public/upload/mediacentre/'

const mediaItems = [
  {
    title: 'Jordan Exhibition',
    img: BASE + '20250716154952_banner.png',
    date: 'July 2025',
    desc: 'Mectech participated in the Jordan Oil Exhibition, showcasing our latest oil processing technologies to regional oil manufacturers.',
    href: '/media/jordan-exhibition',
  },
  {
    title: 'Advanced Cost Effective Technology for Bio-Diesel',
    img: BASE + '20250716154845.png',
    date: 'June 2025',
    desc: 'Mectech develops advanced cost-effective technology for bio-diesel production, meeting international standards.',
    href: '/media/advanced-cost-effective-technology-for-bio-diesel-developed-by-mectech',
  },
  {
    title: 'Mectech Supplies 50 TPD Glycerin Distillation Plant',
    img: `https://mectech.co.in/public/f/images/home-img5.jpg`,
    date: 'May 2025',
    desc: 'Mectech has successfully supplied a 50 TPD glycerin distillation plant in Eastern India for a leading soap manufacturer.',
    href: '/media/mectech-is-supplying-50-tpd-glycerin-distillation-plant-in-eastern-india',
  },
  {
    title: '100 TPD Hazel Nut Oil Physical Refinery in Turkey',
    img: `https://mectech.co.in/public/f/images/hazelnut-banner.jpg`,
    date: 'April 2025',
    desc: 'Mectech supplied and commissioned a 100 TPD hazelnut oil physical refinery in Turkey, the world\'s largest hazelnut producer.',
    href: '/media/100-tpd-hazel-nut-oil-physical-refinery-supplied-in-turkey',
  },
  {
    title: "India's Largest Continuous Hydrogenation Plant for Fatty Acid",
    img: `https://mectech.co.in/public/f/images/hydrogenation-banner.jpg`,
    date: 'March 2025',
    desc: "India's largest continuous hydrogenation plant for fatty acid has been commissioned by Mectech for a leading oleochemical company.",
    href: '/media/india-s-largest-continuous-hydrogenation-plant-for-fatty-acid-commissioned',
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
            <h4 className="text-[48px] font-bold text-blubrand">Mectech in the Spotlight</h4>
          </AnimSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <div className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
                  <div className="overflow-hidden" style={{ height: '220px' }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={e => {
                        e.target.src = `https://mectech.co.in/public/f/images/home-img${(i % 6) + 1}.jpg`
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-accent font-bold uppercase tracking-wider">{item.date}</span>
                    <h3 className="text-[15px] font-bold text-black mt-2 mb-3 group-hover:text-blubrand transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-body leading-[21px] mb-4 line-clamp-3">
                      {item.desc}
                    </p>
                    <a
                      href={item.href}
                      className="text-sm font-bold text-blubrand hover:text-primary transition-colors"
                    >
                      Read More →
                    </a>
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
