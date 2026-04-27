import { ArrowRight, MessageCircle, ShieldCheck, Globe2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-asesora.jpg";

const WHATSAPP_URL = "https://wa.me/34000000000?text=Hola%2C%20me%20interesa%20conocer%20el%20modelo%20de%20asesor%20RE%2FMAX%20Soluci%C3%B3n";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Asesora inmobiliaria trabajando desde una terraza luminosa en Almería"
          className="h-full w-full object-cover object-center"
          width={1920}
          height={1080}
        />
        {/* Overlay: dark on mobile for readability, lighter on desktop where the image breathes */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30 lg:from-navy/85 lg:via-navy/55 lg:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-center text-white">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" />
            RE/MAX · Líder mundial inmobiliario
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Tu negocio inmobiliario en Almería.
            <span className="block text-primary-foreground/90">Sin local. Sin empleados.</span>
            <span className="block">Con el respaldo de RE/MAX.</span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg text-white/90 sm:text-xl">
            Si tienes experiencia comercial y buscas un negocio propio con flexibilidad horaria,
            RE/MAX Solución te ofrece el modelo: <strong>tú decides cuándo y cuánto trabajas.</strong>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#formulario" id="cta_hero_form">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Quiero más información
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" id="cta_hero_whatsapp">
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                <MessageCircle className="h-5 w-5" />
                Hablar por WhatsApp
              </Button>
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-6 text-white/90">
            <div>
              <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-white/70">
                <Globe2 className="h-3.5 w-3.5" /> Países
              </dt>
              <dd className="mt-1 text-2xl font-bold">110+</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-white/70">
                <ShieldCheck className="h-3.5 w-3.5" /> Trayectoria
              </dt>
              <dd className="mt-1 text-2xl font-bold">50 años</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-white/70">
                <Clock className="h-3.5 w-3.5" /> Horario
              </dt>
              <dd className="mt-1 text-2xl font-bold">Tú decides</dd>
            </div>
          </dl>
        </div>

        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
