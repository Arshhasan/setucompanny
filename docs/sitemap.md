# Sitemap — Mectech Process Engineers

## Primary Routes

| Path | Page Component | Title |
|---|---|---|
| `/` | `HomePage` | Home |
| `/about-us` | `AboutPage` | About Us |
| `/why-mectech` | `WhyMectechPage` | Why Mectech |
| `/people` | `PeoplePage` | People |
| `/infrastructure` | `InfrastructurePage` | Infrastructure |
| `/sustainablity` | `SustainabilityPage` | Sustainability |
| `/technology` | `TechnologyPage` | Technology |
| `/services-support` | `ServicesPage` | Services & Support |
| `/clients` | `ClientsPage` | Our Top Clients |
| `/enquiry` | `EnquiryPage` | Enquiry |
| `/blog` | `BlogPage` | Blog |
| `/media` | `MediaPage` | Happenings / Media |
| `/video` | `VideoPage` | Video |
| `/career` | `CareerPage` | Career |

## Technology Detail Pages (dynamic `/:slug`)

All route through `TechnologyDetailPage` which reads the `:slug` param and
looks up a `techData` dictionary. If slug not in dictionary, it generates a
generic page from the slug string.

### Oil Seed Preparation
- `/seed-preparation`

### Oil Extraction
- `/solvent-extraction-plant`

### Oil & Fats Refining
- `/vegetable-oil-refinery-plant`
- `/continuous-bleaching`
- `/continuous-deodorization`
- `/physical-refinery`
- `/chemical-refinery`
- `/winterization-dewaxing-plant`
- `/fractionation-plant`
- `/sesame-oil-refinery`
- `/mango-kernel-oil-process`

### Oil Processing (Specific Oils)
- `/cottonseed-oil-plant`
- `/palm-oil-refining-plant`
- `/rice-bran-oil-refining-plant`
- `/sun-flower-oil-refinery-plant`
- `/soyabean-oil-refinery-plant`
- `/corn-oil-refinery`
- `/groundnut-oil-refinery-plant`
- `/hazelnut-oil-refinery-plant`
- `/canola-oil-refining-plant`

### Oleo Chemical
- `/glycerine-refining-plant`
- `/esterification-plant`
- `/fatty-acid-plant-fractional-distillation`
- `/hydrogenation`
- `/soap-stock-splitting`
- `/continuous-saponification-plant`
- `/fat-splitting-plant`
- `/interesterification`
- `/glycerine-water-treatment-and-evaporation`
- `/palm-olein-to-super-olein`
- `/double-scrubbing`
- `/castor-oil-derivatives`

### Filtration
- `/mecklear-gravity-filteration-process`
- `/vertical-pressure-leaf-filter`
- `/horizontal-pressure-leaf-filter`
- `/shining-filter`
- `/candle-filter`
- `/pulse-jet-candle-filter`
- `/self-cleaning-disk-filter`
- `/automatic-brush-filter-strainer`

### Value Added Projects
- `/bio-diesel-manufacturing-plant`
- `/pilot-plant-manufacturer`
- `/cbg-plant`
- `/bakery-shortening-margarine`
- `/mct-from-coconut-oil-and-pko`
- `/lecithin-plant`
- `/tocotrienol`
- `/spent-earth-oil-recovery`
- `/equipment`

## Navigation Structure

### Desktop Nav (left to right)
1. ABOUT US → About / Why Mectech / People / Infrastructure / Sustainability
2. TECHNOLOGY → Mega menu with 7 columns
3. SERVICES → Services & Support
4. SPARES → (spares page)
5. SUSTAINABILITY → Sustainability
6. OUR TOP CLIENTS → Clients
7. CONTACT US → Enquiry

### Footer Nav (4 columns)
1. About Us: About / Why Mectech / People / Infrastructure / Sustainability / Career
2. Technology: links to main technology groups
3. Capabilities: Oil Extraction / Oil Refining / Oleo Chemical / Filtration / Bio-Diesel
4. Services: Installation / Commissioning / After Sales / Spares / Revamping
