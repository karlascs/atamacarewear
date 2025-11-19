import React, { useState, useEffect, useRef } from 'react';
import { 
  ChartBarIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
  MegaphoneIcon,
  ChevronDownIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import './DireccionEstrategica.css';

interface SeccionEstrategica {
  id: string;
  titulo: string;
  icono: React.ComponentType<{ className?: string }>;
  contenido: string;
  color: string;
}

const seccionesEstrategicas: SeccionEstrategica[] = [
  {
    id: 'objetivos',
    titulo: 'Objetivos Estratégicos de la Empresa',
    icono: ChartBarIcon,
    contenido: 'Atacama Rewear tiene como objetivo principal reducir de forma sostenida los residuos textiles presentes en el Desierto de Atacama, recuperando prendas y telas para transformarlas en productos de moda circular con valor agregado. Junto con esto, busca consolidarse como una marca referente en moda sustentable en Chile, ampliando su presencia en e-commerce, ferias y alianzas con empresas e instituciones. De manera complementaria, la empresa se propone aumentar cada año el número de personas capacitadas y contratadas en sus talleres, de modo que el crecimiento económico vaya siempre acompañado de mayor impacto social y ambiental positivo.',
    color: '#22c55e'
  },
  {
    id: 'riesgos',
    titulo: 'Análisis de Riesgos y Desafíos',
    icono: ExclamationTriangleIcon,
    contenido: 'Entre los principales riesgos del proyecto se encuentra la complejidad logística de recolectar, trasladar y almacenar grandes volúmenes de ropa desde zonas alejadas, lo que puede aumentar costos y exigir una coordinación constante con municipalidades y organizaciones locales. También es un desafío la variabilidad en la calidad de los textiles recuperados, que obliga a contar con procesos muy cuidadosos de selección y control de calidad para asegurar productos finales atractivos y duraderos. A nivel de mercado, la empresa debe enfrentar la falta de conocimiento sobre la moda circular y posibles prejuicios hacia la ropa reutilizada, por lo que resulta clave educar al consumidor y diferenciarse claramente de la moda rápida tradicional.',
    color: '#f59e0b'
  },
  {
    id: 'proyeccion',
    titulo: 'Proyección Futura y Escalabilidad',
    icono: ArrowTrendingUpIcon,
    contenido: 'A mediano plazo, Atacama Rewear proyecta ampliar su capacidad productiva mediante la creación de nuevos talleres en distintas regiones del país, especialmente en zonas afectadas por residuos textiles. Asimismo, busca fortalecer su plataforma de venta online y explorar la comercialización internacional en mercados interesados en propuestas de moda ética y circular. La empresa también contempla el desarrollo de colecciones colaborativas con diseñadores y marcas que deseen integrar la circularidad en sus líneas, lo que permitiría escalar el impacto sin perder el enfoque en la producción responsable y el trabajo con comunidades locales.',
    color: '#3b82f6'
  },
  {
    id: 'comunicacion',
    titulo: 'Estrategia de Comunicación',
    icono: MegaphoneIcon,
    contenido: 'La estrategia de comunicación de Atacama Rewear se basa en mostrar historias reales y datos concretos de impacto. A través de redes sociales, el sitio web y material educativo, la empresa comparte el "viaje" de cada prenda: desde el desierto y los puntos de acopio hasta el taller y el producto final. Se privilegia un tono cercano, transparente y educativo, evitando el greenwashing y explicando de forma sencilla qué es la moda circular y por qué importa. Además, se da visibilidad a las personas que participan en los talleres, a las alianzas con colegios y organizaciones, y a los resultados ambientales y sociales alcanzados, fortaleciendo así la confianza y el vínculo con la comunidad y los clientes.',
    color: '#8b5cf6'
  }
];

const DireccionEstrategica: React.FC = () => {
  const [selectedSeccion, setSelectedSeccion] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotación de secciones estratégicas cada 20 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSeccion((prev) => 
        prev === seccionesEstrategicas.length - 1 ? 0 : prev + 1
      );
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const currentSeccion = seccionesEstrategicas[selectedSeccion];
  const IconComponent = currentSeccion.icono;

  return (
    <section ref={sectionRef} className="direccion-estrategica">
      <div className="container">
        {/* Header */}
        <div className={`estrategia-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="header-decoration">
            <SparklesIcon className="sparkle-icon" />
          </div>
          <h2 className="section-title">
            Dirección Estratégica y{' '}
            <span className="highlight-gradient">Futuro de Atacama Rewear</span>
          </h2>
          <p className="section-subtitle">
            Nuestra hoja de ruta hacia la transformación sostenible del sector textil
          </p>
        </div>

        <div className="estrategia-container">
          {/* Sidebar Navigation */}
          <div className={`estrategia-nav ${isVisible ? 'animate-in' : ''}`}>
            {seccionesEstrategicas.map((seccion, index) => {
              const NavIcon = seccion.icono;
              return (
                <button
                  key={seccion.id}
                  className={`estrategia-nav-item ${selectedSeccion === index ? 'active' : ''}`}
                  onClick={() => setSelectedSeccion(index)}
                  style={{
                    '--item-color': seccion.color
                  } as React.CSSProperties}
                >
                  <div className="nav-item-icon">
                    <NavIcon className="icon" />
                  </div>
                  <div className="nav-item-content">
                    <h4>{seccion.titulo}</h4>
                  </div>
                  <ChevronDownIcon className="nav-arrow" />
                </button>
              );
            })}
          </div>

          {/* Main Content */}
          <div className={`estrategia-content ${isVisible ? 'animate-in' : ''}`}>
            <div 
              className="content-card"
              style={{
                '--current-color': currentSeccion.color
              } as React.CSSProperties}
            >
              <div className="gradient-overlay"></div>
              <div className="card-header">
                <div className="header-icon">
                  <IconComponent className="icon" />
                </div>
                <h3 className="card-title">{currentSeccion.titulo}</h3>
              </div>
              
              <div className="card-content">
                <p className="content-text">{currentSeccion.contenido}</p>
              </div>

              <div className="card-footer">
                <div className="seccion-indicator">
                  <span className="indicator-number">
                    {String(selectedSeccion + 1).padStart(2, '0')}
                  </span>
                  <span className="indicator-total">/ 04</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="estrategia-dots">
          {seccionesEstrategicas.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${selectedSeccion === index ? 'active' : ''}`}
              onClick={() => setSelectedSeccion(index)}
              style={{
                '--dot-color': seccionesEstrategicas[index].color
              } as React.CSSProperties}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DireccionEstrategica;