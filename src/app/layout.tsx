import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Dev | Benneth Uzochukwu",
  description: "Generated by create next app.",
};
const roboto = localFont({
  variable: "--font-roboto",
  display: "swap",
  src: [
    {
      path: "./../../public/fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Roboto/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});
const chelseaMarket = localFont({
  variable: "--font-chelsea-market",
  display: "swap",
  src: [
    {
      path: "./../../public/fonts/Chelsea_Market/ChelseaMarket-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${chelseaMarket.variable}`}>
        {children}
      </body>
    </html>
  );
}
