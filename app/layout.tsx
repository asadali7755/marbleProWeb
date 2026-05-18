import type { Metadata } from "next";
import { Fraunces, Inter, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/marble/Providers";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MarblePro — Professional Marble Polishing & Floor Restoration in Dubai & UAE",
  description:
    "MarblePro — UAE's specialist team for marble polishing Dubai, terrazzo polishing, granite polishing, quartz polishing, Corian countertop polishing & yellow stain removing across all 7 emirates. Call 054 556 77 99.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <body data-theme="default">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
