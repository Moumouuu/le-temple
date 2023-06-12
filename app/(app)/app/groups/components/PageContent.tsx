"use client";
import Button from "@/app/components/buttons/Button";
import GroupModal from "@/app/components/modals/GroupModal";
import useGroupModal from "@/app/hooks/useGroupModal";
import { Toaster } from "react-hot-toast";

interface PageContentProps {
  allUser: any;
  currentUser: any;
}

export default function PageContent({
  allUser,
  currentUser,
}: PageContentProps) {
  const { showModal, onOpen } = useGroupModal();

  const handleCreateGroups = () => {
    onOpen();
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center justify-center text-center">
      <Toaster />

      <p className="my-3">Veuillez séléctionner / créer un groupe.</p>
      <Button label="+ Créer un groupe" action={handleCreateGroups} />
      {showModal && <GroupModal currentUser={currentUser} allUser={allUser} />}
    </div>
  );
}
