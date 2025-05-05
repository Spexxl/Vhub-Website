'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVisible, setCursorVisible] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    interface MousePosition {
        x: number;
        y: number;
    }
    const onMouseMove = (e: MouseEvent): void => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        if (menuOpen) {
            window.addEventListener('mousemove', onMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, [menuOpen]);

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Sobre", href: "/#sobre" },
        { name: "Suporte", href: "/#suporte" },
        { name: "Termos", href: "/politicas-de-privacidade" }
    ];

    const socialLinks = [
        { name: "--", href: "" },
        { name: "Instagram", href: "https://www.instagram.com/vibranthubapp/" },
    ];

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className="flex justify-between items-center w-full px-10 py-5 absolute top-0 z-20 max-[980px]:px-5">
                <div className="overflow-hidden relative flex items-center">
                    <motion.a
                        href="/"
                        initial={{ y: "-100%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                            delay: 2.7,
                        }}>
                        <svg width="54" height="24" viewBox="0 0 54 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.41032 22H10.7371L18.2514 5.58531L20 5.58099V2.0216L16.0074 2.02592L10.0696 14.9935L5.87633 5.58963H7.22359L8.75102 2.25486L8.74693 2.0216L0.036855 2L0 5.60691H1.99836L9.41032 22Z" fill="#222427" />
                            <path d="M31.824 6.848V18H30.368V12.944H24.688V18H23.232V6.848H24.688V11.744H30.368V6.848H31.824ZM35.7341 6.848V13.904C35.7341 14.896 35.9741 15.632 36.4541 16.112C36.9448 16.592 37.6221 16.832 38.4861 16.832C39.3395 16.832 40.0061 16.592 40.4861 16.112C40.9768 15.632 41.2221 14.896 41.2221 13.904V6.848H42.6781V13.888C42.6781 14.816 42.4915 15.6 42.1181 16.24C41.7448 16.8693 41.2381 17.3387 40.5981 17.648C39.9688 17.9573 39.2595 18.112 38.4701 18.112C37.6808 18.112 36.9661 17.9573 36.3261 17.648C35.6968 17.3387 35.1955 16.8693 34.8221 16.24C34.4595 15.6 34.2781 14.816 34.2781 13.888V6.848H35.7341ZM50.691 12.256C51.0963 12.32 51.4643 12.4853 51.795 12.752C52.1363 13.0187 52.403 13.3493 52.595 13.744C52.7977 14.1387 52.899 14.56 52.899 15.008C52.899 15.5733 52.755 16.0853 52.467 16.544C52.179 16.992 51.7577 17.3493 51.203 17.616C50.659 17.872 50.0137 18 49.267 18H45.107V6.848H49.107C49.8643 6.848 50.5097 6.976 51.043 7.232C51.5763 7.47733 51.9763 7.81333 52.243 8.24C52.5097 8.66667 52.643 9.14667 52.643 9.68C52.643 10.3413 52.4617 10.8907 52.099 11.328C51.747 11.7547 51.2777 12.064 50.691 12.256ZM46.563 11.664H49.011C49.6937 11.664 50.2217 11.504 50.595 11.184C50.9683 10.864 51.155 10.4213 51.155 9.856C51.155 9.29067 50.9683 8.848 50.595 8.528C50.2217 8.208 49.683 8.048 48.979 8.048H46.563V11.664ZM49.139 16.8C49.8643 16.8 50.4297 16.6293 50.835 16.288C51.2403 15.9467 51.443 15.472 51.443 14.864C51.443 14.2453 51.2297 13.76 50.803 13.408C50.3763 13.0453 49.8057 12.864 49.091 12.864H46.563V16.8H49.139Z" fill="#222427" />
                        </svg>

                    </motion.a>
                </div>
                <div className="overflow-hidden relative flex items-center">
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                            delay: 2.7,
                        }}>
                        <button
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F8DC27] text-black"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? (
                                <span className="text-sm font-medium">X</span>
                            ) : (
                                <span className="text-sm font-medium">M</span>
                            )}
                        </button>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="fixed inset-0 z-10 bg-black/90 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative h-full w-full flex">
                            {cursorVisible && (
                                <motion.div
                                    className="bg-[#F8DC27] rounded-full fixed pointer-events-none flex items-center justify-center z-50"
                                    style={{
                                        left: mousePosition.x,
                                        top: mousePosition.y,
                                        width: "80px",
                                        height: "80px",
                                        transform: "translate(-50%, -50%)"
                                    }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        transition: { duration: 0.2 }
                                    }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                >
                                    <span className="text-black text-sm">Acessar</span>
                                </motion.div>
                            )}

                            {/* Conteúdo do Menu - Lado Esquerdo (Social) */}
                            <motion.div
                                className="absolute left-0 top-0 bottom-0 w-1/4 p-10 flex flex-col justify-between"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: 0.6, duration: 0.5 }
                                }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div>
                                    {socialLinks.map((link, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                transition: { delay: 0.8 + index * 0.1 }
                                            }}
                                            className="py-3"
                                        >
                                            <a
                                                href={link.href}
                                                target='_blank'
                                                className="text-white hover:text-gray-300 transition-colors"
                                                onMouseEnter={() => setCursorVisible(true)}
                                                onMouseLeave={() => setCursorVisible(false)}
                                                onClick={handleLinkClick}
                                            >
                                                {link.name}
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { delay: 1.3 }
                                    }}
                                >
                                    <span
                                        className="text-white hover:text-gray-300 transition-colors"
                                        onMouseEnter={() => setCursorVisible(true)}
                                        onMouseLeave={() => setCursorVisible(false)}
                                    >
                                        suporte@vibranthub.com.br
                                    </span>
                                </motion.div>
                            </motion.div>

                            {/* Conteúdo do Menu - Lado Direito (Menu Principal) */}
                            <motion.div
                                className="absolute right-0 top-0 bottom-0 w-full flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { delay: 0.6, duration: 0.3 }
                                }}
                                exit={{ opacity: 0 }}
                            >
                                <div>
                                    <div className="w-full flex flex-col items-start">
                                        {menuItems.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0.3, y: 20 }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { delay: 0.8 + index * 0.1 }
                                                }}
                                                className="py-5"
                                            >
                                                <a
                                                    href={item.href}
                                                    className={`text-6xl md:text-8xl font-light text-white opacity-50 hover:opacity-100 transition-opacity
                                                ${index === 3 ? 'text-white' : 'text-gray-400'}`}
                                                    onMouseEnter={() => setCursorVisible(true)}
                                                    onMouseLeave={() => setCursorVisible(false)}
                                                    onClick={handleLinkClick}
                                                >
                                                    {item.name}
                                                </a>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}