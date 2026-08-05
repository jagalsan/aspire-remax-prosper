# Configuración de Google Tag Manager (GTM)

## 📊 Eventos de Conversión Identificados

### **Eventos Principales (Conversiones)**

| Evento | ID del Elemento | Descripción | Prioridad |
|--------|----------------|-------------|-----------|
| `form_submit` | `form_submit_final` | Envío del formulario principal | 🔴 ALTA |
| `whatsapp_click_hero` | `cta_hero_whatsapp` | Click WhatsApp desde Hero | 🔴 ALTA |
| `whatsapp_click_filtro` | `cta_filtro_whatsapp` | Click WhatsApp desde Filtro | 🔴 ALTA |
| `whatsapp_click_final` | `cta_final_whatsapp` | Click WhatsApp desde Formulario | 🔴 ALTA |
| `phone_click_hero` | N/A (tel:+34662257024) | Click llamar desde Hero | 🟡 MEDIA |
| `phone_click_navbar` | N/A (tel:+34662257024) | Click llamar desde Navbar | 🟡 MEDIA |
| `phone_click_footer` | N/A (tel:+34662257024) | Click llamar desde Footer | 🟡 MEDIA |
| `phone_click_final` | `cta_final_llamar` | Click llamar desde Formulario | 🟡 MEDIA |
| `form_cta_hero` | `cta_hero_form` | Click "Quiero más información" Hero | 🟢 BAJA |
| `form_cta_navbar` | N/A (href="#formulario") | Click "Quiero información" Navbar | 🟢 BAJA |
| `form_cta_perfil` | `cta_perfil_form` | Click "Solicitar información" Perfil | 🟢 BAJA |
| `email_click` | N/A (mailto:alberto.alarcon@remax.es) | Click email en Footer | 🟢 BAJA |
| `maps_almeria` | N/A (Google Maps Almería) | Click ubicación Almería | 🟢 BAJA |
| `maps_roquetas` | N/A (Google Maps Roquetas) | Click ubicación Roquetas | 🟢 BAJA |

---

## 🔧 Configuración en Google Tag Manager

### **PASO 1: Crear Variables Personalizadas**

Ve a **Variables** → **Nueva** y crea estas variables:

#### 1.1 Variable: `Click ID`
- **Tipo**: Variable de capa de datos
- **Nombre de variable de capa de datos**: `gtm.elementId`
- **Nombre**: `Click ID`

#### 1.2 Variable: `Click URL`
- **Tipo**: Variable de capa de datos
- **Nombre de variable de capa de datos**: `gtm.elementUrl`
- **Nombre**: `Click URL`

#### 1.3 Variable: `Click Text`
- **Tipo**: Variable de capa de datos
- **Nombre de variable de capa de datos**: `gtm.elementText`
- **Nombre**: `Click Text`

---

### **PASO 2: Crear Activadores (Triggers) - CONSOLIDADOS**

Ve a **Activadores** → **Nuevo** y crea solo **5 activadores comunes**:

#### 2.1 🔴 Activador: Envío Formulario (COMÚN)
- **Nombre**: `Lead - Formulario Enviado`
- **Tipo**: Click - Todos los elementos
- **Activar en**: Algunos clics
- **Condiciones**:
  - `Click ID` contiene `form_submit_final`
- **Esperar tags**: Sí (2000ms)
- **Validación**: Sí

#### 2.2 🔴 Activador: WhatsApp (COMÚN - Todos los botones)
- **Nombre**: `Lead - WhatsApp Click`
- **Tipo**: Click - Solo enlaces
- **Activar en**: Algunos clics de enlace
- **Condiciones**:
  - `Click URL` contiene `wa.me/34662257024`

#### 2.3 � Activador: Teléfono (COMÚN - Todos los botones)
- **Nombre**: `Lead - Llamada Telefónica`
- **Tipo**: Click - Solo enlaces
- **Activar en**: Algunos clics de enlace
- **Condiciones**:
  - `Click URL` contiene `tel:+34662257024`

