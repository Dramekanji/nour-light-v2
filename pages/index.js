import Head from "next/head";
import Main from "@/components/Main";
import About from "@/components/About";
import Ingredients from "@/components/Ingredients";
import Locations from "@/components/Locations";
import Conact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NourLight</title>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Ingredients />
      <Locations />
      <Conact />
      <Footer />
    </div>
  );
}
