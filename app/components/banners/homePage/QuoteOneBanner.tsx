"use client";
import { Cinzel_Decorative } from "@next/font/google";
import Image from "next/image";

import Container from "@/app/wrappers/Container";

import Arrow from "../../Arrow";

const cinzel = Cinzel_Decorative({
  weight: "700",
  subsets: ["latin"],
});

export default function QuoteOneBanner() {
  return (
    <Container large>
      <div className="w-full flex flex-col-reverse justify-center items-center">
        <div className="flex flex-col items-center md:items-start w-[90%] md:w-1/3 lg:w-1/5">
          <p className="text-2xl md:text-3xl tracking-wide leading-relaxed">
            « Pour savoir quel est ton chemin,
            <span className={`text-[#095234] ${cinzel.className}`}>
              {" "}
              regarde{" "}
            </span>
            l’étoile,
            <span className={`text-[#095234] ${cinzel.className}`}>
              {" "}
              respire{" "}
            </span>
            , et
            <span className={`text-[#095234] ${cinzel.className}`}> fais </span>
            le premier pas »
          </p>
          <div className="flex items-center justify-start mt-2">
            <Arrow />
            <span className="text-xl">Yankun</span>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/bird-3.png"
            alt="Two birds flying"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Container>
  );
}
