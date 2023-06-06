"use client";
import useBadgeModal from "@/app/hooks/useBadgeModal";
import Image from "next/image";
import Modal from "./Modal";

const BadgeModal = () => {
  const { onClose, message } = useBadgeModal();

  const body = (
    <div className="flex flex-col items-center">
      <p className="text-2xl m-2">Vous venez de recevoir un badge ! </p>
      <p className="text-lg">{message}</p>
      <Image
        src="/assets/images/badge-message-1000.png"
        width={60}
        height={60}
        alt={"badge"}
      />
    </div>
  );

  return <Modal title="Félicitation !" body={body} handleClose={onClose} />;
};

export default BadgeModal;
