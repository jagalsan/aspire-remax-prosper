import { createFileRoute } from '@tanstack/react-router'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const Route = createFileRoute('/api/send-lead')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          console.log('🚀 Iniciando envío de lead...')

          // Verificar que tenemos la API key
          if (!process.env.RESEND_API_KEY) {
            console.error('❌ RESEND_API_KEY no está configurada')
            return Response.json(
              { error: 'Configuración de email no disponible' },
              { status: 500 }
            )
          }

          // Leer el body de la petición
          const body = await request.json()
          console.log('📝 Datos recibidos:', { nombre: body.nombre, email: body.email })

          // Validar que tenemos los datos necesarios
          if (!body.nombre || !body.email || !body.telefono) {
            console.error('❌ Faltan datos obligatorios')
            return Response.json(
              { error: 'Faltan datos obligatorios' },
              { status: 400 }
            )
          }

          // Preparar el contenido del email
          const emailContent = `
            <h2>Nuevo Lead de RE/MAX Solución</h2>
            
            <h3>Datos del candidato:</h3>
            <ul>
              <li><strong>Nombre:</strong> ${body.nombre}</li>
              <li><strong>Teléfono:</strong> ${body.telefono}</li>
              <li><strong>Email:</strong> ${body.email}</li>
              <li><strong>Edad:</strong> ${body.edad}</li>
              <li><strong>Experiencia:</strong> ${body.experiencia}</li>
              <li><strong>Estabilidad económica:</strong> ${body.estabilidad}</li>
              <li><strong>Dispuesto a darse de alta como autónomo:</strong> ${body.autonomo === 'si' ? 'Sí' : 'No'}</li>
              ${body.mensaje ? `<li><strong>Mensaje:</strong> ${body.mensaje}</li>` : ''}
            </ul>
            
            <p><em>Formulario enviado desde: https://www.trabajaconremaxsolucion.es/</em></p>
          `

          // Enviar email usando Resend
          console.log('📧 Enviando email...')
          const { data, error } = await resend.emails.send({
            from: 'Trabaja en RE/MAX Solución <remax@lacocherastudio.com>',
            to: ['alberto.alarcon@remax.es'], 
            subject: `Nuevo Lead: ${body.nombre}`,
            html: emailContent,
            replyTo: body.email,
          })

          if (error) {
            console.error('❌ Error al enviar email:', error)
            return Response.json(
              { error: 'Error al enviar el email' },
              { status: 500 }
            )
          }

          console.log('✅ Email enviado correctamente:', data?.id)

          // También enviar a Google Sheets
          console.log('📊 Enviando a Google Sheets...')
          const GOOGLE_SCRIPT_URL =
            'https://script.google.com/macros/s/AKfycbx48zZ55-8be-f3C860AH6rkDfgMvJSGWbUb7XzCdR3ofR3GZTxmbSkkWhalSMoOJSxKQ/exec'

          try {
            await fetch(GOOGLE_SCRIPT_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'text/plain;charset=utf-8',
              },
              body: JSON.stringify(body),
            })
            console.log('✅ Enviado a Google Sheets')
          } catch (sheetsError) {
            console.error('⚠️ Error al enviar a Google Sheets (no crítico):', sheetsError)
          }

          console.log('🎉 Lead procesado exitosamente')
          return Response.json({
            success: true,
            message: 'Lead enviado correctamente',
            emailId: data?.id,
          })
        } catch (error) {
          console.error('❌ Error en send-lead:', error)
          return Response.json(
            { error: 'Error al procesar la solicitud' },
            { status: 500 }
          )
        }
      },
    },
  },
})
