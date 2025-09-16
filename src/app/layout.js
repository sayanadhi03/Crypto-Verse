import { Inter, Space_Grotesk, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ScrollOptimizer from "@/components/ScrollOptimizer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Crypto Verse - Your Ultimate Crypto Destination",
  description:
    "Explore cryptocurrencies, exchanges, and latest crypto news at Crypto Verse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} ${montserrat.variable} antialiased dark font-inter`}
      >
        <ScrollOptimizer />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
