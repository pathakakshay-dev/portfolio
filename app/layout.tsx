import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://akshaypathak.dev"),
  title: {
    default: "Akshay Kumar Pathak | React, Next.js & Frontend Engineer",
    template: "%s | Akshay Kumar Pathak"
  },
  description:
    "Premium recruiter-focused portfolio of Akshay Kumar Pathak, an innovative React and Frontend Developer building scalable dashboards, ERP systems, and modern product interfaces.",
  keywords: [
    "React Developer Portfolio",
    "Next.js Developer",
    "Frontend Engineer Portfolio",
    "Akshay Kumar Pathak",
    "MERN Stack Developer",
    "ERP Dashboard Developer"
  ],
  authors: [{ name: "Akshay Kumar Pathak" }],
  creator: "Akshay Kumar Pathak",
  openGraph: {
    title: "Akshay Kumar Pathak | Frontend Engineer | Software Engineer",
    description: "Senior-grade frontend engineering, scalable dashboards, ERP products, and cinematic UI craftsmanship.",
    url: "https://akshaypathak.dev",
    siteName: "Akshay Kumar Pathak Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Kumar Pathak | React & Next.js Developer",
    description: "Recruiter-focused portfolio showcasing elite frontend engineering and product thinking."
  },
  alternates: {
    canonical: "/"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="noise font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
