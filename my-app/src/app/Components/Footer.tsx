'use client'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <div className="w-full h-screen relative z-50 bg-white flex flex-col justify-between items-center px-10
        max-[980px]:gap-28 max-[980px]:h-auto max-[980px]:px-5">
            <div className="flex items-start justify-between w-full pt-10 max-[980px]:flex-col max-[980px]:gap-20">
                <div className="flex flex-col justify-center items-start gap-4">
                    <div ref={ref} className="overflow-hidden relative flex items-center h-[120px]">
                        <motion.h4
                            initial={{ y: "100%" }}
                            animate={{ y: isInView ? "0%" : "100%" }}
                            transition={{
                                duration: 1.2,
                                ease: [1, 0.20, 0.35, 0.8],
                            }}
                            className="font-light text-9xl text-foreground max-[600px]:text-[22vw]">
                            Clique
                        </motion.h4>
                    </div>
                    <div ref={ref} className="overflow-hidden relative flex items-center h-[120px] max-[600px]:mt-[-3vw] max-[460px]:mt-[-7vw]">
                        <motion.h4
                            initial={{ y: "100%" }}
                            animate={{ y: isInView ? "0%" : "100%" }}
                            transition={{
                                duration: 1.2,
                                ease: [1, 0.20, 0.35, 0.8],
                            }}
                            className="font-medium text-9xl text-foreground max-[600px]:text-[22vw]">
                            Baixe
                        </motion.h4>
                    </div>
                    <div ref={ref} className="overflow-hidden relative flex items-center h-[120px] max-[600px]:mt-[-3vw] max-[460px]:mt-[-7vw]">
                        <motion.h4
                            initial={{ y: "100%" }}
                            animate={{ y: isInView ? "0%" : "100%" }}
                            transition={{
                                duration: 1.2,
                                ease: [1, 0.20, 0.35, 0.8],
                            }}
                            className="font-extrabold text-9xl text-foreground max-[600px]:text-[22vw]">
                            Evolua.
                        </motion.h4>
                    </div>
                </div>
                <div className="text-2xl text-foreground flex flex-col justify-center items-center gap-4 max-[600px]:w-full">
                    <div ref={ref} className="overflow-hidden relative flex items-center h-[40px]">
                        <motion.p
                            initial={{ y: "180%" }}
                            animate={{ y: isInView ? "0%" : "180%" }}
                            transition={{
                                duration: 1.3,
                                ease: [1, 0.20, 0.35, 0.8],
                            }}
                            className="text-2xl text-foreground max-[600px]:text-xl">
                            Disponível em :
                        </motion.p>
                    </div>

                    <div className="flex gap-6 justify-center items-center max-[600px]:w-full max-[600px]:gap-0 max-[600px]:justify-between">
                        <div className="flex items-center justify-center w-[320px] h-[220px] rounded-xl border-[2px] border-[#22242750]
                        max-[1240px]:w-[22vw] max-[980px]:w-[260px] max-[600px]:w-[43vw] max-[600px]:h-[40vw]">
                            <svg width="171" height="106" viewBox="0 0 171 106" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="max-[1240px]:h-[8vw] max-[980px]:h-full max-[600px]:w-[28vw]">
                                <path fillRule="evenodd" clipRule="evenodd" d="M63.353 1.0649C62.771 1.6809 62.429 2.6349 62.429 3.8729V48.0689C62.429 49.3069 62.771 50.2609 63.353 50.8769L63.501 51.0209L88.259 26.2629V25.6789L63.501 0.920898L63.353 1.0649Z" fill="#222427" />
                                <mask id="mask0_0_1" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="88" y="17" width="21" height="18">
                                    <path d="M96.509 34.5188L88.259 26.2628V25.6788L96.513 17.4248L106.477 23.0848C109.269 24.6728 109.269 27.2688 106.477 28.8548L96.699 34.4108L96.509 34.5188Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_0_1)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M96.509 34.5188L88.259 26.2628V25.6788L96.513 17.4248L106.477 23.0848C109.269 24.6728 109.269 27.2688 106.477 28.8548L96.699 34.4108L96.509 34.5188Z" fill="#222427" fillOpacity="0.8" />
                                </g>
                                <mask id="mask1_0_1" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="63" y="25" width="34" height="27">
                                    <path d="M96.699 34.4107L88.259 25.9707L63.353 50.8767C64.275 51.8507 65.795 51.9707 67.507 50.9987L96.699 34.4107Z" fill="white" />
                                </mask>
                                <g mask="url(#mask1_0_1)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M96.699 34.4107L88.259 25.9707L63.353 50.8767C64.275 51.8507 65.795 51.9707 67.507 50.9987L96.699 34.4107Z" fill="#222427" fillOpacity="0.8" />
                                </g>
                                <mask id="mask2_0_1" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="63" y="0" width="34" height="26">
                                    <path d="M96.699 17.531L67.507 0.943049C65.795 -0.0289513 64.275 0.0910487 63.353 1.06505L88.259 25.971L96.699 17.531Z" fill="white" />
                                </mask>
                                <g mask="url(#mask2_0_1)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M96.699 17.531L67.507 0.943049C65.795 -0.0289513 64.275 0.0910487 63.353 1.06505L88.259 25.971L96.699 17.531Z" fill="#222427" />
                                </g>
                                <path fillRule="evenodd" clipRule="evenodd" d="M132.512 97.5764H136.244V72.5744H132.512V97.5764ZM166.126 81.5804L161.848 92.4204H161.72L157.28 81.5804H153.26L159.918 96.7304L156.122 105.158H160.016L170.276 81.5804H166.126ZM144.962 94.7364C143.738 94.7364 142.034 94.1264 142.034 92.6144C142.034 90.6844 144.158 89.9444 145.99 89.9444C147.632 89.9444 148.402 90.2984 149.4 90.7804C149.11 93.0964 147.116 94.7364 144.962 94.7364ZM145.412 81.0344C142.71 81.0344 139.912 82.2244 138.754 84.8624L142.066 86.2444C142.774 84.8624 144.092 84.4104 145.476 84.4104C147.406 84.4104 149.368 85.5684 149.4 87.6284V87.8844C148.724 87.4984 147.278 86.9204 145.508 86.9204C141.938 86.9204 138.302 88.8824 138.302 92.5484C138.302 95.8944 141.23 98.0504 144.51 98.0504C147.02 98.0504 148.402 96.9244 149.272 95.6044H149.4V97.5344H153.002V87.9504C153.002 83.5104 149.69 81.0344 145.412 81.0344ZM122.348 84.6244H117.04V76.0544H122.348C125.138 76.0544 126.722 78.3644 126.722 80.3384C126.722 82.2764 125.138 84.6244 122.348 84.6244ZM122.252 72.5744H113.31V97.5764H117.04V88.1044H122.252C126.388 88.1044 130.454 85.1084 130.454 80.3384C130.454 75.5684 126.388 72.5744 122.252 72.5744ZM73.49 94.7404C70.912 94.7404 68.754 92.5824 68.754 89.6184C68.754 86.6224 70.912 84.4304 73.49 84.4304C76.036 84.4304 78.032 86.6224 78.032 89.6184C78.032 92.5824 76.036 94.7404 73.49 94.7404ZM77.774 82.9804H77.646C76.808 81.9824 75.198 81.0804 73.168 81.0804C68.914 81.0804 65.016 84.8164 65.016 89.6184C65.016 94.3864 68.914 98.0924 73.168 98.0924C75.198 98.0924 76.808 97.1904 77.646 96.1584H77.774V97.3824C77.774 100.638 76.036 102.378 73.232 102.378C70.944 102.378 69.526 100.734 68.946 99.3484L65.692 100.702C66.626 102.958 69.108 105.728 73.232 105.728C77.614 105.728 81.32 103.15 81.32 96.8684V81.5944H77.774V82.9804ZM83.898 97.5764H87.636V72.5724H83.898V97.5764ZM93.144 89.3284C93.048 86.0424 95.69 84.3664 97.59 84.3664C99.074 84.3664 100.33 85.1064 100.748 86.1704L93.144 89.3284ZM104.744 86.4924C104.036 84.5924 101.876 81.0804 97.462 81.0804C93.08 81.0804 89.44 84.5264 89.44 89.5864C89.44 94.3544 93.048 98.0924 97.88 98.0924C101.78 98.0924 104.036 95.7084 104.97 94.3224L102.07 92.3884C101.104 93.8064 99.782 94.7404 97.88 94.7404C95.98 94.7404 94.626 93.8704 93.756 92.1644L105.13 87.4604L104.744 86.4924ZM14.128 83.6904V87.2984H22.762C22.504 89.3284 21.828 90.8104 20.798 91.8424C19.54 93.0984 17.574 94.4824 14.128 94.4824C8.812 94.4824 4.654 90.1984 4.654 84.8824C4.654 79.5644 8.812 75.2804 14.128 75.2804C16.996 75.2804 19.09 76.4084 20.636 77.8584L23.182 75.3124C21.022 73.2504 18.156 71.6704 14.128 71.6704C6.846 71.6704 0.723999 77.6004 0.723999 84.8824C0.723999 92.1644 6.846 98.0924 14.128 98.0924C18.058 98.0924 21.022 96.8044 23.342 94.3864C25.726 92.0024 26.468 88.6524 26.468 85.9444C26.468 85.1064 26.404 84.3344 26.274 83.6904H14.128ZM36.286 94.7404C33.708 94.7404 31.484 92.6144 31.484 89.5864C31.484 86.5244 33.708 84.4304 36.286 84.4304C38.862 84.4304 41.086 86.5244 41.086 89.5864C41.086 92.6144 38.862 94.7404 36.286 94.7404ZM36.286 81.0804C31.58 81.0804 27.746 84.6564 27.746 89.5864C27.746 94.4824 31.58 98.0924 36.286 98.0924C40.99 98.0924 44.824 94.4824 44.824 89.5864C44.824 84.6564 40.99 81.0804 36.286 81.0804ZM54.912 94.7404C52.334 94.7404 50.11 92.6144 50.11 89.5864C50.11 86.5244 52.334 84.4304 54.912 84.4304C57.49 84.4304 59.712 86.5244 59.712 89.5864C59.712 92.6144 57.49 94.7404 54.912 94.7404ZM54.912 81.0804C50.208 81.0804 46.374 84.6564 46.374 89.5864C46.374 94.4824 50.208 98.0924 54.912 98.0924C59.616 98.0924 63.45 94.4824 63.45 89.5864C63.45 84.6564 59.616 81.0804 54.912 81.0804Z" fill="#222427" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-center w-[320px] h-[220px] rounded-xl border-[2px] border-[#22242750]
                        max-[1240px]:w-[22vw] max-[980px]:w-[260px] max-[600px]:w-[43vw] max-[600px]:h-[40vw]">
                            <svg width="151" height="96" viewBox="0 0 151 96" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="max-[1240px]:h-[8vw] max-[980px]:h-full max-[600px]:w-[28vw]">
                                <path fillRule="evenodd" clipRule="evenodd" d="M87.3781 23.7647C87.4218 20.3718 89.2006 17.2377 92.0912 15.4606C90.2593 12.8444 87.3011 11.2451 84.1089 11.1452C80.7504 10.7927 77.4945 13.1549 75.7831 13.1549C74.0385 13.1549 71.4035 11.1802 68.5661 11.2386C64.8327 11.3592 61.4366 13.4304 59.6202 16.6944C55.7522 23.3912 58.6374 33.2333 62.3426 38.6465C64.1964 41.2972 66.363 44.2581 69.1979 44.1531C71.972 44.0381 73.0081 42.3842 76.3567 42.3842C79.6742 42.3842 80.6463 44.1531 83.5387 44.0864C86.5155 44.038 88.391 41.4239 90.1797 38.7481C91.5117 36.8594 92.5366 34.7719 93.2166 32.5631C89.6811 31.0677 87.3822 27.6034 87.3781 23.7647Z" fill="#222427" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M81.9148 7.58476C83.5378 5.63634 84.3374 3.13198 84.1438 0.603516C81.6641 0.863957 79.3736 2.04908 77.7286 3.92274C76.1043 5.77135 75.2814 8.18984 75.4412 10.6455C77.9541 10.6714 80.3401 9.54328 81.9148 7.58476Z" fill="#222427" />
                                <path d="M34.2793 71.1095C38.8749 71.1095 41.9043 74.7423 41.9043 80.3536C41.9043 85.9806 38.8926 89.5958 34.3477 89.5958C31.9984 89.7187 29.7856 88.4882 28.6504 86.4278H28.5644V95.3966H24.8476V71.2989H28.4453V74.3106H28.5137C29.6993 72.2631 31.9145 71.0332 34.2793 71.1095ZM54.2089 71.1095C58.8047 71.1095 61.834 74.7423 61.834 80.3536C61.834 85.9806 58.8223 89.5958 54.2773 89.5958C51.9281 89.7187 49.7153 88.4882 48.5801 86.4278H48.4941V95.3966H44.7773V71.2989H48.3749V74.3106H48.4433C49.6289 72.2631 51.8441 71.0332 54.2089 71.1095ZM80.8926 64.1562C86.1406 64.1562 89.7383 67.0996 89.8594 71.3848H86.1074C85.8828 68.9062 83.8339 67.4102 80.8398 67.4102C77.8457 67.4102 75.7968 68.9238 75.7968 71.127C75.7968 72.8828 77.1054 73.916 80.3066 74.707L83.0429 75.3788C88.1386 76.5839 90.2558 78.6309 90.2558 82.2636C90.2558 86.9101 86.5546 89.8202 80.6679 89.8202C75.1601 89.8202 71.4414 86.9784 71.2011 82.4862L75.0059 82.4864C75.2812 84.9493 77.6739 86.5664 80.9434 86.5664C84.0762 86.5664 86.3301 84.9493 86.3301 82.7285C86.3301 80.8008 84.9707 79.6465 81.752 78.8555L78.5332 78.0801C73.9727 76.9785 71.8555 74.8457 71.8555 71.3848C71.8555 67.0996 75.5899 64.1562 80.8926 64.1562ZM112.303 71.0763C117.553 71.0763 120.893 74.6563 120.893 80.3536C120.893 86.0665 117.57 89.631 112.303 89.631C107.037 89.631 103.715 86.0665 103.715 80.3536C103.715 74.6564 107.07 71.0763 112.303 71.0763ZM142.4 71.0763C147.41 71.0763 150.561 74.5177 150.561 80.0079V81.2813H137.771V81.506C137.652 82.854 138.118 84.1884 139.05 85.1697C139.982 86.151 141.29 86.6846 142.643 86.6348C144.446 86.8038 146.147 85.7681 146.824 84.088L150.354 84.088C149.854 87.3751 146.652 89.631 142.557 89.631C137.289 89.631 134.02 86.1016 134.02 80.4395C134.02 74.7599 137.307 71.0763 142.4 71.0763ZM98.2773 67.0138V71.2989H101.721V74.2423H98.2773V84.2247C98.2773 85.7755 98.9668 86.4981 100.48 86.4981C100.889 86.491 101.297 86.4623 101.703 86.4121V89.3379C101.023 89.4651 100.331 89.5227 99.6387 89.5098C95.9727 89.5098 94.543 88.1328 94.543 84.6211V74.2423H91.9102V71.2989H94.5429V67.0138H98.2773ZM13.5723 64.5704L22.5391 89.4064H18.4609L16.1895 82.6935H6.72265L4.44921 89.4064H0.439453L9.40625 64.5704H13.5723ZM131.943 71.1094C132.372 71.108 132.799 71.1545 133.217 71.2481V74.7247C132.676 74.5595 132.112 74.4836 131.547 74.5001C130.454 74.4558 129.397 74.8912 128.652 75.6922C127.907 76.4931 127.55 77.5795 127.674 78.6661V89.4063H123.957V71.2989H127.502V74.3809H127.588C128.082 72.3969 129.9 71.0314 131.943 71.1094ZM112.303 74.1388C109.291 74.1388 107.502 76.463 107.502 80.3536C107.502 84.2775 109.291 86.5665 112.303 86.5665C115.315 86.5665 117.106 84.2775 117.106 80.3536C117.106 76.4454 115.315 74.1388 112.303 74.1388ZM33.2988 74.2774C30.459 74.2774 28.5488 76.7384 28.5488 80.3536C28.5488 84.0021 30.459 86.4454 33.2988 86.4454C36.1895 86.4454 38.084 84.0529 38.084 80.3536C38.084 76.6876 36.1894 74.2774 33.2988 74.2774ZM53.2285 74.2774C50.3887 74.2774 48.4785 76.7384 48.4785 80.3536C48.4785 84.0021 50.3887 86.4454 53.2285 86.4454C56.1191 86.4454 58.0137 84.0529 58.0137 80.3536C58.0137 76.6876 56.1191 74.2774 53.2285 74.2774ZM11.5079 68.7013H11.4044L7.70311 79.5958H15.2071L11.5079 68.7013ZM142.4 74.088C141.178 74.0807 140.003 74.562 139.137 75.425C138.271 76.288 137.786 77.4612 137.789 78.6837H146.842C146.909 77.4724 146.468 76.2878 145.625 75.4154C144.782 74.543 143.613 74.0619 142.4 74.088Z" fill="#222427" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-20">
                <nav className="flex justify-between items-start w-full">
                    <div className="flex flex-col items-start justify-center gap-8">
                        <div ref={ref} className="overflow-hidden relative flex items-center h-[40px]">
                            <motion.span
                                initial={{ y: "180%" }}
                                animate={{ y: isInView ? "0%" : "180%" }}
                                transition={{
                                    duration: 1.3,
                                    ease: [1, 0.20, 0.35, 0.8],
                                }}
                                className="text-base opacity-80">
                                (Navegação)
                            </motion.span>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <div ref={ref} className="overflow-hidden relative flex items-center h-[40px]">
                                <motion.a
                                    initial={{ y: "180%" }}
                                    animate={{ y: isInView ? "0%" : "180%" }}
                                    transition={{
                                        duration: 1.3,
                                        ease: [1, 0.20, 0.35, 0.8],
                                    }}
                                    href="/"
                                    className="font-bold text-2xl text-foreground">
                                    HOME
                                </motion.a>
                            </div>
                            <div ref={ref} className="overflow-hidden relative flex items-center h-[40px]">
                                <motion.a
                                    initial={{ y: "180%" }}
                                    animate={{ y: isInView ? "0%" : "180%" }}
                                    transition={{
                                        duration: 1.3,
                                        ease: [1, 0.20, 0.35, 0.8],
                                    }}
                                    href="/#sobre"
                                    className="font-bold text-2xl text-foreground">
                                    SOBRE
                                </motion.a>
                            </div>
                            <div ref={ref} className="overflow-hidden relative flex items-center h-[40px]">
                                <motion.a
                                    initial={{ y: "180%" }}
                                    animate={{ y: isInView ? "0%" : "180%" }}
                                    transition={{
                                        duration: 1.3,
                                        ease: [1, 0.20, 0.35, 0.8],
                                    }}
                                    href="/#suporte"
                                    className="font-bold text-2xl text-foreground">
                                    SUPORTE
                                </motion.a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-8">
                        <div ref={ref} className="overflow-hidden relative flex items-center h-[40px]">
                            <motion.span
                                initial={{ y: "180%" }}
                                animate={{ y: isInView ? "0%" : "180%" }}
                                transition={{
                                    duration: 1.3,
                                    ease: [1, 0.20, 0.35, 0.8],
                                }}
                                className="text-base opacity-80">
                                (Social)
                            </motion.span>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <div ref={ref} className="overflow-hidden relative flex items-center h-[40px]">
                                <motion.a
                                    initial={{ y: "180%" }}
                                    animate={{ y: isInView ? "0%" : "180%" }}
                                    transition={{
                                        duration: 1.3,
                                        ease: [1, 0.20, 0.35, 0.8],
                                    }}
                                    href="https://www.instagram.com/vibranthubapp/"
                                    target="_blank"
                                    className="font-bold text-2xl text-foreground">
                                    INSTAGRAM
                                </motion.a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-8 invisible">
                        <span className="text-base opacity-80">
                            (Navegação)
                        </span>
                        <div className="font-bold text-2xl text-foreground flex flex-col items-start justify-center gap-2">
                            <a href="">HOME</a>
                            <a href="">SOBRE</a>
                            <a href="">BENEFÍCIOS</a>
                        </div>
                    </div>
                </nav>
                <div className="pt-10 pb-8 flex items-center justify-between w-full text-base border-t-[1px] border-[#22242725] max-[600px]:flex-col
                max-[600px]:justify-start max-[600px]:items-start max-[600px]:gap-4">
                    <p>© Vibrant Hub 2025</p>
                    <a href="/politicas-de-privacidade" className="underline">Politicas De Privacidade</a>
                    <a href="https://adrh.space/" target="_blank" className="underline">By: Adrh</a>
                </div>
            </div>
        </div>
    )
}