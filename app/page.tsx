import { CallAppleWatch } from "@/components/CallAppleWatch";
import { CallProducts } from "@/components/CallProducts";
import { Header } from "@/components/Header";
import { HomeComponent } from "@/components/HomeComponent";

export default async function Home() {
  return (
    <main>
      <Header />
      <HomeComponent />
      <CallProducts />
      <CallAppleWatch />
    </main>
  );
}
