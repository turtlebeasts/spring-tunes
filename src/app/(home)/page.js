import { BannerProvider } from "../api/context/BannerContext";
import ArtistsSection from "./components/artists/artists";
import Hero from "./components/hero/hero";
import Videos from "./components/videos/videos";

export default function Home() {
  return (
    <div>
      <BannerProvider>
        <Hero />
      </BannerProvider>
      <ArtistsSection />
      <Videos />
    </div>
  );
}
