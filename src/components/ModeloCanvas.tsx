import React, { useState, useEffect, useRef } from 'react';
import { 
  UserPlusIcon,
  CogIcon,
  StarIcon,
  UsersIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  BanknotesIcon,
  MegaphoneIcon,
  CalculatorIcon,
  HeartIcon,
  CubeIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import './ModeloCanvas.css';

interface CanvasSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
  color: string;
  position: 'left' | 'center' | 'right';
}

const canvasData: CanvasSection[] = [
  {
    id: 'asociaciones-clave',
    title: 'Asociaciones Clave',
    icon: UserPlusIcon,
    color: '#3b82f6',
    position: 'left',
    items: [
      'Municipalidades y gobiernos locales (acceso a vertederos y puntos de acopio textil)',
      'ONGs ambientales y sociales',
      'Recicladores de base y cooperativas de reciclaje',
      'Instituciones educativas (colegios, liceos, universidades, OTEC)',
      'Empresas y marcas con proyectos de RSE y economía circular',
      'Proveedores de logística y transporte',
      'Fondos y programas de innovación / impacto social y ambiental'
    ]
  },
  {
    id: 'actividades-clave',
    title: 'Actividades Clave',
    icon: CogIcon,
    color: '#8b5cf6',
    position: 'left',
    items: [
      'Recolección, selección y clasificación de ropa y textiles del Desierto de Atacama y de campañas urbanas',
      'Diseño circular y confección de prendas y accesorios mediante upcycling',
      'Control de calidad y empaquetado sustentable',
      'Gestión de e-commerce y redes sociales',
      'Organización y ejecución de talleres y charlas educativas',
      'Construcción y mantención de alianzas con empresas, municipios y ONGs',
      'Medición y reporte del impacto ambiental y social'
    ]
  },
  {
    id: 'recursos-clave',
    title: 'Recursos Clave',
    icon: WrenchScrewdriverIcon,
    color: '#10b981',
    position: 'left',
    items: [
      'Textiles y prendas desechadas recolectadas del desierto y de campañas urbanas',
      'Talleres equipados con máquinas de coser, mesas de corte y herramientas',
      'Equipo humano: diseñadores, costureras, monitores de talleres, equipo social y comercial',
      'Marca "Atacama Rewear" y su relato de remediación textil',
      'Plataforma de e-commerce y perfiles en redes sociales',
      'Sistema de medición de impacto social y ambiental'
    ]
  },
  {
    id: 'propuesta-valor',
    title: 'Propuesta de Valor',
    icon: StarIcon,
    color: '#f59e0b',
    position: 'center',
    items: [
      'Prendas y accesorios únicos hechos a partir de textiles rescatados del Desierto de Atacama',
      'Moda circular que reduce residuos textiles y emisiones asociadas',
      'Generación de empleo inclusivo para mujeres jefas de hogar y jóvenes vulnerables',
      'Productos corporativos sustentables que fortalecen la imagen ESG de las empresas',
      'Programas educativos en consumo responsable y economía circular',
      'Trazabilidad y transparencia: del residuo al producto final'
    ]
  },
  {
    id: 'relacion-clientes',
    title: 'Relación Clientes',
    icon: UsersIcon,
    color: '#ef4444',
    position: 'right',
    items: [
      'Comunicación directa y activa con contenidos sobre el "antes y después" de las prendas',
      'Programa de fidelización (descuentos por donar ropa, beneficios por referidos)',
      'Atención personalizada a empresas para diseños y campañas a medida',
      'Acompañamiento continuo a colegios y municipios en proyectos educativos',
      'Comunicación transparente del impacto mediante reportes y publicaciones'
    ]
  },
  {
    id: 'segmentos-clientes',
    title: 'Segmentos de Clientes',
    icon: UserGroupIcon,
    color: '#06b6d4',
    position: 'right',
    items: [
      'Consumidores conscientes que buscan moda sustentable y con propósito',
      'Jóvenes y adultos interesados en comercio justo y economía circular',
      'Empresas que requieren regalos corporativos, uniformes y merchandising sustentable',
      'Instituciones educativas (colegios, liceos, universidades, OTEC)',
      'Municipios y organizaciones sociales con proyectos ambientales',
      'Turistas y visitantes que valoran productos con identidad local'
    ]
  },
  {
    id: 'canales',
    title: 'Canales',
    icon: MegaphoneIcon,
    color: '#8b5cf6',
    position: 'right',
    items: [
      'Tienda online (sitio web e-commerce)',
      'Redes sociales: Instagram, TikTok, Facebook, LinkedIn',
      'Marketplaces de diseño y sustentabilidad',
      'Showroom / tienda-taller en ciudad cercana al Desierto de Atacama',
      'Ferias de diseño, ferias sustentables y mercados locales',
      'Convenios con colegios, universidades, municipios y empresas'
    ]
  },
  {
    id: 'costes',
    title: 'Costes de Estructura',
    icon: CalculatorIcon,
    color: '#dc2626',
    position: 'left',
    items: [
      'Recolección, transporte y clasificación de textiles: $1.250.000',
      'Sueldos del equipo de taller, diseño, gestión social y administración: $5.100.000',
      'Arriendo, servicios básicos y mantención de talleres / showroom: $700.000',
      'Compra y mantención de maquinaria, herramientas y equipos: $72.900',
      'Materiales complementarios: hilos, cierres, etiquetas, empaques ecológicos: $355.000',
      'Marketing digital, diseño gráfico y gestión de redes sociales: $425.000',
      'Gastos legales, contables y administrativos: $280.000',
      'Inversión en formación, certificaciones y desarrollo de programas educativos: $180.000',
      'TOTAL MENSUAL: $8.362.900'
    ]
  },
  {
    id: 'fuentes-ingresos',
    title: 'Fuentes de Ingresos',
    icon: BanknotesIcon,
    color: '#059669',
    position: 'right',
    items: [
      'Venta de prendas y accesorios reciclados al público final (B2C)',
      'Venta de productos textiles reciclados para empresas (B2B: bolsas, estuches, uniformes, merchandising)',
      'Talleres y charlas pagadas para colegios, universidades y empresas',
      'Servicios de consultoría en circularidad textil y moda sustentable',
      'Proyectos financiados por fondos públicos y privados de innovación/impacto',
      'Venta de patrones digitales, guías y cursos online sobre upcycling'
    ]
  }
];

