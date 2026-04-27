import { createRouter, useRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function DefaultErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-primary px-4">
      <div className="max-w-2xl text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Algo salió mal
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.
        </p>
        {import.meta.env.DEV && error.message && (
          <div className="mt-6 mx-auto max-w-lg">
            <details className="rounded-lg bg-white/10 backdrop-blur-sm p-4 text-left">
              <summary className="cursor-pointer text-sm font-semibold text-white/90 hover:text-white">
                Detalles del error (solo en desarrollo)
              </summary>
              <pre className="mt-3 max-h-40 overflow-auto rounded-md bg-black/20 p-3 font-mono text-xs text-white/80">
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </pre>
            </details>
          </div>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary transition-all hover:bg-white/90 hover:scale-105"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            Volver al inicio
          </a>
        </div>
        <div className="mt-6">
          <a
            href="https://wa.me/34662257024?text=Hola%2C%20he%20encontrado%20un%20error%20en%20la%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/70 underline hover:text-white"
          >
            ¿Necesitas ayuda? Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent,
  });

  return router;
};
