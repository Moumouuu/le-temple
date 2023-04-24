import React, { useState } from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";

import userType from "../../types/userType";
import Button from "../Button";
interface LoginProps {
  onOpen: () => void;
  currentUser: userType;
}

export const Login = ({ onOpen, currentUser }: LoginProps) => {
  if (!currentUser)
    return (
      <Button label="Connexion" action={onOpen} />
    );
  return (
      <Image
        src={currentUser.image}
        onClick={()=> signOut()}
        alt="avatar"
        width={60}
        height={60}
        className="rounded-xl cursor-pointer"
      />
  );
};

export default Login;
