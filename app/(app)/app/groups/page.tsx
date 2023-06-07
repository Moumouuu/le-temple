import UserAuthorize from "@/app/wrappers/userAuthorize";

export default function page() {
  return (
    <>
      {/*@ts-ignore*/}
      <UserAuthorize>
        <div>page</div>
      </UserAuthorize>
    </>
  );
}
