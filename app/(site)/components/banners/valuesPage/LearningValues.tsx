import Container from "@/app/wrappers/Container";

import { Cinzel_Decorative } from "@next/font/google";
import Image from "next/image";

import Arrow from "../../../../components/Arrow";

const cinzel = Cinzel_Decorative({
  weight: "700",
  subsets: ["latin"],
});

export default function LearningValues() {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-[90%] md:w-[80%]">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="hidden lg:block">
                <Arrow big />
              </div>
              <h2 className="ml-2 text-[calc(3vw+2rem)]">Apprendre</h2>
            </div>
            <span className="title strokeme text-[calc(5vw+4rem)]">01</span>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <Image
              className="lg:mr-10"
              src="/assets/images/book.png"
              alt="open book"
              width={400}
              height={400}
            />
            <p className="text-xl text-justify leading-relaxed">
              L’apprentissage est{" "}
              <span className={`text-[#095234] ${cinzel.className}`}>long</span>{" "}
              et{" "}
              <span className={`text-[#095234] ${cinzel.className}`}>
                compliqué
              </span>{" "}
              , mais le chemin en vaux le coup.
              <br />
              <br />
              Apprenez un peu plus{" "}
              <span className={`text-[#095234] ${cinzel.className}`}>
                chaque jour
              </span>{" "}
              pour continuer à parfaire vos compétences.
              <br />
              <br />
              Le temple vous permet de parler avec des{" "}
              <span className={`text-[#095234] ${cinzel.className}`}>
                professionnelles
              </span>{" "}
              et des néophytes qui partagent votre{" "}
              <span className={`text-[#095234] ${cinzel.className}`}>
                passion
              </span>{" "}
              .
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
