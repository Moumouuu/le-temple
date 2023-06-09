import { create } from "zustand";

interface PresentationModalState {
  showModal: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePresentationModal = create<PresentationModalState>((set) => ({
  showModal: true,
  onOpen: () => set((state) => ({ showModal: true })),
  onClose: () => set((state) => ({ showModal: false })),
}));

export default usePresentationModal;
