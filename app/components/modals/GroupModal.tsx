"use client";
import useGroupModal from "@/app/hooks/useGroupModal";
import { User } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Button from "../buttons/Button";
import Modal from "./Modal";

interface GroupModalProps {
  allUser: User[];
  currentUser: User;
}

const GroupModal = ({ allUser, currentUser }: GroupModalProps) => {
  const { onClose } = useGroupModal();
  const [users, setUsers] = useState<User[]>([]);
  const [groupName, setGroupName] = useState("");
  const router = useRouter();

  const toggleCheckbox = (user: User) => {
    if (users.includes(user)) {
      setUsers(users.filter((u) => u.id !== user.id));
    } else {
      setUsers([...users, user]);
    }
  };

  const createGroup = async () => {
    if (users.length < 2) {
      return toast.error("Vous devez sélectionner au moins 2 personnes.");
    }
    if (!groupName) {
      return toast.error("Vous devez donner un nom au groupe.");
    }

    let res = await toast.promise(
      axios.post("/api/groups", {
        users,
        currentUser,
        title: groupName,
      }),
      {
        loading: "Création du groupe...",
        success: "Groupe créé !",
        error: "Erreur lors de la création du groupe",
      }
    );
    onClose();
    router.push(`/app/groups/?conversationId=${res.data.conversation.id}`);
  };

  const body = (
    <div className="flex flex-col items-center ">
      <p className="text-md lg:text-xl m-4">
        Sélectionner les personnes que vous souhaitez ajouter à votre groupe.
      </p>
      <div className="my-4 flex flex-col">
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="w-[100%] px-5 py-3 text-gray-700 placeholder-gray-400 border rounded-md focus:shadow-outline"
          placeholder="Nom du groupe"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 h-[200px] overflow-y-scroll">
        {allUser.map((user: User) => (
          <div key={user.id} className="flex flex-row items-center mx-4 my-2">
            <input
              type="checkbox"
              id={`checkbox-${user.id}`}
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              onChange={() => toggleCheckbox(user)}
            />
            <label
              htmlFor={`checkbox-${user.id}`}
              className="flex items-center"
            >
              <Image
                src={user.image!}
                className="rounded-full"
                alt="avatar"
                width={50}
                height={50}
              />
              <p className="m-2">{user.name}</p>
            </label>
          </div>
        ))}
      </div>

      <div className="my-6">
        <Button label="+ Créer le groupe" action={createGroup} />
      </div>
    </div>
  );

  return <Modal title="Créer un groupe" body={body} handleClose={onClose} />;
};

export default GroupModal;
