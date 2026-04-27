import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal — RE/MAX Solución" },
      {
        name: "description",
        content:
          "Aviso legal y condiciones generales de uso del portal de Inmobiliaria Alberto Alarcón SL — RE/MAX Solución.",
      },
      { property: "og:title", content: "Aviso Legal — RE/MAX Solución" },
      {
        property: "og:description",
        content:
          "Condiciones generales de uso del portal de Inmobiliaria Alberto Alarcón SL.",
      },
    ],
  }),
  component: AvisoLegalPage,
});

function AvisoLegalPage() {
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
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Aviso Legal</h1>
        <p className="mt-3 text-muted-foreground">
          Condiciones generales de uso del portal de INMOBILIARIA ALBERTO ALARCON SL.
        </p>

        <div className="prose prose-slate mt-10 max-w-none text-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-muted-foreground">
          <p>
            INMOBILIARIA ALBERTO ALARCON SL le informa que el acceso y uso de la página web
            http://www.trabajaconremaxsolucion.es/ y todos los subdominios y directorios incluidos bajo la misma,
            así como los servicios o contenidos que a través de él se puedan obtener y todos los portales de dominio
            propio bajo titularidad de INMOBILIARIA ALBERTO ALARCON SL, están sujetos a los términos que se detallan
            en este Aviso Legal, sin perjuicio de que el acceso a alguno de dichos servicios o contenidos pudieran
            precisar de la aceptación de unas Condiciones Generales particulares adicionales.
          </p>
          <p>
            Por ello, si las consideraciones detalladas en este Aviso Legal no son de su conformidad, rogamos no haga
            uso del Portal, ya que cualquier uso que haga del mismo o de los servicios y contenidos en él incluidos
            implicará la aceptación de los términos legales recogidos en este texto.
          </p>
          <p>
            INMOBILIARIA ALBERTO ALARCON SL se reserva el derecho a realizar cambios en el Portal
            http://www.trabajaconremaxsolucion.es/ y en todos los portales web del que es titular sin previo aviso,
            con el objeto de actualizar, corregir, modificar, añadir o eliminar los contenidos del Portal o de su diseño.
            Los contenidos y servicios que ofrecen los Portales se actualizan periódicamente. Debido a que la
            actualización de la información no es inmediata, le sugerimos que compruebe siempre la vigencia y exactitud
            de la información, servicios y contenidos recogidos en los mismos.
          </p>
          <p>
            Las condiciones y términos que se recogen en el presente Aviso Legal pueden variar, por lo que le invitamos
            a que revise estos términos cuando visite de nuevo el Portal.
          </p>

          <h2>Derechos de propiedad intelectual y de propiedad industrial</h2>
          <p>
            Tanto el diseño del Portal de INMOBILIARIA ALBERTO ALARCON SL y de los portales web de su titularidad y sus
            códigos fuente, como los logos, marcas, y demás signos distintivos que aparecen en el mismo, pertenecen a
            INMOBILIARIA ALBERTO ALARCON SL y están protegidos por los correspondientes derechos de propiedad intelectual
            e industrial. Igualmente están protegidos por los correspondientes derechos de propiedad intelectual e
            industrial las imágenes y demás contenidos incluidos en el servidor de INMOBILIARIA ALBERTO ALARCON SL.
          </p>
          <p>
            Su uso, reproducción, distribución, comunicación pública, transformación o cualquier otra actividad similar
            o análoga, queda totalmente prohibida salvo que medie expresa autorización de INMOBILIARIA ALBERTO ALARCON SL.
            La licencia de uso de cualquier contenido de este Portal otorgada al usuario se limita a la descarga por
            parte del usuario de dicho contenido y el uso privado del mismo, siempre que los citados contenidos
            permanezcan íntegros.
          </p>
          <p>
            INMOBILIARIA ALBERTO ALARCON SL declara su respeto a los derechos de propiedad intelectual e industrial de
            terceros; por ello, si considera que este sitio pudiera estar violando sus derechos, rogamos se ponga en
            contacto con INMOBILIARIA ALBERTO ALARCON SL.
          </p>

          <h2>Privacidad</h2>
          <p>
            De conformidad con el Reglamento General de Protección de Datos (en adelante, RGPD), publicado en mayo de
            2016, INMOBILIARIA ALBERTO ALARCON SL, se compromete al cumplimiento de su obligación de secreto con
            respecto a los datos de carácter personal y al deber de tratarlos con confidencialidad. A estos efectos,
            adoptará las medidas necesarias para evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            La recogida y tratamiento automatizado de los datos personales tiene como finalidad la gestión, prestación,
            ampliación y mejora de los servicios solicitados en cada momento por el usuario y el seguimiento de
            consultas planteadas por los usuarios.
          </p>
          <p>
            Usted tendrá la posibilidad de ejercer los derechos de acceso, rectificación, cancelación, portabilidad,
            limitación y oposición de sus datos personales, solicitándolo por correo certificado.
          </p>
          <p>
            INMOBILIARIA ALBERTO ALARCON SL mantiene los niveles de protección de sus datos personales conforme al RGPD,
            relativo a las medidas de seguridad de los ficheros automatizados que contengan datos de carácter personal,
            y ha establecido todos los medios técnicos a su alcance para evitar la pérdida, mal uso, alteración, acceso
            no autorizado y robo de los datos que Vd. facilite a INMOBILIARIA ALBERTO ALARCON SL, sin perjuicio de que
            las medidas de seguridad en Internet no sean inexpugnables.
          </p>
          <p>
            INMOBILIARIA ALBERTO ALARCON SL se reserva la facultad de modificar la presente Política de Privacidad para
            adaptarla a las novedades legislativas, jurisprudenciales o de interpretación de la Agencia Española de
            Protección de Datos. En este caso, INMOBILIARIA ALBERTO ALARCON SL anunciará dichos cambios, indicando
            claramente y con la debida antelación las modificaciones efectuadas, y solicitando, en caso de que sea
            necesario, su aceptación de dichos cambios.
          </p>

          <h2>Ley aplicable y jurisdicción</h2>
          <p>
            La ley aplicable en caso de disputa o conflicto de interpretación de los términos que conforman este Aviso
            Legal, así como cualquier cuestión relacionada con los servicios del presente Portal, será la ley española.
            Para la resolución de cualquier conflicto que pueda surgir con ocasión de la visita al Portal o del uso de
            los servicios que en él se puedan ofertar, INMOBILIARIA ALBERTO ALARCON SL y el Usuario acuerdan someterse
            a los Jueces y Tribunales de domicilio del Usuario, siempre que el mismo esté situado en territorio español.
          </p>

          <h2>Frames</h2>
          <p>
            INMOBILIARIA ALBERTO ALARCON SL prohíbe expresamente la realización de «frammings» o la utilización por
            parte de terceros de cualesquiera otros mecanismos que alteren el diseño, configuración original o
            contenidos de su portal o portales bajo su titularidad.
          </p>

          <h2>Medidas de protección ante uso abusivo o robotizado</h2>
          <p>
            INMOBILIARIA ALBERTO ALARCON SL se reserva el derecho a realizar cambios técnicos en el Portal
            http://www.trabajaconremaxsolucion.es/ y en todos los portales web del que es titular sin previo aviso,
            con el objeto de preservar la disponibilidad del mismo ante eventuales usos abusivos manuales o robotizados
            de acceso al mismo.
          </p>

          <h2>Estadísticas de uso</h2>
          <p>
            INMOBILIARIA ALBERTO ALARCON SL informa de la utilización de Google Analytics en este portal.
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Inmobiliaria Alberto Alarcón SLU. Todos los derechos reservados.
        </div>
      </main>
    </div>
  );
}
