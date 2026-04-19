'use client'

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, MapPin, ShieldCheck, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function LocalityPropertyCard({ prop, isHovered, onHover }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onMouseEnter={() => onHover(prop.id)}
            onMouseLeave={() => onHover(null)}
            className="group relative flex flex-col bg-white rounded-4xl p-3 border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-slate-200"
        >
            <div className="relative aspect-16/11 rounded-3xl overflow-hidden">
                <motion.img animate={{ scale: isHovered ? 1.05 : 1 }} transition={{ duration: 0.8 }} src={prop.image} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className="bg-white/90 backdrop-blur-md text-emerald-600 border-none text-[9px] font-black uppercase tracking-tighter shadow-sm">
                        <ShieldCheck size={10} className="mr-1" /> Verified
                    </Badge>
                </div>
                <AnimatePresence>
                    {isHovered && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center p-4">
                            <Button className="w-full bg-white text-primary hover:bg-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                                Pin Details <ArrowUpRight size={14} className="ml-1" />
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-4 px-1 pb-1">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-[13px] font-bold text-primary truncate flex-1 uppercase tracking-tight leading-none">{prop.title}</h3>
                    <div className="flex items-center gap-0.5 text-primary bg-slate-50 px-1.5 py-0.5 rounded-md"><Star size={10} className="fill-current" /><span className="text-[11px] font-black">{prop.rating}</span></div>
                </div>
                <p className="text-[10px] text-secondary font-medium flex items-center gap-1 mb-4"><MapPin size={10} className="text-emerald-600" /> {prop.locality}</p>
                <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                    <div className="text-base font-black text-primary">₹{prop.price.toLocaleString()}<span className="text-[9px] text-secondary font-normal ml-1 tracking-normal">/mo</span></div>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-500 border-none font-bold text-[9px]">{prop.type}</Badge>
                </div>
            </div>
        </motion.div>
    );
}