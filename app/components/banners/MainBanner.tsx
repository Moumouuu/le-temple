import Image from "next/image";

import Container from "@/app/wrappers/Container";

import getCurrentUser from "@/app/actions/getCurrentUser";
import Arrow from "../Arrow";
import ButtonOrder from "../buttons/ButtonOrder";

interface MainBannerProps {
  title: string;
}

export const MainBanner = async ({ title }: MainBannerProps) => {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <div className="flex justify-center md:justify-between h-[60vh]">
        <div className="md:flex items-end hidden ">
          <Image
            src="/assets/images/bird-1.png"
            width={400}
            height={400}
            alt="Birds flying"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-[calc(6vw+3rem)] text-center ">{title}</h1>
          <div className="flex items-center justify-center">
            <span className="text-3xl">You & You</span>
            <div className="hidden md:block">
              <Arrow big />
            </div>
          </div>
          <div className="text-center mt-14">
            {/* @ts-expect-error Server Component */}
            <ButtonOrder currentUser={currentUser} />
          </div>
        </div>
        <div className="md:flex items-start hidden">
          <Image
            src="/assets/images/bird-2.png"
            width={400}
            height={400}
            alt="Birds flying"
          />
        </div>
      </div>
    </Container>
  );
};
export default MainBanner;
