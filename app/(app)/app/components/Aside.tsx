"use client";

import Arrow from "@/app/components/Arrow";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { BsArrowLeft, BsThreeDots } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

interface asideProps {
  currentUser: any;
}

export default function Aside({ currentUser }: asideProps) {
  const path = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      label: `Mon Profil`,
      href: `app/profile/${currentUser?.id}`,
      isActive: path === `/app/profile/${currentUser?.id}`,
    },
  ];

  const handleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  return (
    <>
      <div className="border-r-4 border-[#095234] h-[100vh] hidden md:flex flex-col justify-between">
        <div className="overflow-y-scroll overflow-x-clip">
          <div className="flex flex-col justify-center m-2 mb-10">
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
                    ? `bg-gradient-to-r from-[#095234] to-[#16925F] text-white py-10 text-center text-2xl                    `
                    : "py-6 text-center text-2xl text"
                }
                href={item.href}
              >
                {item.label}
              </Link>
              {item.label === "Groupes" &&
                item.isActive &&
                currentUser?.Conversation?.map((conversation: any) => {
                  return (
                    conversation.users.length > 2 &&
                    conversation.title != "Général" && (
                      <Link
                        key={conversation.id}
                        className="text-sm text-center text-white hover:text-black p-2 bg-gradient-to-r from-[#095234] to-[#16925F]"
                        href={`/app/groups/?conversationId=${conversation.id}`}
                      >
                        {conversation.title}
                      </Link>
                    )
                  );
                })}
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

      {/* Mobile */}
      {isMenuOpen ? (
        <>
          <div onClick={handleMenu} className="absolute left-5 top-5 z-50">
            <BsArrowLeft size={40} />
          </div>
          <div className="absolute bg-[#FFFAE6] z-30 border-r-4 border-[#095234] h-[100vh] w-[100%] flex flex-col justify-between">
            <div>
              <div className="flex flex-col justify-center m-4 mb-10">
                <h1 className="text-6xl text-center ">Le Temple</h1>
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
                  {item.label === "Groupes" &&
                    item.isActive &&
                    currentUser?.Conversation?.map((conversation: any) => {
                      return (
                        conversation.users.length > 2 &&
                        conversation.title != "Général" && (
                          <Link
                            key={conversation.id}
                            className="text-sm text-center text-white hover:text-black p-2 bg-gradient-to-r from-[#095234] to-[#16925F]"
                            href={`/app/groups/?conversationId=${conversation.id}`}
                          >
                            {conversation.title}
                          </Link>
                        )
                      );
                    })}
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
        </>
      ) : (
        <div
          onClick={handleMenu}
          className="absolute left-5 top-5 z-50 block md:hidden"
        >
          <HiOutlineMenuAlt4 size={40} />
        </div>
      )}
    </>
  );
}
