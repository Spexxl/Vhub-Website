import Image from "next/image";

import WomenImage1 from "@/app/assets/WomenImage1.png";
import WomenImage2 from "@/app/assets/WomenImage2.png";

export default function AfterHero() {
    return (
        <div className="bg-[#0D0D0D] px-10 py-36 flex flex-col items-center justify-center gap-28 max-[980px]:px-5">
            <div className="flex flex-col items-center justify-center gap-0">
                <div className="overflow-hidden relative flex items-start">
                    <div className="text-base text-foreground opacity-80">
                        <div className="font-medium text-2xl text-white flex justify-center items-center max-[980px]:text-base">
                            <span className="text-6xl text-[#F8DC27]">*</span>
                            A Energia Que Transforma Cada Treino
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="overflow-hidden relative flex items-center">
                        <div className="opacity-80 font-semibold text-white text-9xl max-[980px]:text-[12vw]">
                            <h2>Treinar Nunca</h2>
                        </div>
                    </div>
                    <div className="overflow-hidden relative flex items-center">
                        <div className="opacity-80 font-semibold text-white text-9xl max-[980px]:text-[12vw]">
                            <h2>Foi Tão Fácil</h2>
                        </div>
                    </div>
                </div>

                <div className="font-medium italic text-white text-2xl flex flex-col justify-center items-center mt-12
                max-[560px]:text-base">
                    <div className="overflow-hidden relative flex items-start">
                        <p className="font-medium italic text-white text-center max-w-[500px]
                        max-[560px]:max-w-[360px]">
                            Resultados reais com planos personalizados.
                            Acompanhe sua evolução com dados,
                            <br />
                            metas e motivação.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit flex justify-between items-end max-[980px]:flex-col max-[980px]:gap-28">
                <div className="flex items-center justify-start max-[980px]:w-full">
                    <div>
                        <div>
                            <Image
                                src={WomenImage1}
                                alt=""
                                className="absolute z-1 mt-10 ml-10 max-[980px]:w-[52vw] max-[980px]:ml-[4vw] max-[980px]:mt-[4vw]"
                            />
                            <Image
                                src={WomenImage2}
                                alt=""
                                className="opacity-80 max-[980px]:w-[52vw]"
                            />
                        </div>
                        <div>
                            <div className="z-10 relative ml-40 mt-[-30px] max-[980px]:ml-[6vw] max-[980px]:mt-[-80px]">
                                <p className="font-semibold text-2xl text-white max-w-[460px] flex flex-col gap-6 z-10 max-[980px]:text-base">
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
                                <svg
                                    width="77"
                                    height="76"
                                    viewBox="0 0 77 76"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute ml-[-50px] mt-[-236px] -z-1 max-[980px]:w-8 max-[980px]:ml-[-20px] max-[980px]:mt-[-180px]"
                                >
                                    <path
                                        d="M66.8 10.8L76.8 28.8L50.8 38.2L76.8 47.6L66.4 66.2L44.8 48.4L49.4 76H28.6L33 48.4L11.6 66.6L0.600001 47.4L26.6 38L0.800001 29L11 10.6L33.2 28.2L28.6 0.399993H49.6L44.8 28.2L66.8 10.8Z"
                                        fill="#FFBB00"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end justify-end gap-4 mb-10 max-[980px]:w-full">
                    <p className="font-medium text-white text-xl italic text-end max-w-[420px] max-[980px]:text-base">
                        <span className="text-[#FFBB00] text-7xl">“</span>
                        Com a Vibrant, treino virou hábito.
                        Ver meu progresso todo dia mudou minha vida.
                    </p>
                    <span className="text-base text-white opacity-75 text-end">
                        — Marina R., 28 anos
                    </span>
                </div>
            </div>
        </div>
    );
}
