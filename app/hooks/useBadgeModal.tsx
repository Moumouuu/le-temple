import { create } from "zustand";

interface BadgeModalState {
  showModal: boolean;
  message: string;
  setMessage: (message: string) => void;
  onOpen: () => void;
  onClose: () => void;
}

const useBadgeModal = create<BadgeModalState>((set) => ({
  showModal: false,
  message: "",
  setMessage: (message: string) => set((state) => ({ message })),
  onOpen: () => set((state) => ({ showModal: true })),
  onClose: () => set((state) => ({ showModal: false })),
}));

export default useBadgeModal;
