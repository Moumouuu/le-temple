"use client";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Toast = () => {
  const notify = () => toast.success("Login successful!");

  useEffect(() => {
    notify();
  }, []);

  return <Toaster />;
};
export default Toast;
