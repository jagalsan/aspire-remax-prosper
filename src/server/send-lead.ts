import { json } from '@tanstack/react-start/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLead(data: {
  nombre: string;
  telefono: string;
  email: string;
  edad: string;
  experiencia: string;
  estabilidad: string;
  autonomo: string;
  mensaje?: string;
  privacidad: boolean;
}) => {
  console.log('🚀 Iniciando envío de lead...');
  
  // Verificar que tenemos la API key
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY no está configurada');
    throw new Error('Configuración de email no disponible');
  }
  
  console.log('📝 Datos recibidos:', { nombre: data.nombre, email: data.email });
  
  // Validar datos
  if (!data.nombre || !data.email || !data.telefono) {
    console.error('❌ Faltan datos obligatorios');
    throw new Error('Faltan datos obligatorios');
  }

  // Preparar el contenido del email
  const emailContent = `
    <h2>Nuevo Lead de RE/MAX Solución</h2>
    
    <h3>Datos del candidato:</h3>
    <ul>
      <li><strong>Nombre:</strong> ${data.nombre}</li>
      <li><strong>Teléfono:</strong> ${data.telefono}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Edad:</strong> ${data.edad}</li>
      <li><strong>Experiencia:</strong> ${data.experiencia}</li>
      <li><strong>Estabilidad económica:</strong> ${data.estabilidad}</li>
      <li><strong>Dispuesto a darse de alta como autónomo:</strong> ${data.autonomo === 'si' ? 'Sí' : 'No'}</li>
      ${data.mensaje ? `<li><strong>Mensaje:</strong> ${data.mensaje}</li>` : ''}
    </ul>
    
    <p><em>Formulario enviado desde: https://www.trabajaconremaxsolucion.es/</em></p>
  `;

  // Enviar email usando Resend
  console.log('📧 Enviando email...');
  const { data: emailData, error } = await resend.emails.send({
    from: 'RE/MAX Solución <onboarding@resend.dev>',
    to: ['alberto@lacocherastudio.com'],
    subject: `Nuevo Lead: ${data.nombre}`,
    html: emailContent,
    replyTo: data.email,
  });

  if (error) {
    console.error('❌ Error al enviar email:', error);
    throw new Error('Error al enviar el email');
  }
  
  console.log('✅ Email enviado correctamente:', emailData?.id);

  // También enviar a Google Sheets
  console.log('📊 Enviando a Google Sheets...');
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx48zZ55-8be-f3C860AH6rkDfgMvJSGWbUb7XzCdR3ofR3GZTxmbSkkWhalSMoOJSxKQ/exec";
  
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    console.log('✅ Enviado a Google Sheets');
  } catch (sheetsError) {
    console.error('⚠️ Error al enviar a Google Sheets (no crítico):', sheetsError);
  }

  console.log('🎉 Lead procesado exitosamente');
  return {
    success: true,
    message: 'Lead enviado correctamente',
    emailId: emailData?.id,
  };
});
