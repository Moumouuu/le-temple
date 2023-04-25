"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import useLoginModal from "../hooks/useLoginModal";
import Arrow from "./Arrow";
import LoginModal from "./modals/LoginModal";
import Login from "./navigation/Login";

import userType from "../types/userType";

const Navigation = ({ currentUser }: userType) => {
  const { showModal, onOpen } = useLoginModal();
  const router = usePathname();

  return (
    <nav className="bg-transparent w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Image
            src="/assets/images/TempleLogo.png"
            height={60}
            width={60}
            quality={100}
            className="rounded-xl mr-3 z-10"
            alt="LeTemple Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap hidden md:block">
            Le Temple
          </span>
        </a>
        <div className="flex md:order-2">
          <Login onOpen={onOpen} currentUser={currentUser} />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 ml-4 text-sm rounded-lg md:hidden focus:outline-none "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6 z-10"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="absolute md:relative top-0 md:top-auto left-0 md:left-auto w-[100vw] md:w-auto h-[100vh] md:h-auto bg-black/70 md:bg-transparent">
            <div className="w-1/2 md:w-auto h-[100vh] md:h-auto flex flex-col justify-center md:flex-row bg-[#095234] md:bg-[#FFFAE6] text-black">
              <li className="px-4 my-3 md:my-0 flex flex-col items-center">
                <Link href={"/"}>Accueil</Link>
                {router === "/" && <Arrow big={false} />}
              </li>
              <li className="px-4 my-3 md:my-0 flex flex-col items-center">
                <Link href={"/valeurs"}>Mes Valeurs</Link>
                {router === "/valeurs" && <Arrow big={false} />}
              </li>
              <li className="px-4 my-3 md:my-0 flex flex-col items-center">
                <Link href={"/histoire"}>Mon Histoire</Link>
                {router === "/histoire" && <Arrow big={false} />}
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
