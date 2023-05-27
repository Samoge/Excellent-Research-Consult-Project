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
import Footer from "../../components/Footer";
import About from "../../components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Excellent Research Consult</title>
        <meta name="" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <NavBar />

      <main>
        <Main />
        <Hero />
        <About />
        <Features />
        <Locations />
        <Slider />
        <Direction />
        <Purpose />
        <Form />
        <Footer />
      </main>
    </>
  );
}
