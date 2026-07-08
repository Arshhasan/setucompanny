import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const BASE = 'https://mectech.co.in/public/f/images/'

const categories = [
  {
    img: BASE + 'home-img1.jpg',
    icon: BASE + 'home-icon1.png',
    title: 'Oil Seed Preparation',
    desc: 'From cleaning to conditioning, our solutions set the stage for efficient oil extraction.',
    href: '/seed-preparation',
  },
  {
    img: BASE + 'home-img2.jpg',
    icon: BASE + 'home-icon2.png',
    title: 'Oil Extraction',
    desc: 'We pave the way for industries to unlock the full value of their raw materials in oil extraction.',
    href: '/solvent-extraction-plant',
  },
  {
    img: BASE + 'home-img3.jpg',
    icon: BASE + 'home-icon3.png',
    title: 'Oil & Fats Refining',
    desc: 'Our precision-driven refining solutions elevate oil and fats to the highest standards of quality.',
    href: '/vegetable-oil-refinery-plant',
  },
  {
    img: BASE + 'home-img4.jpg',
    icon: BASE + 'home-icon4.png',
    title: 'Oil Processing',
    desc: 'Our oil processing solutions blend technology and tradition, transforming raw materials into valuable products.',
    href: '/palm-oil-refining-plant',
  },
  {
    img: BASE + 'home-img5.jpg',
    icon: BASE + 'home-icon5.png',
    title: 'Oleo Chemical',
    desc: 'From nature to innovation, Our oleo chemical solutions bridge the gap.',
    href: '/glycerine-refining-plant',
  },
  {
    img: BASE + 'home-img6.jpg',
    icon: BASE + 'home-icon6.png',
    title: 'Filtration',
    desc: 'Our advanced filtration processes ensure purity, clarity, and quality across a range of industries and applications.',
    href: '/mecklear-gravity-filteration-process',
  },
  {
    img: BASE + 'environmental-pollution-industry-exterior-daylight.jpg',
    icon: BASE + 'Bio-Diesel.png',
    title: 'Bio-Diesel',
    desc: 'The plant provided by Mectech is capable of manufacturing Bio-diesel conforming to EU (EN 14214) and BIS 15607:2005 standards.',
    href: '/bio-diesel-manufacturing-plant',
  },
  {
    img: BASE + 'industrial-zonethe-equipment-oil-refiningnumber-electric-motors-with-reducers-food-industry-details-distribution-system-modern-brewery-equipment-industrial-tools.jpg',
    icon: BASE + 'Pilot-Plant-icon.png',
    title: 'Pilot Plant',
    desc: 'Mectech is one of the Top Pilot Plant suppliers in India and abroad.',
    href: '/pilot-plant-manufacturer',
  },
  {
    img: BASE + 'teamwork-dim-modern-lab.jpg',
    icon: BASE + 'Value-Added-Projects-Plants.png',
    title: 'Value Added Projects/Plants',
    desc: 'Explore Our Niche Value-Added Plant Range.',
    href: '/bakery-shortening-margarine',
  },
]

const offerings = [
  {
    id: 'Engineering',
    title: 'Engineering',
    desc: 'We provide best in class engineering services for your plant',
    img: BASE + 'OurOfferings-engineering.jpg',
  },
  {
    id: 'Technology',
    title: 'Technology',
    desc: 'Technology is what ensures our leadership in Oil & Fats Industry solutions',
    img: BASE + 'Our-Offerings-technology.jpg',
  },
  {
    id: 'Services',
    title: 'Services',
    desc: 'From the design stage to operation of your plant and beyond, we are there',
    img: BASE + 'Our-Offerings-services.jpg',
  },
  {
    id: 'Innovation',
    title: 'Innovation',
    desc: 'Constantly innovate to meet the changing industrial requirement of the customer with the changing market dynamics',
    img: BASE + 'Innovation-img.jpg',
  },
]

const innovativeProjects = [
  { img: BASE + 'Innovative-one.jpg', title: 'Bakery Shortening & Margarine', href: '/bakery-shortening-margarine' },
  { img: BASE + 'Innovative-two.jpg', title: 'Mct From Coconut Oil & Pko', href: '/mct-from-coconut-oil-and-pko' },
  { img: BASE + 'Innovative-three.jpg', title: 'Lecithin', href: '/lecithin-plant' },
  { img: BASE + 'Innovative-four.jpg', title: 'Tocotrienol', href: '/tocotrienol' },
  { img: BASE + 'Innovative-five.jpg', title: 'Spent Earth Oil Recovery', href: '/spent-earth-oil-recovery' },
]

