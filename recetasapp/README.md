# 🍽️ Mis Recetas Web - Página Web de Recetas de Cocina

![React](https://img.shields.io/badge/React-19.1.1-blue)
![React Router](https://img.shields.io/badge/React%20Router-7.8.2-orange)
![Material UI](https://img.shields.io/badge/Material--UI-7.3.2-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## 📖 Descripción

RecetasApp es una aplicación web moderna y responsiva que permite visualizar un catálogo completo de recetas de cocina con detalles completos, incluyendo ingredientes y pasos de preparación. La aplicación cuenta con un diseño minimalista con colores pastel, soporte para modo oscuro/claro y una experiencia de usuario intuitiva.

## ✨ Características Principales

- 🍳 **Catálogo de Recetas**: Visualiza 6+ recetas diferentes con tarjetas atractivas
- 📱 **Diseño Responsive**: Se adapta perfectamente a cualquier dispositivo (móvil, tablet, desktop)
- 🌙 **Modo Oscuro/Claro**: Cambia entre temas claro y oscuro con un solo clic
- 🎨 **Colores Pastel**: Paleta de colores suave y agradable a la vista
- 🔍 **Detalles Completos**: Cada receta incluye ingredientes, pasos y información nutricional
- ⚡ **Navegación Rápida**: React Router para navegación sin recargar la página
- 🏗️ **Arquitectura Limpia**: Context API para manejo de estado global

## 🛠️ Tecnologías Utilizadas

- **React** 19.1.1 - Librería de UI
- **React Router DOM** 7.8.2 - Navegación entre páginas
- **Material-UI** 7.3.2 - Componentes y diseño
- **@mui/icons-material** 7.3.2 - Iconografía
- **Vite** - Herramienta de construcción y desarrollo
- **Emotion** - Motor de estilos CSS-in-JS

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn
- Editor de código (VS Code recomendado)

## 🚀 Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/VirStockli/Proyecto-MisRecetasWeb.git
cd PROYECYO-MISRECETASWEB
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar el servidor de desarrollo
```bash
npm run dev
```

### 4. Abrir en el navegador
```
http://localhost:5173
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── recetas/
│   │   ├── RecetaCard.jsx          # Tarjeta individual de receta
│   │   ├── RecetasList.jsx         # Grid de recetas
│   │   ├── RecetaDetalle.jsx       # Vista detallada
│   │   └── IngredientesList.jsx    # Lista de ingredientes
│   └── layout/
│       └── Navbar.jsx              # Barra de navegación
├── contexts/
│   └── RecetasContext.jsx          # Context API para recetas
├── data/
│   └── recetas.json                # Base de datos local
├── pages/
│   ├── RecetasListPage.jsx         # Página de listado
│   └── RecetaDetallePage.jsx       # Página de detalle
├── App.jsx                         # Componente principal
└── main.jsx                        # Punto de entrada
```

## 🎯 Funcionalidades

### Página Principal (`/`)
- Muestra todas las recetas en formato de grid responsivo
- Cada tarjeta incluye:
  - Imagen de la receta
  - Título y descripción breve
  - Tiempo de preparación
  - Nivel de dificultad (Fácil, Media, Difícil)
  - Número de porciones
  - Botón "Ver Receta"

### Página de Detalle (`/recetas/:id`)
- Imagen destacada en tamaño grande
- Información completa de la receta
- Lista de ingredientes con cantidad y unidad
- Pasos de preparación numerados
- Chips con información relevante
- Botón para volver al listado

### Navegación
- Navbar fija en la parte superior
- Logo de la aplicación
- Botón para cambiar entre modo oscuro y claro
- Navegación intuitiva entre páginas

## 🎨 Diseño y Personalización

### Paleta de Colores (Modo Claro)
- Primario: `#d8b4fe` (Púrpura pastel)
- Secundario: `#bbf7d0` (Verde pastel)
- Fondo: `#fef3f2` (Beige muy claro)
- Papel: `#fef8f6` (Beige más claro)

### Paleta de Colores (Modo Oscuro)
- Primario: `#a78bfa` (Púrpura oscuro)
- Secundario: `#86efac` (Verde oscuro)
- Fondo: `#1a1a2e` (Azul muy oscuro)
- Papel: `#16213e` (Azul oscuro)

## 📊 Estructura de Datos

Cada receta contiene:
```json
{
  "id": 1,
  "titulo": "Pasta Carbonara",
  "descripcion": "Descripción breve",
  "imagen": "URL de la imagen",
  "tiempoPreparacion": "30 minutos",
  "dificultad": "Media",
  "porciones": 4,
  "categoria": "Platos Principales",
  "ingredientes": [
    {
      "cantidad": "400",
      "unidad": "g",
      "nombre": "Spaghetti"
    }
  ],
  "pasos": [
    "Paso 1",
    "Paso 2"
  ]
}
```

## 🔌 API y Context

### useRecetas Hook
```jsx
const { recetas, isLoading, getRecetaById } = useRecetas();

// recetas: Array de todas las recetas
// isLoading: Boolean que indica si se están cargando
// getRecetaById: Función para obtener una receta por ID
```

## 📱 Responsividad

- **Mobile** (xs): 1 columna de recetas
- **Tablet** (sm, md): 2 columnas de recetas
- **Desktop** (lg, xl): 3 columnas de recetas

## 🧪 Testing

### Verificar funcionalidades:
1. ✅ Las recetas se cargan correctamente
2. ✅ La navegación entre listado y detalle funciona
3. ✅ El modo oscuro se activa/desactiva
4. ✅ El diseño es responsive en todos los tamaños
5. ✅ Las imágenes se cargan sin errores
6. ✅ Los botones navegan correctamente

## 🚢 Construcción para Producción

```bash
npm run build
```

Esto crea una carpeta `dist/` con los archivos optimizados.

## 📦 Scripts Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Previsualizar build de producción
npm run lint     # Verificar código
```

## 🎓 Aprendizajes Clave

Este proyecto implementa:
- ✅ React Hooks (useState, useEffect, useContext)
- ✅ React Router para SPA (Single Page Application)
- ✅ Context API para estado global
- ✅ Material-UI para componentes profesionales
- ✅ Diseño responsive con Grid y MediaQuery
- ✅ Temas personalizados (Light/Dark mode)
- ✅ Buenas prácticas de componentes reutilizables

## 🐛 Resolución de Problemas

### Las imágenes no cargan
- Verifica que las URLs de imágenes sean correctas
- Comprueba tu conexión a internet
- Usa URLs de sitios confiables como Unsplash

### Errores de rutas
- Asegúrate de que React Router esté correctamente configurado
- Verifica los nombres de las rutas en App.jsx

### Estilo no se aplica correctamente
- Limpia la caché del navegador (Ctrl+Shift+Supr)
- Reconstruye el proyecto: `npm run build`

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👤 Autor

**Desarrollador:** [María Florencia Godoy Del Castillo]  
**Email:** [mariagodoydelcastillo@gmail.com]  
**GitHub:** [mariagdc]

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios principales:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📚 Recursos Útiles

- [Documentación React](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Material-UI](https://mui.com/)
- [Vite](https://vitejs.dev/)

## 🌟 Funcionalidades Futuras

- ⭐ Sistema de calificación de recetas
- ❤️ Agregar recetas a favoritos
- 🔍 Buscador de recetas
- 🏷️ Filtros por categoría y dificultad
- 📤 Compartir recetas en redes sociales
- 🖨️ Imprimir recetas
- 📱 Aplicación móvil nativa

## ⚡ Performance

- ✅ Lazy loading de imágenes
- ✅ Optimización de componentes
- ✅ Minificación de código en producción
- ✅ CSS modular y eficiente

## 🎉 ¡Disfruta creando deliciosas recetas!

---

**Última actualización:** Noviembre 2025  
**Versión:** 1.0.0
