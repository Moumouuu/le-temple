import Container from "@/app/wrappers/Container";

import { Cinzel_Decorative } from "@next/font/google";
import Image from "next/image";

const cinzel = Cinzel_Decorative({
  weight: "700",
  subsets: ["latin"],
});

export default function InnovateValues() {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="flex items-center flex-col-reverse lg:flex-row w-[90%] relative">
          <span className="absolute -top-10  right-0 title strokeme text-[calc(5vw+4rem)]">
            03
          </span>
          <Image
            src="/assets/images/compass.png"
            alt="compass"
            width={400}
            height={400}
          />
          <div className="flex flex-col justify-center lg:items-center">
            <h2 className="ml-2 text-[calc(3vw+2rem)] mb-8">Innover</h2>
            <div className="flex flex-col md:flex-row">
              <p className="text-xl text-justify mx-5 leading-relaxed">
                « L’innovation, c’est quelque chose qu’on choisit parce qu’on a
                une{" "}
                <span className={`text-[#095234] ${cinzel.className}`}>
                  passion brûlante
                </span>{" "}
                pour quelque chose. » <br /> - Steve Jobs
              </p>
              <br />
              <p className="text-xl text-justify mx-5 leading-relaxed">
                L’essence même de ce projet est de créer de{" "}
                <span className={`text-[#095234] ${cinzel.className}`}>
                  grandes choses
                </span>{" "}
                ensemble, alors partager, et innover main dans la main.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
