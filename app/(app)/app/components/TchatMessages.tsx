"use client";

import { pusherClient } from "@/app/libs/pusher";
import UserType from "@/app/types/userType";

import { useEffect, useRef, useState } from "react";
import Message from "./Message";

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

  const formatDate = (date: string): string => {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
  };

  const isUser = (message: any): boolean => {
    return message.user?.id === currentUser?.id;
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
      <div className="w-[100%] h-[100%] overflow-y-scroll">
        {messages.messages?.map((message: any, i: any) => (
          <Message
            key={i}
            message={message}
            isUser={isUser}
            formatDate={formatDate}
          />
        ))}
        <div ref={bottomRef} className="pt-24"></div>
      </div>
    </>
  );
}
