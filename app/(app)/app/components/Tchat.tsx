"use client";
import UserType from "@/app/types/userType";
import InputSend from "./InputSend";

import PresentationModal from "@/app/components/modals/PresentationModal";
import usePresentationModal from "@/app/hooks/usePresentationModal";
import TchatMessages from "./TchatMessages";

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

  if (!conversation)
    return (
      <span>
        Un problème est survenue lors de la récupération de votre
        conversation...
      </span>
    );

  return (
    <div
      className={`h-[100%] lg:h-[90%] md:bg-[url('/assets/images/men.png')] bg-no-repeat bg-center flex flex-col justify-end`}
    >
      {(showModal && currentUser.firstLogin) && <PresentationModal currentUser={currentUser} />}
      <TchatMessages currentUser={currentUser} conversation={conversation} />
      <InputSend currentUser={currentUser} conversation={conversation} />
    </div>
  );
}
