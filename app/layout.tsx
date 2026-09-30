import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = Fira_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://catalinapizzaandchicken.com"),
  title: "Catalina Pizza & Chicken - Order Pickup And Delivery Online",
  description: "Catalina Pizza & Chicken - Order Pickup And Delivery Online. We are serving the Calgary area and we do our own online delivery at the best prices.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: { google: "QPfdTv8H7mEbOnxjVgFW_LzffNTz0-gL72xq99kjrlk" },
  icons: { icon: "/images/branding/catalina-logo.png", apple: "/images/social/catalina-social.png" },
  openGraph: {
    title: "Catalina Pizza & Chicken - Order Pickup And Delivery Online",
    description: "Pizza, pasta, donairs, wings, pickup, and delivery in Calgary.",
    url: "/",
    siteName: "Catalina Pizza & Chicken",
    images: [{ url: "/images/social/catalina-social.png", width: 500, height: 500, alt: "Catalina Pizza & Chicken" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalina Pizza & Chicken - Order Pickup And Delivery Online",
    description: "Pizza, pasta, donairs, wings, pickup, and delivery in Calgary.",
    images: ["/images/social/catalina-social.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body className={bodyFont.variable}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
