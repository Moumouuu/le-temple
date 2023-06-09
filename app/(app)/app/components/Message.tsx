import ProfileUser from "@/app/components/ProfileUser";

interface messageProps {
  message: any;
  isUser: (message: string) => boolean;
  formatDate: (date: string) => string;
}

export default function Message({ message, isUser, formatDate }: messageProps) {
  return (
    <div
      className={
        "flex flex-col my-4 md:m-10 " +
        (isUser(message) ? "items-end" : "items-start")
      }
    >
      <div
        className={
          "flex items-center " + (isUser(message) ? "flex-row-reverse" : "")
        }
      >
        <div>
          <ProfileUser user={message.user} />
        </div>
        <div
          className={
            "flex flex-col " +
            (isUser(message) ? "justify-end" : "justify-start")
          }
        >
          <span
            className={
              "mx-2 text-xs " + (isUser(message) ? "text-right" : "text-left")
            }
          >
            {message.user.name}
          </span>
          <div
            className={
              "z-10 rounded-2xl flex flex-col py-2 px-6 mx-2 " +
              (isUser(message)
                ? "border-4 rounded-tr-none border-[#095234] text-[#095234] bg-[#FFFAE6]"
                : "text-white rounded-tl-none bg-gradient-to-r from-[#095234] to-[#16925F] ")
            }
          >
            <span className="message text-sm md:text-xl break-words">
              {message.text}
            </span>
            <span className="text-xs">{formatDate(message.createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
