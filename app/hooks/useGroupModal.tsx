import { create } from "zustand";

interface GroupModalState {
  showModal: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useGroupModal = create<GroupModalState>((set) => ({
  showModal: false,
  message: "",
  onOpen: () => set((state) => ({ showModal: true })),
  onClose: () => set((state) => ({ showModal: false })),
}));

export default useGroupModal;
