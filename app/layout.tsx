import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sümeyra Caylan — Senior Product Designer",
  description:
    "Portfolio of Sümeyra Caylan, a Senior Product Designer based in Munich designing across mobile, web, and TV.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} antialiased`}
    >
      <body className="bg-cream text-navy">{children}</body>
    </html>
  );
}
