import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col px-6 py-9  bg-[#5de37369]">
      <div className="flex-1 flex flex-col max-w-[988px] mx-auto w-full">
        <div className="mb-3">
          <span className="flex items-center gap-1 font-semibold">
            <Image src="/favicon.png" width={30} height={30} alt="logo" />
            Tree Code
          </span>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <p className="md:col-span-3 border-b border-gray-500 pb-4">
            Somos una consultora de experiencias y productos digitales.
            Construyendo soluciones de software robustas que crecen con tu
            negocio. Tu socio de confianza para desarrollo personalizado.
          </p>
        </div>

        <div className="pt-4">
          <p>© Copyright Tree Code 2025.</p>
        </div>
      </div>
    </footer>
  );
};
