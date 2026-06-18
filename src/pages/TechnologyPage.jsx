import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'

const BASE = 'https://mectech.co.in/public/f/images/'

const techCategories = [
  {
    icon: BASE + 'home-icon1.png',
    img: BASE + 'home-img1.jpg',
    title: 'Oil Seed Preparation',
    desc: 'From cleaning to conditioning, our solutions set the stage for efficient oil extraction.',
    href: '/seed-preparation',
    items: ['Seed Preparation', 'Cleaning', 'Conditioning', 'Flaking', 'Cooking'],
  },
  {
    icon: BASE + 'home-icon2.png',
    img: BASE + 'home-img2.jpg',
    title: 'Oil Extraction',
    desc: 'Advanced solvent extraction plants for maximum oil yield.',
    href: '/solvent-extraction-plant',
    items: ['Solvent Extraction Plant'],
  },
  {
    icon: BASE + 'home-icon3.png',
    img: BASE + 'home-img3.jpg',
    title: 'Oil & Fats Refining',
    desc: 'Complete refining solutions for all types of vegetable oils and fats.',
    href: '/vegetable-oil-refinery-plant',
    items: ['Vegetable Oil Refinery', 'Continuous Bleaching', 'Continuous Deodorization', 'Physical Refinery', 'Chemical Refinery', 'Winterization Dewaxing', 'Fractionation Plant'],
  },
  {
    icon: BASE + 'home-icon4.png',
    img: BASE + 'home-img4.jpg',
    title: 'Oil Processing',
    desc: 'Specialized processing plants for various oil types including palm, rice bran, sunflower, soybean and more.',
    href: '/palm-oil-refining-plant',
    items: ['Palm Oil', 'Rice Bran Oil', 'Sunflower Oil', 'Soybean Oil', 'Corn Oil', 'Groundnut Oil', 'Canola Oil', 'Sesame Oil'],
  },
  {
    icon: BASE + 'home-icon5.png',
    img: BASE + 'home-img5.jpg',
    title: 'Oleo Chemical',
    desc: 'Complete oleo chemical processing solutions from glycerine refining to fatty acid distillation.',
    href: '/glycerine-refining-plant',
    items: ['Glycerin Refining', 'Esterification', 'Fatty Acid Distillation', 'Hydrogenation', 'Fat Splitting', 'Saponification'],
  },
  {
    icon: BASE + 'home-icon6.png',
    img: BASE + 'home-img6.jpg',
    title: 'Filtration',
    desc: 'Advanced filtration systems for highest oil purity and quality.',
    href: '/mecklear-gravity-filteration-process',
    items: ['Gravity Filter', 'Vertical Pressure Leaf Filter', 'Horizontal Pressure Leaf Filter', 'Candle Filter', 'Pulse Jet Candle Filter'],
  },
  {
    icon: BASE + 'Bio-Diesel.png',
    img: BASE + 'environmental-pollution-industry-exterior-daylight.jpg',
    title: 'Bio-Diesel',
    desc: 'Bio-diesel manufacturing plants meeting EU (EN 14214) and BIS standards.',
    href: '/bio-diesel-manufacturing-plant',
    items: ['Bio-Diesel Manufacturing Plant'],
  },
  {
    icon: BASE + 'Pilot-Plant-icon.png',
    img: BASE + 'industrial-zonethe-equipment-oil-refiningnumber-electric-motors-with-reducers-food-industry-details-distribution-system-modern-brewery-equipment-industrial-tools.jpg',
    title: 'Pilot Plant',
    desc: 'Small-scale pilot plants for R&D and process validation.',
    href: '/pilot-plant-manufacturer',
    items: ['Pilot Plant Manufacturer'],
  },
  {
    icon: BASE + 'Value-Added-Projects-Plants.png',
    img: BASE + 'teamwork-dim-modern-lab.jpg',
    title: 'Value Added Projects/Plants',
    desc: 'Niche value-added plant solutions for specialty products.',
    href: '/bakery-shortening-margarine',
    items: ['Bakery Shortening & Margarine', 'MCT from Coconut Oil', 'Lecithin', 'Tocotrienol', 'Spent Earth Oil Recovery'],
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

export default function TechnologyPage() {
  return (
    <div>
      <PageHero
        title="TECHNOLOGY"
        breadcrumb="Home / Technology"
        bgImage="/assets/images/oil-seed-preparation-banner.jpg"
      />

      {/* Intro */}
      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <AnimSection>
            <h2 className="text-[30px] font-bold text-black mb-4">Our Technology Portfolio</h2>
            <h4 className="text-[48px] font-bold text-blubrand mb-6">Comprehensive Solutions for Oil & Fats Industry</h4>
            <p className="text-[15px] text-body leading-[21px] max-w-3xl mx-auto">
              Mectech offers a comprehensive range of technologies covering the entire oil processing value chain — from seed preparation through extraction, refining, oleo chemicals, filtration, and value-added products.
            </p>
          </AnimSection>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((cat, i) => (
              <AnimSection key={i} delay={i * 0.05}>
                <div className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
                  <div className="overflow-hidden" style={{ height: '220px' }}>
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img src={cat.icon} alt="" className="w-10 h-10 object-contain" />
                      <h3 className="text-[18px] font-bold text-black group-hover:text-blubrand transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-[13px] text-body leading-[21px] mb-4">{cat.desc}</p>
                    <ul className="mb-4 space-y-1">
                      {cat.items.slice(0, 4).map((item, ii) => (
                        <li key={ii} className="text-xs text-body flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                      {cat.items.length > 4 && (
                        <li className="text-xs text-blubrand">+{cat.items.length - 4} more</li>
                      )}
                    </ul>
                    <Link
                      to={cat.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blubrand hover:text-primary transition-colors"
                    >
                      Learn More →
                    </Link>
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
