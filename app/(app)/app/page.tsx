import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function App() {
  const currentUser = await getCurrentUser();
  //todo : vérif que l'utilisateur a bien payé avec un middleware
  return <div>App</div>;
}
