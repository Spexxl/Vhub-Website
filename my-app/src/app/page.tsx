'use client';
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';

import Header from "./Components/Header";
import Hero from "./Components/Home-Sections/Hero";
import AfterHero from "./Components/Home-Sections/AfterHero";
import Features from "./Components/Home-Sections/Features";
import Footer from "./Components/Footer";

export default function Home() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 

  useEffect( () => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="relative">
      <TopSection scrollYProgress={scrollYProgress}/>
      <AfterHeroAnimate scrollYProgress={scrollYProgress}/>
      <Features/>
    </div>
  );
}


const TopSection = ({scrollYProgress}: {scrollYProgress: MotionValue<number>}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 h-screen bg-white">
      <Header/>
      <Hero/>
    </motion.div>
  )
}

const AfterHeroAnimate = ({scrollYProgress}: {scrollYProgress: MotionValue<number>}) => {
  const scale = useTransform(scrollYProgress, [0, 0.24], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.24], [5, 0])
  return (
    <motion.div style={{scale, rotate}} className="relative">
      <AfterHero/>
    </motion.div>
  )
}