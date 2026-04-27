import { Building2, User, Globe2, Clock4 } from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "Sin inversión inicial",
    body: "No necesitas local. Trabaja desde las oficinas de RE/MAX Solución en Almería capital o Roquetas de Mar, o desde tu propia casa.",
  },
  {
    icon: User,
    title: "Sin empleados",
    body: "Negocio unipersonal. No contrates, no gestiones nóminas. Tú eres el único responsable de tu éxito.",
  },
  {
    icon: Globe2,
    title: "Respaldo de marca líder",
    body: "RE/MAX = líder mundial. 50 años de experiencia, presente en 110 países. La marca que abre puertas.",
  },
  {
    icon: Clock4,
    title: "Flexibilidad total",
    body: "Tú decides cuándo trabajas. Compatible con vida familiar, otros negocios, proyectos personales.",
  },
];

export function Beneficios() {
  return (
    <section id="beneficios" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Sin riesgos
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Emprende sin los riesgos de un
            <span className="block text-primary">negocio tradicional</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
