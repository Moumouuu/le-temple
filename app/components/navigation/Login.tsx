import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";

import userType from "../../types/userType";
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
      onClick={() => signOut()}
      src={currentUser.image}
      alt="avatar"
      width={60}
      height={60}
      className="rounded-xl"
    />
  );
};

export default Login;
