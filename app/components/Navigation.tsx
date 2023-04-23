"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Arrow from "./Arrow";
import LoginModal from "./modals/LoginModal";
import useLoginModal from "../hooks/useLoginModal";
import Login from "./navigation/Login";

import userType from "../types/userType";

const Navigation = ({ currentUser }: userType) => {
  const { showModal, onOpen } = useLoginModal();
  const router = usePathname();

  return (
    <header className="py-3 px-5">
      <nav className="flex items-center justify-between">
        <div>
          <Image
            priority={true}
            quality={100}
            src="/assets/images/TempleLogo.png"
            alt="Le Temple"
            width={60}
            height={60}
            className="rounded-xl"
          />
        </div>
        <div>
          <ul className="flex">
            <li className="px-4 flex flex-col items-center">
              <Link href={"/"}>Accueil</Link>
              {router === "/" && <Arrow big={false} />}
            </li>
            <li className="px-4 flex flex-col items-center">
              <Link href={"/valeurs"}>Mes Valeurs</Link>
              {router === "/valeurs" && <Arrow big={false} />}
            </li>
            <li className="px-4 flex flex-col items-center">
              <Link href={"/histoire"}>Mon Histoire</Link>
              {router === "/histoire" && <Arrow big={false} />}
            </li>
          </ul>
        </div>
        <div>
          <Login onOpen={onOpen} currentUser={currentUser} />
        </div>
      </nav>
      {showModal && <LoginModal />}
    </header>
  );
};

export default Navigation;
