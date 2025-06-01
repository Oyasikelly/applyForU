import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//components
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ApplyForU",
  description: "ApplyForU is a sleek, user-friendly web platform designed to simplify the application process for conferences, programs, and other opportunities. With a modern interface, smooth animations, and responsive design, ApplyForU ensures users can easily explore, understand, and apply — whether on desktop or mobile.From a vibrant homepage to a clear step-by-step guide on how it works, plus FAQs and contact support, ApplyForU provides a complete, engaging experience for applicants and organizers alike. It’s perfect for any organization looking to streamline applications and make their events more accessible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
