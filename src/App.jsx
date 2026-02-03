
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Home from '@/pages/Home';
import Skills from '@/pages/Skills';
import Contact from '@/pages/Contact';
import ProductMarketingCaseStudy from '@/pages/ProductMarketingCaseStudy';
import PerformanceMarketingCaseStudy from '@/pages/PerformanceMarketingCaseStudy';
import DemandGenCaseStudy from '@/pages/DemandGenCaseStudy';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies/product-marketing" element={<ProductMarketingCaseStudy />} />
            <Route path="/case-studies/performance-marketing" element={<PerformanceMarketingCaseStudy />} />
            <Route path="/case-studies/demand-gen" element={<DemandGenCaseStudy />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
