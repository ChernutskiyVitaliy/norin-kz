import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import Certificates from "../components/Certificates";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <main className="bg-[#030923] text-white">
      <Navbar />
      <Hero />
      <Solutions />
      <Certificates />
      <Partners />
      <Contacts />
      <Footer />
    </main>
  );
}