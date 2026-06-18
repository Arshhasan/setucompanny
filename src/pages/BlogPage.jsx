import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageHero from '../components/ui/PageHero'

const BASE_BLOG = 'https://mectech.co.in/public/upload/blog/'

const blogs = [
  {
    slug: 'how-castor-oil-is-made-complete-manufacturing-process-mectech',
    title: 'How Castor Oil is Made: Complete Manufacturing Process',
    excerpt: 'Castor oil is derived from castor beans through a series of well-defined processes. This article covers the complete manufacturing process from seed preparation to final oil production.',
    img: BASE_BLOG + 'castor-oil-manufacturing.jpg',
    date: 'January 2024',
    tags: ['Oil Processing', 'Manufacturing'],
  },
  {
    slug: '3-crucial-factors-to-consider-while-choosing-cooking-oils',
    title: '3 Crucial Factors to Consider While Choosing Cooking Oils',
    excerpt: 'With so many cooking oil options available, making the right choice can be overwhelming. Here are three key factors to guide your decision for healthier cooking.',
    img: BASE_BLOG + 'cooking-oils.jpg',
    date: 'December 2023',
    tags: ['Health', 'Cooking Oil'],
  },
  {
    slug: 'everything-you-need-to-know-about-the-enzymatic-process-for-producing-biodiesel',
    title: 'Everything You Need to Know About the Enzymatic Process for Producing Biodiesel',
    excerpt: 'The enzymatic biodiesel production process offers several advantages over conventional methods. This comprehensive guide explores the technology and its applications.',
    img: BASE_BLOG + 'biodiesel-enzymatic.jpg',
    date: 'November 2023',
    tags: ['Bio-Diesel', 'Technology'],
  },
  {
    slug: 'winterization-of-rice-bran-oil-process-benefits-and-why-mectech-does-it-best',
    title: 'Winterization of Rice Bran Oil: Process, Benefits & Why Mectech Does It Best',
    excerpt: 'Rice bran oil winterization removes waxes to produce a clear, stable oil. Learn about the process and why Mectech\'s technology delivers superior results.',
    img: BASE_BLOG + 'rice-bran-winterization.jpg',
    date: 'October 2023',
    tags: ['Rice Bran Oil', 'Winterization'],
  },
  {
    slug: 'advanced-processing-solutions-for-powder-lecithin-rapeseed-oil-mcts',
    title: 'Advanced Processing Solutions for Powder Lecithin, Rapeseed Oil & MCTs',
    excerpt: 'Modern oil processing demands specialized solutions for value-added products. Mectech provides cutting-edge technology for lecithin, rapeseed, and MCT production.',
    img: BASE_BLOG + 'advanced-processing.jpg',
    date: 'September 2023',
    tags: ['Lecithin', 'MCT', 'Value Added'],
  },
  {
    slug: 'oil-s-well-that-ends-well',
    title: "Oil's Well That Ends Well",
    excerpt: 'A look at how Mectech has shaped the global oil processing industry over five decades, delivering innovative solutions across 30+ countries worldwide.',
    img: BASE_BLOG + 'oils-well.jpg',
    date: 'August 2023',
    tags: ['Company', 'Innovation'],
  },
  {
    slug: 'deodorization-process-in-edible-oil-refining-complete-guide-mectech',
    title: 'Deodorization Process in Edible Oil Refining: Complete Guide',
    excerpt: 'Deodorization is the final and critical step in edible oil refining. This guide covers the complete deodorization process, equipment, and parameters.',
    img: BASE_BLOG + 'deodorization.jpg',
    date: 'July 2023',
    tags: ['Refining', 'Deodorization', 'Technology'],
  },
  {
    slug: 'sunflower-oil-refining-process-technology-benefits-and-industrial-applications-mectech',
    title: 'Sunflower Oil Refining Process: Technology, Benefits & Industrial Applications',
    excerpt: 'Sunflower oil is one of the most widely consumed vegetable oils. Learn about the complete refining process and industrial applications.',
    img: BASE_BLOG + 'sunflower-refining.jpg',
    date: 'June 2023',
    tags: ['Sunflower Oil', 'Refining'],
  },
]

const allTags = [...new Set(blogs.flatMap(b => b.tags))]

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

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All'
    ? blogs
    : blogs.filter(b => b.tags.includes(activeTag))

  return (
    <div>
      <PageHero title="BLOG" breadcrumb="Home / Blog" />

      <section className="py-[70px] bg-lightbg">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Tag Filter */}
          <AnimSection className="mb-10 flex flex-wrap gap-3">
            {['All', ...allTags].map((tag, i) => (
              <button
                key={i}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 text-sm font-bold transition-colors border ${
                  activeTag === tag
                    ? 'bg-blubrand text-white border-blubrand'
                    : 'bg-white text-body border-[#ddd] hover:border-blubrand hover:text-blubrand'
                }`}
              >
                {tag}
              </button>
            ))}
          </AnimSection>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((blog, i) => (
              <AnimSection key={blog.slug} delay={i * 0.05}>
                <div className="blog-card bg-white shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className="overflow-hidden" style={{ height: '220px' }}>
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={e => {
                        e.target.src = `https://mectech.co.in/public/f/images/home-img${(i % 6) + 1}.jpg`
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {blog.tags.map((t, ti) => (
                        <span key={ti} className="text-xs bg-lightbg text-blubrand px-2 py-1 font-bold">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-[15px] font-bold text-black mb-3 line-clamp-2 group-hover:text-blubrand transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-[13px] text-body leading-[21px] mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-body">{blog.date}</span>
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="text-sm font-bold text-blubrand hover:text-primary transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
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
