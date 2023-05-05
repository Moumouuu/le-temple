import Container from "@/app/wrappers/Container";

import { Cinzel_Decorative } from "@next/font/google";

const cinzel = Cinzel_Decorative({
  weight: "700",
  subsets: ["latin"],
});

export default function AboutHistoryBanner() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center text-center">
        <div className="w-[90%] flex flex-col items-center">
          <h2 className="text-[calc(3vw+2rem)] mb-8">Le Temple</h2>
          <p className="text-xl md:w-[60%] leading-relaxed">
            À l’origine le temple était censé être un réseau social uniquement{" "}
            <span className={`text-[#095234] ${cinzel.className}`}>
              dédié au sport
            </span>{" "}
            , dont le but était de créer une communauté qui partage les mêmes
            valeurs.{" "}
            <span className={`text-[#095234] ${cinzel.className}`}>
              le respect
            </span>{" "}
            ,{" "}
            <span className={`text-[#095234] ${cinzel.className}`}>
              la sagesse
            </span>{" "}
            et{" "}
            <span className={`text-[#095234] ${cinzel.className}`}>
              l’entraide
            </span>{" "}
            .
            <br />
            <br />
            mais pourquoi ne pas voir plus grand ?
            <br />
            <br />
            Finance, Crypto, Sport, Entreprenariat, Boutique en ligne etc.
          </p>
        </div>
      </div>
    </Container>
  );
}
