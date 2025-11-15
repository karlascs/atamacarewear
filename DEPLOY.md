# 🚀 Guía de Despliegue en Vercel

## ✅ Cambios Realizados para Vercel

### 1. **Configuración del Proyecto**
- ❌ Removido `homepage` de `package.json` (era para GitHub Pages)
- ✅ Cambiado de `HashRouter` a `BrowserRouter` en `App.tsx`
- ✅ Creado `vercel.json` con rewrites para SPA

### 2. **Rutas de Imágenes**
- ✅ Todas las rutas de imágenes ahora usan `process.env.PUBLIC_URL`
- ✅ Compatible con cualquier plataforma de hosting

## 📋 Pasos para Desplegar en Vercel

### Opción 1: Deploy desde la Terminal (Recomendado)

```bash
# 1. Instalar Vercel CLI (si no lo tienes)
npm install -g vercel

# 2. Hacer build del proyecto
npm run build

# 3. Desplegar a Vercel
vercel --prod
```

### Opción 2: Deploy desde GitHub (Automático)

1. **Pushea los cambios a GitHub:**
```bash
git add .
git commit -m "fix: configurar proyecto para Vercel"
git push origin master
```

2. **En Vercel Dashboard:**
   - Ve a https://vercel.com/dashboard
   - Click en "Add New Project"
   - Importa tu repositorio `karlascs/atamacarewear`
   - **Configuración del Proyecto:**
     - **Framework Preset:** Create React App
     - **Build Command:** `npm run build`
     - **Output Directory:** `build`
     - **Install Command:** `npm install`
   - Click en "Deploy"

3. **Vercel detectará automáticamente:**
   - El archivo `vercel.json` para las reglas de rewrite
   - La configuración de Create React App
   - Las variables de entorno necesarias

## 🔧 Configuración de Vercel

El archivo `vercel.json` contiene:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Esto asegura que todas las rutas se redirijan a `index.html` para que React Router funcione correctamente.

## 🎯 Verificación Post-Deploy

Después del deploy, verifica:

1. ✅ La página principal carga correctamente
2. ✅ Las imágenes se muestran (logo, productos, desierto)
3. ✅ La navegación entre `/` y `/negocio` funciona
4. ✅ El carousel del Hero funciona
5. ✅ Los botones y enlaces funcionan correctamente

## 🐛 Solución de Problemas

### Problema: Página en blanco
**Solución:** 
- Verifica que hayas removido el `homepage` de `package.json`
- Asegúrate de usar `BrowserRouter` en lugar de `HashRouter`
- Verifica que existe el archivo `vercel.json`

### Problema: Imágenes no cargan
**Solución:**
- Verifica que todas las imágenes usen `process.env.PUBLIC_URL`
- Asegúrate que las imágenes están en la carpeta `/public`

### Problema: Error 404 en rutas
**Solución:**
- Verifica que el archivo `vercel.json` esté en la raíz del proyecto
- Asegúrate que la configuración de rewrites es correcta

## 📱 URL de Producción

Una vez desplegado, tu sitio estará disponible en:
- **URL de Vercel:** `https://tu-proyecto.vercel.app`
- Puedes configurar un dominio personalizado desde el dashboard de Vercel

## 🔄 Actualizaciones Futuras

Para actualizar el sitio desplegado:

```bash
# Hacer cambios en el código
git add .
git commit -m "feat: nueva característica"
git push origin master

# Vercel desplegará automáticamente si conectaste el repo
# O manualmente:
vercel --prod
```

## ✨ Diferencias con GitHub Pages

| Característica | GitHub Pages | Vercel |
|---------------|--------------|--------|
| Router | HashRouter (#/) | BrowserRouter (/) |
| Homepage | Necesario | No necesario |
| Rewrites | 404.html | vercel.json |
| Build | Manual con gh-pages | Automático |
| URLs | /repo-name/ | / (raíz) |

---

**¡Listo!** Tu sitio Atacama Rewear ahora está configurado correctamente para Vercel 🎉
