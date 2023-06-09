import getUser from "@/app/actions/getUser";
import UserAuthorize from "@/app/wrappers/userAuthorize";

import Image from "next/image";

import { AiOutlineUser } from "react-icons/ai";
import { BiConversation, BiMessageDetail } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

export default async function page({ params }: any) {
  const { userId } = params;

  const user = await getUser(userId);

  if (!user) return null;

  return (
    <>
      {/*@ts-ignore*/}
      <UserAuthorize>
        <div className="flex flex-col w-[100%] items-center p-10">
          <Image
            src={user.image!}
            width={100}
            height={100}
            className="rounded-full"
            alt={`logo of the user : ${user.name}`}
          />
          <div className="flex items-center my-6">
            <div className="flex items-center flex-col">
              <span className="message font-bold text-2xl">
                {user.Message.length}
              </span>
              <BiMessageDetail size={30} />
            </div>
            <div className="flex items-center flex-col mx-10">
              <span className="message font-bold text-2xl">
                {user.Badge.length}
              </span>
              <SlBadge size={30} />
            </div>
            <div className="flex items-center flex-col">
              <span className="message font-bold text-2xl">
                {user.Conversation.length}
              </span>
              <BiConversation size={30} />
            </div>
          </div>
          <div className="my-10 flex flex-col items-center">
            <div className="flex items-center">
              <AiOutlineUser size={30} className="mr-2" />
              <span className="text-3xl ">{user.name}</span>
            </div>
            <span className="mt-4">Listes des badges : </span>
            <div className="flex">
              {user.Badge.map((badge: any, i) => (
                <Image
                  key={i}
                  src={`/assets/images/badges/${badge.image!}`}
                  width={50}
                  height={50}
                  alt="Badge"
                  className="mx-2"
                />
              ))}
            </div>

            <div className="flex items-center mt-10">
              <MdOutlineDescription size={30} className="mr-2" />
              <span className="text-3xl ">Description</span>
            </div>
            <p className="text-center">{user.description}</p>
          </div>
        </div>
      </UserAuthorize>
    </>
  );
}
