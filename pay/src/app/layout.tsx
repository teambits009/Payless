import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BNPL System",
  description: "Buy Now, Pay Later with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 font-sans">{children}</body>
    </html>
  );
}