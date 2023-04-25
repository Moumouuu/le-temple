import getCurrentUser from "./actions/getCurrentUser";

import Toast from "./components/Toast";
import AboutBanner from "./components/banners/homePage/AboutBanner";
import MainBanner from "./components/banners/homePage/MainBanner";
import { stateToaster } from "./types/stateToasterType";

export default async function Home() {
  const currentUser = await getCurrentUser();
  return (
    <div>
      {currentUser && (
        <Toast message={"Login succeful !"} state={stateToaster.success} />
      )}
      <MainBanner title="Le Temple" />
      <AboutBanner />
    </div>
  );
}
