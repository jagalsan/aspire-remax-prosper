# 📋 Instrucciones para el nuevo equipo de mantenimiento

## ✅ Estado actual del proyecto

### HubSpot (Configurado ✅)
- **Portal ID**: 148900858
- **Código instalado**: Sí, en `src/routes/__root.tsx`
- **Formulario**: Integrado en la sección "Formulario" de la landing
- **Tracking**: Activo en todas las páginas

**Acción requerida por el cliente:**
1. Añadir `trabajaconremaxsolucion.es` como dominio externo en HubSpot
2. Verificar que el tracking funciona (ver `HUBSPOT_VERIFICATION.md`)

---

### Tracking de terceros (Pendiente ⚠️)

Los siguientes servicios están **desactivados** y deben ser configurados por el cliente:

#### Google Tag Manager
- **Archivo**: `src/lib/tracking.ts`
- **Variable**: `GTM_ID`
- **Valor actual**: `""` (vacío)
- **Acción**: Rellenar con el GTM ID del cliente (formato: `GTM-XXXXXXX`)

#### Google Analytics 4
- **Archivo**: `src/lib/tracking.ts`
- **Variable**: `GA4_ID`
- **Valor actual**: `""` (vacío)
- **Acción**: Rellenar con el GA4 ID del cliente (formato: `G-XXXXXXXXXX`)

#### Meta (Facebook) Pixel
- **Archivo**: `src/lib/tracking.ts`
- **Variable**: `META_PIXEL_ID`
- **Valor actual**: `""` (vacío)
- **Acción**: Rellenar con el Pixel ID del cliente (formato: `123456789012345`)

#### Google Search Console
- **Archivo**: `src/lib/tracking.ts`
- **Variable**: `GOOGLE_SITE_VERIFICATION`
- **Valor actual**: `""` (vacío)
- **Acción**: Rellenar con el token de verificación del cliente

---

## 🚀 Cómo configurar el tracking

### Paso 1: Editar el archivo de tracking

Abre `src/lib/tracking.ts` y rellena los valores:

```typescript
export const TRACKING = {
  GTM_ID: "GTM-XXXXXXX", // Tu ID de Google Tag Manager
  GA4_ID: "G-XXXXXXXXXX", // Tu ID de Google Analytics 4
  META_PIXEL_ID: "123456789012345", // Tu ID de Meta Pixel
  GOOGLE_SITE_VERIFICATION: "tu-token-aqui", // Tu token de Search Console
} as const;
```

### Paso 2: Rebuild y deploy

```bash
npm run build
# Luego despliega a producción
```

---

## 📦 Comandos útiles

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## 📝 Cambios de texto aplicados

Se han aplicado los siguientes cambios solicitados por el cliente:

1. ✅ Eliminado "Mayores de 40 años con trayectoria profesional"
2. ✅ Eliminado "Situación económica estable (pareja, otro negocio o ahorros)"
3. ✅ Sustituido "Sin riesgos" por "Con estructura y acompañamiento"
4. ✅ Actualizada la frase de compromiso de Alberto Alarcón
5. ✅ Cambiado el texto sobre experiencia inmobiliaria previa
6. ✅ Añadido disclaimer: "No existe sueldo fijo, nómina ni contrato laboral..."

---

## 🔗 Archivos importantes

- `src/routes/__root.tsx` - Layout principal con scripts de tracking
- `src/lib/tracking.ts` - **Configuración de IDs de tracking (A RELLENAR)**
- `src/components/landing/Formulario.tsx` - Formulario HubSpot
- `HUBSPOT_VERIFICATION.md` - Guía para verificar HubSpot

---

## ⚠️ Importante

- **HubSpot funciona correctamente** y no requiere cambios
- **GTM, GA4 y Meta Pixel están desactivados** hasta que el cliente rellene los IDs
- El código anterior de La Cochera ha sido eliminado para evitar conflictos de medición
- El diseño y el formulario se mantienen intactos

---

## 📞 Soporte

Para dudas sobre el código o la estructura del proyecto, contactar con el equipo de desarrollo anterior.

Para dudas sobre HubSpot, GTM, GA4 o Meta Pixel, el cliente debe contactar con su equipo de marketing/analytics.
