import { useState, useEffect } from "react";
import { X, Cookie, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const COOKIE_CONSENT_KEY = "remax-cookie-consent";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Siempre activas
    analytics: false,
    marketing: false,
  });
  const [mounted, setMounted] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Verificar si ya hay consentimiento guardado (solo en el cliente)
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) {
        // Mostrar banner después de un pequeño delay
        setTimeout(() => setShowBanner(true), 1000);
        setHasConsent(false);
      } else {
        // Si ya hay consentimiento, cargar las preferencias
        setHasConsent(true);
        try {
          const savedPrefs = JSON.parse(consent);
          setPreferences(savedPrefs);
        } catch (e) {
          console.error("Error al cargar preferencias de cookies", e);
        }
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    }
    setShowBanner(false);
    setShowSettings(false);

    // Aquí puedes activar/desactivar scripts según las preferencias
    if (prefs.analytics) {
      // Activar Google Analytics
      console.log("Analytics activado");
    }
    if (prefs.marketing) {
      // Activar cookies de marketing
      console.log("Marketing activado");
    }
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(onlyNecessary);
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  // No renderizar nada hasta que el componente esté montado en el cliente
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Botón Flotante - Siempre visible si ya hay consentimiento */}
      {hasConsent && !showBanner && (
        <button
          onClick={() => setShowSettings(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Configuración de cookies"
          title="Configuración de cookies"
        >
          <Cookie className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Banner Principal */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-2xl">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 shrink-0 text-primary mt-1" />
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  🍪 Usamos cookies
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Utilizamos cookies propias y de terceros para mejorar tu experiencia, 
                  analizar el tráfico web y personalizar el contenido. Puedes aceptar todas 
                  las cookies o configurar tus preferencias.{" "}
                  <a 
                    href="/politica-privacidad" 
                    target="_blank"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Más información
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="w-full sm:w-auto"
              >
                <Settings className="h-4 w-4" />
                Configurar
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={acceptNecessary}
                className="w-full sm:w-auto"
              >
                Solo necesarias
              </Button>
              <Button
                variant="hero"
                size="sm"
                onClick={acceptAll}
                className="w-full sm:w-auto"
              >
                Aceptar todas
              </Button>
            </div>
          </div>
        </div>
        </div>
      )}

      {/* Modal de Configuración */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Configuración de Cookies
            </DialogTitle>
            <DialogDescription>
              Gestiona tus preferencias de cookies. Puedes activar o desactivar 
              diferentes tipos de cookies según tus preferencias.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Cookies Necesarias */}
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="necessary"
                      checked={preferences.necessary}
                      disabled
                    />
                    <Label htmlFor="necessary" className="font-semibold">
                      Cookies Necesarias
                    </Label>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                      Siempre activas
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Estas cookies son esenciales para el funcionamiento del sitio web. 
                    Permiten funciones básicas como la navegación por páginas y el acceso 
                    a áreas seguras. El sitio web no puede funcionar correctamente sin estas cookies.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    <strong>Ejemplos:</strong> Sesión de usuario, preferencias de idioma, 
                    consentimiento de cookies.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies Analíticas */}
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="analytics"
                      checked={preferences.analytics}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, analytics: checked as boolean })
                      }
                    />
                    <Label htmlFor="analytics" className="font-semibold cursor-pointer">
                      Cookies Analíticas
                    </Label>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Estas cookies nos ayudan a entender cómo los visitantes interactúan con 
                    nuestro sitio web, recopilando información de forma anónima. Nos permiten 
                    mejorar la experiencia del usuario y el rendimiento del sitio.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    <strong>Servicios:</strong> Google Analytics (GA4), Google Tag Manager.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies de Marketing */}
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="marketing"
                      checked={preferences.marketing}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, marketing: checked as boolean })
                      }
                    />
                    <Label htmlFor="marketing" className="font-semibold cursor-pointer">
                      Cookies de Marketing
                    </Label>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Estas cookies se utilizan para mostrar anuncios relevantes y medir 
                    la eficacia de nuestras campañas publicitarias. También pueden ser 
                    utilizadas por terceros para crear un perfil de tus intereses.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    <strong>Servicios:</strong> Google Ads, Facebook Pixel, remarketing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button
              variant="outline"
              onClick={acceptNecessary}
              className="w-full sm:w-auto"
            >
              Solo necesarias
            </Button>
            <Button
              variant="hero"
              onClick={saveCustom}
              className="w-full sm:w-auto"
            >
              Guardar preferencias
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Puedes cambiar tus preferencias en cualquier momento desde el pie de página.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
