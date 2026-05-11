import type { Metadata } from "next";
import "./globals.css";


import { Dancing_Script, Montserrat ,Archivo_Black, Spicy_Rice} from "next/font/google";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
});
const spicyRice = Spicy_Rice({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Ethio_Heroes",
  description: "Build By GPS(Tech)",
  icons: {
    icon: "/ethio_heroes.png",
    shortcut: "/ethio_heroes.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
        lang="en"
        className={`${montserrat.variable} ${dancingScript.variable} ${archivoBlack.variable} ${spicyRice.variable}`}
      >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}