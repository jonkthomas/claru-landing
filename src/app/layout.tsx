import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://claru.ai"),
  title: "Claru | From Raw Footage to Data Moat — Visual AI Data Partner",
  description:
    "The complete data engine for frontier Visual AI. End-to-end data pipelines for video generation, vision models, and robotics AI. Strategy, sourcing, annotation, validation—one partner.",
  keywords: [
    "Visual AI",
    "AI training data",
    "video generation data",
    "vision model annotation",
    "RLHF",
    "embodied AI data",
    "robotics training data",
    "data pipeline",
    "frontier AI",
    "multimodal data",
    "AI data partner",
  ],
  authors: [{ name: "Claru" }],
  creator: "Claru",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://claru.ai",
    siteName: "Claru",
    title: "Claru | From Raw Footage to Data Moat",
    description:
      "The complete data engine for frontier Visual AI. End-to-end pipelines for video generation, vision, and robotics. Stop stitching together vendors—one partner, every stage.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Claru - From Raw Footage to Data Moat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claru | From Raw Footage to Data Moat",
    description:
      "The complete data engine for frontier Visual AI labs. End-to-end pipelines for video, vision, and robotics models.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
