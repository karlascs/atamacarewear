import React, { useState } from 'react';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);



  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer 
      className="unique-footer"
      style={{
        backgroundImage: `linear-gradient(135deg, 
          rgba(15, 23, 42, 0.85) 0%, 
          rgba(30, 41, 59, 0.7) 25%,
          rgba(51, 65, 85, 0.6) 50%,
          rgba(30, 41, 59, 0.7) 75%,
          rgba(15, 23, 42, 0.85) 100%),
        url(/desierto.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="footer-background-effects">
        <div className="floating-particles"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container">
        {/* Hero Section del Footer */}
        <div className="footer-hero">
          <div className="hero-content">
            <div className="logo-spectacular">
              <div className="logo-glow"></div>
              <img 
                src="/atacamarewearlogo.png" 
                alt="Atacama Rewear Logo"
                className="logo-image"
              />
              <div className="logo-text">
                <span className="atacama-part">Atacama</span>
                <span className="rewear-part">Rewear</span>
              </div>
            </div>
            
            <div className="hero-message">
              <h2 className="footer-title">
                <span className="title-line">Líder en Soluciones Textiles Circulares</span>
                <span className="title-highlight">Impacto Corporativo Medible</span>
              </h2>
              <p className="footer-subtitle">
                Economía Circular • Consultoría Especializada • RSE Certificada
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-section">
          <div className="links-grid">
            <div className="link-category">
              <h4>Servicios Empresariales</h4>
              <div className="links-list">
                <a href="#coleccion" className="footer-link">Catálogo Corporativo</a>
                <a href="#impacto" className="footer-link">Reportes de Impacto</a>
                <a href="#talleres" className="footer-link">Capacitación Organizacional</a>
                <a href="/consultoria" className="footer-link">Consultoría RSE</a>
              </div>
            </div>
            
            <div className="link-category">
              <h4>Contacto Corporativo</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <EnvelopeIcon className="contact-icon" />
                  <a href="mailto:consultorias@atacamarewear.cl" className="footer-link">
                    consultorias@atacamarewear.cl
                  </a>
                </div>
                <div className="contact-item">
                  <PhoneIcon className="contact-icon" />
                  <a href="tel:+56955123456" className="footer-link">
                    +56 9 5512 3456
                  </a>
                </div>
                <div className="contact-item">
                  <MapPinIcon className="contact-icon" />
                  <span className="footer-text">Región de Antofagasta, Chile</span>
                </div>
              </div>
            </div>
            
            <div className="link-category">
              <h4>Conecta con Nosotros</h4>
              <div className="social-links">
                <a href="https://linkedin.com/company/atacamarewear" className="social-link linkedin">
                  <span className="social-icon">💼</span>
                  <span>LinkedIn Empresarial</span>
                </a>
                <a href="#newsletter" className="social-link newsletter">
                  <span className="social-icon">📧</span>
                  <span>Newsletter Corporativo</span>
                </a>
                <a href="#webinar" className="social-link webinar">
                  <span className="social-icon">🎯</span>
                  <span>Webinars Ejecutivos</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Corporativa Adicional */}
        <div className="footer-corporate-section">
          <div className="corporate-info">
            <div className="info-item">
              <h5>Certificaciones</h5>
              <ul>
                <li>• Empresa B Certificada</li>
                <li>• ISO 14001 (En proceso)</li>
                <li>• Sello ProPyme</li>
              </ul>
            </div>
            <div className="info-item">
              <h5>Alianzas Estratégicas</h5>
              <ul>
                <li>• Red de Empresas Circulares</li>
                <li>• Pacto Global Chile</li>
                <li>• Fundación Avina</li>
              </ul>
            </div>
            <div className="info-item">
              <h5>Documentos Legales</h5>
              <ul>
                <li><a href="/politicas" className="footer-link">• Políticas de Privacidad</a></li>
                <li><a href="/terminos" className="footer-link">• Términos y Condiciones</a></li>
                <li><a href="/compliance" className="footer-link">• Compliance Corporativo</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Creditos */}
        <div className="footer-credits">
          <div className="credits-content">
            <div className="copyright">
              <p>&copy; 2024 Atacama Rewear SpA • RUT: 77.123.456-7 • Todos los derechos reservados</p>
            </div>
            
            <div className="made-by">
              <div className="made-by-content">
                <span className="made-text">Hecho con</span>
                <div className="heart-container">
                  <span className="heart">💚</span>
                </div>
                <span className="made-text">por</span>
                <a 
                  href="https://innovabit.cl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="innovabit-link"
                >
                  <span className="innovabit-text">innovabit.cl</span>
                  <div className="link-glow"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;