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
  title: "SkyWay Airport",
  description: "Created by vibe coder with love",
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
