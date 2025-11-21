import React, { useState, useEffect, useRef } from 'react';
import { 
  TruckIcon,
  PencilSquareIcon,
  UsersIcon,
  AcademicCapIcon,
  SparklesIcon,
  ShoppingBagIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import './CompetenciasHome.css';

interface Competencia {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
}

const competenciasData: Competencia[] = [
  {
    id: 'gestion-residuos',
    title: 'Gestión de residuos textiles y logística inversa',
    icon: TruckIcon,
    description: 'Atacama Rewear cuenta con una sólida capacidad para recolectar, clasificar y almacenar ropa en grandes volúmenes, proveniente tanto del Desierto de Atacama como de campañas urbanas. Esta gestión eficiente de residuos textiles se refuerza mediante alianzas estratégicas con municipalidades, organizaciones sociales y recicladores de base, lo que permite asegurar un flujo constante de materia prima y una operación logística inversa organizada y trazable.',
    color: '#06b6d4'
  },
  {
    id: 'diseno-circular',
    title: 'Diseño circular y upcycling',
    icon: PencilSquareIcon,
    description: 'La empresa dispone de un equipo de diseño especializado en economía circular y upcycling, capaz de transformar prendas dañadas o en desuso en productos atractivos, funcionales y de alto valor percibido. Esta competencia se complementa con la creación de colecciones que rescatan la identidad del norte de Chile y del desierto, incorporando colores, texturas y relatos propios del territorio, lo que otorga a la marca un sello distintivo en el mercado de la moda sustentable.',
    color: '#8b5cf6'
  },
  {
    id: 'gestion-social',
    title: 'Gestión social y trabajo con comunidades',
    icon: UsersIcon,
    description: 'Atacama Rewear posee experiencia en la articulación de proyectos con comunidades locales, especialmente en contextos de vulnerabilidad social. La empresa destaca por su capacidad para capacitar grupos en oficios textiles, crear ambientes de trabajo dignos y colaborativos, y coordinar talleres en barrios y localidades alejadas. Esta competencia social fortalece el vínculo con el entorno y convierte a la marca en un agente de desarrollo comunitario.',
    color: '#10b981'
  },
  {
    id: 'educacion-sensibilizacion',
    title: 'Educación y sensibilización en consumo responsable',
    icon: AcademicCapIcon,
    description: 'Otra competencia central es el diseño y ejecución de programas educativos dirigidos a colegios, universidades, empresas y público general. A través de charlas, talleres y campañas de recolección de ropa, la empresa promueve el consumo responsable, la reflexión sobre la "fast fashion" y la importancia de extender la vida útil de las prendas. Este enfoque se amplifica mediante contenido constante en redes sociales, posicionando a Atacama Rewear como referente en moda consciente.',
    color: '#f59e0b'
  },
  {
    id: 'marca-proposito',
    title: 'Marca con propósito y relato territorial',
    icon: SparklesIcon,
    description: 'Atacama Rewear se diferencia por una marca con propósito claro: "ropa con consciencia" y moda que no daña el planeta. Su narrativa se construye en torno al rescate del Desierto de Atacama y la transformación de un problema ambiental en una oportunidad de triple impacto. Esta combinación de propósito, coherencia y relato territorial —asociado a la idea de Sustainable Fashion from Atacama— genera una conexión emocional fuerte con las personas y otorga una ventaja competitiva frente a propuestas más tradicionales.',
    color: '#ef4444'
  },
  {
    id: 'gestion-comercial',
    title: 'Gestión comercial omnicanal',
    icon: ShoppingBagIcon,
    description: 'Finalmente, la empresa ha desarrollado la capacidad de operar bajo un modelo comercial omnicanal, integrando venta online mediante e-commerce propio con puntos de contacto físicos, como la tienda-taller y la participación en ferias, pop-up stores y marketplaces de diseño. Esta diversidad de canales permite llegar a distintos segmentos de clientes, aumentar la visibilidad de la marca y facilitar el acceso a sus productos, manteniendo siempre el foco en la experiencia del cliente y en el impacto positivo asociado a cada compra.',
    color: '#6366f1'
  }
];

const CompetenciasHome: React.FC = () => {
  const [selectedCompetencia, setSelectedCompetencia] = useState(0);
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

  const currentCompetencia = competenciasData[selectedCompetencia];
  const IconComponent = currentCompetencia.icon;

  return (
    <section ref={sectionRef} className="competencias-home">
      <div className="container">
        {/* Header */}
        <div className={`competencias-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">
            Competencias clave y{' '}
            <span className="highlight-gradient">ventajas competitivas</span>
          </h2>
          <p className="section-subtitle">
            Las fortalezas distintivas que nos posicionan como líderes en moda circular
          </p>
        </div>

        <div className="competencias-container">
          {/* Sidebar Navigation */}
          <div className={`competencias-nav ${isVisible ? 'animate-in' : ''}`}>
            {competenciasData.map((competencia, index) => {
              const NavIcon = competencia.icon;
              return (
                <button
                  key={competencia.id}
                  className={`competencia-nav-item ${selectedCompetencia === index ? 'active' : ''}`}
                  onClick={() => setSelectedCompetencia(index)}
                  style={{
                    '--item-color': competencia.color
                  } as React.CSSProperties}
                >
                  <div className="nav-item-icon">
                    <NavIcon className="icon" />
                  </div>
                  <div className="nav-item-content">
                    <h4>{competencia.title}</h4>
                  </div>
                  <ArrowRightIcon className="nav-arrow" />
                </button>
              );
            })}
          </div>

          {/* Main Content */}
          <div className={`competencias-content ${isVisible ? 'animate-in' : ''}`}>
            <div 
              className="content-card"
              style={{
                '--current-color': currentCompetencia.color
              } as React.CSSProperties}
            >
              <div className="shine-effect"></div>
              <div className="card-header">
                <div className="header-icon">
                  <IconComponent className="icon" />
                </div>
                <h3 className="card-title">{currentCompetencia.title}</h3>
              </div>
              
              <div className="card-content">
                <p className="content-text">{currentCompetencia.description}</p>
              </div>

              <div className="card-footer">
                <div className="competencia-indicator">
                  <span className="indicator-number">
                    {String(selectedCompetencia + 1).padStart(2, '0')}
                  </span>
                  <span className="indicator-total">/ 06</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="competencias-dots">
          {competenciasData.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${selectedCompetencia === index ? 'active' : ''}`}
              onClick={() => setSelectedCompetencia(index)}
              style={{
                '--dot-color': competenciasData[index].color
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetenciasHome;