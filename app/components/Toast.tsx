"use client";

import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { stateToaster } from "../types/stateToasterType";

interface ToastProps {
  message: string;
  state: stateToaster;
  action?: Promise<any>;
}

export const Toast = ({ message, state, action }: ToastProps) => {
  const notify = () => {
    switch (state) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "loading":
        if (!action)
          throw new Error("Action is required when state is loading");
        toast.promise(action, {
          loading: "Saving...",
          success: `${message} saved!`,
          error: "Error",
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    notify();
  }, []);

  return <Toaster />;
};
export default Toast;
