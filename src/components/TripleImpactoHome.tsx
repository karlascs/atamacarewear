import React, { useState, useEffect, useRef } from 'react';
import { 
  GlobeAmericasIcon, 
  UsersIcon, 
  CurrencyDollarIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';
import './TripleImpactoHome.css';

interface ImpactData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  gradient: string;
  items: {
    title: string;
    description: string;
    highlights: string[];
  }[];
}

const impactData: ImpactData[] = [
  {
    id: 'ambiental',
    title: 'Impacto Ambiental',
    subtitle: 'Regenerando el desierto',
    icon: GlobeAmericasIcon,
    color: '#22c55e',
    gradient: 'from-green-400 to-emerald-600',
    items: [
      {
        title: '',
        description: 'La empresa desarrolla un rol activo de remediación textil, recuperando ropa y telas abandonadas en el Desierto de Atacama y en otros puntos de acopio, lo que contribuye a disminuir significativamente las toneladas de residuos textiles que generan contaminación visual, degradación del suelo y emisiones de CO₂ asociadas a su producción y desecho. A través de un modelo de economía circular, se realiza upcycling de prendas (es decir, se convierten prendas usadas en piezas de mayor valor), se reutilizan retazos para la creación de accesorios, parches y colecciones cápsula, y se trabaja constantemente para minimizar los residuos en toda la cadena de producción. Además, se prioriza el uso de materiales y procesos responsables, incorporando hilos reciclados, tintes no tóxicos y empaques compostables o reciclables, reforzando así el compromiso ambiental de la marca.',
        highlights: []
      }
    ]
  },
  {
    id: 'social',
    title: 'Impacto Social',
    subtitle: 'Transformando comunidades',
    icon: UsersIcon,
    color: '#3b82f6',
    gradient: 'from-blue-400 to-indigo-600',
    items: [
      {
        title: '',
        description: 'En el ámbito social, la empresa impulsa la generación de empleo inclusivo mediante la contratación y capacitación de mujeres jefas de hogar de la zona y jóvenes sin experiencia formal, ofreciendo oportunidades laborales dignas y estables. Paralelamente, se promueve la formación en oficios a través de talleres de corte y confección, diseño básico, reparación de prendas y emprendimiento textil, fortaleciendo las habilidades y la autonomía económica de las personas participantes. A esto se suma un trabajo constante de educación al consumidor, mediante charlas y actividades en colegios, municipios y empresas sobre consumo responsable, el impacto de la "fast fashion" y la importancia de alargar la vida útil de la ropa, contribuyendo a un cambio cultural en la forma de vestir y comprar.',
        highlights: []
      }
    ]
  },
  {
    id: 'economico',
    title: 'Impacto Económico',
    subtitle: 'Crecimiento sostenible',
    icon: CurrencyDollarIcon,
    color: '#f59e0b',
    gradient: 'from-amber-400 to-orange-600',
    items: [
      {
        title: '',
        description: 'Desde la dimensión económica, la empresa se basa en un modelo rentable y escalable que combina la venta de colecciones de moda consciente con el desarrollo de líneas corporativas —como bolsas, estuches y uniformes reciclados— y la prestación de servicios B2B en consultoría sobre circularidad textil. Este modelo favorece el desarrollo local, al generar ingresos en comunidades cercanas al desierto y articular un encadenamiento productivo con talleres locales y artesanos. Además, al estar alineada con la sostenibilidad y la innovación, la empresa se posiciona como un proyecto atractivo para la inversión de impacto, con potencial para acceder a fondos verdes, programas de innovación y financiamiento orientado a la economía circular.',
        highlights: []
      }
    ]
  }
];

const TripleImpactoHome: React.FC = () => {
  const [activeImpact, setActiveImpact] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImpact((prev) => (prev + 1) % impactData.length);
    }, 35000);

    return () => clearInterval(interval);
  }, []);

  const currentImpact = impactData[activeImpact];
  const IconComponent = currentImpact.icon;

  return (
    <section ref={sectionRef} className="triple-impacto-home">
      <div className="container">
        {/* Header */}
        <div className={`impact-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="header-decoration">
            <SparklesIcon className="sparkle-icon" />
          </div>
          <h2 className="section-title">
            ¿Qué la hace una empresa de{' '}
            <span className="highlight-text">TRIPLE IMPACTO</span>?
          </h2>
          <div className="title-underline"></div>
        </div>

        {/* Impact Cards Navigation */}
        <div className={`impact-navigation ${isVisible ? 'animate-in' : ''}`}>
          {impactData.map((impact, index) => {
            const NavIcon = impact.icon;
            return (
              <button
                key={impact.id}
                className={`nav-card ${activeImpact === index ? 'active' : ''}`}
                onClick={() => setActiveImpact(index)}
                style={{
                  '--card-color': impact.color,
                  '--card-gradient': `linear-gradient(135deg, ${impact.color}20, ${impact.color}10)`
                } as React.CSSProperties}
              >
                <div className="nav-icon">
                  <NavIcon className="icon" />
                </div>
                <div className="nav-content">
                  <h3>{impact.title}</h3>
                  <p>{impact.subtitle}</p>
                </div>
                <div className="nav-indicator"></div>
              </button>
            );
          })}
        </div>

        {/* Main Content Display */}
        <div 
          className={`impact-display ${isVisible ? 'animate-in' : ''}`}
          style={{
            '--current-color': currentImpact.color
          } as React.CSSProperties}
        >
          <div className="display-header">
            <div className="main-icon">
              <IconComponent className="icon" />
            </div>
            <div className="header-text">
              <h3 className="impact-title">{currentImpact.title}</h3>
              <p>{currentImpact.subtitle}</p>
            </div>
          </div>

          <div className="impact-content">
            <div className="impact-paragraph">
              <div className="triple-shine-effect"></div>
              <p className="paragraph-text">{currentImpact.items[0].description}</p>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="progress-indicators">
          {impactData.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${activeImpact === index ? 'active' : ''}`}
              onClick={() => setActiveImpact(index)}
              style={{
                '--dot-color': impactData[index].color
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripleImpactoHome;