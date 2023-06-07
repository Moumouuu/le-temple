"use client";
import ProfileUser from "@/app/components/ProfileUser";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { IoCreateOutline } from "react-icons/io5";

interface SideBarConversationProps {
  allUsers: any[];
  currentUser: any;
}

export default function SideBarConversation({
  allUsers,
  currentUser,
}: SideBarConversationProps) {
  const [showAddConversation, setShowAddConversation] = useState(false);
  const [allUsersFiltered, setAllUsersFiltered] = useState(allUsers);
  const router = useRouter();
  const handleShowAddConversation = () => {
    setShowAddConversation((prev) => !prev);
  };

  const handleCreateConversation = async (targetUser: User) => {
    
    // check if conversation already exist
    let alreadyConversation = false;
    if (currentUser.Conversation) {
      currentUser.Conversation.forEach((conversation: any) => {
        if (conversation.users && conversation.users.length === 2) {
          conversation.users.forEach((user: User) => {
            if (user.id === targetUser.id) {
              alreadyConversation = true;
              toast.error(
                "Vous avez déjà une conversation avec cet utilisateur."
              );
            }
          });
        }
      });
    }

    if (alreadyConversation) return;

    const toastId = toast.loading("Création de la conversation en cours...");

    // create conversation
    const conversation = await axios.post("/api/conversation", {
      title: `${currentUser.name} - ${targetUser.name}`,
      users: [currentUser.id, targetUser.id],
    });

    const conversationId = conversation.data.id;

    // open tchat with this conversation (push conversationID in the url and father component will open the tchat)
    router.push(`/app/messages/?conversationId=${conversationId}`);

    toast.dismiss(toastId);

    setShowAddConversation((prev) => !prev);
  };

  const onChangeFilteredUsers = (value: string) => {
    const filteredUsers = allUsers.filter((user) => {
      return (
        user.name.toLowerCase().includes(value.toLowerCase()) &&
        user.id !== currentUser.id
      );
    });
    setAllUsersFiltered(filteredUsers);
  };

  const otherUserOfTheConversation = (conversation: any) => {
    let otherUser = null;
    conversation.users.forEach((user: User) => {
      if (user.id !== currentUser.id) {
        otherUser = user;
      }
    });
    return otherUser;
  };

  if (!allUsers) {
    return toast.error(
      "Une erreur est survenue lors du chargement des utilisateurs."
    );
  }

  return (
    <div className="hidden lg:block h-[100vh] p-6 border-l-4 border-[#095234]">
      <Toaster />
      <div className="flex flex-col items-center justify-between mb-4">
        <div className="flex items-center">
          <h1 className="text-3xl mb-4 mr-2">Vos conversations</h1>
          <IoCreateOutline
            size={40}
            className="cursor-pointer"
            onClick={handleShowAddConversation}
          />
        </div>
        {showAddConversation ? (
          <div>
            <input
              type="text"
              onChange={(e) => {
                onChangeFilteredUsers(e.target.value);
              }}
              placeholder="Chercher un utilisateur... "
              className="relative border-4 rounded-lg bg-transparent border-[#095234] p-3"
            />
            <div className="h-[100%] overflow-y-scroll">
              {allUsersFiltered.map((user) => (
                <div
                  onClick={() => handleCreateConversation(user)}
                  key={user.id}
                  className="cursor-pointer w-[100%] flex bg-gradient-to-r from-[#095234] to-[#16925F] text-white p-4 my-4 rounded-md items-center"
                >
                  <div className="mr-2">
                    <ProfileUser user={user} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-md">{user.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-[100%] overflow-y-scroll">
            {currentUser.Conversation.map(
              (conv: any) =>
                conv.users.length === 2 && (
                  <div
                    onClick={() => {
                      router.push(`/app/messages/?conversationId=${conv.id}`);
                    }}
                    key={conv.id}
                    className="cursor-pointer w-[100%] flex bg-gradient-to-r from-[#095234] to-[#16925F] text-white p-4 my-4 rounded-md items-center"
                  >
                    <div className="mr-2">
                      <ProfileUser user={otherUserOfTheConversation(conv)} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-md">
                        {otherUserOfTheConversation(conv)!["name"]}
                      </span>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
