# Component Inventory — Mectech Process Engineers

## Layout Components (`src/components/layout/`)

### `Layout.jsx`
Wraps all pages. Contains:
- `<Navbar />`
- `{children}` (page content)
- `<Footer />`
- `<ScrollToTop />` (scroll-to-top FAB)
- `<EnquiryFloat />` (sticky enquiry button + panel)

### `Navbar.jsx`
Fixed-position header. Features:
- Logo (`Mectech_50_yrs_logo.png`)
- Desktop nav: hover dropdowns and mega menu for Technology
- Sticky state triggered at `scrollY > 80`
- Hamburger button (3 `.line` divs that animate on open)
- Mobile drawer (slides from right, 340px wide, `#003055` bg)
- Mobile nav overlay (dark semi-transparent `body.nav-open::after`)

### `Footer.jsx`
Two separate footer renders:
1. Desktop footer (`hidden md:block`): 4-column nav + partner box + address + social + legal bar
2. Mobile footer (`block md:hidden`): simplified address + social + copyright

## UI Components (`src/components/ui/`)

### `PageHero.jsx`
Props: `title`, `breadcrumb`, `bgImage?`
Used on all inner pages. Renders dark navy hero with optional image overlay.

### `EnquiryFloat.jsx`
Sticky vertical "Enquiry" button fixed to right edge. Clicking opens a Framer Motion
slide-in panel with a quick enquiry form (name, email, phone, message, submit).

### `ScrollToTop.jsx`
Round button that appears after scrolling 300px, smooth-scrolls to top on click.

## Pages (`src/pages/`)

### `HomePage.jsx`
All sections:
1. **HeroBanner** — `<video autoPlay loop muted playsInline>` with absolute text overlay
2. **WhoWeAre** — h1 "We Deliver Plants that Perform", blockquote, view-more link
3. **WeDeliverBox** — 3-col grid of 9 category cards with yellow hover effect
4. **OurOfferings** — tabs/accordion for 4 offerings (Extraction, Refinery, Oleo Chem, Filtration)
5. **InnovativeProjects** — 5-col grid with `650+ Projects Supplied` stat box (absolute right)
6. **Trailblazer** — "50 years" blue box + blockquote
7. **PeopleSustainability** — dark `#292929` bg, 2-col split
8. **TopClients** — 19-logo grid (logos 02–20), grayscale → color on hover
9. **EnquirySection** — dark navy form grid with 4-col contact fields

### `AboutPage.jsx`
Sections: Company Overview (2-col text+image), Stats bar (02/50+/30+/650+), Mission/Vision cards, Certifications grid, Milestone timeline (alternating left/right)

### `WhyMectechPage.jsx`
Sections: Intro, Differentiators grid (7 cards with local icons), Comparison table vs industry, Global regions grid

### `PeoplePage.jsx`
Sections: Intro, Leadership cards (2 leaders with image/title/desc), Life at Mectech CTA

### `InfrastructurePage.jsx`
Sections: Intro, 4 alternating sections (Design/Manufacturing/Quality/Certifications) with emoji icons

### `SustainabilityPage.jsx`
Sections: Intro, 6-card grid (Energy/Water/Waste/Bio-Diesel/Green/Social)

### `TechnologyPage.jsx`
Sections: Intro, 3-col technology category grid (9 cards with image, icon, title, items list, link)

### `TechnologyDetailPage.jsx`
Dynamic `/:slug` route. Layout:
- 2/3 main content (title, image, content paragraphs, process flow)
- 1/3 sidebar (Quick Enquiry form + Related Technologies list)
- `techData` dictionary with 12+ pre-populated pages; rest generated from slug

### `ServicesPage.jsx`
Sections: Intro, alternating service rows (5 services with icon, title, desc, bulleted items), CTA with phone/enquiry

### `ClientsPage.jsx`
Sections: Intro, Logo grid (19 logos, grayscale → color hover), Regions grid (6 regions with companies), Stats bar

### `EnquiryPage.jsx`
Full enquiry form (name, company, email, phone, country dropdown, product interest, message) + contact sidebar (address, phone, email, department contacts)

### `BlogPage.jsx`
Tag filter bar + 3-col card grid (image, tags, title, excerpt, date, read-more link). Images from live CDN with fallback.

### `MediaPage.jsx`
3-col card grid of news/media items (image, date, title, desc, read-more link)

### `VideoPage.jsx`
Video grid with YouTube embed thumbnails or iframes

### `CareerPage.jsx`
Job listings with category filter, position cards with requirements and apply CTA

## Data Files (`src/data/`)

### `navigation.js`
- `navLinks[]` — desktop nav structure (type: `'link'|'dropdown'|'mega'`)
- `mobileNavLinks[]` — flat list for mobile hamburger drawer
- Technology mega menu: 7 columns with all tech category links
