# 🚀 Guía de Instalación - Janet SaaS

## Opción 1: Instalación Rápida (Recomendado)

```bash
# 1. Navega a la carpeta del proyecto
cd "Proto Janet"

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

El navegador se abrirá automáticamente en `http://localhost:3000`

---

## Opción 2: Instalación Manual

### Paso 1: Instalar Node.js
- Descargar desde https://nodejs.org (versión 16+)
- Verificar instalación:
```bash
node --version
npm --version
```

### Paso 2: Instalar Dependencias
```bash
cd "Proto Janet"
npm install
```

### Paso 3: Iniciar la Aplicación
```bash
npm run dev
```

---

## 🔑 Credenciales de Demostración

Para acceder al prototipo:
- **Email**: Cualquier email (ej: demo@janet.io)
- **Contraseña**: Cualquier contraseña
- El sistema aceptará cualquier credencial

---

## 📊 Navegación Rápida

Una vez dentro, puedes explorar:

| Sección | Descripción |
|---------|-------------|
| **Dashboard** | Métricas principales y alertas |
| **Empresas** | Gestión de clientes |
| **Carga de Excel** | Upload de archivos |
| **Parametrización** | Configurar reglas |
| **Análisis** | Ver resultados detallados |
| **Reportes** | Descargar informes |
| **Historial** | Registro de análisis |
| **Usuarios** | Gestión de equipo |
| **Planes** | Suscripción y facturación |
| **Soporte** | Centro de ayuda |

---

## 🛠️ Solución de Problemas

### Error: "npm: command not found"
→ Node.js no está instalado. Descargar desde nodejs.org

### Puerto 3000 en uso
→ Cambiar puerto en vite.config.js:
```javascript
server: {
  port: 3001  // cambiar a otro puerto
}
```

### Dependencias no instalan
→ Limpiar caché y reinstalar:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Velocidad lenta
→ Usar Node.js LTS (versión 18+)

---

## 💻 Comandos Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción
npm run preview  # Vista previa de build
```

---

## 🎨 Personalización

Para cambiar colores y estilos, edita:
- `tailwind.config.js` - Configuración de colores
- `src/index.css` - Estilos globales
- `src/components/` - Componentes reutilizables

---

## 📱 Compatibilidad

- ✅ Chrome/Edge (Recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Desktop optimizado (1920px+)

---

¿Problemas? Revisa el README.md para más información.

**¡Disfruta explorando Janet!** 🎉
