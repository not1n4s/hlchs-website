import type { Metadata } from "next";
import {
  Fraunces,
  Manrope,
  Noto_Sans_Devanagari,
} from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site-config";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HLCHS",
    template: "%s | HLCHS",
  },
  description:
    "Hyderabad Leprosy Control & Health Society public information website in English and Hindi.",
  applicationName: "HLCHS",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} ${notoSansDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
