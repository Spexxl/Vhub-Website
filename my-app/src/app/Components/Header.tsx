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
        { name: "Fale Conosco", href: "/fale-conosco" },
        { name: "Termos", href: "/politicas-de-privacidade" }
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
                            delay: 1.4,
                        }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.8206 40H21.4742L36.5029 7.17063L40 7.16199V0.0431966L32.0147 0.0518359L20.1392 25.987L11.7527 7.17927H14.4472L17.502 0.509719L17.4939 0.0431966L0.0737101 0L0 7.21382H3.99672L18.8206 40Z" fill="#ffffff" />
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
                            delay: 1.4,
                        }}>
                        <button
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F8DC27] text-black"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? (
                                <span className="text-sm font-medium">X</span>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg " className='w-4.5'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                                <path d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22
                                13H2C1.44772 13 1 12.5523 1 12Z" fill="#0F0F0F"></path> <path d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523
                                3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z" fill="#0F0F0F"></path>
                                <path d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z"
                                fill="#0F0F0F"></path> </g>
                                </svg>
                            )}
                        </button>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="fixed inset-0 z-10 bg-black/90 backdrop-blur-sm"
                        onClick={() => setMenuOpen(false)}
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

                            {/* Conteúdo do Menu - Lado Direito (Menu Principal) */}
                            <motion.div
                                className="absolute right-0 top-0 bottom-0 w-full flex items-center justify-center pl-5"
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