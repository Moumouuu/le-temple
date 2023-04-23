"use client";

import React from "react";
import { signIn } from "next-auth/react";

import { BsApple, BsGithub } from "react-icons/bs";
import { AiFillInstagram, AiFillGoogleCircle } from "react-icons/ai";

import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";

const LoginModal = () => {
  const { onClose } = useLoginModal();

  const providers = [
    {
      name: "Google",
      icon: <AiFillGoogleCircle />,
      signin: "google",
    },
    {
      name: "Apple",
      icon: <BsApple />,
      signin:"apple"
    },
    {
      name: "Instagram",
      icon: <AiFillInstagram />,
      signin:"instagram"
    },
    {
      name: "GitHub",
      icon: <BsGithub />,
      signin: "github",
    },
  ];

  const body = (
    <div className="flex flex-col">
      {providers.map((provider, index) => (
        <button
          onClick={() => signIn(provider.signin)}
          key={index}
          className="flex items-center bg-transparent w-full my-3 border-4 border-[#095234] p-2 rounded-xl"
        >
          <span className="text-3xl text-[#16925F]">{provider.icon}</span>{" "}
          <span className="ml-[30px]">With {provider.name}</span>
        </button>
      ))}
    </div>
  );

  return <Modal title="Connexion" body={body} handleClose={onClose} />;
};

export default LoginModal;
