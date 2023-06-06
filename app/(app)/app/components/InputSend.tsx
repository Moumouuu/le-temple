"use client";
import UserType from "@/app/types/userType";

import { Conversation } from "@prisma/client";

import { SubmitHandler, useForm } from "react-hook-form";

import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";

import axios from "axios";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

interface IFormInput {
  message: string;
}

interface inputSendProps {
  currentUser: UserType;
  conversation: Conversation;
}

export default function InputSend({
  currentUser,
  conversation,
}: inputSendProps) {
  const { register, handleSubmit, reset, setValue, getValues } =
    useForm<IFormInput>();
  const [showEmoji, setShowEmoji] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = await axios.post("/api/message", {
      message: data.message,
      conversationId: conversation.id,
      userId: currentUser.id,
    });

    if (res.data.error) {
      toast.error(res.data.error);
    }
    reset();
  };

  const handleEmoji = () => {
    setShowEmoji((state) => !state);
  };

  return (
    <div>
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center relative"
      >
        <input
          autoComplete="off"
          type="text"
          className="input bg-transparent w-[100%] !rounded-2xl p-4 m-4 !border-4 !border-[#095234]"
          placeholder="Entrez votre message..."
          {...register("message", { required: true })}
        />
        <button type="submit">
          <IoSendSharp size={30} className="mr-2" color="#095234" />
        </button>
        <BsFillEmojiDizzyFill
          size={30}
          color="#095234"
          className="mx-4 cursor-pointer hidden lg:block"
          onClick={handleEmoji}
        />
        {showEmoji && (
          <div className=" z-30 absolute right-[2%] bottom-16">
            <EmojiPicker
              onEmojiClick={(emojiObject) =>
                setValue("message", getValues("message") + emojiObject.emoji)
              }
            />
          </div>
        )}
      </form>
    </div>
  );
}
