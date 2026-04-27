# Guía de Despliegue en Vercel

Este proyecto usa **TanStack Start** con **Nitro** para el despliegue en Vercel.

## Configuración Actual

- **Framework**: TanStack Start
- **Build Tool**: Vite + Nitro
- **Plataforma**: Vercel

## Pasos para Desplegar

### 1. Asegúrate de que los cambios estén en Git

```bash
git add .
git commit -m "Configurar para Vercel con Nitro"
git push
```

### 2. Desplegar en Vercel

Hay dos opciones:

#### Opción A: Desde la CLI de Vercel

```bash
npx vercel
```

Para producción:

```bash
npx vercel --prod
```

#### Opción B: Desde el Dashboard de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repositorio de GitHub
3. Vercel detectará automáticamente la configuración desde `vercel.json`
4. Haz clic en "Deploy"

## Archivos de Configuración

- **`vite.config.ts`**: Configuración de Vite con plugins de TanStack Start y Nitro
- **`vercel.json`**: Configuración específica de Vercel
- **`.gitignore`**: Incluye `.output/` para no subir archivos de build

## Build Local

Para probar el build localmente:

```bash
npm run build
```

Para previsualizar:

```bash
npx vite preview
```

## Solución de Problemas

### Error 404 en Vercel

Si ves un error 404 después del despliegue:

1. Verifica que `vercel.json` esté en la raíz del proyecto
2. Asegúrate de que el build se complete sin errores
3. Revisa los logs de build en el dashboard de Vercel

### Build Fallido

Si el build falla:

1. Verifica que todas las dependencias estén instaladas: `npm install`
2. Prueba el build localmente: `npm run build`
3. Revisa los logs de error en Vercel

## Notas Importantes

- El proyecto anteriormente usaba el adaptador de Cloudflare, ahora usa Nitro para Vercel
- Nitro genera la salida en `.output/` (ignorado por Git)
- La configuración es compatible con despliegue continuo desde Git
