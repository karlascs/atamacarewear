import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  InformationCircleIcon 
} from '@heroicons/react/24/outline';
import { HeroRef } from './Hero';
import './NavbarHome.css';

interface NavbarHomeProps {
  heroRef: React.RefObject<HeroRef | null>;
}

const NavbarHome: React.FC<NavbarHomeProps> = ({ heroRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePresentation = () => {
    setIsPresentationOpen(!isPresentationOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Resetear el Hero al primer slide
    if (heroRef.current) {
      heroRef.current.resetToFirstSlide();
    }
  };

  return (
    <>
      <nav className={`navbar-home ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo y Nombre */}
          <button 
            className="navbar-brand"
            onClick={handleLogoClick}
          >
            <img 
              src="/atacamarewearlogo.png" 
              alt="Atacama Rewear Logo" 
              className="brand-logo"
            />
            <div className="brand-text">
              <span className="brand-name">Atacama Rewear</span>
              <span className="brand-subtitle">Soluciones Textiles Circulares</span>
            </div>
          </button>

          {/* Navegación Desktop */}
          <div className="navbar-nav">
            <button 
              onClick={() => scrollToSection('direccion-estrategica')}
              className="nav-link"
            >
              Dirección Estratégica
            </button>
            <button 
              onClick={() => scrollToSection('competencias')}
              className="nav-link"
            >
              Competencias
            </button>
            <button 
              onClick={() => scrollToSection('modelo-canvas')}
              className="nav-link"
            >
              Modelo Canvas
            </button>
            <Link to="/negocio" className="nav-link nav-link-special">
              Nuestro Negocio
            </Link>
          </div>

          {/* Botones de Acción */}
          <div className="navbar-actions">
            <button 
              onClick={togglePresentation}
              className="presentation-btn"
            >
              <InformationCircleIcon className="btn-icon" />
              Presentación
            </button>

            {/* Botón Mobile */}
            <button 
              className="mobile-menu-btn"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
            </button>
          </div>
        </div>

        {/* Menú Mobile */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <button 
              onClick={() => scrollToSection('direccion-estrategica')}
              className="mobile-nav-link"
            >
              Dirección Estratégica
            </button>
            <button 
              onClick={() => scrollToSection('competencias')}
              className="mobile-nav-link"
            >
              Competencias
            </button>
            <button 
              onClick={() => scrollToSection('modelo-canvas')}
              className="mobile-nav-link"
            >
              Modelo Canvas
            </button>
            <Link to="/negocio" className="mobile-nav-link mobile-special">
              Nuestro Negocio
            </Link>
            <button 
              onClick={togglePresentation}
              className="mobile-nav-link mobile-presentation"
            >
              <InformationCircleIcon className="btn-icon" />
              Presentación
            </button>
          </div>
        )}
      </nav>

      {/* Modal de Presentación */}
      {isPresentationOpen && (
        <div className="presentation-modal-overlay" onClick={togglePresentation}>
          <div className="presentation-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="header-content">
                <img 
                  src="/cftestatal.png" 
                  alt="CFT Estatal" 
                  className="cft-logo-header"
                />
                <h2>Información del Proyecto</h2>
              </div>
              <button 
                className="modal-close-btn"
                onClick={togglePresentation}
              >
                <XMarkIcon />
              </button>
            </div>
            
            <div className="modal-content">

              <div className="modal-info">
                <div className="info-section">
                  <h3>Integrantes</h3>
                  <div className="integrantes">
                    <div className="integrante">
                      <span className="name">Alonso Baez</span>
                    </div>
                    <div className="integrante">
                      <span className="name">Karla Cuevas</span>
                    </div>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Detalles Académicos</h3>
                  <div className="academic-details">
                    <p><strong>Asignatura:</strong> Taller de Emprendimiento</p>
                    <p><strong>Profesor:</strong> Nicolás Manzur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarHome;