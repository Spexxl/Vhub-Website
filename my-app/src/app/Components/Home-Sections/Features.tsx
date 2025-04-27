"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import FeaturesBanner01 from "@/app/assets/FeaturesBanner01.png"
import type { StaticImageData } from "next/image"
import FeaturesBanner02 from "@/app/assets/FeaturesBanner02.png"
import FeaturesBanner03 from "@/app/assets/FeaturesBanner03.png"
import Footer from "../Footer"

interface FeatureSectionProps {
    number: string
    titlePart1: string
    titlePart2: string
    description: string
    image: StaticImageData
}

function FeatureSection({ number, titlePart1, titlePart2, description, image }: FeatureSectionProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    })
    const isInView = useInView(ref)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

    return (
        <motion.section
            ref={ref}
            style={{
                scale,
                position: "sticky",
                top: 0,
                zIndex: Number(number) + 10,
            }}
            className="bg-white flex items-center justify-start h-screen w-full"
        >
            <div className="h-full w-1/2 flex flex-col pl-10 py-20 items-start justify-between">
                <div className="font-medium text-7xl text-foreground flex flex-col items-start justify-center gap-10">
                    <div className="overflow-hidden relative flex items-center h-24">
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: isInView ? "0%" : "100%" }}
                            transition={{
                                duration: 1.2,
                                ease: [1, 0.20, 0.35, 0.8],
                            }}
                            className="text-8xl block"
                        >
                            {number}
                        </motion.span>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <div className="overflow-hidden relative flex items-center h-26">
                            <motion.h3
                                initial={{ y: "100%" }}
                                animate={{ y: isInView ? "0%" : "100%" }}
                                transition={{
                                    duration: 1.2,
                                    ease: [1, 0.20, 0.35, 1],
                                }}
                                className="text-8xl block"
                            >
                                {titlePart1}
                            </motion.h3>
                        </div>
                        <div className="overflow-hidden relative flex items-center h-26">
                            <motion.h3
                                initial={{ y: "100%" }}
                                animate={{ y: isInView ? "0%" : "100%" }}
                                transition={{
                                    duration: 1.2,
                                    ease: [1, 0.20, 0.35, 1],
                                }}
                                className="text-8xl block"
                            >
                                {titlePart2}
                            </motion.h3>
                        </div>
                    </div>
                </div>
                <div className="max-w-[320px] font-medium text-base text-foreground">
                    <div className=" overflow-hidden relative flex items-center h-60">
                        {description}
                    </div>
                </div>
            </div>
            <div className="h-full w-1/2">
                <Image
                    src={image}
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
        </motion.section>
    )
}

export default function Features() {
    return (
        <div className="relative w-full">
            <FeatureSection
                number="01-"
                titlePart1="Progresso"
                titlePart2="Fácil"
                description="Veja seus resultados em gráficos, histórico e metas alcançadas. Tudo atualizado automaticamente, sem complicação."
                image={FeaturesBanner01}
            />
            <FeatureSection
                number="02-"
                titlePart1="Treino"
                titlePart2="sob medida"
                description="Monte e acompanhe treinos personalizados com poucos toques. Mostramos exatamente o que fazer — e como evoluir"
                image={FeaturesBanner02}
            />
            <FeatureSection
                number="03-"
                titlePart1="Controle"
                titlePart2="de Treino"
                description="Organize sua rotina com facilidade. O app avisa o que treinar, quando descansar e registra tudo no histórico"
                image={FeaturesBanner03}
            />
            <Footer
            />
        </div>
    )
}