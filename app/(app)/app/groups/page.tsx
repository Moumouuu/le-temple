import getConversation from "@/app/actions/getConversation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import UserAuthorize from "@/app/wrappers/userAuthorize";

import getAllUsers from "@/app/actions/getAllUsers";

import Header from "../components/Header";
import SideBarListUsers from "../components/SideBarListUsers";
import Tchat from "../components/Tchat";
import PageContent from "./components/PageContent";

export default async function page({ searchParams }: any) {
  const currentUser = await getCurrentUser();
  const conversation = await getConversation({
    id: searchParams.conversationId,
  });
  const allUser = await getAllUsers(currentUser);

  return (
    <>
      {/*@ts-ignore*/}
      <UserAuthorize>
        <div className="h-[100vh] w-[100vw] flex flex-col">
          <Header />
          {conversation ? (
            <>
              {/*@ts-ignore*/}
              <Tchat conversation={conversation} currentUser={currentUser} />
            </>
          ) : (
            <>
              <PageContent currentUser={currentUser} allUser={allUser} />
            </>
          )}
        </div>
        <SideBarListUsers conversation={conversation} />
      </UserAuthorize>
    </>
  );
}
