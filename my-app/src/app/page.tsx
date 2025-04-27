'use client';
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';

import Header from "./Components/Header";
import Hero from "./Components/Home-Sections/Hero";
import AfterHero from "./Components/Home-Sections/AfterHero";
import Features from "./Components/Home-Sections/Features";

export default function Home() {

  const container = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    let lenis: Lenis | null = null;
    let rafId: number;

    const timeout = setTimeout(() => {
      document.body.style.overflow = "";

      lenis = new Lenis({ duration: 1.2 });
      function raf(time: number) {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }, 4000);

    return () => {
      clearTimeout(timeout);
      if (lenis) lenis.destroy();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <div className="relative">
      <TopSection scrollYProgress={scrollYProgress} />
      <AfterHeroAnimate scrollYProgress={scrollYProgress} />
      <Features />
    </div>
  );
}


const TopSection = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen bg-white">
      <Header />
      <Hero />
    </motion.div>
  )
}
const AfterHeroAnimate = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const scale = useTransform(scrollYProgress, [0, 0.24], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.24], [5, 0])
  return (
    <motion.div style={{ scale, rotate }} className="relative">
      <AfterHero />
    </motion.div>
  )
}