import MainBanner from "./components/banners/MainBanner";
import AboutBanner from "./components/banners/homePage/AboutBanner";
import BeDifferent from "./components/banners/homePage/BeDifferent";
import QuoteOneBanner from "./components/banners/homePage/QuoteOneBanner";
import QuoteTwoBanner from "./components/banners/homePage/QuoteTwoBanner";

import { InitialTransition } from "./framer-motion/InitialTransition";

export default async function Home() {
  return (
    <div>
      <InitialTransition />
      {/* @ts-expect-error Server Component */}
      <MainBanner title="Le Temple" />
      <AboutBanner />
      <QuoteOneBanner />
      <BeDifferent />
      <QuoteTwoBanner />
    </div>
  );
}
