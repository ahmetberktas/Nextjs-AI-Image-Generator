import HomePageContainer from "@/containers/home";
import { HomePageProvider } from "@/containers/home/useHomepage";

export default function Home() {
  return (
    <HomePageProvider>
      <HomePageContainer />
    </HomePageProvider>
  );
}
