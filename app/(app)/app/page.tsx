import getConversation from "@/app/actions/getConversation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import UserAuthorize from "@/app/wrappers/userAuthorize";
import Header from "./components/Header";
import SideBarListUsers from "./components/SideBarListUsers";
import Tchat from "./components/Tchat";

export default async function App() {
  const currentUser = await getCurrentUser();
  const conversation = await getConversation({ title: "Général" });
  //todo : vérif que l'utilisateur a bien payé avec un middleware

  return (
    <>
      {/*@ts-ignore*/}
      <UserAuthorize>
        <div className="h-[100vh] w-[100vw] flex flex-col">
          <Header />
          {/*@ts-ignore*/}
          <Tchat
            conversation={conversation}
            imageUrl="men.png"
            currentUser={currentUser}
          />
        </div>
        <SideBarListUsers conversation={conversation} />
      </UserAuthorize>
    </>
  );
}
