import { redirect } from "next/navigation";
import getCurrentUser from "../actions/getCurrentUser";

const UserAuthorize = async ({ children }: any) => {
  const user = await getCurrentUser();

  if (!user?.paid) {
    //redirect to home page
    return redirect("/");
  }

  return children;
};

export default UserAuthorize;
