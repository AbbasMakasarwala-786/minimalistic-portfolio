import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { keywords, metadata_text } from "@/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abbas Makasarwala Portfolio Website",
  description: metadata_text,
  keywords:keywords,
  openGraph:{
    title: "Abbas Makasarwala Portfolio Website",
    description: metadata_text,
    images:[
      './lipnet.png'
    ],
    url:"https://github.com/AbbasMakasarwala-786"
  } 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
       </ThemeProvider>
      </body>
    </html>
  );
}
