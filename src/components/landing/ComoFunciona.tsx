import { GraduationCap, Target, TrendingUp } from "lucide-react";

const pasos = [
  {
    num: "01",
    icon: GraduationCap,
    title: "Formación inicial incluida",
    duration: "2–4 semanas",
    body: "Aprende el sector inmobiliario desde cero. No necesitas experiencia previa en real estate. Te formamos en valoraciones, documentación, captación y negociación.",
  },
  {
    num: "02",
    icon: Target,
    title: "Construye tu cartera de clientes",
    duration: "Tu ritmo, tu zona",
    body: "Con las herramientas de RE/MAX: CRM, materiales de marketing, respaldo de marca global. Tu estrategia, tu zona del Poniente almeriense.",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Cobra honorarios por cada operación cerrada",
    duration: "Honorarios competitivos",
    body: "Sistema de honorarios líder del sector por cada venta. Tú gestionas tu negocio, nosotros te damos la estructura, la marca y el acompañamiento personal de Alberto Alarcón.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-gradient-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            El modelo RE/MAX
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Cómo funciona el modelo de
            <span className="block text-primary">asesor/a inmobiliario independiente</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sin inversión en local, sin horarios fijos, sin empleados. Tú aportas el talento comercial,
            RE/MAX te da las herramientas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pasos.map(({ num, icon: Icon, title, duration, body }) => (
            <div
              key={num}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="absolute -top-4 left-8 rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground shadow-glow">
                Paso {num}
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{duration}</p>
              <p className="mt-3 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
