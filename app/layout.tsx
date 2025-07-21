import type { Metadata } from "next";
import "./globals.css";
import { Quicksand, Cabin } from "next/font/google";
import PopUp from "./components/PopUp";
import { CookieConsentProvider } from "./context/CookieConsentContext";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kennel Braskas",
  description: "Kennel Braskas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${cabin.variable} antialiased`}
      >
        <CookieConsentProvider>
          <PopUp />
          {children}
        </CookieConsentProvider>
      </body>
    </html>
  );
}
