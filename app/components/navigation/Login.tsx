import { signOut } from "next-auth/react";
import Image from "next/image";

import userType from "../../types/userType";
import Button from "../buttons/Button";

interface LoginProps {
  onOpen: () => void;
  currentUser: userType | null;
}

export const Login = ({ onOpen, currentUser }: LoginProps) => {
  if (!currentUser)
    return <Button label="Connexion" action={onOpen} secondary />;
  return (
    <>
      <Image
        src={currentUser?.image}
        onClick={() => signOut()}
        alt="avatar"
        width={60}
        height={60}
        className="rounded-xl cursor-pointer"
      />
    </>
  );
};

export default Login;
