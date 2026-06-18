import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'
import { Link } from 'react-router-dom'

const BASE = 'https://mectech.co.in/public/f/images/'

// Database of all technology pages
const techData = {
  'seed-preparation': {
    title: 'Oil Seed Preparation',
    banner: BASE + 'oil-seed-preparation-banner.jpg',
    intro: 'Mectech is a leading manufacturer of Oil Seed Preparation Plants. Our solutions cover the complete seed preparation process from cleaning to conditioning, setting the stage for maximum oil extraction.',
    sections: [
      {
        heading: 'Seed Preparation Process',
        content: 'The seed preparation process involves multiple stages: cleaning, grading, cracking, conditioning (heating), and flaking. Each stage is critical to achieving maximum oil yield and quality in the subsequent extraction process.',
        img: BASE + 'home-img1.jpg',
      },
      {
        heading: 'Salient Features',
        bullets: [
          'High efficiency seed cleaners with multiple screen decks',
          'Precise temperature and moisture conditioning',
          'Uniform flaking for optimal cell rupture',
          'Continuous operation with minimal downtime',
          'Energy efficient design with heat recovery',
          'Automated controls for consistent quality',
        ],
      },
    ],
    globalPresence: 'Mectech has supplied Oil Seed Preparation Plants in India, Bangladesh, Vietnam, Indonesia, Malaysia, Thailand, UAE, Turkey, Nigeria, Kenya, and many more countries.',
  },
  'solvent-extraction-plant': {
    title: 'Solvent Extraction Plant',
    banner: BASE + 'home-img2.jpg',
    intro: 'Mectech\'s Solvent Extraction Plants are designed for maximum oil extraction efficiency using hexane as solvent. Our plants achieve oil content in expeller cake as low as 0.5-1%.',
    sections: [
      {
        heading: 'Process Overview',
        content: 'The solvent extraction process uses hexane to extract oil from pre-pressed cake or flakes. The miscella (oil+solvent mixture) is then processed to separate oil from solvent. The desolventized-toasted meal is a valuable by-product.',
        img: BASE + 'home-img2.jpg',
      },
      {
        heading: 'Key Features',
        bullets: [
          'Continuous counter-current extraction',
          'Very low residual oil in meal (0.5-1%)',
          'Low solvent consumption',
          'Fully closed loop solvent recovery',
          'Automatic fire safety systems',
          'High quality meal suitable for animal feed',
        ],
      },
    ],
    globalPresence: 'Plants supplied in India, Bangladesh, Vietnam, Indonesia, Malaysia, Turkey, Iran, Nigeria, and other countries.',
  },
  'vegetable-oil-refinery-plant': {
    title: 'Vegetable Oil Refining Plant',
    banner: BASE + 'vegitable-Plant-Pic-one.jpg',
    intro: 'Mectech is a leading Vegetable Oil Refining Plant manufacturer in India. Our refining plants process all types of crude vegetable oils through Longmix, Degumming, Neutralizing & Washing processes.',
    sections: [
      {
        heading: 'Continuous Longmix, Degumming, Neutralizing & Washing',
        content: 'For the successful Degumming, Neutralization and Washing of crude vegetable oil, the inherent phosphatides and free fatty acid need to be removed. Mectech\'s oil processing plants achieve this through a highly evolved continuous process, in which Degumming is carried out by reaction with Phosphoric acid under controlled conditions.',
        img: BASE + 'vegitable_ Plant_Pic1.jpg',
      },
      {
        heading: 'Salient Features',
        bullets: [
          'Continuous Longmix process for superior degumming',
          'Precise phosphoric acid dosing control',
          'Centrifugal separators for gum removal',
          'NaOH neutralization to remove free fatty acids',
          'Efficient washing to remove soap traces',
          'Low neutral oil loss in soapstock',
          'Suitable for all vegetable oils',
        ],
      },
    ],
    globalPresence: 'Plants installed in Argentina, Bangladesh, Belarus, Bhutan, Chile, Congo, Germany, India, Indonesia, Iran, Egypt, Iraq, Kenya, Malaysia, Nepal, Netherlands, Pakistan, Philippines, Romania, Sri Lanka, Tanzania, Thailand, Turkey, UAE, Vietnam and more.',
  },
  'palm-oil-refining-plant': {
    title: 'Palm Oil Refining Plant',
    banner: BASE + 'home-img4.jpg',
    intro: 'Mectech offers complete Palm Oil Refining Plants including Degumming, Bleaching, Deodorization, and Fractionation. Our plants process crude palm oil into refined, bleached and deodorized (RBD) palm oil.',
    sections: [
      { heading: 'Process Overview', content: 'Palm Oil Refining involves Physical Refining where FFA is removed by steam stripping in the deodorizer. This process gives very low neutral oil losses and produces high quality refined oil.', img: BASE + 'home-img4.jpg' },
      { heading: 'Plant Features', bullets: ['Physical refining for low neutral oil losses', 'Continuous bleaching section', 'High efficiency deodorizer', 'Palm olein/stearin fractionation', 'Capacity: 50-1000 TPD'] },
    ],
    globalPresence: 'Palm oil plants supplied in Malaysia, Indonesia, India, Nigeria, Ghana, Congo, and many other palm growing countries.',
  },
  'continuous-bleaching': {
    title: 'Continuous Bleaching',
    banner: BASE + 'home-img3.jpg',
    intro: 'Mectech\'s Continuous Bleaching Plants use activated earth and carbon to remove color, residual soaps, phospholipids, and oxidation products from degummed and neutralized oils.',
    sections: [
      { heading: 'Bleaching Process', content: 'The bleaching process involves mixing the oil with bleaching earth under vacuum conditions at elevated temperature. The bleaching earth adsorbs impurities including chlorophyll, carotenoids, oxidation products and residual soaps.', img: BASE + 'home-img3.jpg' },
      { heading: 'Features', bullets: ['Continuous operation', 'Low earth consumption', 'Efficient earth-oil contact', 'Vacuum bleaching for minimum oxidation', 'Pressure leaf filters for earth removal'] },
    ],
    globalPresence: 'Bleaching plants supplied across Asia, Middle East, Africa and Europe.',
  },
  'fractionation-plant': {
    title: 'Fractionation Plant',
    banner: BASE + 'Innovative-two.jpg',
    intro: 'Mectech designs and manufactures Dry Fractionation Plants and Solvent Fractionation Plants for separating oils into fractions with different melting points and applications.',
    sections: [
      { heading: 'Dry Fractionation', content: 'Dry fractionation is an economical process to separate oils based on their crystallization characteristics. Controlled cooling crystallizes the high melting fraction (stearin) which is then separated from the liquid fraction (olein) by membrane filtration.', img: BASE + 'Innovative-two.jpg' },
      { heading: 'Features', bullets: ['No chemicals or solvents required in dry fractionation', 'Precise temperature control for selective crystallization', 'Membrane filtration for efficient separation', 'High olein yield', 'Low operating costs'] },
    ],
    globalPresence: 'Fractionation plants supplied in Malaysia, Indonesia, India, UAE, and other countries.',
  },
  'glycerine-refining-plant': {
    title: 'Glycerin Refining Plant',
    banner: BASE + 'home-img5.jpg',
    intro: 'Mectech manufactures complete Glycerin Refining Plants for purifying crude glycerin from soap manufacturing and biodiesel production to pharmaceutical/food grade glycerin.',
    sections: [
      { heading: 'Glycerin Refining Process', content: 'The crude glycerin from soap stock splitting or biodiesel production is purified through a series of steps including pre-treatment, evaporation, distillation, and deodorization to produce high purity glycerin.', img: BASE + 'home-img5.jpg' },
      { heading: 'Plant Capabilities', bullets: ['Crude glycerin purification from 50% to 99.7%', 'Multi-effect evaporation', 'Vacuum distillation', 'Ion exchange treatment', 'Activated carbon treatment', 'Produces USP/BP grade glycerin'] },
    ],
    globalPresence: 'Glycerin plants supplied across Asia, Middle East, and Europe.',
  },
  'bio-diesel-manufacturing-plant': {
    title: 'Bio-Diesel Manufacturing Plant',
    banner: BASE + 'environmental-pollution-industry-exterior-daylight.jpg',
    intro: 'Mectech manufactures Bio-Diesel plants capable of producing bio-diesel conforming to EU (EN 14214) and BIS 15607:2005 standards from various feedstocks.',
    sections: [
      { heading: 'Bio-Diesel Process', content: 'Bio-diesel is produced by transesterification of vegetable oils or animal fats with methanol in the presence of a catalyst. Our plants handle the complete process from pre-treatment through reaction, separation, washing, and drying.', img: BASE + 'environmental-pollution-industry-exterior-daylight.jpg' },
      { heading: 'Features', bullets: ['Feedstock: Vegetable oils, jatropha, used cooking oil, animal fat', 'Continuous transesterification', 'EU EN 14214 & BIS 15607:2005 compliant', 'Methanol recovery system', 'Glycerin by-product recovery', 'Capacity: 30-500 TPD'] },
    ],
    globalPresence: 'Bio-diesel plants supplied in India, Germany, Brazil, and other countries.',
  },
  'mecklear-gravity-filteration-process': {
    title: 'Mecklear Gravity Filter',
    banner: BASE + 'home-img6.jpg',
    intro: 'Mectech\'s Mecklear Gravity Filter is a unique horizontal pressure leaf filter for separating spent bleaching earth from oil with very high throughput and low residual oil.',
    sections: [
      { heading: 'Working Principle', content: 'The Mecklear Gravity Filter operates on the principle of gravity-assisted pressure filtration. The filter leaves are horizontal, and the cake is discharged by gravity after filtration, ensuring complete cake discharge.', img: BASE + 'home-img6.jpg' },
      { heading: 'Advantages', bullets: ['Very low residual oil in cake (< 25% on dry basis)', 'Complete cake discharge by gravity', 'No compressed air required for cake discharge', 'Minimum operator attention', 'Long filter leaf life', 'High throughput per unit area'] },
    ],
    globalPresence: 'Mecklear filters installed in India and internationally.',
  },
  'winterization-dewaxing-plant': {
    title: 'Winterization Dewaxing Plant',
    banner: BASE + 'home-img3.jpg',
    intro: 'Mectech\'s Winterization and Dewaxing Plants remove waxes and high melting triglycerides from oils like sunflower, rice bran, and corn oil to produce clear, stable oil at refrigeration temperatures.',
    sections: [
      { heading: 'Process Description', content: 'The oil is gradually cooled to crystallize waxes and high melting components. The crystallized waxes are then separated by filtration. The resulting winterized oil remains clear and liquid even at low temperatures.', img: BASE + 'home-img3.jpg' },
      { heading: 'Features', bullets: ['Gentle cooling for optimal crystallization', 'Scraped surface crystallizers', 'Pressure leaf filtration', 'High wax removal efficiency', 'Applicable to sunflower, rice bran, corn, safflower oils'] },
    ],
    globalPresence: 'Winterization plants supplied across Europe, Asia, and Americas.',
  },
  'pilot-plant-manufacturer': {
    title: 'Pilot Plant Manufacturer',
    banner: BASE + 'industrial-zonethe-equipment-oil-refiningnumber-electric-motors-with-reducers-food-industry-details-distribution-system-modern-brewery-equipment-industrial-tools.jpg',
    intro: 'Mectech is one of the top Pilot Plant manufacturers in India and globally. Our pilot plants are used for R&D, process optimization, and new oil/fat product development.',
    sections: [
      { heading: 'Pilot Plants Available', content: 'We manufacture pilot plants for all oil processing operations including refining, bleaching, deodorization, fractionation, hydrogenation, and oleo chemical processes at lab and semi-commercial scales.', img: BASE + 'industrial-zonethe-equipment-oil-refiningnumber-electric-motors-with-reducers-food-industry-details-distribution-system-modern-brewery-equipment-industrial-tools.jpg' },
      { heading: 'Features', bullets: ['Scale: 1 kg/hour to 1 TPD', 'Complete process replication at small scale', 'Accurate temperature and pressure control', 'Used by universities, research institutes, and oil companies', 'Custom designs available'] },
    ],
    globalPresence: 'Pilot plants supplied to research institutions and oil companies globally.',
  },
  'bakery-shortening-margarine': {
    title: 'Bakery Shortening & Margarine',
    banner: BASE + 'Innovative-one.jpg',
    intro: 'Mectech manufactures complete Bakery Shortening and Margarine plants using the latest votator/scraped surface heat exchanger technology for producing high quality plastic fats.',
    sections: [
      { heading: 'Process Overview', content: 'The bakery shortening and margarine manufacturing process involves blending, emulsification, pasteurization, and controlled crystallization through scraped surface heat exchangers (votators) to produce products with desired texture and melting characteristics.', img: BASE + 'Innovative-one.jpg' },
      { heading: 'Products', bullets: ['Bakery shortening', 'Table margarine', 'Industrial margarine', 'Vanaspati', 'Specialty fats', 'Capacity: 5-200 TPD'] },
    ],
    globalPresence: 'Bakery fat plants supplied in India, Middle East, and Africa.',
  },
}

