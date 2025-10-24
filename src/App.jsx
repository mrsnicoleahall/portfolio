
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Proof from '@/pages/Proof';
import Skills from '@/pages/Skills';
import ManagerManual from '@/pages/ManagerManual';
import Ethics from '@/pages/Ethics';
import Contact from '@/pages/Contact';
import Downloads from '@/pages/Downloads';

function App() {
  return (
    <Router>
      <div className="bg-background text-foreground min-h-screen">
        <Navigation />
        <main className="max-w-6xl mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/proof" element={<Proof />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/manager-manual" element={<ManagerManual />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/downloads" element={<Downloads />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
