# Configuración de Google Sheets para Formulario

## 📋 Paso 1: Crear la Hoja de Cálculo

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nómbrala: **"Leads RE/MAX Solución"**
4. En la primera fila (fila 1), añade estos encabezados exactamente en este orden:

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Fecha | Nombre | Teléfono | Email | Edad | Experiencia | Estabilidad | Autónomo | Mensaje | Privacidad |

---

## 💻 Paso 2: Configurar el Script de Apps Script

1. En tu hoja de Google Sheets, ve a **Extensiones** → **Apps Script**
2. Borra todo el código que aparece por defecto
3. Pega este código:

```javascript
function doPost(e) {
  try {
    // 1. Obtener la hoja activa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 2. Parsear los datos que vienen del formulario
    const data = JSON.parse(e.postData.contents);
    
    // 3. Crear la fila con los datos en el orden correcto
    const row = [
      new Date(),              // Fecha y hora actual
      data.nombre,             // Nombre completo
      data.telefono,           // Teléfono
      data.email,              // Email
      data.edad,               // Rango de edad
      data.experiencia,        // Experiencia profesional
      data.estabilidad,        // Estabilidad económica
      data.autonomo,           // Dispuesto a ser autónomo
      data.mensaje || "",      // Mensaje (opcional)
      data.privacidad ? "Sí" : "No"  // Aceptó privacidad
    ];
    
    // 4. Añadir la fila a la hoja
    sheet.appendRow(row);
    
    // 5. Responder con éxito
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // 6. Si hay error, devolverlo
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Haz clic en **Guardar** (icono de disquete)
5. Ponle un nombre al proyecto: **"API Formulario RE/MAX"**

---

## 🚀 Paso 3: Implementar como Web App

1. Haz clic en **Implementar** → **Nueva implementación**
2. Haz clic en el icono de **engranaje** ⚙️ junto a "Seleccionar tipo"
3. Selecciona **Aplicación web**
4. Configura así:
   - **Descripción**: `API Formulario RE/MAX v1`
   - **Ejecutar como**: `Yo (tu email)`
   - **Quién tiene acceso**: `Cualquier usuario` ⚠️ **IMPORTANTE**
5. Haz clic en **Implementar**
6. **Autoriza** la aplicación (te pedirá permisos)
7. **Copia la URL** que aparece (debe ser la que ya tienes):
   ```
   https://script.google.com/macros/s/AKfycbx48zZ55-8be-f3C860AH6rkDfgMvJSGWbUb7XzCdR3ofR3GZTxmbSkkWhalSMoOJSxKQ/exec
   ```

---

## ✅ Paso 4: Verificar que Funciona

### Opción A: Probar desde el navegador (método rápido)

1. Abre la consola del navegador (F12)
2. Ve a la pestaña **Console**
3. Pega este código y presiona Enter:

```javascript
fetch('https://script.google.com/macros/s/AKfycbx48zZ55-8be-f3C860AH6rkDfgMvJSGWbUb7XzCdR3ofR3GZTxmbSkkWhalSMoOJSxKQ/exec', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain;charset=utf-8',
  },
  body: JSON.stringify({
    nombre: "Prueba Test",
    telefono: "666777888",
    email: "prueba@test.com",
    edad: "40-50",
    experiencia: "comercial",
    estabilidad: "si",
    autonomo: "si",
    mensaje: "Esto es una prueba",
    privacidad: true
  })
})
.then(res => res.json())
.then(data => console.log('Respuesta:', data))
.catch(err => console.error('Error:', err));
```

4. Verifica que aparezca una nueva fila en tu Google Sheet con los datos de prueba

### Opción B: Probar desde tu sitio web

1. Despliega tu sitio en Vercel
2. Completa el formulario
3. Verifica que los datos aparezcan en Google Sheets

---

## 🔄 Si Necesitas Actualizar el Script en el Futuro

⚠️ **IMPORTANTE**: Si modificas el código de Apps Script:

1. Ve a **Implementar** → **Administrar implementaciones**
2. Haz clic en el icono de **lápiz** ✏️ junto a tu implementación activa
3. Cambia la **versión** a **Nueva versión**
4. Añade una descripción: `v2 - Añadido campo X`
5. Haz clic en **Implementar**

**NO** necesitas cambiar la URL en tu código React, la URL se mantiene igual.

---

## 📊 Formato Recomendado de la Hoja

### Encabezados con formato:
- **Negrita** en la fila 1
- **Color de fondo**: Azul claro
- **Texto**: Blanco o negro según contraste

### Columnas sugeridas:
- **Fecha**: Formato de fecha y hora
- **Teléfono**: Formato de texto (para mantener el +34)
- **Email**: Formato de texto
- **Edad, Experiencia, Estabilidad, Autónomo**: Texto
- **Privacidad**: Texto

### Filtros automáticos:
1. Selecciona la fila 1
2. Ve a **Datos** → **Crear un filtro**

---

## 🛡️ Seguridad y Privacidad

### Datos que se guardan:
- ✅ Fecha y hora del envío
- ✅ Todos los campos del formulario
- ✅ Aceptación de política de privacidad

### Quién puede acceder:
- Solo tú (propietario de la hoja)
- Personas con las que compartas la hoja explícitamente

### La URL del script:
- Es pública (necesario para que funcione)
- Solo acepta peticiones POST
- No devuelve datos de la hoja
- Solo permite añadir filas nuevas

---

## 🐛 Solución de Problemas

### Error: "No se pudo enviar el formulario"
1. Verifica que la URL del script sea correcta
2. Asegúrate de que el script esté implementado como "Cualquier usuario"
3. Revisa la consola del navegador (F12) para ver el error exacto

### Los datos no aparecen en la hoja
1. Verifica que los encabezados estén en la fila 1
2. Asegúrate de que la hoja activa sea la correcta
3. Revisa los logs en Apps Script: **Ejecuciones** → Ver logs

### Error de CORS
- Asegúrate de usar `Content-Type: text/plain;charset=utf-8`
- Verifica que el script esté implementado correctamente

---

## 📞 Datos de Contacto Guardados

Cada vez que alguien envía el formulario, se guarda:

1. **Fecha** - Cuándo se envió
2. **Nombre** - Nombre completo
3. **Teléfono** - Número de contacto
4. **Email** - Correo electrónico
5. **Edad** - Rango de edad seleccionado
6. **Experiencia** - Tipo de experiencia profesional
7. **Estabilidad** - Si tiene estabilidad económica
8. **Autónomo** - Si está dispuesto a ser autónomo (solo "si" llega aquí)
9. **Mensaje** - Mensaje opcional
10. **Privacidad** - Confirmación de aceptación

---

## ✅ Checklist de Configuración

- [ ] Hoja de Google Sheets creada
- [ ] Encabezados añadidos en la fila 1
- [ ] Script de Apps Script pegado y guardado
- [ ] Script implementado como "Aplicación web"
- [ ] Permisos configurados como "Cualquier usuario"
- [ ] URL del script copiada y verificada
- [ ] Prueba realizada desde consola del navegador
- [ ] Primera fila de prueba visible en la hoja
- [ ] Formulario en producción probado
- [ ] Datos llegando correctamente a Google Sheets

¡Listo! Tu formulario ahora está conectado a Google Sheets 🎉
