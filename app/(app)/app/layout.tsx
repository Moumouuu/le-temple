import React from "react";

import { Cinzel_Decorative } from "@next/font/google";

import getCurrentUser from "@/app/actions/getCurrentUser";
import "../../globals.css";
import Aside from "./components/Aside";

export const metadata = {
  title: "Le Temple - You & You",
  description:
    "Le Temple - Le réseau professionnel payant pour les ambitieux. Connectez-vous avec des leaders, accédez à des opportunités de carrière et développez vos compétences. Rejoignez notre communauté dès maintenant.",
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
      </head>
      <body className={cinzel.className}>
        <main className="flex relative">
          <Aside currentUser={currentUser} />
          {children}
        </main>
      </body>
    </html>
  );
}
