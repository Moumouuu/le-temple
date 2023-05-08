import getCurrentUser from "@/app/actions/getCurrentUser";
import Container from "@/app/wrappers/Container";
import Arrow from "../../Arrow";
import ButtonOrder from "../../buttons/ButtonOrder";

export const AboutBanner = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row w-[90vw]">
          <div className="flex flex-col">
            <h2 className=" md:text-left text-[calc(3vw+2rem)] md:w-[90%]">
              Le Temple c&apos;est quoi ?
            </h2>
            <p className="md:text-left md:mt-10 mt-5 text-xl md:w-[90%] leading-relaxed">
              Le temple est un réseau social unique ! Avec une communauté de
              qualité exceptionnelle. Qui souhaite investir dans leurs réseaux
              professionnels.
              <br /> <br /> Les réseaux sociaux gratuits sont souvent surchargés
              de publicités et de spam. Je vous propose une expérience sans
              publicité avec des messages de qualités.
            </p>
          </div>
          <div className="flex flex-col leading-relaxed mt-10 md:mt-0 items-end">
            <h2 className="text-[calc(3vw+2rem)] md:text-right">
              Un nombre de place limité !
            </h2>
            <p className=" md:text-right md:mt-10 mt-5 text-xl md:w-[90%] leading-relaxed">
              Le Temple a un nombre de places limité. Je privilégie la qualité
              de chaque membre à la quantité.
              <br />
              <br />
              La barrière du prix Permet de filtrer et ainsi d’avoir un univers
              sans avis politique, sans discrimination, sans fakes news et sans
              messages de haines !
            </p>
          </div>
        </div>
        <div className="flex mt-16 items-center justify-center">
          <div className="hidden md:block">
            <Arrow big />
          </div>
          {/* @ts-ignore */}
          <ButtonOrder currentUser={currentUser} />
          <div className="hidden md:block">
            <Arrow big rotate={180} />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default AboutBanner;
