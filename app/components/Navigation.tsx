"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Arrow from "./Arrow";
import LoginModal from "./modals/LoginModal";
import useLoginModal from "../hooks/useLoginModal";

const Navigation = () => {
  const { showModal, onOpen } = useLoginModal();
  const router = usePathname();

  return (
    <header className="p-3">
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
          <button
            onClick={onOpen}
            className="border-4 border-[#095234] bg-transparent p-2 rounded-xl"
          >
            Connexion
          </button>
        </div>
      </nav>
      {showModal && <LoginModal />}
    </header>
  );
};

export default Navigation;
