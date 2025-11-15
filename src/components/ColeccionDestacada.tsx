import React from 'react';
import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline';
import './ColeccionDestacada.css';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
  etiquetas: string[];
  esUnico: boolean;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Chaqueta Desierto",
    descripcion: "Chaqueta única elaborada con denim rescatado del Atacama. Perfecta combinación de estilo urbano y conciencia ambiental.",
    precio: 45000,
    imagenUrl: "/chaquetamesclilla.png",
    etiquetas: ["Denim", "Unisex", "Pieza Única"],
    esUnico: true
  },
  {
    id: 2,
    nombre: "Bolso Arena",
    descripcion: "Bolso artesanal hecho con textiles de algodón recuperados. Diseño funcional inspirado en las dunas del Atacama.",
    precio: 25000,
    imagenUrl: "/bolsoarena.png",
    etiquetas: ["Algodón", "Artesanal", "Sostenible"],
    esUnico: true
  },
  {
    id: 3,
    nombre: "Polera Atacama",
    descripcion: "Camiseta renovada con bordado inspirado en el desierto. Comodidad y estilo en cada hilo rescatado.",
    precio: 18000,
    imagenUrl: "/poleraatacama.png",
    etiquetas: ["Algodón", "Bordado", "Casual"],
    esUnico: false
  },
  {
    id: 4,
    nombre: "Falda Circular",
    descripcion: "Falda midi creada con retazos de telas diversas. Cada pieza cuenta una historia única de transformación.",
    precio: 32000,
    imagenUrl: "/faldacircular.png",
    etiquetas: ["Mezclilla", "Pieza Única", "Elegante"],
    esUnico: true
  },
  {
    id: 5,
    nombre: "Bandana Rescatada",
    descripcion: "Accesorio versátil hecho con seda rescatada. Perfecta para múltiples usos y estilos, refleja la versatilidad del desierto.",
    precio: 12000,
    imagenUrl: "/bandanarescatada.png",
    etiquetas: ["Seda", "Accesorio", "Versátil"],
    esUnico: false
  },
  {
    id: 6,
    nombre: "Kimono Rewear",
    descripcion: "Kimono ligero con estampados originales del desierto. Elegancia fluida inspirada en los atardeceres del Atacama.",
    precio: 38000,
    imagenUrl: "/kimonorewear.png",
    etiquetas: ["Poliéster", "Pieza Única", "Elegante"],
    esUnico: true
  }
];

const formatPrecio = (precio: number): string => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  }).format(precio);
};

const ColeccionDestacada: React.FC = () => {
  return (
    <section id="coleccion" className="section">
      <div className="container">
        <div className="seccion-header text-center mb-4">
          <h2>Colección Destacada</h2>
          <p className="seccion-subtitle">
            Cada prenda cuenta una historia de transformación. 
            Rescatadas del desierto, renovadas con amor, listas para una nueva vida.
          </p>
        </div>
        
        <div className="productos-grid grid grid-3">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card card">
              <div className="producto-imagen">
                <img 
                  src={producto.imagenUrl} 
                  alt={producto.nombre}
                  className="card-img"
                />
                {producto.esUnico && (
                  <div className="badge-unico">
                    <span>Pieza única</span>
                  </div>
                )}
                <button className="btn-favorito">
                  <HeartIcon className="w-5 h-5" />
                </button>
              </div>
              
              <div className="producto-info">
                <h3 className="producto-nombre">{producto.nombre}</h3>
                <p className="producto-descripcion">{producto.descripcion}</p>
                
                <div className="producto-etiquetas">
                  {producto.etiquetas.map((etiqueta, index) => (
                    <span key={index} className="producto-etiqueta">{etiqueta}</span>
                  ))}
                </div>
                
                <div className="producto-footer">
                  <span className="producto-precio">{formatPrecio(producto.precio)}</span>
                  <button className="btn-comprar">
                    <ShoppingBagIcon />
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <a href="/tienda" className="btn btn-outline">
            Ver toda la colección
          </a>
        </div>
        
        <div className="info-adicional mt-4">
          <div className="grid grid-2">
            <div className="info-item">
              <h4>🌱 Materiales rescatados</h4>
              <p>Cada prenda está hecha con textiles que encontramos abandonados en el Desierto de Atacama o donados por la comunidad.</p>
            </div>
            <div className="info-item">
              <h4>✋ Hecho a mano</h4>
              <p>Nuestro equipo de artesanas transforma cada pieza con técnicas de upcycling, haciendo que cada prenda sea única.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColeccionDestacada;