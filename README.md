# Janet - Plataforma SaaS B2B de Análisis Contable y Financiero

Prototipo visual semi-funcional de una plataforma SaaS profesional para análisis contable, financiero y tributario.

## 🎯 Características

- **Dashboard Ejecutivo**: Resumen de operaciones, alertas y métricas clave
- **Gestión de Empresas**: Administración completa de clientes SaaS
- **Carga de Archivos**: Upload y procesamiento de archivos Excel
- **Parametrización**: Configuración de reglas tributarias y financieras
- **Análisis Detallado**: Alertas fiscales, financieras y observaciones
- **Reportes Automáticos**: Generación de reportes PDF y Excel
- **Historial Completo**: Registro de todos los análisis realizados
- **Gestión de Usuarios**: Roles y permisos personalizables
- **Planes y Suscripción**: Gestión de ciclos de vida de suscripción
- **Centro de Soporte**: FAQ, tickets y documentación

## 🚀 Instalación

### Requisitos Previos
- Node.js 16+
- npm o yarn

### Pasos

1. **Instalar dependencias**
```bash
npm install
```

2. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

El navegador se abrirá automáticamente en `http://localhost:3000`

3. **Compilar para producción**
```bash
npm run build
```

## 🔐 Credenciales de Demo

Para acceder al prototipo, usa cualquier email y contraseña en la página de login. El sistema acepta cualquier credencial para propósitos de demostración.

**Ejemplo:**
- Email: demo@janet.io
- Contraseña: cualquier contraseña

## 📂 Estructura del Proyecto

```
Proto Janet/
├── src/
│   ├── components/       # Componentes reutilizables (Sidebar, Header, Cards, etc)
│   ├── pages/            # Páginas principales de la aplicación
│   ├── data/             # Datos mockeados
│   ├── App.jsx           # Configuración de rutas
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── index.html
```

## 🎨 Diseño

- **Color Scheme**: Blanco, gris claro, negro, azul oscuro (#4f46e5) y violeta (#7c3aed)
- **Tipografía**: Inter (Google Fonts)
- **Componentes**: Cards limpias, tablas prolijas, badges de estado
- **Estilo**: Minimalista corporativo, similar a Stripe/Linear/Ramp
- **Modo**: Light theme solamente

## 📊 Datos Mock

La aplicación utiliza datos ficticios para:
- 5 empresas con diferentes estados y planes
- 23 alertas tributarias y financieras
- 4 cargas de archivos en diferentes estados
- 6 parámetros configurables
- 4 análisis detallados con observaciones
- 4 reportes disponibles
- 5 análisis en el historial
- 5 usuarios internos con diferentes roles
- 3 planes de suscripción
- Dashboard con gráficos de ingresos y gastos

## 🛠️ Tecnologías

- **React 18** - Framework UI
- **React Router** - Navegación
- **Tailwind CSS** - Estilos
- **Lucide React** - Iconos
- **Recharts** - Gráficos

## 📝 Páginas Disponibles

1. **Login** - Autenticación inicial y landing page
2. **Dashboard** - Panel principal con métricas y alertas
3. **Empresas** - Gestión de clientes SaaS
4. **Carga de Excel** - Upload y validación de archivos
5. **Parametrización** - Configuración de reglas
6. **Análisis** - Resultados detallados de análisis
7. **Reportes** - Visualización y descarga de reportes
8. **Historial** - Registro de análisis anteriores
9. **Usuarios** - Gestión de usuarios y roles
10. **Planes** - Gestión de suscripción y facturación
11. **Soporte** - Centro de ayuda y tickets

## 💡 Características Visuales

- Navegación lateral fija con logo
- Header superior con selector de empresa y período
- Tablas con acciones inline
- Gráficos interactivos (líneas, barras, pastel)
- Badges de estado y severidad
- Tarjetas de métricas con tendencias
- Modales y dropdowns funcionales
- Animaciones suaves en transiciones
- Responsive layout

## 📱 Compatibilidad

- Desktop (optimizado para 1920px+)
- Tablet (parcialmente compatible)
- Mobile (interfaz simplificada)

## 🎓 Propósito

Este prototipo fue diseñado para:
- Presentar a clientes potenciales
- Demostrar funcionalidad SaaS B2B
- Servir como referencia de diseño UI
- Base para desarrollo de versión real

## 📄 Licencia

Proyecto educativo y de demostración. Uso libre para propósitos de presentación y aprendizaje.

## 👥 Soporte

Para reportar problemas o sugerencias, contacta con el equipo de desarrollo.

---

**Janet - Análisis Contable y Financiero Automatizado**  
Hecho con ❤️ para profesionales contables y financieros.
