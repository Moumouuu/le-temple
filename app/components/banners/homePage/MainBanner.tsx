"use client";
import Image from "next/image";

import Arrow from "../../Arrow";
import ButtonOrder from "../../buttons/ButtonOrder";

interface MainBannerProps {
  title: string;
}

export const MainBanner = ({ title }: MainBannerProps) => {
  return (
    <div className="flex justify-center md:justify-between h-[60vh] my-10">
      <div className="md:flex items-end hidden ">
        <Image
          src="/assets/images/bird-1.png"
          width={400}
          height={400}
          alt="Birds flying"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-[calc(6vw+3rem)]">{title}</h1>
        <div className="flex items-center justify-center">
          <span className="text-3xl">You & You</span>
          <div className="hidden md:block">
            <Arrow big />
          </div>
        </div>
        <div className="text-center my-6">
          <ButtonOrder />
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
  );
};
export default MainBanner;
