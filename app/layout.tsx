import { Cinzel_Decorative } from "@next/font/google";

import React from "react";

import getCurrentUser from "./actions/getCurrentUser";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import "./globals.css";

export const metadata = {
  title: "Le Temple - You & You",
  description: "Le Temple - You & You",
};

const cinzel = Cinzel_Decorative({
  weight: "400",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="fr">
      <head>
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={cinzel.className}>
        <Navigation currentUser={currentUser} />
        <main>{children}</main>
        <Footer />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
