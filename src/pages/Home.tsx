import React, { useRef } from 'react';
import NavbarHome from '../components/NavbarHome';
import Hero, { HeroRef } from '../components/Hero';
import TripleImpactoHome from '../components/TripleImpactoHome';
import CompetenciasHome from '../components/CompetenciasHome';
import DireccionEstrategica from '../components/DireccionEstrategica';
import ModeloCanvas from '../components/ModeloCanvas';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const heroRef = useRef<HeroRef>(null);

  return (
    <div className="Home">
      <NavbarHome heroRef={heroRef} />
      <main>
        <Hero ref={heroRef} />
        <TripleImpactoHome />
        <section id="competencias">
          <CompetenciasHome />
        </section>
        <section id="direccion-estrategica">
          <DireccionEstrategica />
        </section>
        <section id="modelo-canvas">
          <ModeloCanvas />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;