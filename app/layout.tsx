import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HOSSEIN X — Portfolio",
  description: "I design and build expressive interfaces where code, motion, and brand meet—without losing clarity, performance, or purpose.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
