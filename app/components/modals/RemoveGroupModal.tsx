"use client";
import useRemoveGroupModal from "@/app/hooks/useRemoveBadgeModal";

import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";

import Button from "../buttons/Button";
import Modal from "./Modal";

const RemoveGroupModal = ({ conversation }: any) => {
  const { onClose } = useRemoveGroupModal();
  const router = useRouter();

  const deleteGroup = async () => {
    const res = await toast.promise(
      fetch(`/api/groups?conversationId=${conversation.id}`, {
        method: "GET",
      }),
      {
        loading: "Suppression du groupe...",
        success: "Groupe supprimé !",
        error: "Erreur lors de la suppression du groupe.",
      }
    );
    if (res.status === 200) {
      onClose();
      router.refresh();
      router.push("/app/groups");
      return;
    }
    onClose();
  };

  const body = (
    <div className="flex flex-col items-center">
      <p className="text-md lg:text-xl m-2">
        Vous voulez supprimer ce groupe :{" "}
        <span className="text-[#095234]">{conversation.title}</span> ?
      </p>
      <p className="text-sm lg:text-md m-2 text-red-900">
        Cette action est irréversible.
      </p>
      <Button secondary label="Supprimer !" action={deleteGroup} />
    </div>
  );

  return <Modal title="Attention !" body={body} handleClose={onClose} />;
};

export default RemoveGroupModal;
