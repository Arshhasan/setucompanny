import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EnquiryFloat() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setOpen(false); setSubmitted(false) }, 2000)
  }

  return (
    <>
      {/* Sticky enquiry button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-primary text-white text-xs font-bold tracking-widest uppercase py-3 px-2 shadow-lg hover:bg-primary-light transition-colors"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        Enquiry
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[9998]"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed right-0 top-0 h-full w-full max-w-[420px] bg-white z-[9999] overflow-y-auto shadow-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-primary">Quick Enquiry</h3>
                  <button onClick={() => setOpen(false)} className="text-body text-xl bg-transparent border-0 cursor-pointer">✕</button>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <p className="text-blubrand text-lg font-bold">Thank you!</p>
                    <p className="text-body mt-2">We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-blubrand font-cairo"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-blubrand font-cairo"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-blubrand font-cairo"
                    />
                    <input
                      type="text"
                      placeholder="Country"
                      value={form.country}
                      onChange={e => setForm({ ...form, country: e.target.value })}
                      className="w-full border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-blubrand font-cairo"
                    />
                    <textarea
                      placeholder="Message / Requirement"
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-[#ddd] px-4 py-3 text-sm outline-none focus:border-blubrand font-cairo resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 text-sm font-bold uppercase tracking-wider hover:bg-primary-light transition-colors"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
