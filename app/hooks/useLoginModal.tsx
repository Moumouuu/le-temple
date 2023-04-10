import { create } from "zustand";

interface LoginModalState {
  showModal: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoginModal = create<LoginModalState>((set) => ({
  showModal: false,
  onOpen: () => set((state) => ({ showModal: true })),
  onClose: () => set((state) => ({ showModal: false })),
}));

export default useLoginModal;
