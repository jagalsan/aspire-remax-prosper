import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Phone, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const WHATSAPP_URL = "https://wa.me/34000000000?text=Hola%2C%20me%20interesa%20RE%2FMAX%20Soluci%C3%B3n";

const schema = z.object({
  nombre: z.string().trim().min(2, "Introduce tu nombre").max(100),
  telefono: z.string().trim().min(9, "Teléfono no válido").max(20),
  email: z.string().trim().email("Email no válido").max(255),
  edad: z.string().min(1, "Selecciona tu rango de edad"),
  experiencia: z.string().min(1, "Selecciona tu experiencia"),
  estabilidad: z.string().min(1, "Indica tu situación"),
  mensaje: z.string().max(1000).optional(),
  privacidad: z.literal(true, { errorMap: () => ({ message: "Debes aceptar la política" }) }),
});

export function Formulario() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      nombre: String(fd.get("nombre") ?? ""),
      telefono: String(fd.get("telefono") ?? ""),
      email: String(fd.get("email") ?? ""),
      edad: String(fd.get("edad") ?? ""),
      experiencia: String(fd.get("experiencia") ?? ""),
      estabilidad: String(fd.get("estabilidad") ?? ""),
      mensaje: String(fd.get("mensaje") ?? ""),
      privacidad: fd.get("privacidad") === "on",
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setEnviando(true);
    // Simulated submit — wire to backend later
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
    }, 800);
  };

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
            Déjanos tus datos y te contamos cómo funciona el proceso de incorporación.
            <span className="block">Sin compromiso. Sin letra pequeña.</span>
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-card p-6 shadow-card sm:p-10">
          {enviado ? (
            <div className="flex flex-col items-center py-12 text-center">
              <CheckCircle2 className="h-16 w-16 text-success" />
              <h3 className="mt-4 text-2xl font-bold">¡Solicitud enviada!</h3>
              <p className="mt-2 max-w-md text-muted-foreground">
                Gracias. Nos pondremos en contacto contigo en menos de 24 horas hábiles
                para contarte el siguiente paso.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="nombre">Nombre completo *</Label>
                <Input id="nombre" name="nombre" autoComplete="name" maxLength={100} className="mt-1.5" />
                {errors.nombre && <p className="mt-1 text-sm text-primary">{errors.nombre}</p>}
              </div>
              <div>
                <Label htmlFor="telefono">Teléfono *</Label>
                <Input id="telefono" name="telefono" type="tel" autoComplete="tel" maxLength={20} className="mt-1.5" />
                {errors.telefono && <p className="mt-1 text-sm text-primary">{errors.telefono}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" autoComplete="email" maxLength={255} className="mt-1.5" />
                {errors.email && <p className="mt-1 text-sm text-primary">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="edad">Edad *</Label>
                <Select name="edad">
                  <SelectTrigger id="edad" className="mt-1.5">
                    <SelectValue placeholder="Selecciona tu rango" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<40">Menos de 40</SelectItem>
                    <SelectItem value="40-50">40–50</SelectItem>
                    <SelectItem value="50-60">50–60</SelectItem>
                    <SelectItem value="60+">Más de 60</SelectItem>
                  </SelectContent>
                </Select>
                {errors.edad && <p className="mt-1 text-sm text-primary">{errors.edad}</p>}
              </div>

              <div>
                <Label htmlFor="experiencia">Experiencia profesional *</Label>
                <Select name="experiencia">
                  <SelectTrigger id="experiencia" className="mt-1.5">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="comercial">Comercial / ventas</SelectItem>
                    <SelectItem value="negocio_propio">Negocio propio</SelectItem>
                    <SelectItem value="autonomo">Autónomo/a</SelectItem>
                    <SelectItem value="otros">Otros</SelectItem>
                  </SelectContent>
                </Select>
                {errors.experiencia && <p className="mt-1 text-sm text-primary">{errors.experiencia}</p>}
              </div>

              <div className="sm:col-span-2">
                <Label>¿Tienes estabilidad económica durante los primeros meses? *</Label>
                <RadioGroup name="estabilidad" className="mt-2 flex gap-6">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="si" id="estab-si" />
                    <Label htmlFor="estab-si" className="font-normal">Sí</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="estab-no" />
                    <Label htmlFor="estab-no" className="font-normal">No</Label>
                  </div>
                </RadioGroup>
                {errors.estabilidad && <p className="mt-1 text-sm text-primary">{errors.estabilidad}</p>}
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="mensaje">Mensaje (opcional)</Label>
                <Textarea id="mensaje" name="mensaje" maxLength={1000} rows={3} className="mt-1.5" />
              </div>

              <div className="sm:col-span-2 flex items-start gap-2">
                <Checkbox id="privacidad" name="privacidad" />
                <Label htmlFor="privacidad" className="text-sm font-normal leading-snug">
                  He leído y acepto la{" "}
                  <a href="#" className="text-primary underline">política de privacidad</a> *
                </Label>
              </div>
              {errors.privacidad && (
                <p className="-mt-3 text-sm text-primary sm:col-span-2">{errors.privacidad}</p>
              )}

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  id="form_submit_final"
                  className="w-full"
                  disabled={enviando}
                >
                  <Send className="h-5 w-5" />
                  {enviando ? "Enviando..." : "Enviar solicitud"}
                </Button>
              </div>
            </form>
          )}
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
            <a href="tel:+34000000000" id="cta_final_llamar">
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
