import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constants";
import { Footer } from "@/components/footer";

const font = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Treecode",
  description: "Treecode web page",
    icons: [
    {
      url: "/favicon.png",
      href: "/favicon.png"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster richColors theme="light" />
        <FloatingNav navItems={navItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
