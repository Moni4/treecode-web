import ChooseUs from "@/components/choose-us";
import { Contact } from "@/components/contact";
import { HeaderSection } from "@/components/header-section";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col px-6 pt-20 md:p-24">
      <main className="flex-1 flex flex-col max-w-[988px] mx-auto w-full">
        <Hero />
        <HeaderSection
          title="Nuestros servicios"
          subtitle="Proporcionamos servicios para identificar necesidades y definir iniciativas."
        />
        <Services />
        <HeaderSection
          title="Nuestro portafolio"
          subtitle="Ejemplos de soluciones que hemos creado con nuestros clientes."
        />
        <Projects />
        <HeaderSection
          title="Por Qué Elegir Tree Code"
          subtitle="No somos solo desarrolladores: somos tus socios tecnológicos comprometidos con tu éxito."
        />
        <ChooseUs />
        <HeaderSection
          title="Construyamos Algo Increíble Juntos"
          subtitle="¿Listo para transformar tus ideas en realidad? Ponte en contacto con nosotros hoy."
        />
        <Contact />
        {/* <HeaderSection
          title="Testimonios"
          subtitle="¿Que dicen nuestros clientes sobre nosotros?"
        />
        */}
      </main>
    </div>
  );
}
