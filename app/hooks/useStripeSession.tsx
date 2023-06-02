import { useSearchParams } from "next/navigation";

import axios from "axios";

import UserType from "../types/userType";

interface getStripeSessionProps {
    currentUser: UserType;
}

export default function useStripeSession({currentUser}:getStripeSessionProps) {
    const searchParams = useSearchParams();
    const sessionId = searchParams?.get('session_id');

    const getCheckOutSession = async () => {

      if(!sessionId || !currentUser) {
          return false;
        }
    
        const session = await axios.post("/api/get-stripe-session", {
          sessionId:sessionId,
          currentUser: currentUser,
        });
        
        if(!session) {
          return false;
        }

        console.log(session.data.payment_status === 'paid')

        return session.data.payment_status === 'paid'; 
    }
  
    return getCheckOutSession;
}