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
  const router = useRouter();

  const getCheckOutSession = async () => {
    if (!sessionId || !currentUser) {
      return false;
    }

    const res = await axios.post(
      'https://le-temple.vercel.app/api/get-stripe-session',
      {
        sessionId: sessionId,
        currentUser: currentUser,
      }
    );
  };

  getCheckOutSession();
}
