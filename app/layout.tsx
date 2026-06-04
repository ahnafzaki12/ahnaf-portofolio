import type { Metadata } from "next";
import { Dancing_Script, Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400",
});

const accentScript = Dancing_Script({
  variable: "--font-accent-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ahnaf Zaki | Portfolio",
  description:
    "Information system student passionate about data science and software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${accentScript.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
