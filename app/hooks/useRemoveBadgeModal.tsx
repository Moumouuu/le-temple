import { create } from "zustand";

interface RemoveGroupModalState {
  showModal: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRemoveGroupModal = create<RemoveGroupModalState>((set) => ({
  showModal: false,
  onOpen: () => set((state) => ({ showModal: true })),
  onClose: () => set((state) => ({ showModal: false })),
}));

export default useRemoveGroupModal;
