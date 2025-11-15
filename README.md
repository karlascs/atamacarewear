# 🌵 Atacama Rewear - Sitio Web Oficial

<div align="center">
  <img src="public/atacamarewearlogo.png" alt="Atacama Rewear Logo" width="200"/>
  
  **Moda Circular desde el corazón del Desierto de Atacama**
  
  [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://karlascs.github.io/atamacarewear)
  [![React](https://img.shields.io/badge/React-19.2.0-61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
</div>

---

## 🌍 **Acerca del Proyecto**

**Atacama Rewear** es una marca chilena pionera en **moda circular** y **triple impacto** que rescata textiles abandonados en el Desierto de Atacama y los transforma en prendas únicas mediante técnicas de **upcycling**. Nuestro modelo genera **empleo inclusivo** mientras combate la contaminación textil en uno de los ecosistemas más frágiles del mundo.

### 🎯 **Misión**
Transformar los residuos textiles del desierto más árido del mundo en moda consciente, creando valor ambiental, social y económico a través de la economía circular.

---

## 🚀 **Demo en Vivo**

**🔗 [Ver Sitio Web](https://karlascs.github.io/atamacarewear)**

---

## ✨ **Características Principales**

### 🏠 **Página de Inicio**
- **Hero Carousel** interactivo con imágenes del Desierto de Atacama
- **Triple Impacto** visual con métricas de impacto ambiental y social
- **Competencias Clave** con navegación lateral elegante
- **Dirección Estratégica** con propuesta de valor clara

### 💼 **Página de Negocio**
- **Temática auténtica** del Desierto de Atacama con imágenes reales
- **Catálogo de productos** con imágenes reales de cada prenda
- **Efectos visuales premium** con glassmorphism y animaciones
- **Diseño corporativo** profesional y elegante

### 🛒 **Navegación Corporativa**
- **Carrito de compras destacado** como acción principal
- **Botones corporativos** sin elementos decorativos
- **Diseño responsive** optimizado para todos los dispositivos
- **Efectos hover premium** con transiciones suaves

### 🎨 **Efectos Visuales**
- **Recreación del desierto** con efectos de partículas y estrellas
- **Glassmorphism** en componentes modernos
- **Gradientes corporativos** en verde y naranja
- **Animaciones CSS avanzadas** con cubic-bezier

---

## 🛠️ **Tecnologías Utilizadas**

### **Frontend**
- **React 19.2.0** - Framework de interfaz de usuario
- **TypeScript 4.9.5** - Tipado estático
- **React Router DOM 7.9.6** - Navegación SPA
- **Heroicons 2.2.0** - Iconografía moderna

### **Styling**
- **CSS3** con variables personalizadas
- **Flexbox & Grid** para layouts responsive
- **CSS Animations** con keyframes avanzados
- **Backdrop Filter** para efectos glassmorphism

### **Build & Deploy**
- **React Scripts 5.0.1** - Herramientas de desarrollo
- **GitHub Pages** - Hosting estático
- **gh-pages** - Deploy automatizado

---

## 📁 **Estructura del Proyecto**

```
atacama-rewear/
├── public/                      # Recursos estáticos
│   ├── atacamarewearlogo.png   # Logo corporativo
│   ├── desiertoatacama.jpg     # Imagen del desierto
│   ├── chaquetamesclilla.png   # Productos reales
│   ├── bolsoarena.png
│   ├── poleraatacama.png
│   └── ...
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── Navbar.tsx         # Navegación corporativa
│   │   ├── NavbarHome.tsx     # Navegación específica home
│   │   ├── Hero.tsx           # Carousel principal
│   │   ├── Footer.tsx         # Pie de página con desierto
│   │   ├── ColeccionDestacada.tsx # Catálogo de productos
│   │   └── ...
│   ├── pages/                 # Páginas principales
│   │   ├── Home.tsx          # Página de inicio
│   │   └── Negocio.tsx       # Página de negocio
│   ├── assets/               # Recursos de desarrollo
│   └── App.tsx              # Componente principal
├── package.json             # Dependencias y scripts
└── README.md               # Este archivo
```

---

## 🚀 **Instalación y Desarrollo**

### **Prerrequisitos**
- Node.js >= 16.0.0
- npm >= 8.0.0
- Git

### **Clonar el repositorio**
```bash
git clone https://github.com/karlascs/atamacarewear.git
cd atamacarewear
```

### **Instalar dependencias**
```bash
npm install
```

### **Ejecutar en desarrollo**
```bash
npm start
```
El sitio estará disponible en `http://localhost:3000`

### **Crear build de producción**
```bash
npm run build
```

### **Desplegar a GitHub Pages**
```bash
npm run deploy
```

---

## 📦 **Scripts Disponibles**

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Crea build optimizado para producción |
| `npm test` | Ejecuta las pruebas unitarias |
| `npm run deploy` | Despliega a GitHub Pages |
| `npm run eject` | Extrae configuración (irreversible) |

---

## 🌐 **Deploy y Hosting**

El sitio web se despliega automáticamente en **GitHub Pages** cada vez que se ejecuta `npm run deploy`.

- **URL de Producción**: https://karlascs.github.io/atamacarewear
- **Branch de Deploy**: `gh-pages`
- **Build Tool**: Create React App optimized build

---

## 🎨 **Guía de Estilo**

### **Colores Corporativos**
```css
--color-verde-reciclaje: #2d5a27    /* Verde corporativo */
--color-naranjo: #f7931e            /* Naranja energético */
--color-gris: #6b7280               /* Gris neutro */
--color-negro: #1f2937              /* Negro profesional */
--color-blanco: #ffffff             /* Blanco puro */
```

### **Tipografía**
- **Font Family**: System fonts (Inter, Segoe UI, Roboto)
- **Headings**: Bold (700) con letter-spacing optimizado
- **Body**: Regular (400-500) con line-height 1.6

### **Efectos Visuales**
- **Glassmorphism**: `backdrop-filter: blur(10px)`
- **Sombras**: Múltiples niveles de elevación
- **Transiciones**: `cubic-bezier(0.4, 0, 0.2, 1)`

---

## 📊 **Métricas del Proyecto**

- **Líneas de código**: ~3,000+ líneas
- **Componentes React**: 15+ componentes
- **Páginas**: 2 páginas principales
- **Imágenes optimizadas**: 10+ recursos visuales
- **Performance Score**: 90+ (Lighthouse)

---

## 🤝 **Contribución**

Si deseas contribuir al proyecto:

1. **Fork** el repositorio
2. Crea una **rama de feature** (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -m 'feat: agregar nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un **Pull Request**

---

## 📝 **Licencia**

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 📞 **Contacto**

**Atacama Rewear** - Moda Circular del Desierto

- **Sitio Web**: https://karlascs.github.io/atamacarewear
- **Repositorio**: https://github.com/karlascs/atamacarewear
- **Desarrollado con**: ❤️ y React en Chile

---

<div align="center">
  
  **🌵 Del corazón del desierto más árido del mundo, nace la moda del futuro 🌵**
  
  Made with ❤️ in Chile | Powered by React & TypeScript
  
</div>