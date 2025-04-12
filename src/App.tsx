import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AIImageGenerator from './components/AIImageGenerator';
import Gallery from './components/Gallery';
import About from './components/About';
import Artists from './components/Artists';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AIImageGenerator />
        <Gallery />
        <About />
        <Artists />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