const ModeloCanvas: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
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

  // All sections for the canvas board
  const allSections = canvasData;

  // Handle section click
  const handleSectionClick = (sectionId: string) => {
    setSelectedSection(selectedSection === sectionId ? null : sectionId);
  };

  return (
    <section ref={sectionRef} className="modelo-canvas">
      <div className="container">
        {/* Header */}
        <div className={`canvas-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="header-badge">
            <span className="badge-text">Plan de Negocio</span>
          </div>
          <h2 className="section-title">
            <span className="title-highlight">Modelo Canvas</span>
            <span className="atacama-rewear-logo">
              <span className="atacama-text">Atacama</span>
              <span className="rewear-text">Rewear</span>
            </span>
          </h2>
          <p className="section-subtitle">
            Estrategia integral de moda circular y triple impacto
          </p>
        </div>

        {/* Business Model Canvas Grid */}
        <div className={`canvas-board ${isVisible ? 'animate-in' : ''}`}>
          
          {/* Top Row */}
          <div className="canvas-top-row">
            {/* Socios Clave */}
            <div className="canvas-section socios-clave" onClick={() => handleSectionClick('asociaciones-clave')}>
              <div className="section-header">
                <UserPlusIcon className="section-icon" />
                <h3 className="section-title-canvas">Socios Clave</h3>
                <span className="item-count">{allSections.find(s => s.id === 'asociaciones-clave')?.items.length || 0}</span>
              </div>
              <div className="section-content">
                {allSections.find(s => s.id === 'asociaciones-clave')?.items.map((item, index) => (
                  <p key={index} className="canvas-item">{item}</p>
                ))}
              </div>
            </div>

            {/* Actividades Clave */}
            <div className="canvas-section actividades-clave" onClick={() => handleSectionClick('actividades-clave')}>
              <div className="section-header">
                <CogIcon className="section-icon" />
                <h3 className="section-title-canvas">Actividades Clave</h3>
                <span className="item-count">{allSections.find(s => s.id === 'actividades-clave')?.items.length || 0}</span>
              </div>
              <div className="section-content">
                {allSections.find(s => s.id === 'actividades-clave')?.items.map((item, index) => (
                  <p key={index} className="canvas-item">{item}</p>
                ))}
              </div>
            </div>

            {/* Propuesta de Valor */}
            <div className="canvas-section propuesta-valor" onClick={() => handleSectionClick('propuesta-valor')}>
              <div className="section-header">
                <StarIcon className="section-icon" />
                <h3 className="section-title-canvas">Propuesta de Valor</h3>
                <span className="item-count">{allSections.find(s => s.id === 'propuesta-valor')?.items.length || 0}</span>
              </div>
              <div className="section-content">
                {allSections.find(s => s.id === 'propuesta-valor')?.items.map((item, index) => (
                  <p key={index} className="canvas-item">{item}</p>
                ))}
              </div>
            </div>

            {/* Relación con los Clientes */}
            <div className="canvas-section relacion-clientes" onClick={() => handleSectionClick('relacion-clientes')}>
              <div className="section-header">
                <HeartIcon className="section-icon" />
                <h3 className="section-title-canvas">Relación con los Clientes</h3>
                <span className="item-count">{allSections.find(s => s.id === 'relacion-clientes')?.items.length || 0}</span>
              </div>
              <div className="section-content">
                {allSections.find(s => s.id === 'relacion-clientes')?.items.map((item, index) => (
                  <p key={index} className="canvas-item">{item}</p>
                ))}
              </div>
            </div>

            {/* Segmentos de Clientes */}
            <div className="canvas-section segmentos-clientes" onClick={() => handleSectionClick('segmentos-clientes')}>
              <div className="section-header">
                <UsersIcon className="section-icon" />
                <h3 className="section-title-canvas">Segmentos de Clientes</h3>
                <span className="item-count">{allSections.find(s => s.id === 'segmentos-clientes')?.items.length || 0}</span>
              </div>
              <div className="section-content">
                {allSections.find(s => s.id === 'segmentos-clientes')?.items.map((item, index) => (
                  <p key={index} className="canvas-item">{item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Row */}
          <div className="canvas-middle-row">
            {/* Recursos Clave */}
            <div className="canvas-section recursos-clave" onClick={() => handleSectionClick('recursos-clave')}>
              <div className="section-header">
                <CubeIcon className="section-icon" />
                <h3 className="section-title-canvas">Recursos Clave</h3>
                <span className="item-count">{allSections.find(s => s.id === 'recursos-clave')?.items.length || 0}</span>
              </div>
              <div className="section-content">
                {allSections.find(s => s.id === 'recursos-clave')?.items.map((item, index) => (
                  <p key={index} className="canvas-item">{item}</p>
                ))}
              </div>
            </div>

            {/* Canales */}
            <div className="canvas-section canales" onClick={() => handleSectionClick('canales')}>
              <div className="section-header">
                <MegaphoneIcon className="section-icon" />
                <h3 className="section-title-canvas">Canales</h3>
                <span className="item-count">{allSections.find(s => s.id === 'canales')?.items.length || 0}</span>
              </div>
              <div className="section-content">
                {allSections.find(s => s.id === 'canales')?.items.map((item, index) => (
                  <p key={index} className="canvas-item">{item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="canvas-bottom-row">
            {/* Estructura de Costes */}
            <div className="canvas-section estructura-costes" onClick={() => handleSectionClick('costes')}>
              <div className="section-header">
                <CalculatorIcon className="section-icon" />
                <h3 className="section-title-canvas">Estructura de Costes</h3>
                <span className="item-count">{allSections.find(s => s.id === 'costes')?.items.length || 0}</span>
              </div>
              <div className="section-content">
                {allSections.find(s => s.id === 'costes')?.items.map((item, index) => (
                  <p key={index} className="canvas-item">{item}</p>
                ))}
              </div>
            </div>

            {/* Fuentes de Ingresos */}
            <div className="canvas-section fuentes-ingresos" onClick={() => handleSectionClick('fuentes-ingresos')}>
              <div className="section-header">
                <CurrencyDollarIcon className="section-icon" />
                <h3 className="section-title-canvas">Fuentes de Ingresos</h3>
                <span className="item-count">{allSections.find(s => s.id === 'fuentes-ingresos')?.items.length || 0}</span>
              </div>
              <div className="section-content">
                {allSections.find(s => s.id === 'fuentes-ingresos')?.items.map((item, index) => (
                  <p key={index} className="canvas-item">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Canvas Info */}
        <div className="canvas-info">
          <div className="info-cards">
            <div className="info-card">
              <span className="info-number">9</span>
              <span className="info-label">Bloques Canvas</span>
            </div>
            <div className="info-card">
              <span className="info-number">$8.36M</span>
              <span className="info-label">Costos Mensuales</span>
            </div>
            <div className="info-card">
              <span className="info-number">6</span>
              <span className="info-label">Fuentes Ingresos</span>
            </div>
          </div>
          <p className="legend-text">
            Haz clic en cualquier sección para explorar los detalles
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModeloCanvas;