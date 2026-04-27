import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-primary">RE/MAX</span>
          <span className="text-sm font-semibold text-muted-foreground">Solución · Almería</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#filtro" className="text-muted-foreground transition-colors hover:text-foreground">
            ¿Es para ti?
          </a>
          <a href="#como-funciona" className="text-muted-foreground transition-colors hover:text-foreground">
            Cómo funciona
          </a>
          <a href="#beneficios" className="text-muted-foreground transition-colors hover:text-foreground">
            Beneficios
          </a>
          <a href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">
            Preguntas
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:+34000000000" className="hidden sm:inline-flex">
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4" />
              Llamar
            </Button>
          </a>
          <a href="#formulario">
            <Button variant="hero" size="sm">
              Quiero información
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
