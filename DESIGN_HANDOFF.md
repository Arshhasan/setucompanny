# Mectech Process Engineers — Design Handoff Document
**Source:** https://www.mectech.co.in  
**Analyzed:** June 2026  
**Stack:** React 19 + Vite + Tailwind CSS + Framer Motion

---

## Table of Contents
1. [Complete Sitemap](#1-complete-sitemap)
2. [Design System](#2-design-system)
3. [React Component Hierarchy](#3-react-component-hierarchy)
4. [Tailwind Implementation Plan](#4-tailwind-implementation-plan)
5. [Framer Motion Animation Specs](#5-framer-motion-animation-specs)
6. [Mobile Responsive Layouts](#6-mobile-responsive-layouts)
7. [Asset Inventory](#7-asset-inventory)
8. [Implementation Notes](#8-implementation-notes)

---

## 1. Complete Sitemap

```
mectech.co.in (86 URLs total)
│
├── / (Home)
│
├── About
│   ├── /about-us
│   ├── /why-mectech
│   ├── /people
│   │   ├── /the-visionary-mr-ishwar-sahai
│   │   └── /mr-ankoor-sahaii
│   ├── /infrastructure
│   └── /sustainablity
│
├── Technology
│   ├── /technology (overview)
│   ├── /equipment
│   │
│   ├── Oil Seed Preparation
│   │   ├── /seed-preparation
│   │   └── /expeller
│   │
│   ├── Oil Extraction
│   │   └── /solvent-extraction-plant
│   │
│   ├── Oil & Fats Refining
│   │   ├── /vegetable-oil-refinery-plant
│   │   ├── /continuous-bleaching
│   │   ├── /continuous-deodorization
│   │   ├── /physical-refinery
│   │   ├── /chemical-refinery
│   │   ├── /winterization-dewaxing-plant
│   │   └── /fractionation-plant
│   │
│   ├── Oil-Specific Refineries
│   │   ├── /sesame-oil-refinery
│   │   ├── /mango-kernel-oil-process
│   │   ├── /cottonseed-oil-plant
│   │   ├── /palm-oil-refining-plant
│   │   ├── /rice-bran-oil-refining-plant
│   │   ├── /sun-flower-oil-refinery-plant
│   │   ├── /soyabean-oil-refinery-plant
│   │   ├── /corn-oil-refinery
│   │   ├── /groundnut-oil-refinery-plant
│   │   ├── /hazelnut-oil-refinery-plant
│   │   └── /canola-oil-refining-plant
│   │
│   ├── Oleo Chemicals
│   │   ├── /glycerine-refining-plant
│   │   ├── /esterification-plant
│   │   ├── /fatty-acid-plant-fractional-distillation
│   │   ├── /hydrogenation
│   │   ├── /soap-stock-splitting
│   │   ├── /continuous-saponification-plant
│   │   ├── /fat-splitting-plant
│   │   ├── /interesterification
│   │   ├── /glycerine-water-treatment-and-evaporation
│   │   ├── /double-scrubbing
│   │   ├── /castor-oil-derivatives
│   │   └── /palm-olein-to-super-olein
│   │
│   ├── Filtration
│   │   ├── /filtration (overview)
│   │   ├── /mecklear-gravity-filteration-process
│   │   ├── /vertical-pressure-leaf-filter
│   │   ├── /horizontal-pressure-leaf-filter
│   │   ├── /shining-filter
│   │   ├── /candle-filter
│   │   ├── /pulse-jet-candle-filter
│   │   ├── /self-cleaning-disk-filter
│   │   └── /automatic-brush-filter-strainer
│   │
│   ├── Bio-Diesel & Green Energy
│   │   └── /bio-diesel-manufacturing-plant
│   │
│   ├── Value-Added Products
│   │   ├── /bakery-shortening-margarine
│   │   ├── /mct-from-coconut-oil-and-pko
│   │   ├── /lecithin-plant
│   │   ├── /tocotrienol
│   │   └── /spent-earth-oil-recovery
│   │
│   └── Pilot Plant
│       └── /pilot-plant-manufacturer
│
├── Services
│   └── /services-support
│
├── Resources
│   ├── /media
│   │   ├── /media/jordan-exhibition
│   │   ├── /media/advanced-cost-effective-technology-for-bio-diesel-developed-by-mectech
│   │   ├── /media/mectech-is-supplying-50-tpd-glycerin-distillation-plant-in-eastern-india
│   │   ├── /media/100-tpd-hazel-nut-oil-physical-refinery-supplied-in-turkey
│   │   └── /media/india-s-largest-continuous-hydrogenation-plant-for-fatty-acid-commissioned
│   ├── /blog
│   │   ├── /blog/everything-you-need-to-know-about-the-enzymatic-process-for-producing-biodiesel
│   │   ├── /blog/exploring-some-healthiest-cooking-oils-and-their-medically-proven-properties
│   │   ├── /blog/medium-chain-triglycerides-overview-types-and-health-benefits
│   │   ├── /blog/3-crucial-factors-to-consider-while-choosing-cooking-oils
│   │   └── /blog/oil-s-well-that-ends-well
│   ├── /video
│   ├── /event-exhibitions
│   ├── /download
│   └── /career
│
├── Enquiry
│   └── /enquiry
│
└── Legal
    ├── /privacy-policy
    ├── /terms-conditions
    └── /sitemap
```

**Total Pages:** 86  
**Primary Language:** English (+ 13 additional: Arabic, Turkish, Russian, Persian, German, French, Chinese, Spanish, Portuguese, Hindi, Indonesian, Vietnamese)

---

## 2. Design System

### 2.1 Color Palette

```js
// tokens/colors.js
export const colors = {
  // Primary — Deep Industrial Navy
  primary: {
    900: '#0A1628',   // darkest — hero backgrounds
    800: '#0D1F3C',   // navbar background
    700: '#112244',   // section dark backgrounds
    600: '#1A3260',   // card backgrounds
    500: '#1E3A7A',   // primary brand blue
    400: '#2E5099',   // hover states
    300: '#4A6DB5',   // light accents
  },

  // Accent — Industrial Gold / Amber
  accent: {
    600: '#B8860B',   // darker gold
    500: '#D4A017',   // primary CTA / highlights
    400: '#E8B828',   // hover CTAs
    300: '#F5D060',   // light glow effects
  },

  // Neutral
  neutral: {
    900: '#111111',   // body text
    700: '#444444',   // secondary text
    500: '#888888',   // muted text / placeholders
    300: '#CCCCCC',   // borders / dividers
    200: '#E8E8E8',   // light bg sections
    100: '#F5F5F5',   // page backgrounds
    50:  '#FFFFFF',   // white
  },

  // Status
  success: '#22C55E',
  warning: '#F59E0B',
  error:   '#EF4444',
};
```

### 2.2 Typography

```js
// tokens/typography.js
// Recommended pairing for industrial B2B:
// Headings: Montserrat (bold authority) — already common in industrial sites
// Body: Inter (clarity at small sizes)
// Mono/data: JetBrains Mono (for specs, numbers)

export const typography = {
  fontFamily: {
    heading: "'Montserrat', 'Arial Black', sans-serif",
    body:    "'Inter', 'Helvetica Neue', Arial, sans-serif",
    mono:    "'JetBrains Mono', 'Courier New', monospace",
  },

  fontSize: {
    // Display (hero)
    'display-2xl': ['4.5rem',   { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
    'display-xl':  ['3.75rem',  { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
    'display-lg':  ['3rem',     { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],

    // Headings
    'h1': ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }],
    'h2': ['1.875rem', { lineHeight: '1.35', fontWeight: '600' }],
    'h3': ['1.5rem',  { lineHeight: '1.4', fontWeight: '600' }],
    'h4': ['1.25rem', { lineHeight: '1.45', fontWeight: '600' }],
    'h5': ['1.125rem', { lineHeight: '1.5', fontWeight: '500' }],
    'h6': ['1rem',    { lineHeight: '1.5', fontWeight: '500' }],

    // Body
    'body-xl': ['1.125rem', { lineHeight: '1.7' }],
    'body-lg': ['1rem',     { lineHeight: '1.7' }],
    'body-md': ['0.875rem', { lineHeight: '1.65' }],
    'body-sm': ['0.75rem',  { lineHeight: '1.6' }],

    // UI
    'label':   ['0.875rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '600', textTransform: 'uppercase' }],
    'caption': ['0.75rem',  { lineHeight: '1.4' }],
  },
};
```

### 2.3 Spacing Scale

```js
// tokens/spacing.js
// Uses standard 4px base unit
export const spacing = {
  px:   '1px',
  0.5:  '2px',
  1:    '4px',
  2:    '8px',
  3:    '12px',
  4:    '16px',
  5:    '20px',
  6:    '24px',
  8:    '32px',
  10:   '40px',
  12:   '48px',
  14:   '56px',
  16:   '64px',
  20:   '80px',
  24:   '96px',
  28:   '112px',
  32:   '128px',
  // Section padding
  'section-sm': '64px',    // mobile section padding
  'section-md': '96px',    // tablet section padding
  'section-lg': '128px',   // desktop section padding
};
```

### 2.4 Border Radius

```js
export const borderRadius = {
  none:  '0',
  sm:    '4px',
  md:    '8px',
  lg:    '12px',
  xl:    '16px',
  '2xl': '24px',
  full:  '9999px',
};
```

### 2.5 Shadows

```js
export const shadows = {
  'card-rest':  '0 2px 12px rgba(0,0,0,0.08)',
  'card-hover': '0 8px 32px rgba(0,0,0,0.16)',
  'nav':        '0 4px 24px rgba(10,22,40,0.25)',
  'glow-gold':  '0 0 40px rgba(212,160,23,0.25)',
  'glow-blue':  '0 0 40px rgba(30,58,122,0.40)',
  'inner':      'inset 0 2px 8px rgba(0,0,0,0.12)',
};
```

### 2.6 Breakpoints

```js
export const breakpoints = {
  sm:  '640px',   // mobile landscape
  md:  '768px',   // tablet portrait
  lg:  '1024px',  // tablet landscape / small desktop
  xl:  '1280px',  // desktop
  '2xl': '1536px', // wide desktop
};
```

---

## 3. React Component Hierarchy

```
App
├── Router
│   ├── Layout (shared shell)
│   │   ├── Navbar
│   │   │   ├── LanguageSwitcher
│   │   │   ├── Logo
│   │   │   ├── NavMenu
│   │   │   │   ├── NavItem (simple link)
│   │   │   │   └── NavDropdown (with MegaMenu for Technology)
│   │   │   │       └── MegaMenu
│   │   │   │           ├── MegaMenuColumn
│   │   │   │           └── MegaMenuLink
│   │   │   ├── NavCTA (Enquiry button)
│   │   │   └── MobileMenuToggle
│   │   │
│   │   ├── MobileDrawer (off-canvas)
│   │   │   ├── MobileNavAccordion
│   │   │   └── MobileLangSwitcher
│   │   │
│   │   └── Footer
│   │       ├── FooterBrand
│   │       ├── FooterNavGroup (×4 columns)
│   │       ├── FooterContact
│   │       ├── FooterSocial
│   │       ├── FooterPartner
│   │       └── FooterLegal
│   │
│   ├── pages/
│   │   ├── HomePage
│   │   │   ├── HeroSection
│   │   │   │   ├── HeroBackground (video/image)
│   │   │   │   ├── HeroTagline
│   │   │   │   ├── HeroSubtitle
│   │   │   │   └── HeroCTA (primary + secondary)
│   │   │   ├── StatsBar
│   │   │   │   └── StatItem (×4: 650+ projects, 50 years, 30+ countries, 2 facilities)
│   │   │   ├── BusinessCategoriesSection
│   │   │   │   └── CategoryCard (×8)
│   │   │   │       ├── CategoryIcon
│   │   │   │       ├── CategoryTitle
│   │   │   │       └── CategoryDescription
│   │   │   ├── OfferingsSection
│   │   │   │   └── OfferingPillar (×4: Engineering, Technology, Services, Innovation)
│   │   │   ├── VideoSection
│   │   │   │   └── VideoEmbed
│   │   │   ├── TopClientsSection
│   │   │   │   └── ClientLogoGrid
│   │   │   ├── ValueAddedSection
│   │   │   │   └── ValueCard
│   │   │   └── EnquiryFormSection (inline form)
│   │   │       └── EnquiryForm
│   │   │
│   │   ├── AboutPage
│   │   │   ├── PageHero
│   │   │   ├── CompanyOverview
│   │   │   ├── MissionVision
│   │   │   │   ├── MissionBlock
│   │   │   │   └── VisionBlock
│   │   │   ├── MilestonesTimeline
│   │   │   │   └── MilestoneItem (×6)
│   │   │   └── CertificationsGrid
│   │   │
│   │   ├── WhyMectechPage
│   │   │   ├── PageHero
│   │   │   ├── DifferentiatorsSection
│   │   │   │   └── DifferentiatorCard (×7)
│   │   │   │       ├── ComparisonChart (Mectech vs Industry)
│   │   │   │       └── SavingsCallout
│   │   │   └── GlobalReachSection
│   │   │       └── WorldMap
│   │   │
│   │   ├── PeoplePage
│   │   │   ├── PageHero
│   │   │   └── LeadershipGrid
│   │   │       └── LeaderCard (×2)
│   │   │
│   │   ├── TechnologyPage
│   │   │   ├── PageHero
│   │   │   ├── TechCategoryTabs
│   │   │   └── TechCategoryGrid
│   │   │       └── TechCard
│   │   │
│   │   ├── TechnologyDetailPage (template)
│   │   │   ├── PageHero
│   │   │   ├── ProcessOverview
│   │   │   ├── ProcessDiagram
│   │   │   ├── SpecificationsTable
│   │   │   ├── CapacityRange
│   │   │   ├── BenefitsList
│   │   │   ├── RelatedTechnologies
│   │   │   └── EnquirySidebar
│   │   │
│   │   ├── ServicesPage
│   │   │   ├── PageHero
│   │   │   ├── ServicesList
│   │   │   │   └── ServiceBlock
│   │   │   └── SupportProcess
│   │   │
│   │   ├── BlogPage
│   │   │   ├── PageHero
│   │   │   ├── TagFilterBar
│   │   │   ├── BlogGrid
│   │   │   │   └── BlogCard (×n)
│   │   │   │       ├── BlogThumbnail
│   │   │   │       ├── BlogTitle
│   │   │   │       └── BlogCTA
│   │   │   └── Pagination
│   │   │
│   │   ├── MediaPage
│   │   │   ├── PageHero
│   │   │   └── MediaGrid
│   │   │       └── MediaCard
│   │   │
│   │   └── EnquiryPage
│   │       ├── PageHero
│   │       ├── EnquiryFormFull
│   │       │   ├── FormField (text)
│   │       │   ├── FormSelect (country dropdown)
│   │       │   ├── FormTextarea
│   │       │   └── SubmitButton
│   │       └── ContactChannels
│   │           └── ContactChannel (×5 departments)
│   │
└── shared/
    ├── ui/
    │   ├── Button (variants: primary, secondary, ghost, icon)
    │   ├── Badge
    │   ├── Card
    │   ├── Tag
    │   ├── Divider
    │   ├── Spinner
    │   └── Toast
    ├── SectionHeader (title + subtitle pattern used across all sections)
    ├── PageHero (shared hero banner for interior pages)
    ├── CounterNumber (animated stat counter)
    ├── IconWrapper
    └── EnquiryForm (reused in multiple places)
```

---

## 4. Tailwind Implementation Plan

### 4.1 Install & Configure

```bash
npm install tailwindcss @tailwindcss/typography @tailwindcss/forms autoprefixer
npm install framer-motion react-router-dom
npm install react-intersection-observer  # for scroll-triggered animations
```

### 4.2 tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0A1628',
          800: '#0D1F3C',
          700: '#112244',
          600: '#1A3260',
          500: '#1E3A7A',
          400: '#2E5099',
          300: '#4A6DB5',
        },
        accent: {
          600: '#B8860B',
          500: '#D4A017',
          400: '#E8B828',
          300: '#F5D060',
        },
        neutral: {
          900: '#111111',
          700: '#444444',
          500: '#888888',
          300: '#CCCCCC',
          200: '#E8E8E8',
          100: '#F5F5F5',
          50:  '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'Arial Black', 'sans-serif'],
        body:    ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['4.5rem',   { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl':  ['3.75rem',  { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-lg':  ['3rem',     { lineHeight: '1.2' }],
      },
      spacing: {
        'section':    '96px',
        'section-sm': '64px',
        'section-lg': '128px',
      },
      boxShadow: {
        'card':       '0 2px 12px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.16)',
        'nav':        '0 4px 24px rgba(10,22,40,0.25)',
        'glow-gold':  '0 0 40px rgba(212,160,23,0.25)',
        'glow-blue':  '0 0 40px rgba(30,58,122,0.40)',
      },
      backgroundImage: {
        'hero-gradient':    'linear-gradient(135deg, #0A1628 0%, #1E3A7A 60%, #0D1F3C 100%)',
        'section-gradient': 'linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%)',
        'card-gradient':    'linear-gradient(135deg, #112244 0%, #1A3260 100%)',
        'gold-gradient':    'linear-gradient(90deg, #B8860B 0%, #E8B828 50%, #B8860B 100%)',
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'slide-up':     'slideUp 0.7s ease-out forwards',
        'count-up':     'countUp 2s ease-out forwards',
        'shimmer':      'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
```

### 4.3 Core Component Class Patterns

```jsx
// Navbar
<nav className="fixed top-0 w-full z-50 bg-primary-800/95 backdrop-blur-md shadow-nav">

// Hero Section
<section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">

// Section wrapper (reusable)
<section className="py-section-sm md:py-section lg:py-section-lg">

// Section inner container
<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

// Section header
<div className="text-center mb-12 lg:mb-16">
  <span className="text-accent-500 text-label tracking-widest uppercase mb-3 block">
    {eyebrow}
  </span>
  <h2 className="font-heading text-h1 text-primary-900 mb-4">{title}</h2>
  <p className="text-body-xl text-neutral-700 max-w-2xl mx-auto">{subtitle}</p>
</div>

// Primary CTA Button
<button className="
  inline-flex items-center gap-2 px-8 py-4
  bg-accent-500 hover:bg-accent-400
  text-primary-900 font-heading font-700 text-label
  rounded-lg shadow-glow-gold
  transition-all duration-300
  hover:scale-105 hover:shadow-glow-gold
">

// Secondary Button (outline)
<button className="
  inline-flex items-center gap-2 px-8 py-4
  border-2 border-white text-white
  font-heading font-600 text-label
  rounded-lg
  hover:bg-white hover:text-primary-800
  transition-all duration-300
">

// Category Card
<div className="
  group bg-white rounded-xl shadow-card
  hover:shadow-card-hover hover:-translate-y-1
  transition-all duration-300 cursor-pointer
  border border-neutral-200 hover:border-primary-300
  p-6 flex flex-col items-start gap-4
">

// Stats Item
<div className="text-center">
  <div className="font-heading text-display-lg text-accent-500 font-800">{value}</div>
  <div className="text-body-md text-neutral-700 mt-1">{label}</div>
</div>

// Footer
<footer className="bg-primary-900 text-neutral-300 pt-16 pb-8">
```

---

## 5. Framer Motion Animation Specs

### 5.1 Global Variants

```js
// src/animations/variants.js

export const fadeInUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

export const fadeInLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

export const fadeInRight = {
  hidden:  { opacity: 0, x: 40 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  },
};

export const staggerContainerFast = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    }
  },
};
```

### 5.2 Per-Component Animation Specs

```js
// ─── Navbar ───────────────────────────────────────────────────
// Slide down on mount
initial:   { y: -80, opacity: 0 }
animate:   { y: 0,   opacity: 1 }
transition: { duration: 0.5, ease: 'easeOut' }

// Background blur on scroll (applied via useScroll)
// scrollY > 20: background switches from transparent → primary-800/95

// ─── Hero Section ─────────────────────────────────────────────
// Tagline — delay 0.3s
{ hidden: { opacity:0, y:30 }, visible: { opacity:1, y:0 }, transition: { delay:0.3, duration:0.8 } }

// Subtitle — delay 0.6s  
{ hidden: { opacity:0, y:20 }, visible: { opacity:1, y:0 }, transition: { delay:0.6, duration:0.7 } }

// CTA Buttons — delay 0.9s, stagger 0.15s
staggerContainer with delayChildren: 0.9

// Background particles / floating elements
animate: {
  y: [0, -20, 0],
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
}

// ─── Stats Bar ────────────────────────────────────────────────
// Count-up animation (useEffect + useState)
// Trigger: useInView with once:true
// Duration: 2000ms, easing: easeOut
// 650+ projects: 0 → 650, suffix "+"
// 50 years:       0 → 50,  suffix " Years"
// 30+ countries:  0 → 30,  suffix "+"
// 2 facilities:   0 → 2

// ─── Category Cards ───────────────────────────────────────────
// Parent: staggerContainer (stagger 0.08s)
// Each card: fadeInUp
// Hover: whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.18)' }}
// Icon hover: rotate 5deg, scale 1.1

// ─── Offerings Pillars ────────────────────────────────────────
// Parent: staggerContainer
// Each pillar: fadeInUp with alternating left/right for desktop 2-col layout
// Number counter: scaleIn on scroll entry

// ─── Timeline (Milestones) ────────────────────────────────────
// Timeline line draws down via pathLength: 0 → 1
// Each milestone: fadeInLeft (odd) / fadeInRight (even)
// Dot: scaleIn with 0.2s delay after line reaches it

// ─── Technology Cards ─────────────────────────────────────────
// Tab change: AnimatePresence with exit { opacity:0, x:-20 } / enter { opacity:0, x:20 }
// Cards within tab: staggerContainer fast

// ─── Page Transitions ─────────────────────────────────────────
// Wrap routes in AnimatePresence mode="wait"
// Page enter:  { opacity:0, y:20 } → { opacity:1, y:0 }, duration:0.4
// Page exit:   { opacity:1, y:0 }  → { opacity:0, y:-10 }, duration:0.25

// ─── Mega Menu ────────────────────────────────────────────────
// initial:  { opacity: 0, y: -10, scaleY: 0.95 }
// animate:  { opacity: 1, y: 0,  scaleY: 1 }
// exit:     { opacity: 0, y: -10, scaleY: 0.95 }
// transition: { duration: 0.2, ease: 'easeOut' }
// transformOrigin: 'top'

// ─── Mobile Drawer ────────────────────────────────────────────
// initial:  { x: '100%' }
// animate:  { x: 0 }
// exit:     { x: '100%' }
// transition: { type: 'spring', damping: 25, stiffness: 200 }

// ─── Form Submit ──────────────────────────────────────────────
// Success state: scale 0 → 1 with spring, bounce: 0.4
// Error shake: x: [0, -10, 10, -10, 10, 0], duration: 0.4
```

### 5.3 Scroll-Triggered Wrapper Component

```jsx
// src/components/shared/AnimateOnScroll.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp } from '@/animations/variants';

export function AnimateOnScroll({ children, variant = fadeInUp, delay = 0, className }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

---

## 6. Mobile Responsive Layouts

### 6.1 Breakpoint Strategy

| Breakpoint | Width    | Usage                                     |
|------------|----------|-------------------------------------------|
| Base       | < 640px  | Single column, stacked, 16px px          |
| sm         | 640px+   | 2-col grids begin, larger tap targets    |
| md         | 768px+   | Tablet — 2-3 col, sidebar layouts        |
| lg         | 1024px+  | Desktop nav appears, mega menu enabled   |
| xl         | 1280px+  | Max content width, wide hero             |
| 2xl        | 1536px+  | Ultra-wide, constrained to 1280px max    |

### 6.2 Navbar

```
Mobile (< lg):
  [Logo]                    [Hamburger ☰]
  → Drawer slides in from right
  → Full-height overlay, dark bg
  → Accordion sections for Technology (largest menu)
  → Language switcher at bottom of drawer
  → Large tap targets (min 48px height)

Desktop (≥ lg):
  [Logo] [Nav Links + MegaMenu]                [Enquiry CTA]
  → Sticky with backdrop blur
  → Technology triggers mega menu on hover/click
  → Mega menu is full-width grid (4 columns)
```

### 6.3 Hero Section

```
Mobile:
  height: 100svh
  Text stack:
    [Label — small caps, accent color]
    [H1 — 2.5rem, 2 lines max]
    [Subtitle — 1rem, 3 lines max]
    [CTA Stack — full width buttons, stacked]
  Background: darkened image, no video autoplay

Tablet (md):
  height: 90vh
  H1: 3rem
  CTAs: inline, side by side

Desktop (xl):
  height: 100vh
  H1: 4.5rem
  Background: video autoplay (muted, loop)
  CTAs: inline
```

### 6.4 Stats Bar

```
Mobile:   2 × 2 grid
Tablet:   4 × 1 row (horizontal)
Desktop:  4 × 1 row with vertical dividers between items
```

### 6.5 Category Cards (8 items)

```
Mobile:   1-col stack
sm:       2-col grid
md:       2-col grid  
lg:       4-col grid
xl:       4-col grid (max 280px card width)
```

### 6.6 Offerings Pillars (4 items)

```
Mobile:   1-col stack
md:       2-col grid
lg:       4-col grid (equal width)
```

### 6.7 Technology Page Grid

```
Mobile:   1-col list (card with icon left)
sm:       2-col grid
lg:       3-col grid
```

### 6.8 Blog Cards

```
Mobile:   1-col stack
sm:       2-col grid
lg:       3-col grid
```

### 6.9 Footer

```
Mobile:
  [Brand + socials]
  [Nav groups stacked, each collapsible accordion]
  [Contact block]
  [Legal row]

Tablet (md):
  [Brand]  [Nav 2-col]
  [Contact] [Partner]
  [Legal]

Desktop (lg):
  5-column layout:
  [Brand] [About] [Technology] [Resources] [Contact]
  [Legal bar — full width]
```

### 6.10 Enquiry Form

```
Mobile:   1-col fields, full-width
md:       2-col for name/company, phone/email pairs; country full-width
Desktop:  Same as md + sidebar contact info panel
```

### 6.11 Touch & Accessibility Targets

- All tap targets: min 44×44px
- Form inputs: min 48px height on mobile
- Font size floor: 16px (avoids iOS auto-zoom on focus)
- Dropdown menus replaced with native `<select>` on mobile

---

## 7. Asset Inventory

### 7.1 Images Required

| Asset | Dimensions | Format | Usage |
|-------|-----------|--------|-------|
| Logo (light) | SVG / 200×60px | SVG | Navbar on dark bg |
| Logo (dark) | SVG / 200×60px | SVG | Footer, light bg pages |
| Logo — 50th anniversary badge | SVG | SVG | Hero overlay, about page |
| Hero background | 1920×1080px min | WebP | Homepage hero |
| Hero video (fallback poster) | 1920×1080px | WebP | Video section poster |
| About banner | 1440×600px | WebP | About page hero |
| MD portrait — Ishwar Sahai | 400×500px | WebP | People page card |
| MD portrait — Ankoor Sahaii | 400×500px | WebP | People page card |
| Manufacturing facility (×2) | 800×600px | WebP | Infrastructure page |
| Oil processing plant (×8) | 600×400px | WebP | Category card backgrounds |
| Filtration equipment (×9) | 600×400px | WebP | Filtration category pages |
| Bio-diesel plant | 800×500px | WebP | Bio-diesel page |
| Pilot plant | 800×500px | WebP | Pilot plant page |
| Blog thumbnails (×6+) | 800×450px | WebP | Blog card images |
| Media article images (×5) | 800×450px | WebP | Media card images |
| Client logos (×n) | Variable | SVG/PNG | Client grid |
| Certification seals | 200×200px each | PNG | About/why-mectech |
| World map graphic | SVG | SVG | Why Mectech page |
| Partner logo (Mectech Knitfab) | 160×50px | SVG/PNG | Footer |

### 7.2 Icons Required

**Technology category icons (8):**
- Oil Seed Preparation
- Oil Extraction
- Oil & Fats Refining
- Oil Processing
- Oleo Chemical
- Filtration
- Bio-Diesel
- Pilot Plant

**Offering pillar icons (4):**
- Engineering
- Technology
- Services
- Innovation

**Social media icons (4):** Facebook, YouTube, Instagram, LinkedIn

**UI icons:** Arrow right, Arrow down, Chevron, Menu/Close, Phone, Email, Location, Download, Check, External link

**Recommended:** Use [Lucide React](https://lucide.dev/) for UI icons + custom SVGs for category icons.

### 7.3 Video Assets

| Asset | Spec | Usage |
|-------|------|-------|
| Hero video | MP4 H.264, 1920×1080, ≤8MB, 15–30s loop, no audio | Homepage hero bg |
| Company overview video | External YouTube embed | "Transforming Minds" section |

### 7.4 Fonts (Google Fonts)

```html
<!-- In index.html <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### 7.5 Certifications & Badges

- ASME "U" Stamp seal
- ISO 9001:2015 certificate logo
- PED Approval seal
- National Board "R" stamp
- Halal Certification logo
- CE Mark

---

## 8. Implementation Notes

### 8.1 Routing Structure (React Router v6)

```jsx
// src/App.jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="about-us" element={<AboutPage />} />
    <Route path="why-mectech" element={<WhyMectechPage />} />
    <Route path="people" element={<PeoplePage />} />
    <Route path="infrastructure" element={<InfrastructurePage />} />
    <Route path="sustainablity" element={<SustainabilityPage />} />
    <Route path="technology" element={<TechnologyPage />} />
    {/* Technology detail pages — use a single template */}
    <Route path=":techSlug" element={<TechnologyDetailPage />} />
    <Route path="filtration" element={<FiltrationPage />} />
    <Route path="services-support" element={<ServicesPage />} />
    <Route path="blog" element={<BlogPage />} />
    <Route path="blog/:slug" element={<BlogDetailPage />} />
    <Route path="media" element={<MediaPage />} />
    <Route path="media/:slug" element={<MediaDetailPage />} />
    <Route path="enquiry" element={<EnquiryPage />} />
    <Route path="career" element={<CareerPage />} />
    <Route path="event-exhibitions" element={<EventsPage />} />
    <Route path="download" element={<DownloadPage />} />
    <Route path="privacy-policy" element={<PrivacyPage />} />
    <Route path="terms-conditions" element={<TermsPage />} />
  </Route>
</Routes>
```

### 8.2 i18n / Multi-language

- 13 language variants required
- Recommended: `react-i18next` with JSON translation files per language
- RTL support needed for Arabic and Persian (use `dir="rtl"` on `<html>`)
- Tailwind RTL plugin: `tailwindcss-rtl` or use Tailwind's built-in `ltr:`/`rtl:` variants

### 8.3 Form Handling

```js
// EnquiryForm fields:
{
  name:    { type: 'text',   required: true },
  company: { type: 'text',   required: true },
  phone:   { type: 'tel',    required: true },
  email:   { type: 'email',  required: true },
  country: { type: 'select', required: true, options: 150+ },
  subject: { type: 'text',   required: false },
  message: { type: 'textarea', required: true },
}
// Recommend: react-hook-form + zod validation
```

### 8.4 SEO & Meta

- Each technology page needs unique `<title>` and `<meta description>`
- Implement with `react-helmet-async`
- Structured data: `Organization`, `LocalBusiness`, `Product` schemas
- Canonical URLs for language variants

### 8.5 Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID/INP | < 100ms |
| CLS | < 0.1 |
| Bundle size (initial) | < 150KB gzipped |
| Images | WebP, lazy-loaded, responsive srcset |
| Video | Lazy-loaded, `preload="none"` |

### 8.6 Key Interaction Patterns

1. **Navbar mega-menu** — hover intent (150ms delay before open, 300ms before close) to avoid accidental triggers
2. **Stats counter** — triggers once when element enters viewport (Intersection Observer)
3. **Category card hover** — lift + border glow + icon animation (all CSS transitions, no JS)
4. **Mobile accordion nav** — Framer Motion `AnimatePresence` with height animation
5. **Form submission** — optimistic UI (disable + spinner) → success state → reset after 3s
6. **Language switcher** — top-level dropdown, persists selection to localStorage

### 8.7 Accessibility

- All images: meaningful `alt` text
- All icons: `aria-label` or `aria-hidden` + accompanying text
- Nav: `aria-current="page"` on active route
- Mega menu: `aria-expanded`, `aria-controls` on triggers
- Form fields: `<label>` elements, error `aria-describedby`
- Color contrast: all text meets WCAG AA (4.5:1 minimum)
- Skip-to-content link at top of `<body>`

---

## Quick-Start Checklist

- [ ] Install dependencies (Tailwind, Framer Motion, React Router, react-i18next)
- [ ] Configure `tailwind.config.js` with design tokens above
- [ ] Set up Google Fonts in `index.html`
- [ ] Create `src/animations/variants.js`
- [ ] Build `Layout` shell (Navbar + Footer)
- [ ] Build shared UI primitives (Button, Card, SectionHeader, PageHero)
- [ ] Build `AnimateOnScroll` wrapper
- [ ] Build `HomePage` (hero → stats → categories → offerings → enquiry)
- [ ] Build `TechnologyDetailPage` template (covers ~60 pages)
- [ ] Set up i18n with react-i18next
- [ ] Implement EnquiryForm with validation
- [ ] Configure React Router with all routes
- [ ] Performance audit (Lighthouse CI)

---

*Document generated from live website analysis of https://www.mectech.co.in — June 2026*