const clientLogos = Array.from({ length: 19 }, (_, i) => `/assets/clients/snew_logo${String(i + 2).padStart(2, '0')}.png`)

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
  const [activeTab, setActiveTab] = useState(0)
  const [visibleCards, setVisibleCards] = useState(6)

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
            Redefining Precision at Every Step
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-white font-light"
            style={{ fontSize: '34px', lineHeight: '43px' }}
          >
            Elevating industries through quality solutions
          </motion.h3>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="home_who_we_are text-center py-[70px_0_30px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection>
            <h1 className="text-[48px] text-blubrand font-bold mb-[35px]">
              We Deliver Plants that Perform
            </h1>
            <blockquote className="text-[24px] font-light text-black px-[75px] pb-[20px] leading-[1.5] max-w-5xl mx-auto">
              We are one of the{' '}
              <strong>leading Oil Processing Plant Manufacturers & Suppliers globally.</strong>{' '}
              <em>We are into manufacturing of customized plant & machinery, turnkey projects for Oil & Fats Industry.</em>
            </blockquote>
            <ViewMoreArrow href="/infrastructure" className="mt-6 mx-auto justify-center" />
          </AnimSection>
        </div>
      </section>

      {/* ===== WE DELIVER BOX ===== */}
      <section className="we-deliver-box bg-lightbg pb-[75px]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {categories.slice(0, visibleCards).map((cat, i) => (
              <div key={i} className="home_box1 relative overflow-hidden group">
                <figure>
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full object-cover"
                    style={{ height: '280px' }}
                  />
                </figure>
                <div className="home_box_detail absolute inset-0 flex flex-col items-center justify-center text-white px-[50px] transition-all">
                  {/* Yellow overlay on hover */}
                  <div className="absolute inset-0 bg-[#FFDD00eb] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="home_icon relative z-10 mb-3">
                    <img src={cat.icon} alt="" className="w-12 h-12 object-contain group-hover:invert transition-all" />
                  </div>
                  <h3 className="text-[18px] font-bold relative z-10 group-hover:text-black transition-colors my-2.5">
                    {cat.title}
                  </h3>
                  <p className="text-[13px] relative z-10 text-black hidden group-hover:block">
                    {cat.desc}
                  </p>
                  <Link to={cat.href} className="streched_link" />
                </div>
              </div>
            ))}
          </div>
          {visibleCards < categories.length && (
            <div className="text-center pt-[30px]">
              <button
                onClick={() => setVisibleCards(categories.length)}
                className="text-[13px] text-body inline-flex items-center gap-2 hover:text-blubrand transition-colors bg-transparent border-0 cursor-pointer font-cairo"
              >
                View More{' '}
                <img src={BASE + 'product-viewmore.svg'} alt="" className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== OUR OFFERINGS ===== */}
      <section className="home-Our-Offerings py-[80px] bg-white">
        <div className="pl-[100px] pr-4">
          <div className="container mx-auto max-w-7xl">
            <div className="title_head mb-8">
              <AnimSection>
                <h2 className="text-[30px] font-bold text-black mb-2">Our Offerings</h2>
                <h4 className="text-[59px] text-blubrand font-bold mb-[50px]">Transforming Industries for Tomorrow</h4>
              </AnimSection>
            </div>

            <div className="offering-tabs flex gap-8">
              {/* Tab list - desktop */}
              <div className="hidden lg:block w-[300px] flex-shrink-0 pr-8">
                <ul className="space-y-8">
                  {offerings.map((o, i) => (
                    <li
                      key={i}
                      className="relative cursor-pointer"
                      onClick={() => setActiveTab(i)}
                    >
                      {activeTab === i && (
                        <span className="absolute -left-[50px] top-0 w-[10px] h-full bg-[#FFB300]" />
                      )}
                      <h3 className={`text-[18px] font-bold ${activeTab === i ? 'text-blubrand' : 'text-black'}`}>
                        {o.title}
                      </h3>
                      <p className="text-[13px] text-[#292929]">{o.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tab content */}
              <div className="flex-1">
                {/* Desktop */}
                <div className="hidden lg:block img-offering relative">
                  <motion.figure
                    key={activeTab}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={offerings[activeTab].img}
                      alt={offerings[activeTab].title}
                      className="w-full object-cover"
                      style={{ maxHeight: '500px' }}
                    />
                  </motion.figure>
                </div>

                {/* Mobile accordion */}
                <div className="lg:hidden space-y-4">
                  {offerings.map((o, i) => (
                    <div key={i} className="border-b border-[#ddd]">
                      <button
                        className="w-full text-left py-4 flex justify-between items-center bg-transparent border-0 cursor-pointer font-cairo"
                        onClick={() => setActiveTab(activeTab === i ? -1 : i)}
                      >
                        <div>
                          <h3 className="text-[18px] font-bold text-black">{o.title}</h3>
                          <p className="text-[13px] text-[#292929]">{o.desc}</p>
                        </div>
                        <span className="text-xl text-blubrand ml-4">{activeTab === i ? '−' : '+'}</span>
                      </button>
                      {activeTab === i && (
                        <div className="pb-4">
                          <img src={o.img} alt={o.title} className="w-full" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INNOVATIVE PROJECTS ===== */}
      <section className="innovation-project py-[80px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="title_head relative mb-[50px]">
            <AnimSection>
              <h2 className="text-[30px] font-bold text-black">Innovative Projects, Transformative Impact:</h2>
              <h4 className="text-[58px] font-bold text-blubrand mb-[30px]">Mectech's Engineering Excellence</h4>
              <p className="text-[15px] text-body" style={{ width: '59%' }}>
                At Mectech Process Engineers Pvt. Ltd., projects aren't just tasks to be completed; they are avenues for innovation, progress, and transformation.
              </p>
            </AnimSection>
            <div className="plus_project hidden lg:block bg-blubrand text-white" style={{ width: 233, padding: '45px 60px', position: 'absolute', top: 0, right: 0 }}>
              <h3 className="text-[48px] font-bold relative mb-5 after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[50px] after:h-[1px] after:bg-white">
                650+
              </h3>
              <p className="text-[15px] mt-[18px]">Projects Supplied</p>
            </div>
          </div>

          {/* Slider */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {innovativeProjects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="innovate_box relative overflow-hidden group"
              >
                <figure>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ height: '250px' }}
                  />
                </figure>
                <div className="project-short absolute bottom-0 left-0 right-0 p-4 text-white"
                  style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)' }}
                >
                  <h3 className="text-sm font-bold">{p.title}</h3>
                  <Link to={p.href} className="streched_link" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRAILBLAZER SECTION ===== */}
      <section className="innovate_project2 pb-[90px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="lg:w-1/2">
              <AnimSection>
                <div className="title_head">
                  <h2 className="text-[30px] font-bold text-black">Mectech:</h2>
                  <h4 className="text-[58px] font-bold text-blubrand mb-8">A Trailblazer in the Oil & Fats sector</h4>
                </div>
                <div className="bg-blubrand text-white inline-block p-8 mb-8">
                  <h3 className="text-[48px] font-bold">50</h3>
                  <p className="text-[15px] mt-4">Years of experience</p>
                </div>
              </AnimSection>
            </div>
            <div className="lg:w-1/2 relative">
              <figure>
                <img src={BASE + 'Trailblazer-img.jpg'} alt="Mectech Trailblazer" className="w-full" />
              </figure>
              <div className="innovate-font3 py-8">
                <AnimSection>
                  <blockquote className="text-[24px] font-light leading-[30px] pr-0 lg:pr-[235px]">
                    Mectech, today has emerged as a one of the top Refinery Plant manufacturers in India and abroad one stop shop for the Oil & Fats Industry at large.
                  </blockquote>
                  <ViewMoreArrow href="/about-us" className="mt-5 -ml-2.5" />
                </AnimSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PEOPLE & SUSTAINABILITY ===== */}
      <section className="home_csr bg-[#292929] py-[130px]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* People */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="home_people bg-white p-[50px_65px_35px]">
                <div className="title_head">
                  <h2 className="text-[30px] font-bold text-black">People</h2>
                  <h4 className="text-[48px] font-bold text-blubrand mb-5">Empowering Success through People</h4>
                  <p className="text-[13px] text-body leading-[18px] mb-5">
                    At Mectech Process Engineers Pvt. Ltd., we firmly believe that behind every technological marvel and innovative solution is the collective brilliance of our people.
                  </p>
                  <ViewMoreArrow href="/people" className="-ml-2.5 mt-2.5" />
                </div>
              </div>
              <figure style={{ height: '336px', overflow: 'hidden' }}>
                <img src={BASE + 'man-safety-equipment-work.jpg'} alt="People" className="w-full h-full object-cover" />
              </figure>
            </motion.div>

            {/* Sustainability */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="home_sustainbility relative"
            >
              <picture>
                <source media="(min-width:700px)" srcSet={BASE + 'Sustainabilityimages.jpg'} />
                <source media="(min-width:200px)" srcSet={BASE + 'm-sustainbility-pic.jpg'} />
                <img src={BASE + 'Sustainabilityimages.jpg'} alt="Sustainability" className="w-full object-cover" />
              </picture>
              <div className="absolute top-0 left-0 right-0 p-[50px_65px] z-10">
                <div className="title_head">
                  <h2 className="text-[30px] font-bold text-white">Sustainability</h2>
                  <h4 className="text-[48px] font-bold text-white mb-5">Sustainable Solutions, Lasting Impact</h4>
                  <p className="text-[13px] text-white leading-[18px] mb-5">
                    In a world increasingly conscious of its environmental impact, Mectech Process Engineers Pvt. Ltd. takes the lead in marrying innovation with sustainability.
                  </p>
                  <ViewMoreArrow href="/sustainablity" className="-ml-2.5 mt-2.5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TOP CLIENTS ===== */}
      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimSection className="text-center mb-10">
            <h2 className="text-[30px] font-bold text-black">Our Top Clients</h2>
            <h4 className="text-[48px] font-bold text-blubrand">Trusted by Industry Leaders</h4>
          </AnimSection>
          <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 items-center justify-items-center">
            {clientLogos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img src={logo} alt={`Client ${i + 1}`} className="max-w-[80px] max-h-[50px] object-contain" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/clients"
              className="inline-block border border-blubrand text-blubrand px-8 py-3 text-sm font-bold hover:bg-blubrand hover:text-white transition-colors"
            >
              View All Clients
            </Link>
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
