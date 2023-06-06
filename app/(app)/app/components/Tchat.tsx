import UserType from "@/app/types/userType";
import InputSend from "./InputSend";

import TchatMessages from "./TchatMessages";

interface tchatProps {
  conversation: any;
  imageUrl: string;
  currentUser: UserType;
}

export default async function Tchat({
  conversation,
  imageUrl,
  currentUser,
}: tchatProps) {
  if (!conversation)
    return (
      <span>
        Un problème est survenue lors de la récupération de votre
        conversation...
      </span>
    );

  return (
    <div
      className={`w-[100%] h-[100%] md:h-[90%] md:bg-[url('/assets/images/men.png')] bg-no-repeat bg-center flex flex-col justify-end`}
    >
      <TchatMessages currentUser={currentUser} conversation={conversation} />
      <InputSend currentUser={currentUser} conversation={conversation} />
    </div>
  );
}
