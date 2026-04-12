'use client'

import { useEffect, useState } from 'react';
import { BadgeCheck, Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';


const PremiumImage = ({ src, alt }: { src: string; alt: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative w-full h-full bg-[#f0f4f8] overflow-hidden">
            {!isLoaded && (
                <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                />
            )}

            <motion.img
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
                whileHover={{ scale: 1.08 }}
                transition={{
                    opacity: { duration: 1.2, ease: "easeOut" },
                    scale: { duration: 1.8, ease: [0.33, 1, 0.68, 1] },
                    // Hover transition for slow-mo zoom
                    default: { duration: 1.6, ease: [0.33, 1, 0.68, 1] }
                }}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

const HomeFeature = () => {

    const springTransition = {
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1,
    } as const;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { ...springTransition, duration: 0.8 }
        }
    };



    return (
        <main className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-40 bg-[#f6fafe]">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-between items-end mb-12 md:mb-16"
            >
                <div className="space-y-2">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#171c1f]">
                        Featured Homes
                    </h2>
                    <p className="text-[#404944] text-sm md:text-base opacity-80">
                        Handpicked architectural sanctuaries.
                    </p>
                </div>
                <button className="group text-[#006948] font-bold text-sm md:text-base flex items-center gap-2 transition-all">
                    <span className="border-b-2 border-transparent group-hover:border-[#006948] pb-1 transition-all">
                        View all stays
                    </span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
            </motion.div>

            {/* Property Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16"
            >
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        whileHover={{ y: -12 }} // Ambient lift principle
                        className="group cursor-pointer"
                    >
                        <div className="relative aspect-4/5 rounded-4xl overflow-hidden mb-8 shadow-sm transition-shadow duration-500 group-hover:shadow-[0_24px_48px_-12px_rgba(23,28,31,0.12)]">
                            <PremiumImage
                                src={`https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800&sig=${i}`}
                                alt="Minimalist Interior"
                            />

                            {/* Glassmorphism Favorite Button */}
                            <button className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-[#006948] transition-all duration-300 z-10">
                                <Heart size={18} />
                            </button>

                            {/* Tonal Verified Badge */}
                            <div className="absolute top-6 left-6 flex justify-center items-center gap-1 bg-primary/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-sm z-10">
                                <BadgeCheck size={16}/>
                                Verified Host
                            </div>
                        </div>

                        {/* Content: Following 24px vertical whitespace mandate */}
                        <div className="space-y-3 px-2">
                            <div className="flex justify-between items-start">
                                <h3 className="font-heading text-xl md:text-2xl font-bold text-[#171c1f] group-hover:text-[#006948] transition-colors duration-300">
                                    Minimalist Glass Studio
                                </h3>
                                <div className="flex items-center gap-1 text-sm font-bold bg-[#f0f4f8] px-2 py-1 rounded-md">
                                    <span>★</span>
                                    <span>4.9</span>
                                </div>
                            </div>
                            <p className="text-[#404944] text-sm md:text-base leading-relaxed">
                                Santa Monica, California
                            </p>
                            <p className="pt-2 font-heading text-xl font-bold text-[#006948]">
                                $3,200
                                <span className="text-sm font-normal text-[#404944]/60 ml-1">/ month</span>
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
};

export default HomeFeature;