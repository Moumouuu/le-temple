"use client";
import { useRouter, useSearchParams } from "next/navigation";

import axios from "axios";

import UserType from "../types/userType";

interface getStripeSessionProps {
  currentUser: UserType;
}

export default function useStripeSession({
  currentUser,
}: getStripeSessionProps) {
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get("session_id");

  const getCheckOutSession = async () => {
    if (!sessionId || !currentUser) {
      return false;
    }

    const baseUrl =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_DEV_API_URL
        : process.env.NEXT_PUBLIC_API_URL;
        
    const res = await axios.post(`${baseUrl}/api/get-stripe-session`, {
      sessionId: sessionId,
      currentUser: currentUser,
    });
  };

  getCheckOutSession();
}
