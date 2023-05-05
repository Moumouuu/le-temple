import Container from "@/app/wrappers/Container";

import { Cinzel_Decorative } from "@next/font/google";
import Image from "next/image";

const cinzel = Cinzel_Decorative({
  weight: "700",
  subsets: ["latin"],
});

export default function MeHistoryBanner() {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="flex flex-col-reverse lg:flex-row w-[90%] items-center">
          <Image
            className="m-8"
            src="/assets/images/me.jpg"
            alt="picture of me"
            width={500}
            height={500}
          />
          <div className="flex flex-col">
            <h2 className="text-[calc(3vw+2rem)] mb-8 text-center lg:text-left ">
              Moi
            </h2>
            <p className="text-xl text-justify leading-relaxed lg:w-[80%]">
              Je m’appelle Robin, j’ai 20 ans, je suis actuellement en 2 ième
              année de BUT Informatique. Et j’ai toujours{" "}
              <span className={`text-[#095234] ${cinzel.className}`}>
                beaucoup
              </span>{" "}
              de projet.
              <br />
              <br />
              Aujourd’hui je prends le temps de faire cette plateforme pour vous
              et moi !
              <br />
              <br />
              J’ai toujours été{" "}
              <span className={`text-[#095234] ${cinzel.className}`}>
                passionné
              </span>{" "}
              par le développement web. Le temple est pour moi l’occasion{" "}
              <span className={`text-[#095234] ${cinzel.className}`}>
                d’innover
              </span>{" "}
              , de{" "}
              <span className={`text-[#095234] ${cinzel.className}`}>
                créer
              </span>{" "}
              quelque chose qui a de la valeur à{" "}
              <span className={`text-[#095234] ${cinzel.className}`}>
                mes yeux
              </span>{" "}
              et de parfaire mes compétences dans ce domaine.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
