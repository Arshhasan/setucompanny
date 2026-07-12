import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const capabilities = [
  {
    title: 'Oilseed Preparation & Extraction',
    desc: 'Solutions for seed preparation, oil milling and solvent extraction plants — including de-solventizing, distillation and heat recovery systems.',
    href: '/services-support#sourcing',
  },
  {
    title: 'Edible Oil Refining',
    desc: 'Chemical and physical refining, continuous bleaching and deodorization, dewaxing, winterization and dry fractionation for palm and palm kernel oil.',
    href: '/services-support#sourcing',
  },
  {
    title: 'Value Addition & Oleochemicals',
    desc: 'Hydrogenation, interesterification and glycerolysis plants, plus MCT from coconut oil and PKO — tailored to your product goals.',
    href: '/services-support#consulting',
  },
  {
    title: 'Biodiesel & Renewables',
    desc: 'Pressurized biodiesel plant solutions designed for efficiency and sustainability, minimizing waste and energy consumption.',
    href: '/services-support#sourcing',
  },
  {
    title: 'Filtration & Recovery Equipment',
    desc: 'Gravity filters, self-cleaning disk filters and recovery equipment that optimize operations and product quality.',
    href: '/services-support#procurement',
  },
  {
    title: 'Procurement & Spares',
    desc: 'End-to-end purchasing of process equipment, packages, spares and consumables — one accountable partner for the whole cycle.',
    href: '/services-support#procurement',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Consult',
    desc: 'We evaluate your project needs, feedstock and capacity targets, and outline clear technical requirements.',
  },
  {
    step: '02',
    title: 'Source',
    desc: 'We identify and shortlist the technology providers best suited to your project — on merit, not commission.',
  },
  {
    step: '03',
    title: 'Procure',
    desc: 'We obtain all necessary equipment and services, coordinating vendors, timelines, quality and delivery.',
  },
  {
    step: '04',
    title: 'Commission',
    desc: 'We stay engaged through installation and start-up to ensure operational readiness and promised performance.',
  },
]

const stats = [
  { value: '30+', label: 'Years of industry experience' },
  { value: '3', label: 'Pillars: Procurement, Sourcing, Consulting' },
  { value: '360°', label: 'Delivery, concept to commissioning' },
  { value: '100%', label: 'Vendor-neutral advice' },
]

