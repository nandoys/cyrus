import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyrus Real Estate",
  description: "Find your dream home with Cyrus Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
