import getCurrentUser from "./actions/getCurrentUser";
import Toast from "./components/Toast";

import { stateToaster } from "./types/stateToasterType";

export default async function Home() {
  const currentUser = await getCurrentUser();
  return (
    <div className="relative">
      {currentUser && (
        <Toast message={"Login succeful !"} state={stateToaster.success} />
      )}
    </div>
  );
}
