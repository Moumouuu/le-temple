import getCurrentUser from "./actions/getCurrentUser";

import Toast from "./components/Toast";
import AboutBanner from "./components/banners/homePage/AboutBanner";
import BeDifferent from "./components/banners/homePage/BeDifferent";
import MainBanner from "./components/banners/homePage/MainBanner";
import QuoteOneBanner from "./components/banners/homePage/QuoteOneBanner";
import QuoteTwoBanner from "./components/banners/homePage/QuoteTwoBanner";

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
      <QuoteOneBanner />
      <BeDifferent />
      <QuoteTwoBanner />
    </div>
  );
}
