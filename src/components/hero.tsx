"use client";

import Image from "next/image";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="flex-1 flex flex-col lg:flex-row items-center justify-center p-4 gap-2"
      id="us"
    >
      <div className="relative w-[300px] h-[300px] lg:w-[700px] lg:h-[600px] mb-8 lg:mb-0">
        <Image src="/hero1.svg" alt="Hero" fill />
      </div>
      <div className="flex flex-col gap-y-8">
        <h1 className="text-4xl lg:text-6xl font-bold max-w-[450px] text_stroke">
          Desarrollo de Experiencias
        </h1>
        <p className="font-light text-lg">
          Somos tus aliados en el desarrollo de tus productos digitales. Desde
          la investigación hasta la implementación.
        </p>
        <div>
          <button
            onClick={() => scrollToSection("contact")}
            className="treecode-button"
          >
            Contactanos
          </button>
        </div>
      </div>
    </div>
  );
};
