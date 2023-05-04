import MainBanner from "../components/banners/homePage/MainBanner";
import InnovateValues from "../components/banners/values/InnovateValues";
import LearningValues from "../components/banners/values/LearningValues";
import ShareValues from "../components/banners/values/ShareValues";

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
