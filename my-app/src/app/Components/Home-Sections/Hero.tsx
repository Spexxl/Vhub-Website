'use client'
import { motion } from 'framer-motion';

import HeroBanner from '@/app/assets/HeroBanner.png';

export default function Hero() {
    const bars = [
        { id: 1, duration: 0.6 },
        { id: 2, duration: 0.8 },
        { id: 3, duration: 1.1 },
    ];

    return (
        <div className="w-full h-screen bg-white flex items-end justify-center gap-10 max-[980px]:flex-col
        max-[980px]:items-center max-[980px]:justify-between">
            <div className="w-full h-full flex flex-col items-center justify-start gap-28 pt-54 max-[980px]:pt-30">
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="overflow-hidden relative flex items-center">
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            transition={{
                                duration: 0.8,
                                ease: [1, 0.20, 0.35, 0.8],
                                delay: 2.4,
                            }}
                            className="text-base text-foreground opacity-80">
                            O APP DE TREINO ABSOLUTO
                        </motion.span>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <div className="overflow-hidden relative flex items-center">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: "0%" }}
                                transition={{
                                    duration: 0.8,
                                    ease: [1, 0.20, 0.45, 0.55],
                                    delay: 1,
                                }}
                                className="text-7xl font-semibold text-foreground max-[1400px]:text-[5vw] max-[980px]:text-[10vw]">
                                UMA NOVA ERA
                            </motion.h1>
                        </div>


                        <div className="flex items-center gap-3">
                            <motion.svg
                                width="328"
                                height="71"
                                viewBox="0 0 328 71"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
                                className="max-[1400px]:w-[24vw] max-[980px]:w-[44vw]">
                                <motion.path
                                    d="M33.8771 71H38.6536L65.7052 12.7279L72 12.7125V0.0766739L57.6265 0.0920086L36.2506 46.127L21.1548 12.7432H26.0049L31.5037 0.904752L31.4889 0.0766739L0.132678 0L0 12.8045H7.1941L33.8771 71Z"
                                    fill="#F8DC27"
                                />
                                <motion.path
                                    d="M90.9855 12.14V61H81.1855V12.14H90.9855Z
                                    M128.388 35.94C131.141 36.4533 133.405 37.83 135.178 40.07C136.951 42.31 137.838 44.8767 137.838 47.77C137.838 50.3833 137.185 52.6933 135.878 54.7C134.618 56.66 132.775 58.2 130.348 59.32C127.921 60.44 125.051 61 121.738 61H100.668V12.14H120.828C124.141 12.14 126.988 12.6767 129.368 13.75C131.795 14.8233 133.615 16.3167 134.828 18.23C136.088 20.1433 136.718 22.3133 136.718 24.74C136.718 27.5867 135.948 29.9667 134.408 31.88C132.915 33.7933 130.908 35.1467 128.388 35.94Z
                                    M110.468 32.3H119.428C121.761 32.3 123.558 31.7867 124.818 30.76C126.078 29.6867 126.708 28.17 126.708 26.21C126.708 24.25 126.078 22.7333 124.818 21.66C123.558 20.5867 121.761 20.05 119.428 20.05H110.468V32.3Z
                                    M120.338 53.02C122.718 53.02 124.561 52.46 125.868 51.34C127.221 50.22 127.898 48.6333 127.898 46.58C127.898 44.48 127.198 42.8467 125.798 41.68C124.398 40.4667 122.508 39.86 120.128 39.86H110.468V53.02H120.338Z
                                    M170.848 61L160.068 41.96H155.448V61H145.648V12.14H163.988C167.768 12.14 170.988 12.8167 173.648 14.17C176.308 15.4767 178.292 17.2733 179.598 19.56C180.952 21.8 181.628 24.32 181.628 27.12C181.628 30.34 180.695 33.2567 178.828 35.87C176.962 38.4367 174.185 40.21 170.498 41.19L182.188 61H170.848Z
                                    M155.448 34.61H163.638C166.298 34.61 168.282 33.98 169.588 32.72C170.895 31.4133 171.548 29.6167 171.548 27.33C171.548 25.09 170.895 23.3633 169.588 22.15C168.282 20.89 166.298 20.26 163.638 20.26H155.448V34.61Z
                                    M220.452 51.69H200.992L197.772 61H187.482L205.052 12.07H216.462L234.032 61H223.672L220.452 51.69Z
                                    M217.792 43.85L210.722 23.41L203.652 43.85H217.792Z
                                    M282.39 61H272.59L250.4 27.47V61H240.6V12.07H250.4L272.59 45.67V12.07H282.39V61Z
                                    M325.324 12.14V20.05H312.304V61H302.504V20.05H289.484V12.14H325.324Z"
                                    fill="#F8DC27"
                                />
                            </motion.svg>
                            <div className="overflow-hidden relative flex items-center">
                                <motion.h1
                                    initial={{ y: "100%" }}
                                    animate={{ y: "0%" }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [1, 0.20, 0.45, 0.55],
                                        delay: 1.1,
                                    }}
                                    className="text-7xl font-semibold text-foreground max-[1400px]:text-[5vw] max-[980px]:text-[10vw]">
                                    CHEGOU
                                </motion.h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: [1, 0.20, 0.45, 0.65], delay: 2.8 }}
                            className="rounded-full w-11 h-11 bg-[#FFBB00]"
                        />
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: [1, 0.20, 0.45, 0.55], delay: 2.95 }}
                            className="rounded-full w-11 h-11 ml-[-14px] bg-[#EBD12A]"
                        />
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: [1, 0.20, 0.45, 0.55], delay: 3.15 }}
                            className="rounded-full w-11 h-11 ml-[-14px] bg-[#F8DC27]"
                        />
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [1, 0.20, 0.45, 0.65], delay: 3.25 }}
                            className="rounded-full w-11 h-11 ml-[-14px] bg-[#F8E359]"
                        />
                    </div>

                </div>
                <div className="flex flex-col items-center justify-center gap-3 max-[980px]:hidden">
                    <div className="overflow-hidden relative flex items-center">
                        <motion.a
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            transition={{
                                duration: 0.8,
                                ease: 'easeOut',
                                delay: 2.7
                            }}
                            className="text-base text-foreground opacity-50 underline">
                            Acesse Agora
                        </motion.a>
                    </div>
                    
                    <div className="overflow-hidden relative flex items-center">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            transition={{
                                duration: 0.8,
                                ease: 'easeOut',
                                delay: 2.9,
                            }}>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="44" height="44" rx="22" fill="#F8DC27" />
                                <path d="M14.4721 31.6833C14.6937 31.6833 14.9154 31.6017 15.0904 31.4267L31.4237 15.0933C31.7621 14.755 31.7621 14.195 31.4237 13.8567C31.0854 13.5183 30.5254 13.5183 30.1871 13.8567L13.8537 30.19C13.5154 30.5283 13.5154 31.0883 13.8537 31.4267C14.0287 31.6017 14.2504 31.6833 14.4721 31.6833Z" fill="#222427" />
                                <path d="M30.8053 27.3316C31.2836 27.3316 31.6803 26.935 31.6803 26.4566V14.475C31.6803 13.9966 31.2836 13.6 30.8053 13.6H18.8236C18.3453 13.6 17.9486 13.9966 17.9486 14.475C17.9486 14.9533 18.3453 15.35 18.8236 15.35H29.9303V26.4566C29.9303 26.935 30.327 27.3316 30.8053 27.3316Z" fill="#222427" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="w-full h-full bg-gray-700 max-w-[850px] max-[980px]:max-w-full">
                <div className="w-full h-full relative overflow-hidden">
                    <div className="absolute inset-0 w-full h-full" style={{backgroundImage: `url(${HeroBanner.src})`, backgroundSize: 'cover', backgroundPosition: 'top', opacity: 0}} />
                    
                    <div className="absolute inset-0 flex flex-col">
                        {bars.map((bar, index) => (
                            <div key={bar.id} className="relative h-1/3 w-full overflow-hidden">
                                <div className="absolute inset-0">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `url(${HeroBanner.src})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'top',
                                        top: `${-index * 100}%`,
                                        height: '300%'
                                    }} />
                                </div>

                                <motion.div
                                    className="absolute inset-0 bg-white"
                                    initial={{ x: '0%' }}
                                    animate={{ x: '-100%' }}
                                    transition={{
                                        duration: bar.duration,
                                        ease: [0.65, 0, 0.65, 0.90],
                                        delay: 2.6
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}