# Responsive Behavior — Mectech Process Engineers

Breakpoints follow Tailwind CSS defaults (mobile-first).

## Navigation

| Viewport | Behavior |
|---|---|
| `< lg (1024px)` | Desktop nav links hidden, hamburger visible |
| `>= lg (1024px)` | Desktop nav links visible, hamburger hidden |

### Mobile Hamburger Drawer
- 340px wide panel slides in from right
- Background: `#003055` (dark navy)
- Links styled in white
- Overlay darkens rest of page (`body.nav-open::after`)
- Close button top-right of drawer

## Hero Banner

| Viewport | Behavior |
|---|---|
| All | `<video width="100%">` scales naturally |
| `< md (768px)` | `.new_banner_text h2` font-size: 28px (down from 50px) |
| `< md (768px)` | `.new_banner_text h3` font-size: 18px / line-height: 28px (down from 34px/43px) |

## Home Category Cards (WeDeliverBox)

| Viewport | Columns |
|---|---|
| Mobile (`< sm`) | 1 column |
| Tablet (`sm`) | 2 columns |
| Desktop (`lg+`) | 3 columns |

## OurOfferings Section

| Viewport | Behavior |
|---|---|
| Desktop | Tab interface (4 tabs, clicks switch content) |
| Mobile | Accordion (each offering collapses/expands) |

## InnovativeProjects Grid

| Viewport | Columns |
|---|---|
| Mobile | 2 columns |
| Desktop | 5 columns (cols 1–4 images, col 5 = `650+` stat box) |

The `plus_project` box (`width: 233px`, absolute right) adapts to column width on responsive.

## Footer

| Viewport | Behavior |
|---|---|
| `< md (768px)` | Desktop footer hidden (`.desktop-footer { display: none }`), mobile footer shown |
| `>= md (768px)` | Desktop footer shown, mobile footer hidden |

CSS in `index.css`:
```css
@media (max-width: 992px) {
  .desktop-footer { display: none; }
  .mobile-footer { display: block; }
}
```

Tailwind classes: `hidden md:block` (desktop footer), `block md:hidden` (mobile footer)

## Technology Grid (TechnologyPage)

| Viewport | Columns |
|---|---|
| Mobile | 1 column |
| Tablet (`md`) | 2 columns |
| Desktop (`lg`) | 3 columns |

## Technology Detail Page Sidebar

| Viewport | Behavior |
|---|---|
| Mobile | Main content full-width; sidebar stacks below |
| Desktop (`lg`) | 2/3 main + 1/3 sidebar side-by-side |

## About Page Stats Bar

| Viewport | Columns |
|---|---|
| Mobile | 2 columns |
| Desktop (`lg`) | 4 columns |

## About Page Milestone Timeline

| Viewport | Behavior |
|---|---|
| Mobile | Single column, all milestones left-aligned |
| Desktop (`lg`) | Alternating left/right with center spine line |

## Client Logo Grid (ClientsPage)

| Viewport | Columns |
|---|---|
| Mobile | 3 columns |
| Tablet (`md`) | 5 columns |
| Desktop (`lg`) | 10 columns |

## Blog / Media Grid

| Viewport | Columns |
|---|---|
| Mobile | 1 column |
| Tablet (`md`) | 2 columns |
| Desktop (`lg`) | 3 columns |

## Enquiry Page

| Viewport | Behavior |
|---|---|
| Mobile | Form stacks vertically; contact info below |
| Desktop (`lg`) | 2-col: form left, contact sidebar right |

## EnquiryFloat Button

Always visible (fixed right edge). On mobile it may overlap content — offset `bottom: 80px`
to stay above the mobile bottom bar. Panel width 380px, which collapses to full-width on
narrow screens via `max-w-full`.

## PageHero

| Viewport | Behavior |
|---|---|
| All | Full-width, `padding: 120px 0 60px`, text centered |
| Mobile | `h1` font-size 36px may wrap across multiple lines — normal behavior |

## Typography Scaling

| Element | Mobile | Desktop |
|---|---|---|
| `.new_banner_text h2` | 28px | 50px |
| `.new_banner_text h3` | 18px | 34px |
| Section `h4` stat numbers | 48px (unchanged) | 48–59px |
| Body text | 13px (unchanged) | 13px |
