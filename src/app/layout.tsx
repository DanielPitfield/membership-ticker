import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recharts Politics",
  description: "Charts using the Recharts library and politics data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
