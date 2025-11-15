import React from 'react';
import { 
  GlobeAltIcon, 
  UsersIcon, 
  CurrencyDollarIcon,
  SparklesIcon,
  HeartIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import './TripleImpacto.css';

interface Impacto {
  categoria: string;
  titulo: string;
  descripcion: string;
  icono: React.ReactNode;
  color: string;
  estadisticas: {
    numero: string;
    descripcion: string;
  }[];
  logros: string[];
}

const impactos: Impacto[] = [
  {
    categoria: "Ambiental",
    titulo: "Rescatamos el planeta, prenda a prenda",
    descripcion: "Cada textil rescatado del desierto es una oportunidad menos de contaminación y una nueva vida para materiales que serían desechos.",
    icono: <SparklesIcon className="w-8 h-8" />,
    color: "var(--color-verde-reciclaje)",
    estadisticas: [
      { numero: "8 ton", descripcion: "textiles rescatados del desierto" },
      { numero: "2.500+", descripcion: "prendas salvadas de la basura" },
      { numero: "12 m³", descripcion: "agua ahorrada vs. producción nueva" }
    ],
    logros: [
      "Reducción del 85% en residuos textiles locales",
      "Ahorro equivalente a 15.000 botellas plásticas",
      "Disminución de huella de carbono en 40%"
    ]
  },
  {
    categoria: "Social",
    titulo: "Generamos oportunidades, construimos comunidad",
    descripcion: "Nuestros talleres inclusivos crean empleos dignos para mujeres jefas de hogar, migrantes y jóvenes en situación vulnerable.",
    icono: <HeartIcon className="w-8 h-8" />,
    color: "var(--color-naranjo)",
    estadisticas: [
      { numero: "150", descripcion: "empleos directos generados" },
      { numero: "85%", descripcion: "mujeres en nuestro equipo" },
      { numero: "25", descripcion: "familias beneficiadas mensualmente" }
    ],
    logros: [
      "Capacitación en oficios textiles a 200+ personas",
      "Programas de inserción laboral inclusiva",
      "Red de apoyo para madres trabajadoras"
    ]
  },
  {
    categoria: "Económico",
    titulo: "Modelo sostenible que transforma vidas",
    descripcion: "Creamos un círculo virtuoso donde cada venta financia más rescates, más empleos y más impacto positivo en la comunidad.",
    icono: <ArrowTrendingUpIcon className="w-8 h-8" />,
    color: "var(--color-cafe)",
    estadisticas: [
      { numero: "$45M", descripcion: "CLP generados en ventas locales" },
      { numero: "60%", descripcion: "reinversión en programas sociales" },
      { numero: "12", descripcion: "alianzas con organizaciones sociales" }
    ],
    logros: [
      "Modelo de comercio justo certificado",
      "Precios accesibles sin explotar trabajadores",
      "Crecimiento sostenible año tras año"
    ]
  }
];

const TripleImpacto: React.FC = () => {
  return (
    <section id="impacto" className="section">
      <div className="container">
        <div className="seccion-header text-center mb-4">
          <h2>Nuestro triple impacto</h2>
          <p className="seccion-subtitle">
            Cada prenda que creates cuenta con datos reales de transformación. 
            Transparencia total sobre cómo tu compra genera cambio positivo.
          </p>
        </div>

        <div className="impactos-grid">
          {impactos.map((impacto, index) => (
            <div key={index} className="impacto-card">
              <div 
                className="impacto-header"
                style={{ borderColor: impacto.color }}
              >
                <div 
                  className="impacto-icono"
                  style={{ backgroundColor: impacto.color }}
                >
                  {impacto.icono}
                </div>
                <div className="impacto-info">
                  <span className="impacto-categoria">{impacto.categoria}</span>
                  <h3 className="impacto-titulo">{impacto.titulo}</h3>
                </div>
              </div>

              <p className="impacto-descripcion">{impacto.descripcion}</p>

              <div className="impacto-estadisticas">
                <h4>Impacto medible</h4>
                {impacto.estadisticas.map((stat, statIndex) => (
                  <div key={statIndex} className="estadistica">
                    <span 
                      className="estadistica-numero"
                      style={{ color: impacto.color }}
                    >
                      {stat.numero}
                    </span>
                    <span className="estadistica-descripcion">{stat.descripcion}</span>
                  </div>
                ))}
              </div>

              <div className="impacto-logros">
                <h4>Logros destacados</h4>
                <ul>
                  {impacto.logros.map((logro, logroIndex) => (
                    <li key={logroIndex}>{logro}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="impacto-resumen">
          <div className="resumen-contenido">
            <div className="resumen-texto">
              <h3>¿Qué significa esto para ti?</h3>
              <p>
                Cuando compras en Atacama Rewear, no solo llevas una prenda única y con historia. 
                Te conviertes en parte de una revolución silenciosa que está cambiando vidas, 
                rescatando el medio ambiente y demostrando que la moda puede ser una fuerza para el bien.
              </p>
              
              <div className="impacto-cta">
                <a href="#coleccion" className="btn btn-primary">
                  Genera impacto ahora
                </a>
                <a href="/impacto-detallado" className="btn btn-outline">
                  Ver reporte completo
                </a>
              </div>
            </div>
            
            <div className="resumen-datos">
              <div className="dato-destacado">
                <span>Por cada prenda: -2kg CO₂ vs. producción tradicional</span>
                <GlobeAltIcon className="w-4 h-4" />
              </div>
              <div className="dato-destacado">
                <span>1 compra = 2 horas de trabajo digno generadas</span>
                <UsersIcon className="w-4 h-4" />
              </div>
              <div className="dato-destacado">
                <span>60% de ganancias reinvertidas en impacto social</span>
                <CurrencyDollarIcon className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripleImpacto;