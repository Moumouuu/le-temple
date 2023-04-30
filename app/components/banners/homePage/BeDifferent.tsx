"use client";
import Container from "@/app/wrappers/Container";
import Image from "next/image";
import Arrow from "../../Arrow";
import ButtonOrder from "../../buttons/ButtonOrder";

export default function BeDifferent() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col-reverse md:flex-row items-center w-[90%] lg:w[80%]">
          <div className="mr-10">
            <Image
              src="/assets/images/chain.png"
              alt="Le Temple"
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[calc(3vw+2rem)] mb-10">Soit différent !</h2>
            <p className="text-xl">
              Rencontre des personnes qui partagent tes intérêts et tes
              ambitions professionnelles.
              <br /> <br />
              Apprendre, Partager et Innover sont nos valeurs, c’est ce que l’on
              t’apportes.
            </p>
          </div>
        </div>
        <div className="flex mt-16 items-center justify-center">
          <div className="hidden md:block">
            <Arrow big />
          </div>
          <ButtonOrder />
          <div className="hidden md:block">
            <Arrow big rotate={180} />
          </div>
        </div>
      </div>
    </Container>
  );
}
