import { ArrowRight, Award, MessageCircle, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import mentorImg from "@/assets/alberto-alarcon.jpg";

const WHATSAPP_URL =
  "https://wa.me/34662257024?text=Hola%20Alberto%2C%20quiero%20m%C3%A1s%20info%20sobre%20RE%2FMAX%20Soluci%C3%B3n";

const highlights = [
  "+25 años de trayectoria en el sector inmobiliario",
  "Acompañamiento personal y directo, no equipos genéricos",
  "Mentor activo en cada paso: desde la primera captación hasta el cierre",
  "Estrategia comercial probada en el mercado almeriense",
];

export function Mentor() {
  return (
    <section
      id="mentor"
      className="relative overflow-hidden bg-gradient-warm py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:items-center lg:gap-16 lg:px-8">
        <div className="relative lg:col-span-2">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
          <img
            src={mentorImg}
            alt="Alberto Alarcón, mentor con más de 25 años de experiencia inmobiliaria"
            loading="lazy"
            width={1024}
            height={1280}
            className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-card"
          />
          <span className="absolute -bottom-5 left-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-glow">
            <Award className="h-4 w-4" />
            +25 años en el sector
          </span>
        </div>

        <div className="lg:col-span-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Tu mentor
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            No estarás solo/a:{" "}
            <span className="text-primary">
              Alberto Alarcón te guía paso a paso
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            En RE/MAX Solución no te entregamos un manual y te dejamos a tu suerte.
            Tendrás acompañamiento continuo de Alberto Alarcón —más de 25 años
            vendiendo en Almería— como tu guía personal durante todo el camino.
          </p>

          <div className="mt-8 rounded-2xl border-l-4 border-primary bg-card p-6 shadow-soft">
            <Quote className="h-6 w-6 text-primary" />
            <p className="mt-2 text-lg italic text-foreground">
              &ldquo;Mi compromiso es que en 12 meses tengas un negocio sólido.
              No te enseño teoría: te enseño lo que funciona en la calle, en
              Almería, hoy.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-foreground">
              — Alberto Alarcón, mentor de RE/MAX Solución
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-foreground">
                <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#formulario" id="cta_mentor_form">
              <Button variant="hero" size="lg">
                Quiero hablar con Alberto
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="cta_mentor_whatsapp"
            >
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" />
                WhatsApp directo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
