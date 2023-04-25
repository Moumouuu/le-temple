import { User } from "@prisma/client";

export default interface UserType {
  currentUser: User | null;
}
