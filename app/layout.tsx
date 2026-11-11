import type { Metadata } from "next";
import { Newsreader, Outfit } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evoris — Life, simplified.",
  description:
    "Evoris is your end-to-end Life Journey Service Partner — celebrations, care, prosperity, safety, property, support and every moment in between.",
  icons: { icon: "/hands.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${outfit.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
