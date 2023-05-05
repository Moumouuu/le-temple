"use client";

import MainBanner from "../components/banners/homePage/MainBanner";
import InnovateValues from "../components/banners/valuesPage/InnovateValues";
import LearningValues from "../components/banners/valuesPage/LearningValues";
import ShareValues from "../components/banners/valuesPage/ShareValues";

export default function page() {
  return (
    <div>
      <MainBanner title="Mes Valeurs" />
      <LearningValues />
      <ShareValues />
      <InnovateValues />
    </div>
  );
}
