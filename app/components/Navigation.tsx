"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

import useLoginModal from "../hooks/useLoginModal";

import Arrow from "./Arrow";
import LoginModal from "./modals/LoginModal";
import Login from "./navigation/Login";

import userType from "../types/userType";

import { HiMenuAlt4 } from "react-icons/hi";
interface NavigationProps {
  currentUser: userType;
}

const Navigation = ({ currentUser }: NavigationProps) => {
  const { showModal, onOpen } = useLoginModal();
  const router = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-transparent w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center lg:w-[250px]">
          <Image
            src="/assets/images/TempleLogo.png"
            height={60}
            width={60}
            quality={100}
            className="rounded-xl mr-3 z-10"
            alt="LeTemple Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap hidden lg:block">
            Le Temple
          </span>
        </Link>
        <div className="flex md:order-2">
          <div className="flex justify-end lg:w-[250px]">
            <Login onOpen={onOpen} currentUser={currentUser} />
          </div>
          <button className="z-10 block md:hidden" onClick={handleMenu}>
            <HiMenuAlt4 size={40} />
          </button>
        </div>
        <div
          className={` ${
            menuOpen ? "" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul
            onClick={handleMenu}
            className="absolute md:relative top-0 md:top-auto left-0 md:left-auto w-[100vw] md:w-auto h-[100vh] md:h-auto bg-black/70 md:bg-transparent z-10"
          >
            <div className="w-1/2 md:w-auto h-[100vh] md:h-auto flex flex-col justify-center md:flex-row bg-[#095234] md:bg-[#FFFAE6] text-black ">
              <li className="px-4 my-3 md:my-0 flex flex-col items-center">
                <Link className="text-[#FFFAE6] md:text-black" href={"/"}>
                  Accueil
                </Link>
                {router === "/" && <Arrow big={false} />}
              </li>
              <li className="px-4 my-3 md:my-0 flex flex-col items-center">
                <Link
                  className="text-[#FFFAE6] md:text-black"
                  href={"/mes-valeurs"}
                >
                  Mes Valeurs
                </Link>
                {router === "/mes-valeurs" && <Arrow big={false} />}
              </li>
              <li className="px-4 my-3 md:my-0 flex flex-col items-center">
                <Link
                  className="text-[#FFFAE6] md:text-black"
                  href={"/mon-histoire"}
                >
                  Mon Histoire
                </Link>
                {router === "/mon-histoire" && <Arrow big={false} />}
              </li>
            </div>
          </ul>
        </div>
      </div>
      {showModal && <LoginModal />}
    </nav>
  );
};

export default Navigation;
