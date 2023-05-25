import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import Main from "../../components/Main";
import Locations from "../../components/Locations";
import Direction from "../../components/Direction";
import Slider from "../../components/Slider";
import Purpose from "../../components/Purpose";
import Form from "../../components/Form";
import Features from "../../components/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Excellent Research Consult</title>
        <meta name="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main>
        <Main />
        <Hero />
        <Features />
        <Locations />
        <Slider />
        <Direction />
        <Purpose />
        <Form />
      </main>
    </>
  );
}
