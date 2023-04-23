import getCurrentUser from "./actions/getCurrentUser";
import toast, { Toaster } from "react-hot-toast";
import Toast from "./components/Toast";

export default async function Home() {
  const currentUser = await getCurrentUser();
  return (
    <div className="relative">
      <h1>Home</h1>
      {currentUser && <Toast />}
    </div>
  );
}
