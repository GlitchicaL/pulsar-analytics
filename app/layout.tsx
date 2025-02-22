import type { Metadata } from "next";
import { Anta, Mukta } from "next/font/google";
import "./globals.css";

// Import components
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const anta = Anta({
  variable: "--font-anta",
  subsets: ["latin"],
  weight: ["400"]
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Pulsar Analytics",
  description: "Analytics for your favorite defi applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anta.variable} ${mukta.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
