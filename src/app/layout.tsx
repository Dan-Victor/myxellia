import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google"
import "./globals.css";

const Nuito = Nunito({
  variable: "--font-nuito",
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","200","300","400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Myxellia Dashboard",
  description: "Myxellia Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${Nuito.variable} antialiased`}
      >
      <main>
        {children}
        </main>
      </body>
    </html>
  );
}
