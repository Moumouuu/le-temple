import React from "react";
import userType from "../../types/userType";
import Image from "next/image";

interface LoginProps {
  onOpen: () => void;
  currentUser: userType;
}

export const Login = ({ onOpen, currentUser }: LoginProps) => {
  if (!currentUser)
    return (
      <button
        onClick={onOpen}
        className="border-4 border-[#095234] bg-transparent p-2 rounded-xl"
      >
        Connexion
      </button>
    );
  return (
    <Image
      src={currentUser.image}
      alt="avatar"
      width={60}
      height={60}
      className="rounded-xl"
    />
  );
};

export default Login;
