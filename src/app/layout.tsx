import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Ticker",
  description:
    "Voting intention polls and membership numbers, using the most up-to-date numbers for Reform UK!",
  icons: { icon: "/favicon.png" },
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
