import Container from "@/app/wrappers/Container";

import { Cinzel_Decorative } from "@next/font/google";
import Image from "next/image";

import Arrow from "../../../../components/Arrow";

const cinzel = Cinzel_Decorative({
  weight: "700",
  subsets: ["latin"],
});

export default function QuoteTwoBanner() {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center">
            <span className="md:text-center mt-4 md:mt-0">Michel Audiard</span>
            <div className="hidden md:block">
              <Arrow rotate={90} />
            </div>
            <p className="text-2xl w-[80%] md:w-[50%] leading-relaxed">
              « Un{" "}
              <span className={`text-[#095234] ${cinzel.className}`}>
                intellectuel{" "}
              </span>
              assis va moins loin qu’un con qui marche. »
            </p>
          </div>
          <div className="mt-14">
            <Image
              src="/assets/images/men.png"
              alt="Le Temple"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
