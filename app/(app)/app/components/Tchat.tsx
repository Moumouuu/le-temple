"use client";
import UserType from "@/app/types/userType";
import InputSend from "./InputSend";

import PresentationModal from "@/app/components/modals/PresentationModal";
import RemoveGroupModal from "@/app/components/modals/RemoveGroupModal";
import usePresentationModal from "@/app/hooks/usePresentationModal";
import useRemoveGroupModal from "@/app/hooks/useRemoveBadgeModal";
import TchatMessages from "./TchatMessages";
import { ImExit } from "react-icons/im";

interface tchatProps {
  conversation: any;
  imageUrl: string;
  currentUser: UserType;
}

export default function Tchat({
  conversation,
  imageUrl,
  currentUser,
}: tchatProps) {
  const { showModal } = usePresentationModal();
  const { showModal: showModalGroup, onOpen } = useRemoveGroupModal();
  console.log(showModalGroup && conversation.title != "Général");

  if (!conversation)
    return (
      <span>
        Un problème est survenue lors de la récupération de votre
        conversation...
      </span>
    );

  return (
    <div
      className={` h-[100%] lg:h-[90%] md:bg-[url('/assets/images/men.png')] bg-no-repeat bg-center flex flex-col justify-end`}
    >
      {showModal && currentUser.firstLogin && (
        <PresentationModal currentUser={currentUser} />
      )}
      {showModalGroup && (
        <div className="block lg:hidden">
          <RemoveGroupModal conversation={conversation} />
        </div>
      )}
      {conversation.title != "Général" && (
        <ImExit
          size={30}
          className="absolute top-5 right-5 cursor-pointer block lg:hidden"
          onClick={onOpen}
        />
      )}

      <TchatMessages currentUser={currentUser} conversation={conversation} />
      <InputSend currentUser={currentUser} conversation={conversation} />
    </div>
  );
}
