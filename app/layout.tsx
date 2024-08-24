import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import'./globals.css';

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fernando's Journal",
  description: "This is a journal of my life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`}>{children}</body>
    </html>
  );
}
