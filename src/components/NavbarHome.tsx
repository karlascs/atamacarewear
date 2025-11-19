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
              src={`${process.env.PUBLIC_URL}/atacamarewearlogo.png`} 
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
            <button 
              className="modal-close-btn"
              onClick={togglePresentation}
              aria-label="Cerrar"
            >
              <XMarkIcon />
            </button>

            {/* Portada estilo académico */}
            <div className="cover-page">
              {/* Logo institucional */}
              <div className="institution-header">
                <img 
                  src={`${process.env.PUBLIC_URL}/cftestatal.png`} 
                  alt="CFT Estatal" 
                  className="institution-logo"
                />
                <div className="institution-info">
                  <h3 className="institution-name">Centro de Formación Técnica Estatal</h3>
                  <p className="institution-region">Región de Valparaíso</p>
                </div>
              </div>

              {/* Decoración superior */}
              <div className="cover-decoration"></div>

              {/* Título del proyecto */}
              <div className="project-title-section">
                <div className="title-decoration-top"></div>
                <h1 className="project-title">Atacama Rewear</h1>
                <div className="title-decoration-bottom"></div>
                <p className="project-subtitle">Transformando Residuos Textiles en Moda Circular</p>
              </div>

              {/* Logo del proyecto */}
              <div className="project-logo-section">
                <img 
                  src={`${process.env.PUBLIC_URL}/atacamarewearlogo.png`} 
                  alt="Atacama Rewear Logo" 
                  className="project-logo"
                />
              </div>

              {/* Información del trabajo */}
              <div className="work-info">
                <div className="info-row">
                  <span className="info-label">Asignatura:</span>
                  <span className="info-value">Taller de Emprendimiento</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Profesor:</span>
                  <span className="info-value">Nicolás Manzur</span>
                </div>
              </div>

              {/* Integrantes */}
              <div className="team-section">
                <h4 className="team-title">Integrantes del Proyecto</h4>
                <div className="team-members">
                  <div className="team-member">
                    <div className="member-icon">👤</div>
                    <span className="member-name">Alonso Baez</span>
                  </div>
                  <div className="team-member">
                    <div className="member-icon">👤</div>
                    <span className="member-name">Karla Cuevas</span>
                  </div>
                </div>
              </div>

              {/* Fecha */}
              <div className="cover-footer">
                <p className="date">Noviembre 2025</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarHome;