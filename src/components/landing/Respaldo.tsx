import { Phone, Award, MapPin, Users, Wrench, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import oficina from "@/assets/oficina-remax.jpg";

const global = [
  { icon: Award, text: "Líder mundial en franquicia inmobiliaria" },
  { icon: Users, text: "Más de 140.000 agentes en 110 países" },
  { icon: Award, text: "Reconocimiento inmediato del cliente" },
  { icon: Wrench, text: "Herramientas tecnológicas de última generación" },
];

const local = [
  { icon: MapPin, text: "2 oficinas: Roquetas de Mar y Almería capital" },
  { icon: Award, text: "Conocimiento profundo del mercado almeriense" },
  { icon: Users, text: "Acompañamiento personal de Alberto Alarcón (+25 años en el sector)" },
  { icon: HeartHandshake, text: "Gran ayuda entre compañeros: cultura colaborativa real" },
  { icon: Wrench, text: "Red de contactos y sinergias entre asesores" },
];

export function Respaldo() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground lg:py-28">
      <div
        className="absolute inset-0 -z-10 opacity-15"
        style={{
          backgroundImage: `url(${oficina})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy via-navy/95 to-navy/70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-soft">
            Respaldo
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Por qué <span className="text-primary">RE/MAX Solución</span> en Almería
          </h2>
          <p className="mt-4 text-lg text-white/80">
            La fuerza de una marca global con la cercanía de un equipo local que te conoce por tu nombre.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm lg:p-10">
            <h3 className="text-2xl font-bold">Marca global</h3>
            <ul className="mt-6 space-y-4">
              {global.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-white/90">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary-soft" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm lg:p-10">
            <h3 className="text-2xl font-bold">Equipo local</h3>
            <ul className="mt-6 space-y-4">
              {local.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-white/90">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary-soft" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a href="tel:+34662257024" id="cta_respaldo_llamar">
            <Button variant="hero" size="xl">
              <Phone className="h-5 w-5" />
              Llamar ahora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
