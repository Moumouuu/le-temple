import React, { ReactNode } from "react";
import Image from "next/image";
import Arrow from "../Arrow";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface ModalProps {
  title: string;
  body: ReactNode;
  handleClose?: () => void;
}

const Modal = ({ title, body, handleClose }: ModalProps) => {
  return (
    <div className="absolute z-10 top-0 left-0 bg-black/70 w-full h-full">
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gradient-to-b from-[#FFF3C2] to-[#FFFAE6] rounded-xl p-4 md:w-[35vw]">
        <div className="flex flex-col items-center">
          <div
            onClick={handleClose}
            className="absolute top-3 right-3 text-3xl cursor-pointer rotate-0 hover:rotate-180 duration-300"
          >
            <AiOutlineCloseCircle className="text-4xl" />
          </div>
          <div>
            <Image
              src="/assets/images/TempleLogo.png"
              alt="Le Temple"
              width={100}
              height={100}
              className="rounded-xl my-4"
            />
          </div>
          <h2 className="text-5xl my-4">{title}</h2>
          <div className="w-full">{body}</div>
          <div className="my-4">
            <Arrow big />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
