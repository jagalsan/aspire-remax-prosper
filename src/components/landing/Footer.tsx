import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/remax.solucion/",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/gruporemaxsolucion",
    Icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/grupo-re-max-soluci%C3%B3n/",
    Icon: Linkedin,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-primary">RE/MAX</span>
              <span className="text-sm font-semibold">Solución</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              Asesores inmobiliarios independientes con el respaldo de la marca líder mundial.
              Almería · Poniente.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`RE/MAX Solución en ${name}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Oficina Roquetas de Mar — Almería</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Oficina Almería capital</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+34662257024" className="hover:text-white">+34 662 25 70 24</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:alberto.alarcon@remax.es" className="hover:text-white">
                  alberto.alarcon@remax.es
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Legal
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link to="/politica-privacidad" className="hover:text-white">Política de privacidad</Link></li>
              <li><Link to="/aviso-legal" className="hover:text-white">Aviso legal</Link></li>
              <li><Link to="/politica-privacidad" className="hover:text-white">Política de cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} RE/MAX Solución — Almería. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
