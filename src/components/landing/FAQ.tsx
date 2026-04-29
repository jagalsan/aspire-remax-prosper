import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuánto tengo que invertir?",
    a: "No necesitas inversión inicial. RE/MAX Solución te proporciona 2 oficinas (Almería capital y Roquetas de Mar) para trabajar. Debes darte de alta como autónomo/a (cuota mensual según tu situación) y asumir pequeños gastos operativos (móvil, transporte, materiales básicos).",
  },
  {
    q: "¿Cuánto puedo ganar?",
    a: "No hay límite. Trabajas a honorarios por cada operación cerrada: cuantas más ventas cierres, más facturas. Los primeros meses son de construcción de cartera. Asesores consolidados facturan entre 30K–80K€/año según dedicación.",
  },
  {
    q: "¿Necesito experiencia inmobiliaria previa?",
    a: "No. Buscamos experiencia comercial, no técnica inmobiliaria. Alberto Alarcón —con más de 25 años en el sector— te formará en valoraciones, documentación, captación y negociación. Lo que no te podemos enseñar es a vender: eso ya lo traes tú.",
  },
  {
    q: "¿Cuánto tiempo tengo que dedicar?",
    a: "Tú decides. Puedes empezar con media jornada e ir escalando. Eso sí: como todo negocio, requiere constancia los primeros meses para construir cartera.",
  },
  {
    q: "¿Esto es multinivel o pirámide?",
    a: "No. Eres asesor/a inmobiliario independiente. Cobras honorarios por tus operaciones cerradas. No captas a nadie, no vendes productos raros, no tienes equipo debajo. RE/MAX Solución es una franquicia seria con presencia consolidada en Almería.",
  },
  {
    q: "¿Tendré apoyo o estaré solo/a?",
    a: "Tendrás acompañamiento continuo de Alberto Alarcón, tu mentor personal con más de 25 años en el sector inmobiliario almeriense. Él te guía paso a paso: formación inicial, estrategia comercial, primeras captaciones, negociación y cierres. Además contarás con la cultura colaborativa del equipo de RE/MAX Solución y herramientas tecnológicas de primer nivel.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lo que la gente nos pregunta antes de empezar.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 shadow-soft"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
