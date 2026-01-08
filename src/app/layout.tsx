import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Claru - Expert Human Intelligence for AI Labs",
  description:
    "Embedded expert teams for frontier AI development. Ground truth evaluation data, real-time collaboration, and battle-tested methodologies from the labs building the future.",
  keywords: [
    "AI data",
    "human intelligence",
    "RLHF",
    "data labeling",
    "AI training data",
    "expert annotation",
    "frontier AI",
    "machine learning data",
  ],
  authors: [{ name: "Claru" }],
  creator: "Claru",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://claru.ai",
    siteName: "Claru",
    title: "Claru - Expert Human Intelligence for AI Labs",
    description:
      "Embedded expert teams for frontier AI development. Ground truth evaluation data, real-time collaboration, and battle-tested methodologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Claru - The Human Cortex for Your Digital Brain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claru - Expert Human Intelligence for AI Labs",
    description:
      "Embedded expert teams for frontier AI development. Ground truth evaluation data, real-time collaboration, and battle-tested methodologies.",
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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
