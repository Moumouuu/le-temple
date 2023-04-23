import { User } from "@prisma/client";

export default interface UserProps {
  currentUser: User | null;
}
