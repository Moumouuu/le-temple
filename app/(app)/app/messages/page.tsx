import getAllUsers from "@/app/actions/getAllUsers";
import getConversation from "@/app/actions/getConversation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import UserAuthorize from "@/app/wrappers/userAuthorize";
import Header from "../components/Header";
import SideBarConversation from "../components/SideBarConversation";
import Tchat from "../components/Tchat";

export default async function page({ searchParams }: any) {
  const currentUser = await getCurrentUser();
  const allUsers = await getAllUsers(currentUser);
  const conversation = await getConversation({
    id: searchParams.conversationId,
  });

  return (
    <>
      {/*@ts-ignore*/}
      <UserAuthorize>
        <div className="relative h-[100vh] w-[100vw] flex flex-col">
          <Header />
          {conversation ? (
            <>
              {/*@ts-ignore*/}
              <Tchat conversation={conversation} currentUser={currentUser} />
            </>
          ) : (
            <>
              <p className="w-[100%] h-[100%] flex items-center justify-center text-center">
                Veuillez séléctionner / créer une conversation.
              </p>
            </>
          )}
        </div>
        {/*@ts-ignore*/}
        <SideBarConversation currentUser={currentUser} allUsers={allUsers} />
      </UserAuthorize>
    </>
  );
}
