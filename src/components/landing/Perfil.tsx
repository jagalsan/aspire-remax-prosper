import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import perfilImg from "@/assets/seccion-perfil.jpg";

const perfilItems = [
  "Mayores de 40 años con trayectoria profesional",
  "Experiencia en ventas, comercio, banca, seguros, hostelería o negocio propio",
  "Situación económica estable (pareja, otro negocio o ahorros)",
  "Mentalidad emprendedora y disciplina para construir a medio plazo",
  "Capacidad de trabajar de forma autónoma (alta como autónomo/a obligatoria)",
];

export function Perfil() {
  return (
    <section className="bg-gradient-warm py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
          <img
            src={perfilImg}
            alt="Asesora inmobiliaria sénior trabajando desde su despacho luminoso"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative rounded-3xl object-cover shadow-card"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Perfil ideal
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            ¿Eres el <span className="text-primary">perfil que buscamos?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Buscamos personas con experiencia comercial que quieran iniciar un negocio propio
            sin los riesgos tradicionales.
          </p>

          <ul className="mt-8 space-y-4">
            {perfilItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 rounded-xl border-l-4 border-primary bg-primary-soft/40 p-5 text-foreground">
            <strong>No importa si nunca has trabajado en inmobiliario.</strong> Importa tu actitud,
            tu red de contactos y tu capacidad de vender.
          </p>

          <a href="#formulario" id="cta_perfil_form" className="mt-8 inline-block">
            <Button variant="hero" size="xl">
              Solicitar información
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
