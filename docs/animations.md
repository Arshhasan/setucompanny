# Animations — Mectech Process Engineers

All animations replicate the behavior of the original site, which used WOW.js + AOS for scroll triggers,
and CSS transitions for hover/interactive effects.

## Scroll-triggered Animations

### Technology: Framer Motion + react-intersection-observer

Pattern used in every page:
```jsx
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
```

- `threshold: 0.1` — triggers when 10% of element enters viewport
- `triggerOnce: true` — fires only once per element (like AOS default)
- `y: 40 → 0` — slide-up 40px
- `opacity: 0 → 1` — fade in
- `duration: 0.7s`
- `delay` — staggered for grids (0.05s or 0.1s per item)

### Banner Hero Animations

```jsx
// On mount, not scroll-triggered
initial={{ opacity: 0, y: -30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.3 }}
```

Subtitle text has `delay: 0.6` for stagger after heading.

## CSS Transitions

### Header Sticky Transition
```css
header::after {
  transform: translate(0px, -100px);  /* hidden above viewport */
  transition: 0.5s ease;
}
header.sticky::after {
  background: #E8E0D7;
  transform: translate(0px, 0px);     /* slides down */
  transition: 0.5s ease;
}
```
Triggered by `scroll` event listener: sticky class applied at `scrollY > 80`.

### Card Yellow Hover Overlay
```css
.home_box_detail::after {
  background: #FFDDOOeb;
  height: 0%;
  opacity: 0;
  transition: 0.3s linear;
}
.home_box1:hover .home_box_detail::after {
  height: 100%;
  opacity: 1;
}
.home_box1:hover .home_icon img {
  filter: invert(1);
}
.home_box1:hover .home_box_detail h3 {
  color: #000;
}
```
Duration: `0.3s linear`. Effect: yellow fills from bottom up.

### Mega/Drop Menu Show
```css
.mega-menu {
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease;
}
.mega-menu-trigger:hover .mega-menu {
  opacity: 1;
  visibility: visible;
}
```

### Mobile Nav Slide-in
```css
/* Nav drawer */
transform: translateX(340px);  /* hidden off-screen right */
transition: transform 900ms cubic-bezier(0.9, 0, 0.33, 1);
/* Open */
transform: translateX(0);
```
Duration: `900ms`. Easing: `cubic-bezier(0.9, 0, 0.33, 1)` (fast start, slow settle).

### Hamburger → X Transform
Line 1: `rotate(45deg) translateY(9px)`  
Line 2: `opacity: 0`  
Line 3: `rotate(-45deg) translateY(-9px)`  
Duration: `700ms cubic-bezier(0.9, 0, 0.33, 1)`

### Enquiry Panel (Framer Motion)
```jsx
<motion.div
  initial={{ x: 400 }}
  animate={{ x: isOpen ? 0 : 400 }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
>
```

### Blog/Media Card Image Zoom
```css
.blog-card figure img {
  transition: transform 0.4s ease;
}
.blog-card:hover figure img {
  transform: scale(1.05);
}
```

### View More Link
```css
a.view_more {
  color: #FFDD00;
  transition: color 0.2s ease;
}
a.view_more:hover {
  color: #0077B5;
}
```

### Client Logo Grayscale
```jsx
className="grayscale hover:grayscale-0 transition-all duration-300"
```

### Technology Card Scale
```jsx
className="transition-transform duration-500 group-hover:scale-105"
```

## Custom CSS Keyframes (index.css)

```css
@keyframes slideInUp {
  0% { opacity: 0; transform: translateY(60px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes slideInLeft {
  0% { opacity: 0; transform: translateX(-60px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRight {
  0% { opacity: 0; transform: translateX(60px); }
  100% { opacity: 1; transform: translateX(0); }
}
```
Classes: `.animate-slideInUp`, `.animate-slideInLeft`, `.animate-slideInRight`
