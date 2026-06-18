# Design System — Mectech Process Engineers

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `primary` / `#003055` | Dark navy blue | Header bg (sticky), footer text, PageHero bg, section backgrounds |
| `blubrand` / `#0077B5` | Brand blue | Headings, links, CTAs, stat numbers, `plus_project` box |
| `accent` / `#FFB300` | Gold/amber | Icon borders, view-more links, gold bar under hero titles, `img-offering` bar |
| `accent.bright` / `#FFDD00` | Bright yellow | Card hover overlay (`home_box_detail::after`), sticky header active states |
| `body` / `#292929` | Dark charcoal | Body text throughout |
| `cream` / `#E8E0D7` | Warm cream | Sticky header background |
| `lightbg` / `#F8F8F8` | Light grey | Page section alternating backgrounds, body default |
| `white` / `#FFFFFF` | White | Card backgrounds, text on dark sections |

### CSS Variables (from original)
```css
--primary-color3: #0077B5;  /* blubrand */
--primary-color4: #FFDD00;  /* accent.bright */
--primary-color5: #003055;  /* primary */
--primary-color6: #FFB300;  /* accent */
```

## Typography

### Font
**Cairo** (Google Fonts) — single font family across entire site.  
Weights used: 200, 300, 400, 500, 600, 700, 800, 900, 1000.

### Type Scale
| Element | Size | Weight | Color |
|---|---|---|---|
| Body copy | 13px | 400 | `#292929` |
| Body line height | 21px | — | — |
| `h1` banner | 50px | 300 | white |
| `h2` section headline | 30px | 700 | black or white |
| `h3` card titles | varies | 700 | white / black on hover |
| `h4` stat numbers | 48–59px | 700 | `blubrand` |
| Nav links | 13px | 400 | white / black (sticky) |
| Footer links | 13px | 400 | `#292929` |
| Footer headings | 13px | 700 | `#003055` |

## Spacing

| Context | Value |
|---|---|
| Section vertical padding | `70px 0` |
| Container max-width | `max-w-7xl` (1280px) |
| Container horizontal padding | `px-4` (16px) |
| Card padding | `50px` (home_box_detail) |
| PageHero padding | `120px top, 60px bottom` |
| Footer padding | `70px top, 15px bottom` |

## Header

### Normal State (non-sticky)
- `position: fixed`, `z-index: 999`
- Background: transparent
- `::before` pseudo: gradient `rgba(0,0,0,0.4) → transparent` at 248px height
- Nav text: white
- Hamburger lines: white

### Sticky State (on scroll)
- `::after` slides down with `background: #E8E0D7`
- Nav text: black
- Hamburger lines: black
- Transition: `0.5s ease`

### Logo
`Mectech_50_yrs_logo.png` at `h-12` (48px height), links to `/`

## Components

### PageHero
- Background: `#003055` (dark navy)
- Optional `bgImage` with `rgba(0,48,85,0.7)` overlay
- Padding: `120px top, 60px bottom`
- `h1`: white, 36px bold, centered
- Gold underline: `::after` — 60px × 3px `#FFB300`
- Breadcrumb: small white text below h1

### Home Category Cards (`.home_box1`)
- Image background fills entire card
- White overlay `home_box_detail` (icon + title) centered vertically
- **Hover**: `home_box_detail::after` fills from `height: 0% → 100%` with `#FFDDOOeb` yellow
- Icon inverts (`filter: invert(1)`) on hover
- Title + paragraph text turns black on hover

### View More Arrow
```jsx
<a className="view_more" href={href}>
  {label}
  <svg>…right-arrow…</svg>
</a>
```
Color: `#FFDD00`, hover: `#0077B5`

### Mega Menu
- Triggers on hover of "TECHNOLOGY" nav item
- Full-width overlay `min-width: 900px`, dark navy `#003055` background
- Border-top: `2px solid #FFB300` (gold)
- 7 column grid with technology category groups
- Opacity/visibility transition `0.3s ease`

### Drop Menu (sub-nav)
- Same styling as mega menu but `min-width: 220px`, single column
- Gold top border, dark navy background

## Animations

| Effect | Technology | Trigger |
|---|---|---|
| Section fade-in-up | Framer Motion + `react-intersection-observer` | In-viewport (`threshold: 0.1`) |
| Banner text | Framer Motion `initial → animate` | On mount |
| Card hover overlay | CSS transition `height: 0→100%` | CSS `:hover` |
| Header sticky transition | CSS `transform: translateY` + `transition: 0.5s` | scroll event |
| Mobile nav slide | CSS `transform: translateX` + `cubic-bezier(0.9,0,0.33,1) 900ms` | click |
| Enquiry panel | Framer Motion `x: 400 → 0` | click |
| Blog/media card image zoom | CSS `transform: scale(1.05)` | CSS `:hover` |

## Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px

## Z-Index Layers
| Element | z-index |
|---|---|
| Header | 999 |
| Body nav overlay | 100 |
| Mobile nav drawer | 101 |
| Enquiry popup | 9999 |
| Mega/drop menus | 9999 |
| Scroll-to-top | 999 |
| Banner text | 10 |
| Card hover overlay | auto (CSS stacking) |
