import React from 'react';
import Navbar from '../components/Navbar';
import ColeccionDestacada from '../components/ColeccionDestacada';
import ComoFunciona from '../components/ComoFunciona';
import TripleImpacto from '../components/TripleImpacto';
import ComunidadTalleres from '../components/ComunidadTalleres';
import TestimoniosYSobre from '../components/TestimoniosYSobre';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import './Negocio.css';

const Negocio: React.FC = () => {

  return (
    <div className="Negocio">
      <Navbar />
      <main>
        {/* Hero section épico recreando el desierto de Atacama */}
        <section className="negocio-hero">
          <div 
            className="negocio-hero-background"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL}/desiertoatacama.jpg)` 
            }}
          >
            <div className="negocio-hero-overlay"></div>
          </div>
          
          <div className="container">
            <div className="negocio-hero-content">
              <h1>Atacama Rewear</h1>
              <p>
                Del corazón del desierto más árido del mundo nace nuestra misión: 
                transformar los residuos textiles en moda consciente, rescatando la belleza 
                del Atacama mientras generamos empleos dignos y construimos un futuro sostenible.
              </p>
              
              <div className="negocio-hero-actions">
                <a href="#talleres" className="hero-btn hero-btn-primary">
                  <span className="hero-btn-icon">📋</span> Solicitar Consultoría
                </a>
                <a href="#coleccion" className="hero-btn hero-btn-secondary">
                  <span className="hero-btn-icon">💼</span> Catálogo Corporativo
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <ColeccionDestacada />
        <ComoFunciona />
        <TripleImpacto />
        <ComunidadTalleres />
        <TestimoniosYSobre />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Negocio;