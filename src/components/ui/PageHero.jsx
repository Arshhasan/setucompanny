import { motion } from 'framer-motion'

export default function PageHero({ title, breadcrumb, bgImage, className = '' }) {
  return (
    <section
      className={`relative pt-[120px] pb-[60px] text-center overflow-hidden ${className}`}
      style={{
        background: bgImage
          ? `linear-gradient(rgba(12,59,46,0.75), rgba(12,59,46,0.75)), url(${bgImage}) center/cover no-repeat`
          : '#0C3B2E',
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-[36px] font-bold mb-4"
        >
          {title}
        </motion.h1>
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/70 text-sm"
          >
            {breadcrumb}
          </motion.p>
        )}
        <div className="w-[60px] h-[3px] bg-[#FFB300] mx-auto mt-4" />
      </div>
    </section>
  )
}
