import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { IBM_Plex_Sans_Thai } from "next/font/google";

export const metadata: Metadata = {
  title: "Waris Sripatoomrak",
  description: "Personal Website",
};

const font = IBM_Plex_Sans_Thai({
  weight: ["400", "700"],
  subsets: ["latin", "thai"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={font.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