#### 2.4 🟢 Activador: Email (COMÚN)
- **Nombre**: `Lead - Email Click`
- **Tipo**: Click - Solo enlaces
- **Activar en**: Algunos clics de enlace
- **Condiciones**:
  - `Click URL` contiene `mailto:alberto.alarcon@remax.es`

#### 2.5 🟢 Activador: Ubicación (COMÚN - Ambas ubicaciones)
- **Nombre**: `Lead - Ubicación Click`
- **Tipo**: Click - Solo enlaces
- **Activar en**: Algunos clics de enlace
- **Condiciones**:
  - `Click URL` contiene `maps.app.goo.gl`

---

### **PASO 3: Crear Etiquetas (Tags) - CONSOLIDADAS**

Ve a **Etiquetas** → **Nueva** y crea solo **5 etiquetas comunes**:

#### 3.1 🔴 Etiqueta: Lead - Formulario (COMÚN)
- **Nombre**: `GA4 - Lead - Formulario`
- **Tipo**: Google Analytics: Evento de GA4
- **ID de medición**: `G-14SYL2JC8Z`
- **Nombre del evento**: `generate_lead`
- **Parámetros del evento**:
  - `event_category`: `lead`
  - `event_label`: `formulario`
  - `method`: `form_submit`
  - `value`: `100`
- **Activación**: `Lead - Formulario Enviado`

#### 3.2 🔴 Etiqueta: Lead - WhatsApp (COMÚN - Captura todos)
- **Nombre**: `GA4 - Lead - WhatsApp`
- **Tipo**: Google Analytics: Evento de GA4
- **ID de medición**: `G-14SYL2JC8Z`
- **Nombre del evento**: `contact_whatsapp`
- **Parámetros del evento**:
  - `event_category`: `lead`
  - `event_label`: `whatsapp`
  - `method`: `whatsapp_click`
  - `button_id`: `{{Click ID}}`
  - `value`: `80`
- **Activación**: `Lead - WhatsApp Click`

#### 3.3 🟡 Etiqueta: Lead - Teléfono (COMÚN - Captura todos)
- **Nombre**: `GA4 - Lead - Teléfono`
- **Tipo**: Google Analytics: Evento de GA4
- **ID de medición**: `G-14SYL2JC8Z`
- **Nombre del evento**: `phone_call`
- **Parámetros del evento**:
  - `event_category`: `lead`
  - `event_label`: `phone`
  - `method`: `phone_click`
  - `phone_number`: `+34662257024`
  - `button_id`: `{{Click ID}}`
  - `value`: `50`
- **Activación**: `Lead - Llamada Telefónica`

#### 3.4 🟢 Etiqueta: Lead - Email (COMÚN)
- **Nombre**: `GA4 - Lead - Email`
- **Tipo**: Google Analytics: Evento de GA4
- **ID de medición**: `G-14SYL2JC8Z`
- **Nombre del evento**: `email_click`
- **Parámetros del evento**:
  - `event_category`: `lead`
  - `event_label`: `email`
  - `method`: `email_click`
  - `email`: `alberto.alarcon@remax.es`
  - `value`: `30`
- **Activación**: `Lead - Email Click`

#### 3.5 🟢 Etiqueta: Lead - Ubicación (COMÚN - Ambas ubicaciones)
- **Nombre**: `GA4 - Lead - Ubicación`
- **Tipo**: Google Analytics: Evento de GA4
- **ID de medición**: `G-14SYL2JC8Z`
- **Nombre del evento**: `location_click`
- **Parámetros del evento**:
  - `event_category`: `lead`
  - `event_label`: `maps`
  - `method`: `maps_click`
  - `location_url`: `{{Click URL}}`
  - `value`: `20`
- **Activación**: `Lead - Ubicación Click`

---

## 📈 PASO 4: Marcar Eventos como Conversiones en GA4

