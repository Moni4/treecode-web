import { BriefcaseBusiness, ChartLine, Clock, Cloud, Database, FolderKanban, HeartHandshake, Mail, Settings, Shield, Sparkles, Users, Zap } from "lucide-react";

export const navItems = [
  {
    name: "Sobre Nosotros",
    link: "#us",
    icon: <Users className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Servicios",
    link: "#services",
    icon: <Settings className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Proyectos",
    link: "#projects",
    icon: <FolderKanban className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contacto",
    link: "#contact",
    icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export const services = [
  {
    id: 1,
    icon: <BriefcaseBusiness className="h-10 w-10 text-[#5dd463]"/>,
    // icon: "/service-work.svg",
    title: "Diseño de productos y servicios",
    description:
      "Alineamos los objetivos de tu negocio con las necesidades del cliente, para diseñar productos digitales de mayor relevancia y preferencia.",
    url: "/",
  },
  {
    id: 2,
    icon: <ChartLine className="h-10 w-10 text-[#5dd463]"/>,
    // icon: "/service-activity.svg",
    title: "Soluciones digitales",
    description:
      "Implementamos e integramos tecnologías escalables, enfocadas en el negocio y usuarios desde un punto de vista ágil y empático.",
    url: "/",
  },
  {
    id: 3,
    icon: <Database className="h-10 w-10 text-[#5dd463]"/>,
    title: "Integración de Sistemas",
    description:
      "Conecta sin problemas tus sistemas existentes y servicios de terceros para crear un ecosistema digital unificado y eficiente.",
    url: "/",
  },
  {
    id: 4,
    icon: <Cloud className="h-10 w-10 text-[#5dd463]"/>,
    title: "Soluciones en la Nube",
    description:
      "Infraestructura en la nube escalable y servicios de migración para optimizar el rendimiento, la seguridad y la rentabilidad.",
    url: "/",
  },
  {
    id: 5,
    icon: <HeartHandshake className="h-10 w-10 text-[#5dd463]"/>,
    // icon: "/service-heart.svg",
    title: "Consultoría",
    description:
      "Apoyamos a nuestros clientes con servicios estratégicos, innovación y tecnología parar sus negocios y/o canales digitales.",
    url: "/",
  },
  {
    id: 6,
    icon: <Shield className="h-10 w-10 text-[#5dd463]"/>,
    title: "Mantenimiento y Soporte",
    description:
      "Servicios continuos de soporte y mantenimiento para garantizar que tus sistemas permanezcan seguros, actualizados y funcionando de manera óptima.",
    url: "/",
  },
];

export const projects = [
  {
    id: 1,
    img: "/bioenviro.svg",
    icon: "/clipboard-check-outline.svg",
    title: "Bio Enviro",
    description:
      "Diseño de una aplicación móvil con el objetivo de mejorar la experiencia del usuario para optimizar la recolección de datos en proyectos destinados a recuperar suelos erosionados.",
    url: "/",
  },
  {
    id: 2,
    img: "/securapp.svg",
    icon: "/clipboard-check-outline.svg",
    title: "SecurApp",
    description:
      "SecurApp tiene como objetivo mejorar la gestión y organización de pólizas de seguro para una amplia gama de vehículos, desde automóviles hasta motocicletas y vehículos pesados.",
    url: "/",
  },
  {
    id: 3,
    img: "/caplogistica.svg",
    icon: "/clipboard-check-outline.svg",
    title: "Caplogistica",
    description:
      "Plataforma web que permite gestionar de manera eficiente y segura la información relacionada con préstamos de dinero y la gestión de usuarios.",
    url: "/",
  },
  {
    id: 4,
    img: "/coomunity.svg",
    icon: "/clipboard-check-outline.svg",
    title: "CoomÜnity",
    description:
      "Diseño de Servicio y Diseño de Experiencia de Usuario para el cliente con el propósito de mejorar la calidad y eficiencia de su servicio.",
    url: "/",
  },
];

export const chooseUs = [
  {
    id: 1,
    icon: <Clock className="h-10 w-10 text-[#5dd463]"/>,
    title: "Entrega a Tiempo",
    quote: "Nos enorgullecemos de cumplir con los plazos y entregar proyectos cuando se promete.",
  },
  {
    id: 2,
    icon: <Users className="h-10 w-10 text-[#5dd463]"/>,
    title: "Equipos Escalables",
    quote: "Nuestra estructura de equipo flexible se adapta a las necesidades y cronogramas de tu proyecto.",
  },
  {
    id: 3,
    icon: <Sparkles className="h-10 w-10 text-[#5dd463]"/>,
    title: "Tecnología Moderna",
    quote: "Utilizamos herramientas y marcos de vanguardia para construir soluciones a prueba de futuro.",
  },
  {
    id: 4,
    icon: <Zap className="h-10 w-10 text-[#5dd463]"/>,
    title: "Enfoque Ágil",
    quote: "Proceso transparente y colaborativo con actualizaciones regulares y retroalimentación.",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Gracias por tu servicio. Estoy muy feliz con los resultados. He visto un crecimiento exponencial en mi negocio y todo es gracias a tu increíble servicio.",
    name: "Andres Guerrero",
    title: "CEO, Coomunity",
  },
  {
    id: 2,
    quote:
      "Estoy agradecido por que hemos podido organizar toda la información y logística en nuestra empresa.",
    name: "Luis Sánchez",
    title: "Gestor de Calidad, SecurApp",
  },
  {
    id: 3,
    quote:
      "Gracias por tu servicio. Estoy muy feliz con los resultados. He visto un crecimiento exponencial en mi negocio y todo es gracias a tu increíble servicio.",
    name: "Andres Guerrero",
    title: "CEO, Coomunity",
  },
];
