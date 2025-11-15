import React from 'react';
import { 
  MagnifyingGlassIcon, 
  Squares2X2Icon, 
  HandRaisedIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';
import './ComoFunciona.css';

interface Paso {
  numero: number;
  titulo: string;
  descripcion: string;
  icono: React.ReactNode;
  detalle: string;
}

const pasos: Paso[] = [
  {
    numero: 1,
    titulo: "Recuperación de Materiales",
    descripcion: "Implementamos campañas sistemizadas de recolección textil en el Desierto de Atacama, trabajando con comunidades locales.",
    icono: <MagnifyingGlassIcon className="w-8 h-8" />,
    detalle: "Gestión integral de residuos textiles"
  },
  {
    numero: 2,
    titulo: "Selección y Desarrollo", 
    descripcion: "Aplicamos criterios de calidad y sostenibilidad para clasificar materiales y desarrollar diseños innovadores.",
    icono: <Squares2X2Icon className="w-8 h-8" />,
    detalle: "Proceso certificado de upcycling"
  },
  {
    numero: 3,
    titulo: "Producción Inclusiva",
    descripcion: "Ejecutamos la manufactura en talleres que priorizan la inclusión laboral y el desarrollo de capacidades.",
    icono: <HandRaisedIcon className="w-8 h-8" />,
    detalle: "Modelo de empleo sostenible"
  },
  {
    numero: 4,
    titulo: "Comercialización Consciente",
    descripcion: "Ofrecemos productos que extienden ciclos de vida textiles y fortalecen cadenas de valor circulares.",
    icono: <HeartIcon className="w-8 h-8" />,
    detalle: "Impacto mensurable y escalable"
  }
];

const ComoFunciona: React.FC = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="seccion-header text-center mb-4">
          <h2>Nuestro Proceso de Economía Circular</h2>
          <p className="seccion-subtitle">
            Metodología integral que transforma residuos textiles en productos 
            de valor agregado, generando impacto social y ambiental positivo.
          </p>
        </div>

        <div className="proceso-timeline">
          {pasos.map((paso, index) => (
            <div key={paso.numero} className="paso-item">
              <div className="paso-numero">
                <span>{paso.numero}</span>
              </div>
              
              <div className="paso-contenido">
                <div className="paso-icono">
                  {paso.icono}
                </div>
                
                <h3 className="paso-titulo">{paso.titulo}</h3>
                <p className="paso-descripcion">{paso.descripcion}</p>
                <span className="paso-detalle">{paso.detalle}</span>
              </div>
              
              {index < pasos.length - 1 && (
                <div className="paso-conector">
                  <div className="conector-linea"></div>
                  <div className="conector-flecha">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="proceso-estadisticas">
          <div className="grid grid-4">
            <div className="estadistica-item text-center">
              <div className="estadistica-numero">15</div>
              <div className="estadistica-texto">Campañas de rescate</div>
            </div>
            <div className="estadistica-item text-center">
              <div className="estadistica-numero">8 ton</div>
              <div className="estadistica-texto">Textiles rescatados</div>
            </div>
            <div className="estadistica-item text-center">
              <div className="estadistica-numero">2.500+</div>
              <div className="estadistica-texto">Prendas creadas</div>
            </div>
            <div className="estadistica-item text-center">
              <div className="estadistica-numero">150</div>
              <div className="estadistica-texto">Empleos generados</div>
            </div>
          </div>
        </div>

        <div className="llamado-accion text-center">
          <h3>Implementa Economía Circular en tu Organización</h3>
          <p>Genera impacto social y ambiental positivo a través de soluciones textiles sostenibles.</p>
          <div className="cta-buttons">
            <a href="#coleccion" className="btn btn-primary">Ver Productos Corporativos</a>
            <a href="#talleres" className="btn btn-outline">Solicitar Consultoría</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;