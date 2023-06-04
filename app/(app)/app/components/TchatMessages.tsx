"use client";

import { pusherClient } from "@/app/libs/pusher";
import UserType from "@/app/types/userType";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface tchatMessagesProps {
  currentUser: UserType;
  conversation: any;
}

export default function TchatMessages({
  currentUser,
  conversation,
}: tchatMessagesProps) {
  const [messages, setMessages] = useState(conversation as any);
  const bottomRef = useRef<HTMLDivElement>(null);

  const formatDate = (date: string) => {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
  };

  const isUser = (message: any) => {
    return message.user?.id === currentUser.id;
  };

  useEffect(() => {
    pusherClient.subscribe(conversation.id.toString());

    bottomRef.current?.scrollIntoView();

    pusherClient.bind("new-message", (message: any) => {
      setMessages((current: any) => {
        return {
          ...current,
          messages: [...current.messages, message.message],
        };
      });

      bottomRef.current?.scrollIntoView();
    });

    return () => {
      pusherClient.unsubscribe(conversation.id.toString());
      pusherClient.unbind("new-message");
    };
  }, [conversation.id, currentUser]);

  return (
    <>
      <div className="w-[100%] h-[100%] overflow-scroll">
        {messages.messages?.map((message: any, i: any) => (
          <div
            key={i}
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
                alt={`Picture of the user ${message.user?.name}`}
              />
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
        ))}
        <div ref={bottomRef} className="pt-24"></div>
      </div>
    </>
  );
}
