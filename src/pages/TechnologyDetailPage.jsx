import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'
import { Link } from 'react-router-dom'

// Database of all technology pages
const techData = {
  'seed-preparation': {
    title: 'Oil Seed Preparation',
    intro: 'Setu Industrial Partners sources and delivers complete Oil Seed Preparation solutions through our network of proven technology providers. From cleaning to conditioning, the right preparation line sets the stage for maximum oil recovery downstream.',
    sections: [
      {
        heading: 'Seed Preparation Process',
        content: 'A well-designed preparation line takes the seed through cleaning, grading, cracking, conditioning and flaking. Getting each of these stages right determines how much oil the extraction section can ultimately recover — which is why we help you match the line design to your specific seed and capacity.',
      },
      {
        heading: 'What We Look For When Sourcing',
        bullets: [
          'Efficient multi-deck seed cleaning',
          'Accurate temperature and moisture conditioning',
          'Uniform flaking for effective cell rupture',
          'Continuous operation with minimal downtime',
          'Heat recovery and low energy consumption',
          'Automation for consistent quality',
        ],
      },
    ],
    globalPresence: 'Our network covers technology providers with reference installations across Asia, Africa, the Middle East and Europe.',
  },
  'solvent-extraction-plant': {
    title: 'Solvent Extraction Plant',
    intro: 'We help you select and procure Solvent Extraction Plants designed for maximum oil recovery, including belt-type horizontal extractor technology, matched to your feedstock and capacity.',
    sections: [
      {
        heading: 'Process Overview',
        content: 'Solvent extraction recovers oil from pre-pressed cake or flakes using hexane. The oil-solvent mixture is then separated, and the de-solventized, toasted meal becomes a valuable by-product for animal feed. Distillation and heat recovery systems keep energy use in check.',
      },
      {
        heading: 'What We Look For When Sourcing',
        bullets: [
          'Continuous counter-current extraction',
          'Low residual oil in meal',
          'Low solvent consumption with closed-loop recovery',
          'Robust safety systems',
          'High quality meal output',
          'Proven reference installations',
        ],
      },
    ],
    globalPresence: 'Our network covers extraction technology providers with installations across Asia, Africa and the Middle East.',
  },
  'vegetable-oil-refinery-plant': {
    title: 'Vegetable Oil Refining Plant',
    intro: 'Setu Industrial Partners arranges complete Vegetable Oil Refining solutions — chemical or physical — covering degumming, neutralizing, bleaching and deodorization for all types of crude vegetable oils.',
    sections: [
      {
        heading: 'Degumming, Neutralizing & Washing',
        content: 'Crude vegetable oil carries phosphatides and free fatty acids that must be removed before the oil can meet quality standards. Modern continuous refining lines handle this through controlled acid degumming, caustic neutralization and washing, with centrifugal separation at each stage.',
      },
      {
        heading: 'What We Look For When Sourcing',
        bullets: [
          'Continuous processing for consistent quality',
          'Precise acid and caustic dosing control',
          'Efficient centrifugal separation',
          'Low neutral oil loss in soapstock',
          'Flexibility across oil types',
          'Energy-efficient design',
        ],
      },
    ],
    globalPresence: 'We work with refining technology providers whose plants operate across Asia, Africa, the Middle East, Europe and the Americas.',
  },
  'palm-oil-refining-plant': {
    title: 'Palm Oil Refining Plant',
    intro: 'We source complete Palm Oil Refining solutions — degumming, bleaching, deodorization and fractionation — for processing crude palm oil into refined, bleached and deodorized (RBD) products.',
    sections: [
      { heading: 'Process Overview', content: 'Palm oil is typically refined physically: free fatty acids are removed by steam stripping in the deodorizer, giving low neutral oil losses and high quality refined oil. Dry fractionation then separates olein and stearin fractions for different applications.' },
      { heading: 'What We Look For When Sourcing', bullets: ['Physical refining for low oil losses', 'Continuous bleaching section', 'High efficiency deodorization', 'Olein/stearin fractionation options', 'Capacity matched to your project'] },
    ],
    globalPresence: 'Our partner network includes palm oil technology providers with installations across Southeast Asia, South Asia and Africa.',
  },
  'continuous-bleaching': {
    title: 'Continuous Bleaching',
    intro: 'We help you procure Continuous Bleaching Plants that use activated earth and carbon to remove color bodies, residual soaps, phospholipids and oxidation products from degummed and neutralized oils.',
    sections: [
      { heading: 'Bleaching Process', content: 'In bleaching, oil is mixed with bleaching earth under vacuum at elevated temperature. The earth adsorbs impurities — chlorophyll, carotenoids, oxidation products and residual soaps — before being filtered out on pressure leaf filters.' },
      { heading: 'What We Look For When Sourcing', bullets: ['Continuous operation', 'Low earth consumption', 'Effective earth-oil contact', 'Vacuum operation to limit oxidation', 'Reliable filtration for earth removal'] },
    ],
    globalPresence: 'Bleaching technology available through our network across Asia, the Middle East, Africa and Europe.',
  },
  'fractionation-plant': {
    title: 'Fractionation Plant',
    intro: 'We arrange Dry Fractionation Plants for palm and palm kernel oil, separating oils into fractions with different melting points and end uses.',
    sections: [
      { heading: 'Dry Fractionation', content: 'Dry fractionation separates oil fractions by their crystallization behaviour. Controlled cooling crystallizes the higher-melting stearin, which membrane filtration then separates from the liquid olein — no chemicals or solvents required.' },
      { heading: 'What We Look For When Sourcing', bullets: ['Solvent-free, chemical-free process', 'Precise crystallization temperature control', 'Efficient membrane filtration', 'High olein yield', 'Low operating cost'] },
    ],
    globalPresence: 'Fractionation technology providers in our network serve Southeast Asia, South Asia and the Middle East.',
  },
  'glycerine-refining-plant': {
    title: 'Glycerin Refining Plant',
    intro: 'We source complete Glycerin Refining solutions for purifying crude glycerin from soap manufacturing and biodiesel production up to pharmaceutical and food grades.',
    sections: [
      { heading: 'Glycerin Refining Process', content: 'Crude glycerin is purified through pre-treatment, multi-effect evaporation, vacuum distillation and deodorization. Ion exchange and activated carbon polishing bring the product to the required purity grade.' },
      { heading: 'What We Look For When Sourcing', bullets: ['Purification to 99%+ purity', 'Multi-effect evaporation for energy efficiency', 'Vacuum distillation', 'Ion exchange and carbon treatment', 'USP/BP grade capability'] },
    ],
    globalPresence: 'Glycerin technology available through our network across Asia, the Middle East and Europe.',
  },
  'bio-diesel-manufacturing-plant': {
    title: 'Bio-Diesel Manufacturing Plant',
    intro: 'We arrange advanced pressurized biodiesel plant solutions designed for efficiency and sustainability, producing biodiesel that meets EU (EN 14214) and BIS 15607 standards from a range of feedstocks.',
    sections: [
      { heading: 'Bio-Diesel Process', content: 'Biodiesel is produced by transesterification of vegetable oils or animal fats with methanol over a catalyst. A complete plant covers feedstock pre-treatment, reaction, separation, washing and drying, along with methanol recovery and glycerin by-product handling.' },
      { heading: 'What We Look For When Sourcing', bullets: ['Feedstock flexibility: vegetable oils, used cooking oil, animal fat', 'Continuous transesterification', 'EN 14214 / BIS 15607 compliant product', 'Efficient methanol recovery', 'Glycerin by-product recovery', 'Minimal waste and energy consumption'] },
    ],
    globalPresence: 'Biodiesel technology providers in our network have installations across Asia, Europe and the Americas.',
  },
  'gravity-filtration-process': {
    title: 'Gravity Filtration',
    intro: 'We source gravity filters and other filtration and recovery equipment that separate spent bleaching earth from oil with high throughput and low residual oil.',
    sections: [
      { heading: 'Working Principle', content: 'Gravity-discharge pressure leaf filters use horizontal filter leaves; after filtration, the cake discharges by gravity, ensuring complete cake removal without compressed air.' },
      { heading: 'What We Look For When Sourcing', bullets: ['Low residual oil in cake', 'Complete gravity cake discharge', 'Minimal operator attention', 'Long filter leaf life', 'High throughput per unit area'] },
    ],
    globalPresence: 'Filtration equipment available through our vendor network in India and internationally.',
  },
  'winterization-dewaxing-plant': {
    title: 'Winterization Dewaxing Plant',
    intro: 'We arrange Winterization and Dewaxing solutions that remove waxes and high-melting triglycerides from oils like sunflower, rice bran and corn oil, keeping the oil clear at refrigeration temperatures.',
    sections: [
      { heading: 'Process Description', content: 'The oil is cooled gradually so waxes and high-melting components crystallize, then filtration separates them out. The winterized oil stays clear and liquid even when chilled.' },
      { heading: 'What We Look For When Sourcing', bullets: ['Controlled cooling for optimal crystallization', 'Scraped surface crystallizers', 'Reliable filtration', 'High wax removal efficiency', 'Suitability for sunflower, rice bran, corn and safflower oils'] },
    ],
    globalPresence: 'Winterization technology providers in our network serve Europe, Asia and the Americas.',
  },
  'pilot-plant-manufacturer': {
    title: 'Pilot Plants',
    intro: 'We source pilot plants for R&D, process optimization and new product development in oils, fats and oleochemicals — matched to your research goals and budget.',
    sections: [
      { heading: 'Pilot Plants Available', content: 'Through our network we can arrange pilot plants for refining, bleaching, deodorization, fractionation, hydrogenation and oleochemical processes, at laboratory through semi-commercial scale.' },
      { heading: 'What We Look For When Sourcing', bullets: ['Scales from lab bench to semi-commercial', 'Faithful replication of full-scale process conditions', 'Accurate temperature and pressure control', 'Suitability for universities, research institutes and producers', 'Custom design capability'] },
    ],
    globalPresence: 'Pilot plant suppliers in our network serve research institutions and producers globally.',
  },
  'bakery-shortening-margarine': {
    title: 'Bakery Shortening & Margarine',
    intro: 'We arrange complete Bakery Shortening and Margarine plant solutions using scraped surface heat exchanger technology for high quality plastic fats.',
    sections: [
      { heading: 'Process Overview', content: 'Shortening and margarine production involves blending, emulsification, pasteurization and controlled crystallization in scraped surface heat exchangers, giving the product its target texture and melting profile.' },
      { heading: 'Typical Products', bullets: ['Bakery shortening', 'Table margarine', 'Industrial margarine', 'Vanaspati', 'Specialty fats'] },
    ],
    globalPresence: 'Technology providers in our network serve South Asia, the Middle East and Africa.',
  },
}

// Default fallback for pages not in our database
const defaultData = {
  title: 'Technology',
  banner: null,
  intro: 'Setu Industrial Partners sources and delivers proven technology solutions for the oils & fats, oleochemical and biodiesel industries through our vendor-neutral partner network.',
  sections: [],
  globalPresence: 'Our partner network spans technology providers with installations worldwide.',
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
                  <h2 className="text-[24px] font-bold text-black mb-3">Global Reach</h2>
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
