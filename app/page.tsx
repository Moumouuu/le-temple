import Image from "next/image";
import { Inter } from "next/font/google";
import { couldStartTrivia } from "typescript";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return <div className="text-red-600">Hello world !</div>;
}
