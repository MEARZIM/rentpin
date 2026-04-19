'use client'

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, MapPin, ShieldCheck, Star } from "lucide-react";


export function CityPropertyCard({ prop, cityName, isHovered, onHover }: any) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                layout: { duration: 0.4, ease: "easeOut" }
            }}
            onMouseEnter={() => onHover(prop.id)}
            onMouseLeave={() => onHover(null)}
            className="group relative flex flex-col bg-white rounded-[2.5rem] p-3 border border-slate-100 shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:border-slate-200"
        >
            <div className="relative aspect-16/11 rounded-4xl overflow-hidden">
                <motion.img
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    src={prop.image}
                    className="w-full h-full object-cover"
                />

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center p-4 z-20"
                        >
                            <motion.button
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="w-full bg-white text-primary py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-2"
                            >
                                Pin Details <ArrowUpRight size={14} />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-4 px-2 pb-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-[14px] font-bold text-primary truncate flex-1 uppercase tracking-tight">{prop.title}</h3>
                    <div className="flex items-center gap-1 text-primary bg-slate-50 px-2 py-1 rounded-lg">
                        <Star size={10} className="fill-current" />
                        <span className="text-[11px] font-black">{prop.rating}</span>
                    </div>
                </div>
                <p className="text-[11px] text-secondary font-medium flex items-center gap-1 mt-1">
                    <MapPin size={12} className="text-emerald-600" /> {prop.locality}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
                    <div className="text-lg font-black text-primary">₹{prop.price.toLocaleString()}</div>
                    <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <ArrowUpRight size={16} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}