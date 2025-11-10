import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elite College Counseling - Your Path to Top Universities",
  description: "Expert tutoring and college counseling services to help students achieve their dreams of attending top universities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
