/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/NOMBRE_DEL_REPO",
  images: {
    unoptimized: true, // obligatorio si usas next/image
  },
};

export default nextConfig;
