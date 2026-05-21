import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Identity from "@/components/Identity";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";
import Organisation from "@/components/Organisation";
import Ticker from "@/components/Ticker";
import Vision from "@/components/Vision";
import Demands from "@/components/Demands";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Identity />
        <Vision />
        <Demands />
        <Join />
        <Organisation />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
