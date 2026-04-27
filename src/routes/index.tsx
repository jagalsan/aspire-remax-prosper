import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Filtro } from "@/components/landing/Filtro";
import { ComoFunciona } from "@/components/landing/ComoFunciona";
import { Beneficios } from "@/components/landing/Beneficios";
import { Respaldo } from "@/components/landing/Respaldo";
import { Mentor } from "@/components/landing/Mentor";
import { Perfil } from "@/components/landing/Perfil";
import { FAQ } from "@/components/landing/FAQ";
import { Formulario } from "@/components/landing/Formulario";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RE/MAX Solución Almería — Asesor inmobiliario independiente" },
      {
        name: "description",
        content:
          "Emprende como asesor/a inmobiliario en Almería con el respaldo de RE/MAX. Sin local, sin empleados, sin inversión inicial. Flexibilidad total.",
      },
      { property: "og:title", content: "RE/MAX Solución Almería — Tu negocio inmobiliario" },
      {
        property: "og:description",
        content:
          "Modelo probado de asesor/a inmobiliario independiente con el respaldo de RE/MAX en Almería.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Filtro />
      <ComoFunciona />
      <Beneficios />
      <Respaldo />
      <Mentor />
      <Perfil />
      <FAQ />
      <Formulario />
      <Footer />
    </main>
  );
}
