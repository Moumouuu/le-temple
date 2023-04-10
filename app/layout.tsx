import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./globals.css";
import { Cinzel_Decorative } from "@next/font/google";

export const metadata = {
  title: "Le Temple - You & You",
  description: "Le Temple - You & You",
};

const cinzel = Cinzel_Decorative({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
      </head>
      <body className={cinzel.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
