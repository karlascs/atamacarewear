import React from 'react';
import { 
  AcademicCapIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import './ComunidadTalleres.css';

interface TipoTaller {
  id: string;
  titulo: string;
  descripcion: string;
  dirigidoA: string;
  duracion: string;
  participantes: string;
  icono: React.ReactNode;
  beneficios: string[];
}

const tiposTalleres: TipoTaller[] = [
  {
    id: 'colegios',
    titulo: 'Programa Educativo en Sostenibilidad',
    descripcion: 'Módulos curriculares especializados que integran principios de economía circular y consumo responsable en el proceso educativo.',
    dirigidoA: 'Instituciones educativas',
    duracion: '2-4 horas',
    participantes: '15-30 estudiantes',
    icono: <AcademicCapIcon className="w-8 h-8" />,
    beneficios: [
      'Certificación en sostenibilidad',
      'Metodologías innovadoras de upcycling',
      'Desarrollo de competencias colaborativas',
      'Reporte de impacto educativo'
    ]
  },
  {
    id: 'empresas',
    titulo: 'Desarrollo Organizacional Sostenible',
    descripcion: 'Programas corporativos que fortalecen equipos mientras desarrollan competencias en responsabilidad social empresarial.',
    dirigidoA: 'Empresas y corporaciones',
    duracion: '3-6 horas',
    participantes: '10-25 colaboradores',
    icono: <BuildingOffice2Icon className="w-8 h-8" />,
    beneficios: [
      'Fortalecimiento del liderazgo',
      'Implementación de RSE medible',
      'Productos corporativos únicos',
      'Certificación de impacto empresarial'
    ]
  },
  {
    id: 'comunidad',
    titulo: 'Capacitación Comunitaria Especializada',
    descripcion: 'Programas de desarrollo local que transfieren tecnologías de economía circular a organizaciones comunitarias.',
    dirigidoA: 'Municipios y organizaciones comunitarias',
    duracion: '2-3 horas',
    participantes: '8-20 personas',
    icono: <UserGroupIcon className="w-8 h-8" />,
    beneficios: [
      'Optimización de recursos familiares',
      'Certificación en técnicas circulares',
      'Fortalecimiento del capital social',
      'Desarrollo de redes productivas'
    ]
  }
];

const ComunidadTalleres: React.FC = () => {
  return (
    <section id="talleres" className="section section-alt">
      <div className="container">
        <div className="seccion-header text-center mb-4">
          <h2>Servicios de Capacitación y Desarrollo Organizacional</h2>
          <p className="seccion-subtitle">
            Programas especializados que fortalecen la cultura de sostenibilidad 
            en instituciones educativas, empresas y organizaciones comunitarias 
            a través de metodologías innovadoras de economía circular.
          </p>
        </div>

        <div className="talleres-grid grid grid-3">
          {tiposTalleres.map((taller) => (
            <div key={taller.id} className="taller-card card">
              <div className="taller-header">
                <div className="taller-icono">
                  {taller.icono}
                </div>
                <h3 className="taller-titulo">{taller.titulo}</h3>
              </div>

              <div className="card-content">
                <p className="taller-descripcion">{taller.descripcion}</p>
                
                <div className="taller-detalles">
                  <div className="detalle-item">
                    <strong>Dirigido a:</strong> {taller.dirigidoA}
                  </div>
                  <div className="detalle-item">
                    <strong>Duración:</strong> {taller.duracion}
                  </div>
                  <div className="detalle-item">
                    <strong>Participantes:</strong> {taller.participantes}
                  </div>
                </div>

                <div className="taller-beneficios">
                  <h4>Lo que aprenderás:</h4>
                  <ul>
                    {taller.beneficios.map((beneficio, index) => (
                      <li key={index}>{beneficio}</li>
                    ))}
                  </ul>
                </div>

                <button className="btn btn-secondary w-full">
                  <CalendarDaysIcon className="w-5 h-5" />
                  Agendar taller
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="comunidad-stats">
          <h3 className="text-center mb-3">Nuestro impacto educativo</h3>
          <div className="grid grid-4">
            <div className="stat-card text-center">
              <div className="stat-numero">85</div>
              <div className="stat-titulo">Talleres realizados</div>
            </div>
            <div className="stat-card text-center">
              <div className="stat-numero">1.200+</div>
              <div className="stat-titulo">Personas capacitadas</div>
            </div>
            <div className="stat-card text-center">
              <div className="stat-numero">25</div>
              <div className="stat-titulo">Colegios aliados</div>
            </div>
            <div className="stat-card text-center">
              <div className="stat-numero">98%</div>
              <div className="stat-titulo">Satisfacción</div>
            </div>
          </div>
        </div>

        <div className="contacto-talleres">
          <div className="contacto-contenido">
            <h3>Implementa Programas de Sostenibilidad en tu Organización</h3>
            <p>
              Desarrollamos soluciones de capacitación a medida que se alinean 
              con objetivos estratégicos organizacionales. Desde módulos ejecutivos 
              hasta programas integrales de transformación cultural sostenible.
            </p>

            <div className="contacto-opciones">
              <div className="contacto-opcion">
                <h4>Consultoría Especializada</h4>
                <p>Diagnóstico y diseño de programas personalizados</p>
                <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </div>
              <div className="contacto-opcion">
                <h4>Flexibilidad Operacional</h4>
                <p>Adaptación a calendarios y recursos institucionales</p>
                <CalendarDaysIcon className="w-4 h-4" />
              </div>
              <div className="contacto-opcion">
                <h4>Escalabilidad Garantizada</h4>
                <p>Desde equipos ejecutivos hasta organizaciones completas</p>
                <UserGroupIcon className="w-4 h-4" />
              </div>
            </div>

            <div className="contacto-cta">
              <a 
                href="mailto:consultorias@atacamarewear.cl" 
                className="btn btn-primary"
              >
                Solicitar Propuesta
              </a>
              <a 
                href="#contacto" 
                className="btn btn-outline"
              >
                Agenda Reunión Ejecutiva
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComunidadTalleres;