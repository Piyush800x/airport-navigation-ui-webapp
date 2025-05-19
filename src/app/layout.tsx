import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkyWay Airport - Real-time Navigation | CCU Airport",
  description:
    "Interactive map and navigation for Netaji Subhas Chandra Bose International Airport (CCU) with live gate statuses, flight information, and terminal directions",
  keywords: [
    "airport navigation",
    "CCU airport",
    "flight tracker",
    "gate status",
    "Kolkata airport",
  ],
  openGraph: {
    title: "SkyWay Airport Navigation",
    description: "Real-time airport navigation for CCU",
    url: "https://skyway.piyushpaul.com/",
    siteName: "SkyWay Airport",
    images: [
      {
        url: "https://skyway.piyushpaul.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyWay Airport Navigation",
    description: "Real-time airport navigation for CCU",
    images: ["https://skyway.piyushpaul.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main>
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
