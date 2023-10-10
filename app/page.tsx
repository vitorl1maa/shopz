import { CallBands } from "@/components/CallBands";
import { CallProducts } from "@/components/CallProducts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeComponent } from "@/components/HomeComponent";

export default async function Home() {
  return (
    <main>
      <Header />
      <HomeComponent />
      <CallProducts />
      <CallBands />
      <Footer />
    </main>
  );
}
