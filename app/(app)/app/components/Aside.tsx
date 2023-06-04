"use client";

import Arrow from "@/app/components/Arrow";
import UserType from "@/app/types/userType";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BsThreeDots } from "react-icons/bs";

interface asideProps {
  currentUser: UserType;
}

export default function Aside({ currentUser }: asideProps) {
  const path = usePathname();

  const items = [
    {
      label: "Général",
      href: "/app",
      isActive: path === "/app",
    },
    {
      label: "Groupes",
      href: "/app/groups",
      isActive: path === "/app/groups",
    },
    {
      label: "Mes Messages",
      href: "app/messages",
      isActive: path === "/app/messages",
    },
    {
      label: "Mon Profil",
      href: "app/profile",
      isActive: path === "/app/profile",
    },
  ];

  return (
    <div className="border-r-4 border-[#095234] h-[100vh] w-[25vw] hidden md:flex flex-col justify-between">
      <div>
        <div className="flex flex-col justify-center m-4 mb-10">
          <Link href="/">
            <h1 className="text-6xl text-center ">Le Temple</h1>
          </Link>
          <div className="flex items-center justify-center">
            <span className="text-1xl">You & You</span>
            <div className="hidden md:block">
              <Arrow />
            </div>
          </div>
        </div>
        {items.map((item, i) => (
          <div key={i} className="flex flex-col">
            <Link
              className={
                item.isActive
                  ? `bg-gradient-to-r from-[#095234] to-[#16925F] text-white py-10 text-center text-2xl`
                  : "py-10 text-center text-2xl text"
              }
              href={item.href}
            >
              {item.label}
            </Link>
          </div>
        ))}
        ;
      </div>

      <div className="flex items-center p-6 bg-gradient-to-r from-[#095234] to-[#16925F] text-white text-1xl justify-between">
        <div className="flex items-center">
          <Image
            className="rounded-full mr-3"
            src={currentUser?.image}
            height={60}
            width={60}
            alt="profile image"
          ></Image>
          <p>{currentUser?.name}</p>
        </div>
        <div className="cursor-pointer">
          <BsThreeDots size={30} />
        </div>
      </div>
    </div>
  );
}
