# Assets — Mectech Process Engineers

## Local Assets (`public/assets/`)

### `/assets/images/` — Core static images

| File | Usage |
|---|---|
| `Mectech_50_yrs_logo.png` | Navbar logo |
| `about-mectech-about-1.jpg` | About page hero + About section image |
| `oil-seed-preparation-banner.jpg` | Technology page hero |
| `20240207114658.jpg` | General content image |
| `Icon-awesome-phone.svg` | Phone icon in footer/contact |
| `Icon-material-email.svg` | Email icon in footer/contact |
| `down-arrow.png` / `down-arrow.svg` | Nav dropdown indicator |
| `facebook-icon.svg` / `facebook.svg` | Facebook social link |
| `linkdin-icon.svg` / `linkedin-svgrepo-com.svg` | LinkedIn social link |
| `instagram-svgrepo-com.svg` | Instagram social link |
| `youtube-svgrepo-com.svg` | YouTube social link |
| `location.svg` | Address location icon |
| `phone-white.svg` | White phone icon |
| `mal-white.svg` | Mail white icon |
| `right-arrow.png` | View-more arrow |
| `search-icon.svg` | Search |
| `slide-arow-left.svg` / `slide-arow-right.svg` | Carousel arrows |
| `slide-screen.png` | Slide screenshot |
| `up_arrow.svg` | Scroll-to-top arrow |
| `user-icon.png` | Default user/profile placeholder |
| `x-icon.svg` | Close/X icon |
| `m-services.svg` | Services section icon |

### `/assets/images/images/` — Why Mectech & Services icons

| File | Usage |
|---|---|
| `m-icon1.png` – `m-icon9.png` | Why Mectech differentiator card icons |
| `m-services.svg` | Services page icon |
| `Icon-material-local-phone.svg` | Phone icon variant |
| `Icon-material-location-on.svg` | Location icon variant |
| `engineering.svg` | Engineering capability icon |
| `innovation.svg` | Innovation icon |
| `ionic-md-mail.svg` | Mail icon |
| `technology.svg` | Technology icon |

### `/assets/clients/` — Client logos

Files: `snew_logo02.png` through `snew_logo20.png` (19 logos total; no `01`).

Format: PNG, 80px max-width display, grayscale filter → full color on hover.

## Remote Content Images (live CDN)

Base URL: `https://mectech.co.in/public/f/images/`

These images are not available in the local download and are fetched from the live site:

| Pattern | Used in |
|---|---|
| `home-img1.jpg` – `home-img6.jpg` | WeDeliverBox cards, InnovativeProjects |
| `home-icon1.png` – `home-icon6.png` | Category card icons |
| `Innovative-one.jpg` – `Innovative-five.jpg` | InnovativeProjects grid |
| `Bio-Diesel.png`, `Pilot-Plant-icon.png`, `Value-Added-Projects-Plants.png` | Technology page icons |
| `Mr-Ishwar-Sahai.jpg`, `Mr-Ankoor-Sahai.jpg` | People page leadership |
| `Sustainabilityimages.jpg` | Sustainability page hero |
| Various oil process images | TechnologyDetailPage content |

Base URL for media: `https://mectech.co.in/public/upload/mediacentre/`  
Base URL for blog: `https://mectech.co.in/public/upload/blog/`

## Video

The homepage hero uses a video embed. The original site's video is served from the live CDN.
In development/local mode the `<video>` element will show a grey background if the CDN is inaccessible;
the overlay text is still visible via `position: absolute` overlay.

## Favicon

`/favicon.png` — Mectech logo mark (placed in `public/` root).
