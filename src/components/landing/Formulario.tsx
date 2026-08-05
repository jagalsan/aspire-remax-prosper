import { useEffect } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/34662257024?text=Hola%2C%20he%20visitado%20la%20web%20de%20RE%2FMAX%20Soluci%C3%B3n%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.%20%C2%BFPodemos%20hablar%3F";

export function Formulario() {
  useEffect(() => {
    const scriptId = "hs-forms-embed";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://js-eu1.hsforms.net/forms/embed/148900858.js";
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section id="formulario" className="relative overflow-hidden bg-gradient-primary py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-navy/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-primary-foreground">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            ¿Listo/a para emprender con respaldo RE/MAX?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Déjanos tus datos y agendamos una breve reunión-entrevista donde vemos cuándo te puedes incorporar a RE/MAX Solución.
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-card p-6 shadow-card sm:p-10">
          <div
            className="hs-form-frame"
            data-region="eu1"
            data-form-id="af45af9e-a72e-46cb-9a5f-bd512693a3bf"
            data-portal-id="148900858"
          />
        </div>

        <div className="mt-10 text-center text-primary-foreground">
          <p className="text-lg font-semibold">¿Prefieres hablar directamente?</p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="cta_final_whatsapp"
            >
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
            </a>
            <a href="tel:+34662257024" id="cta_final_llamar">
              <Button variant="outlineLight" size="lg">
                <Phone className="h-5 w-5" />
                Llamar ahora
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
