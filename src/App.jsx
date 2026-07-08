import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import './index.css'

// Eager load most important pages
import HomePage from './pages/HomePage'

// Lazy load the rest
const AboutPage = lazy(() => import('./pages/AboutPage'))
const WhyMectechPage = lazy(() => import('./pages/WhyMectechPage'))
const PeoplePage = lazy(() => import('./pages/PeoplePage'))
const InfrastructurePage = lazy(() => import('./pages/InfrastructurePage'))
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage'))
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'))
const TechnologyDetailPage = lazy(() => import('./pages/TechnologyDetailPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ClientsPage = lazy(() => import('./pages/ClientsPage'))
const EnquiryPage = lazy(() => import('./pages/EnquiryPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const MediaPage = lazy(() => import('./pages/MediaPage'))
const VideoPage = lazy(() => import('./pages/VideoPage'))
// const CareerPage = lazy(() => import('./pages/CareerPage'))

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lightbg">
      <div className="text-blubrand text-2xl font-bold">Loading...</div>
    </div>
  )
}

// All tech detail slugs
const techSlugs = [
  'seed-preparation', 'solvent-extraction-plant',
  'vegetable-oil-refinery-plant', 'continuous-bleaching', 'continuous-deodorization',
  'physical-refinery', 'chemical-refinery', 'winterization-dewaxing-plant',
  'fractionation-plant', 'sesame-oil-refinery', 'mango-kernel-oil-process',
  'cottonseed-oil-plant', 'palm-oil-refining-plant', 'rice-bran-oil-refining-plant',
  'sun-flower-oil-refinery-plant', 'soyabean-oil-refinery-plant', 'corn-oil-refinery',
  'double-scrubbing', 'castor-oil-derivatives', 'groundnut-oil-refinery-plant',
  'hazelnut-oil-refinery-plant', 'canola-oil-refining-plant',
  'glycerine-refining-plant', 'esterification-plant',
  'fatty-acid-plant-fractional-distillation', 'hydrogenation', 'soap-stock-splitting',
  'continuous-saponification-plant', 'fat-splitting-plant', 'interesterification',
  'glycerine-water-treatment-and-evaporation', 'palm-olein-to-super-olein',
  'mecklear-gravity-filteration-process', 'vertical-pressure-leaf-filter',
  'horizontal-pressure-leaf-filter', 'shining-filter', 'candle-filter',
  'pulse-jet-candle-filter', 'self-cleaning-disk-filter',
  'automatic-brush-filter-strainer', 'bio-diesel-manufacturing-plant',
  'pilot-plant-manufacturer', 'cbg-plant', 'bakery-shortening-margarine',
  'mct-from-coconut-oil-and-pko', 'lecithin-plant', 'tocotrienol',
  'spent-earth-oil-recovery', 'equipment',
]

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about-us" element={<AboutPage />} /> */}
            {/* <Route path="/why-mectech" element={<WhyMectechPage />} /> */}
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/infrastructure" element={<InfrastructurePage />} />
            <Route path="/sustainablity" element={<SustainabilityPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/services-support" element={<ServicesPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/enquiry" element={<EnquiryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/video" element={<VideoPage />} />
            {/* <Route path="/career" element={<CareerPage />} /> */}
            {/* Tech detail pages via dynamic route */}
            <Route path="/:slug" element={<TechnologyDetailPage />} />
            {/* Catch all */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}
