import Image from "next/image";
import { motion } from "framer-motion";

import WomenImage1 from "@/app/assets/WomenImage1.png";
import WomenImage2 from "@/app/assets/WomenImage2.png";

export default function AfterHero() {

    return (
        <div className="bg-[#0D0D0D] px-10 py-36 flex flex-col items-center justify-center gap-28">
            <div className="flex flex-col items-center justify-center gap-0">
                <div className="font-medium text-2xl text-white flex justify-center items-center">
                    <span className="text-6xl text-[#F8DC27]">
                        *
                    </span>
                    A Energia Que Transforma Cada Treino
                </div>
                <div className="font-semibold text-white text-9xl flex flex-col justify-center items-center gap-4">
                    <h2>Treinar Nunca</h2>
                    <h2>Foi Tão Fácil</h2>
                </div>
                <div className="font-medium italic text-white text-2xl flex flex-col justify-center items-center mt-6">
                    <p>Resultados reais com planos personalizados.</p>
                    <p> Acompanhe sua evolução com dados, </p>
                    <p>metas e motivação.</p>
                </div>
            </div>

            <div className="w-full h-fit flex  justify-between items-end">
                <div>
                    <div>
                        <Image
                            src={WomenImage1}
                            alt=""
                            className="absolute z-1 mt-10 ml-10"
                        />
                        <Image
                            src={WomenImage2}
                            alt=""
                            className="opacity-80"
                        />
                    </div>
                    <div>
                        <div className="z-10 relative ml-40 mt-[-30px]">
                            <p className="font-semibold text-2xl text-white max-w-[460px] flex flex-col gap-6 z-10">
                                Sinta o impacto de treinar com propósito.
                                Cada série, cada repetição
                                <br />
                                — pensada para você.
                                <br />
                                Transforme o esforço em conquista.
                                <span className="italic font-bold">
                                    No seu ritmo. No seu tempo.
                                </span>
                            </p>
                            <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="absolute ml-[-50px] mt-[-236px] -z-1">
                                <path d="M66.8 10.8L76.8 28.8L50.8 38.2L76.8 47.6L66.4 66.2L44.8 48.4L49.4 76H28.6L33 48.4L11.6 66.6L0.600001 47.4L26.6 38L0.800001 29L11 10.6L33.2 28.2L28.6 0.399993H49.6L44.8 28.2L66.8 10.8Z" fill="#FFBB00" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center end gap-4 mb-10">
                    <p className="font-medium text-white text-[20px] italic text-end max-w-[420px]">
                        <span className="text-[#FFBB00] text-7xl">“</span>
                        Com a Vibrant, treino virou hábito.
                        Ver meu progresso todo dia mudou minha vida.
                    </p>
                    <span className="text-base text-white opacity-75 text-end">— Marina R., 28 anos</span>
                </div>
            </div>
        </div>
    );
}