function AnimSection({ children, className = '' }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ViewMoreArrow({ href, className = '' }) {
  return (
    <Link to={href} className={`view_more inline-flex items-center gap-2 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
        <g transform="translate(9 6)">
          <rect width="27" height="27" fill="transparent" />
          <path d="M-17670.611-21974.445l4.531,4.531-4.531,4.531" transform="translate(17682.01 21982.777)" fill="none" stroke="currentColor" strokeWidth="1" />
        </g>
      </svg>
    </Link>
  )
}

export default function HomePage() {
  return (
    <div>
      {/* ===== HERO BANNER ===== */}
      <section className="home_banner relative overflow-hidden">
        <picture>
          <source media="(max-width: 767px)" srcSet="/Oleochemical.png" />
          <img
            src="/desktop.png"
            alt="Setu Industrial Partners oleochemical plant"
            className="w-full block"
            style={{ minHeight: '400px', maxHeight: '90vh', objectFit: 'cover' }}
          />
        </picture>
        <div className="new_banner_text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-5">
          <motion.h2
            initial={{ opacity: 0, y: -48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-white font-light mb-[10px]"
            style={{ fontSize: '50px', lineHeight: '1.2' }}
          >
            One Partner, Concept to Commissioning
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-white font-light"
            style={{ fontSize: '34px', lineHeight: '43px' }}
          >
            Procurement · Right-Partner Sourcing · Consulting
          </motion.h3>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="home_who_we_are text-center py-[70px_0_30px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection>
            <h1 className="text-[48px] text-blubrand font-bold mb-[35px]">
              Built Right. Sourced Smart. Running Profitably.
            </h1>
            <blockquote className="text-[24px] font-light text-black px-[75px] pb-[20px] leading-[1.5] max-w-5xl mx-auto">
              Setu Industrial Partners is an{' '}
              <strong>independent partner for the oils &amp; fats, oleochemical and biodiesel sectors.</strong>{' '}
              <em>Not tied to any single manufacturer or product line, we are your single point of contact for procurement, right-partner sourcing and consulting.</em>
            </blockquote>
          </AnimSection>
        </div>
      </section>

      {/* ===== CAPABILITIES GRID ===== */}
      <section className="we-deliver-box bg-lightbg pb-[75px]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <AnimSection key={i}>
                <div className="relative bg-primary text-white p-8 h-full group overflow-hidden min-h-[240px] flex flex-col">
                  <div className="absolute inset-0 bg-[#FFDD00eb] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <h3 className="text-[18px] font-bold relative z-10 group-hover:text-black transition-colors mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-[13px] leading-[20px] relative z-10 text-white/80 group-hover:text-black transition-colors">
                    {cap.desc}
                  </p>
                  <Link to={cap.href} className="streched_link" />
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="py-[80px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="title_head mb-12">
            <AnimSection>
              <h2 className="text-[30px] font-bold text-black mb-2">How We Work</h2>
              <h4 className="text-[59px] text-blubrand font-bold">End-to-End, One Accountable Partner</h4>
            </AnimSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-t-4 border-accent pt-6"
              >
                <span className="text-[48px] font-bold text-blubrand/20 block leading-none mb-3">{s.step}</span>
                <h3 className="text-[20px] font-bold text-blubrand mb-3">{s.title}</h3>
                <p className="text-[13px] text-body leading-[21px]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY SETU ===== */}
      <section className="py-[80px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2">
              <AnimSection>
                <div className="title_head">
                  <h2 className="text-[30px] font-bold text-black">Why Setu:</h2>
                  <h4 className="text-[58px] font-bold text-blubrand mb-8">An Independent Bridge to the Right Technology</h4>
                </div>
                <blockquote className="text-[24px] font-light leading-[32px] text-black mb-8">
                  We leverage our extensive network and expertise to deliver solutions tailored to your specific needs — guaranteeing that your plant is built right, sourced smart, and operates profitably.
                </blockquote>
                <ViewMoreArrow href="/about-us" className="-ml-2.5" />
              </AnimSection>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {stats.map((st, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blubrand text-white p-8"
                >
                  <h3 className="text-[42px] font-bold relative mb-5 after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[50px] after:h-[1px] after:bg-white">
                    {st.value}
                  </h3>
                  <p className="text-[14px] mt-[18px]">{st.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="home_csr bg-[#292929] py-[100px]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="home_people bg-white p-[50px_65px] h-full">
                <div className="title_head">
                  <h2 className="text-[30px] font-bold text-black">Leadership</h2>
                  <h4 className="text-[42px] font-bold text-blubrand mb-5 leading-tight">Experience You Can Build On</h4>
                  <ul className="space-y-3 mb-5">
                    {[
                      '30+ years in process-equipment industries',
                      'Turnkey plant delivery and critical process equipment',
                      'International market development across Africa and beyond',
                      'Procurement, vendor development and concept-to-commissioning expertise',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-body leading-[20px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ViewMoreArrow href="/people" className="-ml-2.5 mt-2.5" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-primary p-[50px_65px] flex flex-col justify-center"
            >
              <div className="title_head">
                <h2 className="text-[30px] font-bold text-white">Our Commitment</h2>
                <h4 className="text-[42px] font-bold text-accent mb-5 leading-tight">A Seamless Journey, Start to Finish</h4>
                <p className="text-[14px] text-white/80 leading-[22px] mb-5">
                  From the first feasibility discussion to the day your plant reaches design performance, you deal with one accountable partner. We put your interests first — every recommendation is independent, every vendor earns their place on merit.
                </p>
                <ViewMoreArrow href="/enquiry" className="-ml-2.5 mt-2.5 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY FORM SECTION ===== */}
      <EnquirySection />
    </div>
  )
}

function EnquirySection() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', country: '', requirement: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-[80px] bg-primary">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimSection className="text-center mb-10">
          <h2 className="text-[30px] font-bold text-white">Get In Touch</h2>
          <h4 className="text-[48px] font-bold text-accent">Send Us Your Enquiry</h4>
        </AnimSection>

        {submitted ? (
          <div className="text-center py-12">
            <p className="text-accent text-2xl font-bold">Thank You!</p>
            <p className="text-white mt-3">We'll respond to your enquiry shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text" placeholder="Full Name *" required
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
              className="bg-white/10 border border-white/30 text-white placeholder-white/50 px-4 py-3 text-sm outline-none focus:border-accent font-cairo"
            />
            <input
              type="email" placeholder="Email Address *" required
              value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
              className="bg-white/10 border border-white/30 text-white placeholder-white/50 px-4 py-3 text-sm outline-none focus:border-accent font-cairo"
            />
            <input
              type="text" placeholder="Company Name"
              value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
              className="bg-white/10 border border-white/30 text-white placeholder-white/50 px-4 py-3 text-sm outline-none focus:border-accent font-cairo"
            />
            <input
              type="tel" placeholder="Phone Number"
              value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
              className="bg-white/10 border border-white/30 text-white placeholder-white/50 px-4 py-3 text-sm outline-none focus:border-accent font-cairo"
            />
            <input
              type="text" placeholder="Country"
              value={form.country} onChange={e => setForm({ ...form, country: e.target.value })}
              className="bg-white/10 border border-white/30 text-white placeholder-white/50 px-4 py-3 text-sm outline-none focus:border-accent md:col-span-2 font-cairo"
            />
            <textarea
              placeholder="Your Requirement / Message"
              rows={4}
              value={form.requirement}
              onChange={e => setForm({ ...form, requirement: e.target.value })}
              className="bg-white/10 border border-white/30 text-white placeholder-white/50 px-4 py-3 text-sm outline-none focus:border-accent md:col-span-2 resize-none font-cairo"
            />
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-accent text-black font-bold px-12 py-4 text-sm uppercase tracking-wider hover:bg-accent-dark transition-colors"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
