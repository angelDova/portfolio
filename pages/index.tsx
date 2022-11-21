import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-[rgba(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Angel&apos;s Portfolio</title>
      </Head>

      <Header />

      {/* <Hero /> */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* <Experience /> */}

      {/* <Skills /> */}

      {/* <Projects /> */}

      {/* <Contact /> */}
    </div>
  );
}