1. Ve a **Google Analytics 4** → **Configuración** → **Eventos**
2. Busca estos eventos y márcalos como **conversión**:
   - ✅ `generate_lead` (Formulario enviado) - **CONVERSIÓN PRINCIPAL**
   - ✅ `contact_whatsapp` (Todos los clicks WhatsApp) - **CONVERSIÓN PRINCIPAL**
   - ✅ `phone_call` (Todas las llamadas) - **CONVERSIÓN SECUNDARIA**
   - ✅ `email_click` (Clicks en email) - **MICRO-CONVERSIÓN**
   - ✅ `location_click` (Clicks en ubicaciones) - **MICRO-CONVERSIÓN**

---

## 🧪 PASO 5: Probar la Configuración

### Modo de Vista Previa de GTM

1. En GTM, haz clic en **Vista previa**
2. Introduce la URL de tu sitio
3. Realiza estas acciones y verifica que se disparen:

   **Conversiones Principales:**
   - ✅ Click en **cualquier botón WhatsApp** → Debe disparar `Lead - WhatsApp Click`
   - ✅ Click en **cualquier botón Llamar** → Debe disparar `Lead - Llamada Telefónica`
   - ✅ **Envío del formulario** → Debe disparar `Lead - Formulario Enviado`
   
   **Micro-conversiones:**
   - ✅ Click en **email del footer** → Debe disparar `Lead - Email Click`
   - ✅ Click en **ubicación Almería o Roquetas** → Debe disparar `Lead - Ubicación Click`

### Verificar en GA4 (Tiempo Real)

1. Ve a **Google Analytics 4** → **Informes** → **Tiempo real**
2. Realiza las acciones en tu sitio
3. Verifica que aparezcan los eventos:
   - `generate_lead`
   - `contact_whatsapp`
   - `phone_call`
   - `email_click`
   - `location_click`

---

## 🎯 Resumen de Conversiones para Campañas

### Conversiones Principales (Importar a Google Ads)
1. **`generate_lead`** - Formulario enviado (Valor: 100) 🔴
2. **`contact_whatsapp`** - Todos los clicks WhatsApp (Valor: 80) 🔴
3. **`phone_call`** - Todas las llamadas telefónicas (Valor: 50) 🟡

### Micro-conversiones (Para optimización)
1. **`email_click`** - Contacto por email (Valor: 30) 🟢
2. **`location_click`** - Interés en ubicación (Valor: 20) 🟢

---

## 📊 Vista en GA4 - Cómo Verás los Leads

### En Informes → Eventos
Verás **5 eventos consolidados**:

| Evento | Descripción | Incluye |
|--------|-------------|---------|
| `generate_lead` | Formularios enviados | Todos los envíos del formulario principal |
| `contact_whatsapp` | Clicks en WhatsApp | Hero, Filtro, Final (todos los botones) |
| `phone_call` | Llamadas telefónicas | Hero, Navbar, Footer, Final (todos los botones) |
| `email_click` | Clicks en email | Footer |
| `location_click` | Clicks en ubicación | Almería y Roquetas (ambas ubicaciones) |

### Para ver detalles de cada botón
Usa el parámetro `button_id` en los informes personalizados para diferenciar:
- WhatsApp Hero: `cta_hero_whatsapp`
- WhatsApp Filtro: `cta_filtro_whatsapp`
- WhatsApp Final: `cta_final_whatsapp`

---

## ✅ Checklist Final

- [ ] Variables creadas en GTM
- [ ] Activadores configurados en GTM
- [ ] Etiquetas creadas y vinculadas
- [ ] Modo vista previa probado
- [ ] Eventos visibles en GA4 Tiempo Real
- [ ] Eventos marcados como conversiones en GA4
- [ ] Contenedor GTM publicado
- [ ] Verificación en producción después del despliegue

---

## 📞 Contacto para Soporte

Si necesitas ayuda con la configuración:
- **Email**: alberto.alarcon@remax.es
- **Teléfono**: +34 662 25 70 24
