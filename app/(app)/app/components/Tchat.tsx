import UserType from "@/app/types/userType";
import InputSend from "./InputSend";

import getConversation from "@/app/actions/getConversation";
import TchatMessages from "./TchatMessages";

interface tchatProps {
  title?: string;
  id?: number;
  imageUrl: string;
  currentUser: UserType;
}

export default async function Tchat({
  title,
  id,
  imageUrl,
  currentUser,
}: tchatProps) {
  const conversation = await getConversation({ title, id });

  if (!conversation) return <span>Un problème est survenue lors de la récupération de votre conversation...</span>;

  return (
    <div
      className={`relative w-[100%] h-[100%] md:h-[90%] md:bg-[url('/assets/images/men.png')] bg-no-repeat bg-center flex flex-col justify-end`}
    >
      <span className="absolute hidden md:block opacity-60 top-[80%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-6xl">
        {title}
      </span>
      <TchatMessages currentUser={currentUser} conversation={conversation} />
      <InputSend currentUser={currentUser} conversation={conversation} />
    </div>
  );
}
