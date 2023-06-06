"use client";
import Image from "next/image";
import { useState } from "react";

interface SideBarListUsersProps {
  conversation: any;
}

const SideBarListUsers = ({ conversation }: SideBarListUsersProps) => {
  const [listOfUsers, setListOfUsers] = useState(conversation.users);

  const filterUsers = (users: any, e: string) => {
    return setListOfUsers(
      users.filter((user: any) =>
        user.name.toLowerCase().includes(e.toLowerCase())
      )
    );
  };

  return (
    <div className="hidden lg:block h-[100vh] p-6 border-l-4 border-[#095234]">
      <div className="flex flex-col items-center justify-between mb-4">
        <h1 className="text-3xl mb-4">Utilisateurs</h1>
        <input
          type="text"
          onChange={(e) => filterUsers(conversation.users, e.target.value)}
          placeholder="Chercher un utilisateur... "
          className="border-4 rounded-lg bg-transparent border-[#095234] p-3"
        />

        {listOfUsers.map((user: any, i: number) => (
          <div
            key={i}
            className="flex bg-gradient-to-r from-[#095234] to-[#16925F] text-white p-4 my-4 rounded-md items-center"
          >
            <Image
              className="rounded-full mr-3"
              src={user.image}
              width={50}
              height={50}
              alt={`Logo of the user : ${user.image}`}
            />
            <div className="flex flex-col">
              <span className="text-md">{user.name}</span>
              {/* each badge */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarListUsers;
