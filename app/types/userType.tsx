import { User } from "@prisma/client";

export default interface UserType extends User {
  image: string;
  paid: boolean;
}
