import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider"
import Nav from "@/components/nav";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PokéDocs",
  description: "PokéDocs is a server-side rendered Pokémon wiki built with Next.js, Chakra UI, TypeScript, and the PokéAPI.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Box bg="#FFCB05" minH='100svh' flexDirection='column' display='flex' minW='100vw'>
            <Nav />
            {children}
            <Footer />
          </Box>
        </Provider>
      </body>
    </html>
  );
}
