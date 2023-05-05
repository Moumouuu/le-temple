"use client";

import AboutBanner from "./components/banners/homePage/AboutBanner";
import BeDifferent from "./components/banners/homePage/BeDifferent";
import MainBanner from "./components/banners/homePage/MainBanner";
import QuoteOneBanner from "./components/banners/homePage/QuoteOneBanner";
import QuoteTwoBanner from "./components/banners/homePage/QuoteTwoBanner";

export default async function Home() {
  return (
    <div>
      <MainBanner title="Le Temple" />
      <AboutBanner />
      <QuoteOneBanner />
      <BeDifferent />
      <QuoteTwoBanner />
    </div>
  );
}
