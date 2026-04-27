import { X, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/34662257024?text=Hola%2C%20he%20visitado%20la%20web%20de%20RE%2FMAX%20Soluci%C3%B3n%20y%20creo%20que%20encajo%20con%20el%20perfil%20de%20asesor%20inmobiliario.%20%C2%BFPodemos%20hablar%3F";

const noItems = [
  "Buscas un empleo tradicional con nómina fija",
  "Necesitas ingresos inmediatos desde el primer mes",
  "No estás dispuesto/a a darte de alta como autónomo/a",
  "Quieres horarios rígidos y un jefe que te dirija",
];

const yesItems = [
  "Tienes experiencia comercial o has tenido negocio propio",
  "Buscas flexibilidad y autonomía para gestionar tu tiempo",
  "Quieres construir un patrimonio a medio plazo (no ingresos rápidos)",
  "Estás preparado/a para iniciar como autónomo/a y construir tu cartera",
  "Tienes estabilidad económica mientras creces (pareja, otro negocio, ahorros)",
];

export function Filtro() {
  return (
    <section id="filtro" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Filtro de perfil
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Vamos al grano: <span className="text-primary">¿es para ti?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Preferimos ser honestos desde el principio. Esto te ahorrará tiempo y a nosotros también.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* NO column */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card lg:p-10">
            <h3 className="flex items-center gap-3 text-2xl font-bold">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary">
                <X className="h-5 w-5" strokeWidth={3} />
              </span>
              Esto NO es para ti si...
            </h3>
            <ul className="mt-6 space-y-4">
              {noItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-muted-foreground">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* YES column */}
          <div className="rounded-2xl border-2 border-success/30 bg-card p-8 shadow-card lg:p-10">
            <h3 className="flex items-center gap-3 text-2xl font-bold">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-success/15 text-success">
                <Check className="h-5 w-5" strokeWidth={3} />
              </span>
              Esto SÍ es para ti si...
            </h3>
            <ul className="mt-6 space-y-4">
              {yesItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="cta_filtro_whatsapp"
              className="mt-8 block"
            >
              <Button variant="whatsapp" size="lg" className="w-full">
                <MessageCircle className="h-5 w-5" />
                Sí, encajo en el perfil
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
