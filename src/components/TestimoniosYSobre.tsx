import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { MapPinIcon, HeartIcon, UsersIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import './TestimoniosYSobre.css';

interface Testimonio {
  nombre: string;
  rol: string;
  mensaje: string;
  estrellas: number;
  avatar?: string;
}

interface MiembroEquipo {
  nombre: string;
  cargo: string;
  descripcion: string;
  imagen?: string;
}

const testimonios: Testimonio[] = [
  {
    nombre: "María González",
    rol: "Cliente regular",
    mensaje: "Cada prenda que compro cuenta una historia. Me encanta saber que estoy ayudando a limpiar el desierto y a generar empleos. La calidad es increíble.",
    estrellas: 5
  },
  {
    nombre: "Carlos Mendoza", 
    rol: "Profesor de enseñanza media",
    mensaje: "El taller que hicimos con mis estudiantes fue transformador. Aprendieron sobre sostenibilidad de manera práctica y se divirtieron mucho.",
    estrellas: 5
  },
  {
    nombre: "Ana Torres",
    rol: "Artesana del equipo",
    mensaje: "Trabajar en Atacama Rewear cambió mi vida. Aquí no solo tengo un empleo digno, sino que siento que contribuyo a algo importante para el planeta.",
    estrellas: 5
  },
  {
    nombre: "Roberto Silva",
    rol: "Gerente de RSE",
    mensaje: "Llevamos el team building de nuestra empresa con Atacama Rewear. Fue una experiencia única que unió al equipo mientras generábamos impacto social.",
    estrellas: 5
  }
];

const equipoMiembros: MiembroEquipo[] = [
  {
    nombre: "Camila Hernández",
    cargo: "Fundadora y Directora",
    descripcion: "Diseñadora textil con 10 años de experiencia en moda sostenible. Su visión transformó el rescate textil en un modelo de negocio con triple impacto."
  },
  {
    nombre: "Felipe Morales",
    cargo: "Coordinador de Rescate",
    descripcion: "Ingeniero ambiental especializado en gestión de residuos. Lidera las campañas de rescate textil en el Desierto de Atacama."
  },
  {
    nombre: "Rosa Mamani",
    cargo: "Jefa de Producción",
    descripcion: "Artesana textil con 20 años de experiencia. Capacita a nuestro equipo en técnicas de upcycling y asegura la calidad de cada pieza."
  },
  {
    nombre: "Jorge Espinoza",
    cargo: "Coordinador Social",
    descripcion: "Trabajador social encargado de los programas de inclusión laboral y el desarrollo de talleres comunitarios."
  }
];

const TestimoniosYSobre: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        {/* Testimonios */}
        <div className="testimonios-seccion mb-4">
          <div className="seccion-header text-center">
            <h2>Lo que dice nuestra comunidad</h2>
            <p className="seccion-subtitle">
              Cada persona que se suma a Atacama Rewear se convierte en parte 
              de una historia de transformación real y tangible.
            </p>
          </div>

          <div className="testimonios-grid grid grid-2">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="testimonio-card">
                <div className="testimonio-header">
                  <ChatBubbleLeftIcon className="quote-icon" />
                  <div className="testimonio-estrellas">
                    {[...Array(testimonio.estrellas)].map((_, i) => (
                      <StarIcon key={i} className="estrella" />
                    ))}
                  </div>
                </div>
                
                <p className="testimonio-mensaje">"{testimonio.mensaje}"</p>
                
                <div className="testimonio-autor">
                  <div className="autor-avatar">
                    {testimonio.avatar ? (
                      <img src={testimonio.avatar} alt={testimonio.nombre} />
                    ) : (
                      <div className="avatar-placeholder">
                        {testimonio.nombre.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div className="autor-info">
                    <div className="autor-nombre">{testimonio.nombre}</div>
                    <div className="autor-rol">{testimonio.rol}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sobre Nosotros */}
        <div className="sobre-nosotros-seccion section-alt">
          <div className="sobre-contenido">
            <div className="grid grid-2">
              <div className="sobre-texto">
                <h2>Nacimos en el corazón del desierto</h2>
                <p className="sobre-intro">
                  Atacama Rewear nació cuando descubrimos las toneladas de ropa 
                  desechada que se acumulan en el Desierto de Atacama. 
                  Decidimos convertir este problema ambiental en una oportunidad 
                  de transformación social.
                </p>
                
                <div className="sobre-valores">
                  <div className="valor-item">
                    <HeartIcon className="w-6 h-6" />
                    <div>
                      <h4>Con propósito</h4>
                      <p>Cada decisión que tomamos considera el impacto en las personas y el planeta.</p>
                    </div>
                  </div>
                  <div className="valor-item">
                    <UsersIcon className="w-6 h-6" />
                    <div>
                      <h4>Inclusivos</h4>
                      <p>Creamos oportunidades para quienes más lo necesitan, sin discriminación.</p>
                    </div>
                  </div>
                  <div className="valor-item">
                    <MapPinIcon className="w-6 h-6" />
                    <div>
                      <h4>Locales</h4>
                      <p>Orgullosamente chilenos, trabajamos desde y para nuestra comunidad local.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="sobre-estadisticas">
                <h3>Nuestro recorrido</h3>
                <div className="estadisticas-sobre">
                  <div className="stat-sobre">
                    <span className="stat-numero">2019</span>
                    <span className="stat-texto">Año de fundación</span>
                  </div>
                  <div className="stat-sobre">
                    <span className="stat-numero">4</span>
                    <span className="stat-texto">Años transformando vidas</span>
                  </div>
                  <div className="stat-sobre">
                    <span className="stat-numero">25</span>
                    <span className="stat-texto">Personas en nuestro equipo</span>
                  </div>
                  <div className="stat-sobre">
                    <span className="stat-numero">3</span>
                    <span className="stat-texto">Regiones donde trabajamos</span>
                  </div>
                </div>
                
                <div className="ubicacion-info">
                  <MapPinIcon className="w-5 h-5" />
                  <span>Calama, Región de Antofagasta, Chile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Equipo */}
          <div className="equipo-seccion">
            <h3 className="text-center mb-3">Conoce a nuestro equipo</h3>
            <p className="text-center equipo-intro">
              Somos un grupo diverso de personas unidas por la pasión de crear 
              cambio positivo a través de la moda circular.
            </p>
            
            <div className="equipo-grid grid grid-2">
              {equipoMiembros.map((miembro, index) => (
                <div key={index} className="miembro-card">
                  <div className="miembro-avatar">
                    {miembro.imagen ? (
                      <img src={miembro.imagen} alt={miembro.nombre} />
                    ) : (
                      <div className="avatar-placeholder">
                        {miembro.nombre.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div className="miembro-info">
                    <h4 className="miembro-nombre">{miembro.nombre}</h4>
                    <p className="miembro-cargo">{miembro.cargo}</p>
                    <p className="miembro-descripcion">{miembro.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosYSobre;