import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./globals.css";
import { Cinzel_Decorative } from "@next/font/google";
import getCurrentUser from "./actions/getCurrentUser";

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
      </head>
      <body className={cinzel.className}>
        <Navigation currentUser={currentUser} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
