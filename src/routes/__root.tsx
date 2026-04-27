import { Outlet, Link, createRootRoute, HeadContent, Scripts, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import faviconImg from "@/assets/favicon.png";
import { TRACKING } from "@/lib/tracking";
import { CookieBanner } from "@/components/CookieBanner";

function NotFoundComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigir a la home después de 2 segundos
    const timer = setTimeout(() => {
      navigate({ to: "/" });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-primary px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <div className="mx-auto h-20 w-20 animate-spin rounded-full border-4 border-white/20 border-t-white" />
        </div>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Redirigiendo...
        </h2>
        <p className="mt-4 text-lg text-white/90">
          La página que buscas no existe. Te estamos redirigiendo al inicio.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary transition-all hover:bg-white/90 hover:scale-105"
          >
            Ir al inicio ahora
          </Link>
        </div>
      </div>
    </div>
  );
}

const metaTags = [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { title: "RE/MAX Solución Almería — Asesor inmobiliario independiente" },
  {
    name: "description",
    content:
      "Emprende como asesor/a inmobiliario independiente en Almería con el respaldo de RE/MAX. Sin local, sin empleados, sin inversión inicial. Tú decides cuándo y cuánto trabajas.",
  },
  { name: "author", content: "RE/MAX Solución" },
  { property: "og:title", content: "RE/MAX Solución Almería — Tu negocio inmobiliario sin riesgos" },
  {
    property: "og:description",
    content:
      "Modelo probado de asesor/a inmobiliario independiente con el respaldo de RE/MAX. Flexibilidad total, formación incluida.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

if (TRACKING.GOOGLE_SITE_VERIFICATION) {
  metaTags.push({
    name: "google-site-verification",
    content: TRACKING.GOOGLE_SITE_VERIFICATION,
  });
}

export const Route = createRootRoute({
  head: () => ({
    meta: metaTags,
    links: [
      { rel: "icon", type: "image/jpeg", href: faviconImg },
      { rel: "apple-touch-icon", href: faviconImg },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      // Google Tag Manager
      ...(TRACKING.GTM_ID
        ? [
            {
              children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${TRACKING.GTM_ID}');`,
            },
          ]
        : []),
      // Google Analytics 4 (gtag.js)
      ...(TRACKING.GA4_ID
        ? [
            {
              src: `https://www.googletagmanager.com/gtag/js?id=${TRACKING.GA4_ID}`,
              async: true,
            },
            {
              children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${TRACKING.GA4_ID}');`,
            },
          ]
        : []),
      // Meta (Facebook) Pixel
      ...(TRACKING.META_PIXEL_ID
        ? [
            {
              children: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${TRACKING.META_PIXEL_ID}');
fbq('track', 'PageView');`,
            },
          ]
        : []),
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* GTM noscript fallback */}
        {TRACKING.GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${TRACKING.GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {/* Meta Pixel noscript fallback */}
        {TRACKING.META_PIXEL_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${TRACKING.META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
        {children}
        <CookieBanner />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

