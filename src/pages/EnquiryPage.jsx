import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia', 'Austria',
  'Azerbaijan', 'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Bhutan', 'Bolivia',
  'Brazil', 'Bulgaria', 'Cambodia', 'Cameroon', 'Canada', 'Chile', 'China', 'Colombia',
  'Congo', 'Croatia', 'Czech Republic', 'Denmark', 'Ecuador', 'Egypt', 'Ethiopia',
  'Finland', 'France', 'Germany', 'Ghana', 'Greece', 'Hungary', 'India', 'Indonesia',
  'Iran', 'Iraq', 'Ireland', 'Italy', 'Ivory Coast', 'Japan', 'Jordan', 'Kazakhstan',
  'Kenya', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Libya', 'Malaysia', 'Malawi',
  'Mexico', 'Morocco', 'Mozambique', 'Myanmar', 'Nepal', 'Netherlands', 'New Zealand',
  'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Peru', 'Philippines', 'Poland',
  'Portugal', 'Qatar', 'Romania', 'Russia', 'Saudi Arabia', 'Senegal', 'Singapore',
  'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Sweden', 'Switzerland',
  'Syria', 'Taiwan', 'Tanzania', 'Thailand', 'Tunisia', 'Turkey', 'UAE', 'Uganda',
  'UK', 'Ukraine', 'USA', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe',
]

const departments = [
  { name: 'Sales & Business Development', email: 'sales@mectech.co.in', phone: '+91-124-4700800' },
  { name: 'Technical Queries', email: 'technical@mectech.co.in', phone: '+91-124-4700800' },
  { name: 'After Sales Service', email: 'service@mectech.co.in', phone: '+91-124-4700800' },
  { name: 'General Enquiries', email: 'enquiries@mectech.co.in', phone: '+91-124-4700800' },
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

export default function EnquiryPage() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', country: '',
    products: '', capacity: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero title="CONTACT US" breadcrumb="Home / Contact Us" />

      <section className="py-[70px] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimSection>
                <h2 className="text-[30px] font-bold text-black mb-2">Send Us Your Enquiry</h2>
                <h4 className="text-[48px] font-bold text-blubrand mb-8">Get In Touch</h4>
              </AnimSection>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-lightbg p-10 text-center"
                >
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-[24px] font-bold text-blubrand mb-3">Thank You!</h3>
                  <p className="text-[15px] text-body">
                    Your enquiry has been received. Our team will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <AnimSection delay={0.1}>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="contact_input">
                      <input
                        type="text" placeholder="First Name *" required
                        value={form.name} onChange={set('name')}
                        className="w-full border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-blubrand font-cairo text-body"
                      />
                    </div>
                    <div className="contact_input">
                      <input
                        type="email" placeholder="Email Address *" required
                        value={form.email} onChange={set('email')}
                        className="w-full border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-blubrand font-cairo text-body"
                      />
                    </div>
                    <div className="contact_input">
                      <input
                        type="text" placeholder="Company Name"
                        value={form.company} onChange={set('company')}
                        className="w-full border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-blubrand font-cairo text-body"
                      />
                    </div>
                    <div className="contact_input">
                      <input
                        type="tel" placeholder="Phone / WhatsApp Number"
                        value={form.phone} onChange={set('phone')}
                        className="w-full border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-blubrand font-cairo text-body"
                      />
                    </div>
                    <div className="contact_input md:col-span-2">
                      <select
                        value={form.country} onChange={set('country')}
                        className="w-full border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-blubrand font-cairo text-body bg-white"
                      >
                        <option value="">Select Country</option>
                        {countries.map((c, i) => (
                          <option key={i} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="contact_input md:col-span-2">
                      <input
                        type="text" placeholder="Products / Technologies Interested In"
                        value={form.products} onChange={set('products')}
                        className="w-full border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-blubrand font-cairo text-body"
                      />
                    </div>
                    <div className="contact_input md:col-span-2">
                      <input
                        type="text" placeholder="Capacity Required (TPD)"
                        value={form.capacity} onChange={set('capacity')}
                        className="w-full border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-blubrand font-cairo text-body"
                      />
                    </div>
                    <div className="contact_input md:col-span-2">
                      <textarea
                        placeholder="Detailed Requirement / Message"
                        rows={5} value={form.message} onChange={set('message')}
                        className="w-full border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-blubrand font-cairo text-body resize-none"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="bg-primary text-white font-bold px-12 py-4 text-sm uppercase tracking-wider hover:bg-primary-light transition-colors"
                      >
                        Submit Enquiry
                      </button>
                    </div>
                  </form>
                </AnimSection>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <AnimSection delay={0.2}>
                <div className="bg-primary text-white p-8 mb-6">
                  <h3 className="text-[18px] font-bold text-accent mb-6 uppercase">Corporate Office</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <img src="/assets/images/location.svg" alt="" className="w-5 h-5 mt-0.5 flex-shrink-0 invert" />
                      <p className="text-[13px] leading-[21px]">
                        366, Phase - 2, Udyog Vihar,<br />
                        Gurgaon - 122 016,<br />
                        Haryana, India.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <img src="/assets/images/Icon-awesome-phone.svg" alt="" className="w-4 h-4 mt-1 flex-shrink-0 invert" />
                      <a href="tel:+91-0124-4700800" className="text-[13px] hover:text-accent">
                        +91-(0124)-4700800 (30 lines)
                      </a>
                    </div>
                    <div className="flex gap-3">
                      <img src="/assets/images/Icon-material-email.svg" alt="" className="w-4 h-4 mt-1 flex-shrink-0 invert" />
                      <a href="mailto:enquiries@mectech.co.in" className="text-[13px] hover:text-accent">
                        enquiries@mectech.co.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-lightbg p-6">
                  <h3 className="text-[13px] font-bold text-primary mb-5 uppercase">Department Contacts</h3>
                  <div className="space-y-4">
                    {departments.map((d, i) => (
                      <div key={i} className="border-b border-[#ddd] pb-3 last:border-0">
                        <h4 className="text-sm font-bold text-black mb-1">{d.name}</h4>
                        <p className="text-xs text-body">{d.email}</p>
                        <p className="text-xs text-body">{d.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
