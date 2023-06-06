import getCurrentUser from "@/app/actions/getCurrentUser";
import Header from "./components/Header";
import Tchat from "./components/Tchat";

export default async function App() {
  const currentUser = await getCurrentUser();

  //todo : vérif que l'utilisateur a bien payé avec un middleware

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col">
      <Header />
      {/*@ts-ignore*/}
      <Tchat title="Général" imageUrl="men.png" currentUser={currentUser} />
    </div>
  );
}
