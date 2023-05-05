"use client";
import Container from "@/app/wrappers/Container";

import { Cinzel_Decorative } from "@next/font/google";
import Image from "next/image";

import Arrow from "../../Arrow";

const cinzel = Cinzel_Decorative({
  weight: "700",
  subsets: ["latin"],
});

export default function ShareValues() {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row w-[90%]">
          <div className="flex flex-col items-center">
            <span className="title strokeme text-[calc(5vw+4rem)] lg:mb-[100px]">
              02
            </span>
            <div className="hidden lg:block">
              <Arrow big rotate={90} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col">
              <h2 className="ml-2 mb-8 text-center lg:text-left text-[calc(3vw+2rem)] ">
                Partager
              </h2>
              <p className="text-xl text-justify leading-relaxed">
                Sans partage de connaissance, il n’y aura pas{" "}
                <span className={`text-[#095234] ${cinzel.className}`}>
                  d’apprentissage
                </span>
                .
                <br />
                <br />
                Alors faites nous savoir que vous êtes un{" "}
                <span className={`text-[#095234] ${cinzel.className}`}>
                  expert
                </span>{" "}
                dans un domaine, donnez des conseils et obtenez un badge !
              </p>
            </div>
            <Image
              className="lg:ml-10"
              src="/assets/images/hand.png"
              alt="hand shake"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
