import {
  HeroSection,
  LatestDiscoveries,
  SuggestSection,
  ImpactSection,
  SubscribeSection,
  Footer,
} from "./components";

export default function MusiciansApp() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <LatestDiscoveries />
      <SuggestSection />
      <ImpactSection />
      <SubscribeSection />
      <Footer />
    </main>
  );
}
