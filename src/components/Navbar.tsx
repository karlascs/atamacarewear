import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, UserIcon, HeartIcon } from '@heroicons/react/24/outline';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#coleccion', label: 'Colección' },
    { href: '#impacto', label: 'Impacto' },
    { href: '#talleres', label: 'Talleres' },
    { href: '/tienda', label: 'Tienda' },
    { href: '/blog', label: 'Blog' }
  ];

  const scrollToTop = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container container">
          <div className="navbar-brand">
            <button onClick={scrollToTop} className="brand-link">
              <img 
                src={`${process.env.PUBLIC_URL}/atacamarewearlogo.png`} 
                alt="Atacama Rewear Logo"
                className="navbar-logo"
              />
              <div className="brand-info">
                <span className="brand-text">Atacama Rewear</span>
                <span className="brand-tagline">Moda Circular</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link nav-link-corporate"
                onClick={handleLinkClick}
              >
                <span className="nav-link-text">{link.label}</span>
              </a>
            ))}
            
            {/* Botones de acción corporativos */}
            <div className="navbar-actions">
              <button className="action-btn favorites-btn" title="Favoritos">
                <HeartIcon className="action-icon" />
                <span className="action-badge">2</span>
              </button>
              
              <button className="action-btn profile-btn" title="Mi Perfil">
                <UserIcon className="action-icon" />
              </button>
              
              {/* Carrito principal destacado */}
              <button className="action-btn cart-btn cart-btn-primary" title="Carrito de Compras">
                <ShoppingCartIcon className="cart-icon" />
                {cartItems > 0 && (
                  <span className="cart-badge">{cartItems}</span>
                )}
                <span className="cart-text">Carrito</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link mobile-nav-link-corporate"
                onClick={handleLinkClick}
              >
                <span className="mobile-nav-text">{link.label}</span>
              </a>
            ))}
            
            {/* Botones de acción móvil corporativos */}
            <div className="mobile-actions">
              <button className="mobile-action-btn" onClick={handleLinkClick}>
                <HeartIcon className="mobile-action-icon" />
                <span>Favoritos</span>
                <span className="mobile-action-badge">2</span>
              </button>
              
              <button className="mobile-action-btn" onClick={handleLinkClick}>
                <UserIcon className="mobile-action-icon" />
                <span>Mi Perfil</span>
              </button>
              
              <button className="mobile-action-btn mobile-cart-btn" onClick={handleLinkClick}>
                <ShoppingCartIcon className="mobile-cart-icon" />
                <span>Carrito de Compras</span>
                {cartItems > 0 && (
                  <span className="mobile-cart-badge">{cartItems}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay para cerrar menu en mobile */}
      {isMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;