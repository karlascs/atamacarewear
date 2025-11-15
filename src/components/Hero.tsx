import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import './Hero.css';

// Interface para las funciones que puede llamar el padre
export interface HeroRef {
  resetToFirstSlide: () => void;
}

interface HeroSlide {
  id: number;
  backgroundImage: string;
  texts: {
    main?: string;
    title?: string;
    subtitle?: string;
    purpose?: string;
    mission?: string;
    vision?: string;
    final?: string;
  };
  duration: number;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    backgroundImage: '/desiertoatacama.jpg',
    texts: {
      main: 'El Desierto de Atacama es uno de los lugares más áridos del mundo, capaz de cubrirse de flores y vida en medio de la sequía. Hoy también recibe toneladas de ropa desechada. Desde este contraste nace nuestra misión: convertir esos residuos textiles en moda consciente que ayude al desierto a florecer de nuevo.'
    },
    duration: 8000
  },
  {
    id: 2,
    backgroundImage: '/basuralderopaatacama.jpg',
    texts: {
      subtitle: 'Empresa de moda circular que rescata ropa descartada en el Desierto de Atacama y la transforma en nuevas prendas y accesorios de diseño, generando empleo inclusivo y educación en consumo responsable.'
    },
    duration: 5000
  },
  {
    id: 3,
    backgroundImage: '/atacamabasural.jpg',
    texts: {
      purpose: 'Propósito: Transformar el problema de los residuos textiles en oportunidad de desarrollo social y ambiental, demostrando que la moda puede regenerar ecosistemas y comunidades en lugar de destruirlos.',
      mission: 'Misión: Rescatar textiles desechados en el norte de Chile, rediseñarlos bajo principios de economía circular e inclusión social, generando productos de moda consciente y programas educativos que impulsen el consumo responsable y la empleabilidad de grupos vulnerables.',
      vision: 'Visión: Ser la empresa de referencia en remediación textil en Latinoamérica, reduciendo significativamente los residuos de ropa en el Desierto de Atacama y consolidando una red de talleres inclusivos que inspiren a otras industrias a adoptar modelos de triple impacto.'
    },
    duration: 10000
  },
  {
    id: 4,
    backgroundImage: '/desiertoflorido.jpg',
    texts: {
      final: 'Haz florecer el desierto con cada prenda que eliges.'
    },
    duration: 4000
  }
];

const Hero = forwardRef<HeroRef>((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [accumulatedTexts, setAccumulatedTexts] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  // Función para resetear al primer slide
  const resetToFirstSlide = () => {
    setCurrentSlide(0);
    setTextIndex(0);
    setCurrentText('');
    setAccumulatedTexts([]);
    setIsTyping(false);
  };

  // Exponer la función reset al componente padre
  useImperativeHandle(ref, () => ({
    resetToFirstSlide
  }), []);

  const typewriterEffect = (text: string, callback?: () => void) => {
    setIsTyping(true);
    setCurrentText('');
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setCurrentText(prev => text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
        if (callback) callback();
      }
    }, 40);
    
    return () => clearInterval(timer);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let cleanupTypewriter: (() => void) | undefined;
    
    // Reset accumulated texts when slide changes
    if (textIndex === 0) {
      setAccumulatedTexts([]);
    }
    
    const slide = heroSlides[currentSlide];
    const texts = Object.values(slide.texts).filter(Boolean);
    
    if (texts.length > 0) {
      const currentTextContent = texts[textIndex] || texts[0];
      
      // Small delay to prevent rapid state changes
      timeoutId = setTimeout(() => {
        cleanupTypewriter = typewriterEffect(currentTextContent, () => {
          // Add current text to accumulated texts
          setAccumulatedTexts(prev => [...prev, currentTextContent]);
          
          timeoutId = setTimeout(() => {
            if (textIndex < texts.length - 1) {
              setTextIndex(textIndex + 1);
            } else {
              timeoutId = setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
                setTextIndex(0);
              }, 2000);
            }
          }, 1500);
        });
      }, 100);
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (cleanupTypewriter) cleanupTypewriter();
    };
  }, [currentSlide, textIndex]);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="hero-slideshow">
      <div 
        className="hero-background-image"
        style={{ 
          backgroundImage: `url(${currentSlideData.backgroundImage})` 
        }}
      >
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content-slideshow">
        <div className="container">
          <div className="slideshow-content">
            
            {/* Slide 1: Desierto info */}
            {currentSlide === 0 && (
              <div className="slide-content slide-1">
                <h1 className="typewriter-text main-text">
                  {currentText}
                  {isTyping && <span className="cursor">|</span>}
                </h1>
              </div>
            )}

            {/* Slide 2: Atacama Rewear intro */}
            {currentSlide === 1 && (
              <div className="slide-content slide-2">
                <div className="hero-logo-slideshow">
                  <img 
                    src="/atacamarewearlogo.png" 
                    alt="Atacama Rewear Logo" 
                  />
                </div>
                
                {/* Show accumulated texts */}
                {accumulatedTexts.map((text, index) => (
                  <div key={index} className="typewriter-text title-text accumulated">
                    {text}
                  </div>
                ))}
                
                {/* Show current typing text */}
                {isTyping && (
                  <div className="typewriter-text title-text">
                    {currentText}
                    <span className="cursor">|</span>
                  </div>
                )}
              </div>
            )}

            {/* Slide 3: Propósito, Misión, Visión */}
            {currentSlide === 2 && (
              <div className="slide-content slide-3">
                <div className="mvp-grid">
                  {/* Show accumulated texts */}
                  {accumulatedTexts.map((text, index) => (
                    <div key={index} className="mvp-card">
                      <div className="typewriter-text mvp-text accumulated">
                        {text}
                      </div>
                    </div>
                  ))}
                  
                  {/* Show current typing text */}
                  {isTyping && (
                    <div className="mvp-card">
                      <div className="typewriter-text mvp-text">
                        {currentText}
                        <span className="cursor">|</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Slide 4: Final message */}
            {currentSlide === 3 && (
              <div className="slide-content slide-4">
                <h1 className="typewriter-text final-text">
                  {currentText}
                  {isTyping && <span className="cursor">|</span>}
                </h1>
                <div className="final-buttons">
                  <a href="#coleccion" className="btn btn-primary">
                    Ver colección
                    <ArrowRightIcon className="w-5 h-5" />
                  </a>
                  <a href="#impacto" className="btn btn-outline">
                    Conoce nuestro impacto
                  </a>
                </div>
              </div>
            )}

            {/* Slide indicators */}
            <div className="slide-indicators">
              {heroSlides.map((_, index) => (
                <div
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentSlide(index);
                    setTextIndex(0);
                  }}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;