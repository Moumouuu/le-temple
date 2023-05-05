"use client";

import AboutHistoryBanner from "../components/banners/historyPage/AboutHistoryBanner";
import MeHistoryBanner from "../components/banners/historyPage/MeHistoryBanner";
import MainBanner from "../components/banners/MainBanner";
import { InitialTransition } from "../framer-motion/InitialTransition";

export default function page() {
  return (
    <div>
      <MainBanner title="Mon Histoire" />
      <AboutHistoryBanner />
      <MeHistoryBanner />
    </div>
  );
}
