import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import NotebooksComponent from "@/components/NotebooksComponent";

export default async function Notebooks() {
  return (
    <main>
      <Header />
      <NotebooksComponent />
      <Footer />
    </main>
  );
}