// Default fallback for pages not in our database
const defaultData = {
  title: 'Technology',
  banner: null,
  intro: 'Mectech provides world-class technology solutions for the Oil & Fats Industry.',
  sections: [],
  globalPresence: 'Plants supplied across 30+ countries worldwide.',
}

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

export default function TechnologyDetailPage() {
  const { slug } = useParams()
  const data = techData[slug] || { ...defaultData, title: slug?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Technology' }

  return (
    <div>
      <PageHero
        title={data.title.toUpperCase()}
        breadcrumb={`Home / Technology / ${data.title}`}
        bgImage={data.banner}
      />

      {/* Main Content */}
      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <AnimSection>
                <p className="text-[15px] text-body leading-[21px] mb-8">{data.intro}</p>
              </AnimSection>

              {data.sections.map((section, si) => (
                <AnimSection key={si} delay={si * 0.1} className="mb-8">
                  <h2 className="text-[24px] font-bold text-black mb-4">{section.heading}</h2>
                  {section.content && (
                    <p className="text-[13px] text-body leading-[21px] mb-4">{section.content}</p>
                  )}
                  {section.img && (
                    <figure className="mb-6">
                      <img
                        src={section.img}
                        alt={section.heading}
                        className="w-full"
                        onError={e => { e.target.style.display = 'none' }}
                      />
                    </figure>
                  )}
                  {section.bullets && (
                    <ul className="space-y-3">
                      {section.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3 text-[13px] text-body">
                          <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </AnimSection>
              ))}

              {data.globalPresence && (
                <AnimSection className="bg-lightbg p-6 mt-8">
                  <h2 className="text-[24px] font-bold text-black mb-3">Global Presence</h2>
                  <p className="text-[13px] text-body leading-[21px]">{data.globalPresence}</p>
                </AnimSection>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-primary p-6 text-white mb-6">
                <h3 className="text-[18px] font-bold mb-4 text-accent">Quick Enquiry</h3>
                <EnquiryForm />
              </div>

              <div className="bg-lightbg p-6">
                <h3 className="text-[13px] font-bold text-primary mb-4 uppercase">Related Technologies</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Vegetable Oil Refinery', href: '/vegetable-oil-refinery-plant' },
                    { label: 'Continuous Bleaching', href: '/continuous-bleaching' },
                    { label: 'Continuous Deodorization', href: '/continuous-deodorization' },
                    { label: 'Physical Refinery', href: '/physical-refinery' },
                    { label: 'Fractionation Plant', href: '/fractionation-plant' },
                    { label: 'Winterization Plant', href: '/winterization-dewaxing-plant' },
                  ].map((l, i) => (
                    <li key={i}>
                      <Link
                        to={l.href}
                        className="text-[13px] text-body hover:text-blubrand flex items-center gap-2 transition-colors"
                      >
                        <span className="text-accent">›</span>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function EnquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) return <p className="text-accent">Thank you! We'll contact you shortly.</p>

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text" placeholder="Your Name *" required
        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
        className="w-full bg-white/10 border border-white/30 text-white placeholder-white/50 px-3 py-2 text-sm outline-none font-cairo"
      />
      <input
        type="email" placeholder="Email *" required
        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
        className="w-full bg-white/10 border border-white/30 text-white placeholder-white/50 px-3 py-2 text-sm outline-none font-cairo"
      />
      <textarea
        placeholder="Requirement" rows={3}
        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
        className="w-full bg-white/10 border border-white/30 text-white placeholder-white/50 px-3 py-2 text-sm outline-none resize-none font-cairo"
      />
      <button type="submit" className="w-full bg-accent text-black font-bold py-2 text-sm hover:bg-accent-dark transition-colors">
        Send Enquiry
      </button>
    </form>
  )
}
