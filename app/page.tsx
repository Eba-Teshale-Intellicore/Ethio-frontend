"use client";

import Navbar from "@/components/Navbar";
import Zoom from "@/components/Zoom"
import Lhero from "@/components/Lhero"
import Timeline from "@/components/Timeline"
import HorScroll from "@/components/HorScroll"
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import Footer from "@/components/Footer"

export default function Home() {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main ref={container} className="min-h-screen">
      <Zoom />
      <Lhero scrollYProgres = {scrollYProgress} />
      <Timeline scrollYProgres = {scrollYProgress}/>
      <HorScroll />
      <Footer/>
    </main>
  );
}