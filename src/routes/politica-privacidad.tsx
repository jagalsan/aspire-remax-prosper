import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/politica-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad y Cookies — RE/MAX Solución" },
      {
        name: "description",
        content:
          "Política de Privacidad y Política de Cookies de Inmobiliaria Alberto Alarcón SL — RE/MAX Solución.",
      },
      { property: "og:title", content: "Política de Privacidad — RE/MAX Solución" },
      {
        property: "og:description",
        content:
          "Cómo tratamos tus datos personales y cookies en RE/MAX Solución.",
      },
    ],
  }),
  component: PoliticaPrivacidadPage,
});

function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-primary">RE/MAX</span>
            <span className="text-sm font-semibold text-foreground">Solución</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Política de Privacidad</h1>
        <p className="mt-3 text-muted-foreground">
          Este sitio está gestionado por INMOBILIARIA ALBERTO ALARCON SL con domicilio social en
          AVENIDA CABO DE GATA 33, LOCAL 6B, y CIF B04861282.
        </p>

        <div className="prose prose-slate mt-10 max-w-none text-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_li]:mt-1">
          <h2>Resumen</h2>
          <p>
            INMOBILIARIA ALBERTO ALARCON SL ha asumido el compromiso de proteger sus Datos Personales (tales como su
            nombre; dirección; número de teléfono; fecha de nacimiento; dirección de e-mail; número de tarjeta de
            crédito; sexo; preferencia de idioma; y preferencias de categoría de mercancía). Obtendremos los Datos
            Personales que nos facilite voluntariamente y los trataremos para los siguientes fines («Fines»):
          </p>
          <ul>
            <li>Realizar operaciones con Ud., prestar el servicio contratado y gestionar su pertenencia a nuestro sistema de fidelización de asociados, en su caso.</li>
            <li>Enviarle comunicaciones comerciales, siempre y cuando haya dado su consentimiento.</li>
            <li>Entender y analizar sus necesidades y preferencias.</li>
            <li>Desarrollar, mejorar, comercializar y suministrar productos y servicios para atender sus necesidades.</li>
            <li>Permitirle participar en promociones y concursos.</li>
            <li>Permitirle participar en estudios de clientes o grupos de interés.</li>
            <li>Dar respuesta a solicitudes o quejas.</li>
          </ul>
          <p>
            Podremos conservar o tratar dichos Datos Personales de forma segura en cualquier lugar del mundo, mientras
            resulte necesario para los Fines. Utilizamos la tecnología SSL (Secure Sockets Layer). Podrá darse de baja
            en caso de suscripciones o recepción de correos comerciales en cualquier momento poniéndose en contacto con
            nosotros por escrito conforme al modo indicado en nuestras comunicaciones.
          </p>
          <p>
            Nuestras páginas web emplean cookies y beacons para ayudarnos a mejorar la experiencia del usuario. Siempre
            y cuando su navegador lo permita, podrá rechazar las cookies si bien con ello tanto su utilización de
            nuestro Sitio Web como su capacidad para acceder a determinadas funciones del sitio y realizar operaciones
            podrán verse afectadas.
          </p>

          <h2>1. Nuestro planteamiento de privacidad</h2>
          <p>
            INMOBILIARIA ALBERTO ALARCON SL reconoce que la protección de sus Datos Personales es un principio
            fundamental para la generación de confianza y el mantenimiento de una buena relación con Ud.
          </p>
          <p>
            Esta Política de Privacidad detalla los compromisos que hemos asumido y los derechos que le asisten en
            relación con el Tratamiento de sus Datos Personales de conformidad con la legislación aplicable.
          </p>
          <p>
            Adicionalmente, en determinados casos específicos esta Política de Privacidad podrá complementarse con
            políticas y términos y condiciones adicionales, o con breves Declaraciones de Privacidad utilizadas en
            relación con determinados fines concretos y de distintas formas, lo que identificaremos debidamente como
            de obligado cumplimiento.
          </p>
          <p>
            Al facilitar sus Datos Personales, Ud. está dando su consentimiento a la obtención, uso y Tratamiento
            (incluyendo la revelación) de sus Datos Personales del modo y para los Fines descritos en esta Política
            de Privacidad.
          </p>

          <h2>2. Obtención de los datos</h2>
          <p>
            Podremos comunicarnos con Ud. a través de distintos canales, incluyendo nuestra sede, nuestros sistemas de
            fidelización de clientes e Internet (vía nuestras páginas web de venta o información) o a través de nuestra
            línea de contacto directo, así como a través de otros medios tales como por correo postal, e-mail, teléfono,
            fax o mensajes de texto enviados a su teléfono móvil, si bien nuestra forma de comunicación preferente será
            vía e-mail por tener un menor impacto en el medioambiente.
          </p>
          <p>
            Le facilitaremos información explicándole por qué se necesitan los Datos Personales y la forma en que dichos
            Datos Personales serán tratados.
          </p>

          <h2>3. Datos personales</h2>
          <p>
            INMOBILIARIA ALBERTO ALARCON SL limita el volumen y el tipo de información que obtenemos a tal efecto, lo
            que es necesario para los Fines indicados y no obtendremos sus Datos Personales salvo que Ud. nos los
            proporcione (directa o indirectamente) de forma voluntaria.
          </p>
          <p>Por lo general, obtendremos los siguientes Datos Personales en relación con Ud.:</p>
          <ul>
            <li>Nombre</li>
            <li>Dirección</li>
            <li>Número(s) de teléfono</li>
            <li>Fecha de nacimiento</li>
            <li>Dirección de e-mail</li>
            <li>Sexo</li>
            <li>Preferencia de idioma y preferencias de categoría de mercancía</li>
            <li>Número de DNI</li>
            <li>Información financiera</li>
            <li>Información comercial</li>
          </ul>

          <h2>4. Información no identificable personalmente</h2>
          <p>
            Cuando obtenemos información a través de nuestra Página Web, como ocurre con otras muchas páginas web,
            también obtenemos automáticamente determinada Información No Identificable Personalmente relativa al uso
            del sitio web que no le identifica de forma directa. A título de ejemplo, se incluye la dirección IP de su
            ordenador, la dirección IP de su Proveedor de Servicios de Internet, la fecha y la hora en la que accede al
            sitio web, la dirección de Internet del sitio web desde el que accede directamente a nuestro Sitio Web, el
            sistema operativo que utiliza, las secciones del sitio web que visita, las páginas del sitio web que lee y
            las imágenes que visualiza, así como los contenidos que se descarga de nuestro Sitio Web.
          </p>
          <p>
            Podremos utilizar la Información No Identificable Personalmente para compilar informes de datos de
            seguimiento relativos a las estadísticas de los usuarios del sitio, los patrones de tráfico del sitio y
            las compras realizadas en dicho sitio.
          </p>

          <h2>5. ¿Cuándo se obtienen los datos personales y cómo se utilizan?</h2>
          <p>INMOBILIARIA ALBERTO ALARCON SL obtiene Datos Personales para los siguientes fines:</p>
          <ul>
            <li>Realizar operaciones con Ud., prestar el servicio contratado, administrar las comunicaciones y gestionar su pertenencia a nuestro sistema de fidelización de clientes.</li>
            <li>Enviarle comunicaciones comerciales, siempre y cuando haya dado su consentimiento.</li>
            <li>Entender y analizar nuestras ventas y sus necesidades y preferencias.</li>
            <li>Desarrollar, mejorar, comercializar y suministrar productos y servicios para atender sus necesidades.</li>
            <li>Permitirle participar en promociones y concursos.</li>
            <li>Permitirle participar en estudios de clientes o grupos de interés.</li>
            <li>Dar respuesta a solicitudes y quejas.</li>
            <li>Permitirle participar en nuestros sistemas de fidelización de clientes y gestionar su pertenencia a estos.</li>
          </ul>
          <p>
            Únicamente conservaremos los Datos Personales mientras resulte necesario para satisfacer los Fines
            específicos para los que hayan sido obtenidos. Podremos revelar sus Datos Personales cuando así se nos
            exija en virtud de la legislación vigente o a requerimiento de las autoridades competentes.
          </p>

          <h2>6. Consentimiento (aceptación – baja)</h2>
          <p>
            <strong>Aceptación:</strong> INMOBILIARIA ALBERTO ALARCON SL no utilizará sus Datos Personales para ningún
            fin que no haya sido especificado con anterioridad, salvo que hayamos obtenido previamente su
            consentimiento para ello o salvo que dicho fin venga requerido por ley.
          </p>
          <p>
            <strong>Baja:</strong> En cualquier momento podrá revocar su consentimiento a nuestra actividad de
            obtención, uso o revelación (en general, Tratamiento) de sus Datos Personales poniéndose en contacto con
            nosotros por escrito (por e-mail, correo postal, mensajes de texto, etc.).
          </p>

          <h2>7. Corrección de la información</h2>
          <p>
            INMOBILIARIA ALBERTO ALARCON SL conserva los Datos Personales correctos, completos y actualizados conforme
            a lo necesario, teniendo en cuenta su uso y los intereses de nuestros clientes. Ud. será el responsable de
            comunicar cualquier cambio en sus Datos Personales y de garantizar que dicha información sea correcta y
            esté actualizada.
          </p>

          <h2>8. Acceso y actualización de los datos personales</h2>
          <p>
            Dependiendo de la legislación de cada Jurisdicción Relevante, a algunos clientes les asisten los derechos
            de acceso, rectificación, cancelación y objeción (al tratamiento) de sus Datos Personales almacenados por
            nosotros, y tienen derecho asimismo a que se les informe acerca de su uso y revelación.
          </p>

          <h2>9. Fecha de entrada en vigor y cambios</h2>
          <p>Esta Política de Privacidad es válida desde enero de 2021.</p>
          <p>
            Nos reservamos el derecho a modificar nuestra Política de Privacidad en cualquier momento. Si decidimos
            cambiar nuestra Política de Privacidad, publicaremos los cambios correspondientes en la Página de Inicio
            de forma que nuestros usuarios sepan en todo momento qué información obtenemos de ellos, cómo la utilizamos
            y en qué circunstancias, en su caso, la revelaremos a otros terceros.
          </p>

          <h2>10. ¿Cómo mantenemos la seguridad de sus datos?</h2>
          <p>
            INMOBILIARIA ALBERTO ALARCON SL protege los Datos Personales frente a posibles casos de pérdida o
            sustracción, así como frente a actividades no autorizadas de acceso, revelación, copia, utilización o
            modificación, implementando medidas de salvaguardia y seguridad proporcionales a la confidencialidad de
            los Datos Personales.
          </p>
          <ul>
            <li>Medidas físicas: restricción de acceso a las oficinas en la compañía.</li>
            <li>Herramientas técnicas: contraseñas y encriptado según las prácticas habituales utilizadas en el sector.</li>
          </ul>
          <p>
            La seguridad online también es una prioridad. Utilizamos firewalls y la tecnología SSL para proteger su
            información.
          </p>

          <h2>11. Cuestiones específicas de Internet</h2>
          <h3>Vínculos a otros sitios web</h3>
          <p>
            El Sitio Web podrá contener vínculos a otras páginas web pertenecientes a terceros y gestionadas por éstos.
            No tenemos ningún tipo de responsabilidad o control sobre dichas otras páginas web. Le animamos a que lea
            las políticas de privacidad de esos otros sitios web.
          </p>

          <h2>12. Menores</h2>
          <p>
            Nunca obtendremos ni solicitaremos de forma consciente Datos Personales de menores de catorce (14) años sin
            haber obtenido previamente el obligado consentimiento paterno verificable.
          </p>

          <h2>13. Cumplimiento de la ley</h2>
          <p>
            INMOBILIARIA ALBERTO ALARCON SL ha implementado los procedimientos necesarios para recibir y responder las
            consultas relativas a las políticas y prácticas referentes a la gestión que realiza de los Datos Personales.
          </p>

          <h2>14. Contacto con nosotros</h2>
          <p>
            Si tiene alguna duda o consulta relativa a esta Política de Privacidad o a las prácticas de obtención de
            datos aquí descritas, póngase en contacto con nosotros por e-mail:{" "}
            <a className="text-primary underline" href="mailto:alberto.alarcon@remax.es">
              alberto.alarcon@remax.es
            </a>
            .
          </p>
          <p>
            Le recordamos que no deberá enviar por medios no encriptados (como el e-mail) información confidencial como,
            por ejemplo, contraseñas, datos de la cuenta bancaria, etc.
          </p>

          <h2>Política de Cookies</h2>
          <p>
            La presente Política de Cookies es parte integrante del Aviso Legal y de la Política de Privacidad del
            Sitio Web. El acceso y la navegación en el Sitio Web, o el uso de los servicios del mismo, implican la
            aceptación de los términos y condiciones recogidos en el Aviso Legal y en la Política de Privacidad.
          </p>

          <h3>¿Qué es una cookie?</h3>
          <p>
            Las Cookies son archivos que contienen pequeñas cantidades de información que se descargan en el dispositivo
            del usuario cuando visita una página web. Su finalidad principal es reconocer al usuario cada vez que accede
            al Sitio Web permitiendo, además, mejorar la calidad y ofrecer un mejor uso del Sitio Web.
          </p>

          <h3>Cookies propias</h3>
          <p>
            <strong>Cookies técnicas y de personalización.</strong> Estas Cookies facilitan el acceso y navegación del
            usuario en el Sitio Web en cada una de sus visitas al mismo y la utilización de las diferentes opciones o
            servicios que en él existen como, por ejemplo, controlar el tráfico y la comunicación de datos.
          </p>

          <h3>Cookies de terceros</h3>
          <p>
            <strong>Cookies de análisis:</strong> RE/MAX Solución, a través del Sitio Web, utiliza Google Analytics y
            Google Adservices/Syndication, servicios prestados por Google, Inc. Asimismo, utiliza cookies de WordPress,
            servicios prestados por Automattic, Inc.
          </p>
          <p>
            <strong>Cookies de publicidad comportamental:</strong> Utilizamos el servicio prestado por Facebook (Meta)
            para mostrar al usuario contenidos publicitarios adaptados a sus hábitos de navegación.
          </p>

          <h3>Configuración del usuario para evitar cookies</h3>
          <p>
            Puede bloquear las Cookies a través de las herramientas de configuración del navegador, o bien, configurar
            su navegador para que le avise cuando un servidor quiera guardar una Cookie:
          </p>
          <ul>
            <li>
              Edge:{" "}
              <a className="text-primary underline" href="http://windows.microsoft.com/es-es/windows-10/edge-privacy-faq" target="_blank" rel="noreferrer">
                windows.microsoft.com
              </a>
            </li>
            <li>
              Safari:{" "}
              <a className="text-primary underline" href="https://www.apple.com/legal/privacy/es/cookies/" target="_blank" rel="noreferrer">
                apple.com
              </a>
            </li>
            <li>
              Chrome:{" "}
              <a className="text-primary underline" href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noreferrer">
                support.google.com
              </a>
            </li>
            <li>
              Firefox:{" "}
              <a className="text-primary underline" href="http://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noreferrer">
                support.mozilla.org
              </a>
            </li>
            <li>
              Opera:{" "}
              <a className="text-primary underline" href="http://help.opera.com/Windows/11.50/es-ES/cookies.html" target="_blank" rel="noreferrer">
                help.opera.com
              </a>
            </li>
          </ul>
          <p>
            Más información sobre cookies en{" "}
            <a className="text-primary underline" href="https://www.allaboutcookies.org" target="_blank" rel="noreferrer">
              allaboutcookies.org
            </a>{" "}
            y{" "}
            <a className="text-primary underline" href="https://www.youronlinechoices.eu" target="_blank" rel="noreferrer">
              youronlinechoices.eu
            </a>
            .
          </p>
          <p>
            Si tiene dudas sobre esta Política de Cookies, puede contactar con nosotros en{" "}
            <a className="text-primary underline" href="mailto:alberto.alarcon@remax.es">
              alberto.alarcon@remax.es
            </a>
            .
          </p>
          <p className="text-sm">Última actualización: 9 de enero de 2019</p>
        </div>

        <div className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Inmobiliaria Alberto Alarcón SLU. Todos los derechos reservados.
        </div>
      </main>
    </div>
  );
}
