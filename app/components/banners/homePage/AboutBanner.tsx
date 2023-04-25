"use client";

import Arrow from "../../Arrow";
import ButtonOrder from "../../buttons/ButtonOrder";

export const AboutBanner = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <div className="flex flex-col md:flex-row w-[90vw]">
        <div className="flex flex-col">
          <h2 className="text-center md:text-left text-[calc(3vw+2rem)] md:w-[90%]">
            Le Temple c&apos;est quoi ?
          </h2>
          <p className="md:text-left leading-relaxed md:mt-10 mt-5 text-xl md:w-[90%]">
            Le temple est un réseau social unique ! Avec une communauté de
            qualité exceptionnelle. Qui souhaite investir dans leurs réseaux
            professionnels.
            <br /> <br /> Les réseaux sociaux gratuits sont souvent surchargés
            de publicités et de spam. Je vous propose une expérience sans
            publicité avec des messages de qualités.
          </p>
        </div>
        <div className="flex flex-col leading-relaxed mt-10 md:mt-0 items-end">
          <h2 className="text-[calc(3vw+2rem)] text-center md:text-right">
            Un nombre de place limité !
          </h2>
          <p className=" md:text-right md:mt-10 mt-5 text-xl md:w-[90%]">
            Le temple est un réseau social unique ! Avec une communauté de
            qualité exceptionnelle. Qui souhaite investir dans leurs réseaux
            professionnels.
            <br /> <br /> Les réseaux sociaux gratuits sont souvent surchargés
            de publicités et de spam. Je vous propose une expérience sans
            publicité avec des messages de qualités.
          </p>
        </div>
      </div>
      <div className="flex mt-10 items-center justify-center">
        <div className="hidden md:block">
          <Arrow big />
        </div>
        <ButtonOrder />
        <div className="hidden md:block">
          <Arrow big />
        </div>
      </div>
    </div>
  );
};
export default AboutBanner;
