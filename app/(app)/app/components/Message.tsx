
import Image from "next/image";

interface messageProps {
    message: any;
    isUser: (message:string) => boolean;
    formatDate: (date:string) => string;
}

export default function Message({message, isUser, formatDate}:messageProps) {
    return (
        <div
            className={
              "flex flex-col my-4 md:m-10 " +
              (isUser(message) ? "items-end" : "items-start")
            }
          >
            <div
              className={
                "flex items-center " +
                (isUser(message) ? "flex-row-reverse" : "")
              }
            >
              <Image
                className="rounded-full mx-3"
                src={message.user?.image}
                width={50}
                height={50}
                alt={`Picture of the user ${message.user.name}`}
              />
              <div className='flex flex-col'>
                <span className="text-xs">{message.user.name}</span>
                <div
                className={
                  "z-10 rounded-2xl rounded-tl-none flex flex-col py-2 px-6 max-w-[70%] md:max-w-none " +
                  (isUser(message)
                    ? "border-4 border-[#095234] text-[#095234] bg-[#FFFAE6]"
                    : "text-white bg-gradient-to-r from-[#095234] to-[#16925F] ")
                }
              >
                <span className="text-sm md:text-xl break-words">
                  {message.text}
                </span>
                <span className="text-xs">{formatDate(message.createdAt)}</span>
              </div>
              </div>
              
            </div>
          </div>
    )
}