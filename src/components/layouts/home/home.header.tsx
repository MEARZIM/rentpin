'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Search, ShieldCheck, CheckCircle, User, Sparkles, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeHeader = () => {
    const containerRef = useRef(null);

    // Premium Spring Physics for high-end feel
    const springConfig = { stiffness: 50, damping: 20, mass: 1 };

    // Logic for subtle parallax depth
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 500], [0, -50]);

    const staggerContainer = {
        visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };


    return (
        <header ref={containerRef} className="relative px-6 md:px-12 pt-12 md:pt-20 pb-20 max-w-7xl mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content Column */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="relative z-10"
                >
                    <motion.div variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { type: "spring", ...springConfig }
                        }
                    }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006948]/5 border border-[#006948]/10 text-[#006948] text-xs font-bold uppercase tracking-widest mb-8">
                        <Sparkles size={14} />
                        The Direct-to-Owner Revolution
                    </motion.div>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { type: "spring", ...springConfig }
                            }
                        }}
                        className="font-heading text-5xl md:text-8xl font-bold leading-[0.95] tracking-tighter text-[#171c1f]"
                    >
                        Find Genuine <br />
                        <span className="italic font-serif font-light text-[#006948] drop-shadow-sm">Sanctuaries</span>
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { type: "spring", ...springConfig }
                            }
                        }}
                        className="mt-8 text-[#404944] text-lg md:text-xl leading-relaxed max-w-md opacity-90"
                    >
                        Moving beyond generic databases. Connect directly with architects and homeowners in a transparent, zero-fee community.
                    </motion.p>

                    {/* Premium Floating Search Bar */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { type: "spring", ...springConfig }
                            }
                        }}
                        whileHover={{ y: -5, scale: 1.01 }}
                        /* Applying Glassmorphism: 80% opacity + backdrop-blur.
                           Using rounded-full for the "Pill" shape. 
                           The border uses the "Ghost Border" rule at 15% opacity.
                        */
                        className="mt-12 p-1.5 bg-white/80 backdrop-blur-xl rounded-full shadow-[0_32px_64px_-16px_rgba(23,28,31,0.12)] border border-[#bccac0]/15 flex items-center group transition-all max-w-2xl mx-auto"
                    >
                        <div className="flex-1 flex items-center pl-6">
                            {/* Icon uses 'primary' (#006948) to reinforce trust */}
                            <Search size={20} className="text-[#006948] mr-3 shrink-0 transition-transform group-hover:scale-110" />
                            <input
                                type="text"
                                placeholder="Where are you moving?"
                                className="w-full bg-transparent border-none outline-none text-sm md:text-base py-3 font-medium text-[#171c1f] placeholder:text-[#404944]/40"
                            />
                        </div>

                        <Button
                            variant="premium"
                            /* Ensuring the button is a perfect pill shape to match the container.
                               Size scales from a compact mobile version to editorial desktop padding.
                            */
                            size="premium_sm"
                            className="rounded-full md:h-12 md:px-8 bg-linear-to-br from-[#006948] to-[#00855d] border-none shadow-md"
                        >
                            <span className="text-sm font-bold tracking-tight">Search</span>
                        </Button>
                    </motion.div>

                    <motion.div variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { type: "spring", ...springConfig }
                        }
                    }} className="mt-8 flex flex-wrap gap-6 items-center">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#404944]/60">
                            <ShieldCheck size={16} className="text-[#006948]" /> 100% Verified
                        </div>
                        <div className="w-1 h-1 rounded-full bg-[#bccac0]" />
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#404944]/60">
                            <CheckCircle size={16} className="text-[#006948]" /> Direct Agreements
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Visual Column */}
                <motion.div
                    style={{ y: yParallax }}
                    className="relative"
                >
                    {/* Main Hero Image with Scale Reveal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                        className="relative h-137.5 md:h-187.5 rounded-[3.5rem] overflow-hidden shadow-[0_48px_80px_-20px_rgba(23,28,31,0.2)]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
                            className="w-full h-full object-cover transition-transform duration-3000 hover:scale-105"
                            alt="Editorial Interior"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#171c1f]/40 via-transparent to-transparent" />
                    </motion.div>

                    {/* Floating Component 1: The "Live" Notification */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            // Vertical drift
                            y: [0, -15, 0],
                            // Subtle rotation to break the rigid grid
                            rotate: [0, 1.5, 0]
                        }}
                        transition={{
                            // Entrance: Snappy and weighted
                            x: { delay: 1, type: "spring", stiffness: 40, damping: 20 },
                            opacity: { delay: 1, duration: 1 },
                            // Floating: Slow, organic, and mirror-smooth
                            y: {
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                            rotate: {
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }
                        }}
                        /* Glassmorphism Logic: 80% opacity + backdrop-blur */
                        className="absolute -top-10 -right-4 bg-white/85 backdrop-blur-2xl p-4 rounded-4xl border border-white/40 shadow-[0_24px_48px_-12px_rgba(23,28,31,0.08)] hidden md:flex items-center gap-4 z-20"
                    >
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#006948] to-[#00855d] flex items-center justify-center text-white shadow-lg shadow-[#006948]/20">
                            <MapPin size={20} />
                        </div>
                        <div className="pr-2">
                            <p className="text-[10px] font-bold text-[#006948] uppercase tracking-[0.15em] mb-0.5">
                                Nearby
                            </p>
                            <p className="font-heading text-sm font-bold text-[#171c1f]">
                                Modernist Villa, LA
                            </p>
                        </div>
                    </motion.div>

                    {/* Floating Component 2: The Trust Card */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, type: "spring", ...springConfig }}
                        className="absolute -bottom-10 -left-10 bg-[#171c1f] text-white p-6 rounded-[2.5rem] shadow-2xl w-72 hidden lg:block"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="relative">
                                <img src="https://i.pravatar.cc/100?u=host" className="w-12 h-12 rounded-full border-2 border-[#006948]" />
                                <div className="absolute -bottom-1 -right-1 bg-[#006948] rounded-full p-1 border-2 border-[#171c1f]">
                                    <ShieldCheck size={10} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold italic font-serif">"No hidden fees."</p>
                                <p className="text-[10px] opacity-60">— Marcus, Verified Host</p>
                            </div>
                        </div>
                        <div className="h-px bg-white/10 w-full mb-4" />
                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                            <span>Direct Contact</span>
                            <span className="text-[#006948]">Active Now</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </header>
    );
};

export default HomeHeader;