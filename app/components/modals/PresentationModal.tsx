"use client";
import usePresentationModal from "@/app/hooks/usePresentationModal";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Modal from "./Modal";

const PresentationModal = ({ currentUser }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { onClose } = usePresentationModal();
  const router = useRouter();

  const onSubmit = (data: any) => {
    toast.promise(
      axios.post("/api/user", { data, user: currentUser }),
      {
        loading: "Enregistrement de votre profil...",
        success: "Votre profil a bien été enregistrée !",
        error:
          "Une erreur est survenue lors de l'enregistrement de votre profil, les informations vous seront demandées à votre prochaine connexion.",
      }
    );

    onClose();
  };

  const body = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center">
        <p className="text-center">
          Vous pouvez maintenant discuter avec les autres utilisateurs
        </p>
        <div className="my-8">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="username"
          >
            Comment souhaitez-vous être appelé ?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            autoComplete="off"
            placeholder="Votre pseudo"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-red-800">This field is required</span>
          )}

          <label className="block text-black text-sm font-bold my-2">
            Présenter vous en quelques mots
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline resize-none"
            placeholder="Votre présentation"
            rows={5}
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-red-800">This field is required</span>
          )}
        </div>
        <input
          type="submit"
          className="px-4 py-3 text-white rounded-xl cursor-pointer bg-gradient-to-r from-[#095234] to-[#16925F]"
          value={"C'est parti !"}
        />
      </div>
    </form>
  );

  return (
    <Modal
      title="Bienvenue sur Le Temple !"
      body={body}
      handleClose={onClose}
    />
  );
};

export default PresentationModal;
