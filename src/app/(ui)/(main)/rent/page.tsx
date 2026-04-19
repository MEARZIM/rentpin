'use client'

import { useState } from 'react';
import { Heart, ShieldCheck, Star, MapPin, ArrowUpRight, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Separator } from '@/components/ui/separator';

const properties = [
    { id: 1, title: "Pacific Modern Villa", location: "Pacific Heights, SF", price: 420, rating: 4.92, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" },
    { id: 2, title: "Emerald Heights Loft", location: "Nob Hill, SF", price: 310, rating: 4.85, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800" },
    { id: 3, title: "The Glass Sanctuary", location: "Sausalito, CA", price: 550, rating: 4.98, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800" },
    { id: 4, title: "Marina District Retreat", location: "The Marina, SF", price: 380, rating: 4.75, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800" },
    { id: 5, title: "Marina District Retreat", location: "The Marina, SF", price: 380, rating: 4.75, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800" },
    { id: 6, title: "Marina District Retreat", location: "The Marina, SF", price: 380, rating: 4.75, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800" },
    { id: 7, title: "Marina District Retreat", location: "The Marina, SF", price: 380, rating: 4.75, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800" },
    { id: 8, title: "Marina District Retreat", location: "The Marina, SF", price: 380, rating: 4.75, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800" },
    { id: 9, title: "Marina District Retreat", location: "The Marina, SF", price: 380, rating: 4.75, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800" },
    { id: 10, title: "Marina District Retreat", location: "The Marina, SF", price: 380, rating: 4.75, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800" },
];

const AllRentListingPage = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#f8fafc] px-4 py-10 md:px-10 lg:px-16 font-['Manrope']">
            {/* Compact Header */}
            <div className="max-w-7xl mx-auto mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-serif font-bold tracking-tight text-primary">Available Properties</h2>
                    <p className="text-xs font-medium text-secondary uppercase tracking-widest mt-1">32 Verified Sanctuaries</p>
                </div>
                <button className="flex items-center gap-2 font-serif w-fit bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold shadow-sm hover:bg-slate-50 transition-all">
                    <Navigation size={14} className="text-emerald-600" /> View All on Map
                </button>
            </div>

            <Separator className="bg-primary/10 mb-10" />

            {/* Compact Responsive Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-6">
                {properties.map((prop) => (
                    <motion.div
                        key={prop.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setHoveredId(prop.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="group bg-white rounded-3xl p-3 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
                    >
                        {/* Compact Image Holder */}
                        <div className="relative aspect-16/11 rounded-[18px] overflow-hidden mb-4">
                            <motion.img
                                animate={{ scale: hoveredId === prop.id ? 1.1 : 1 }}
                                transition={{ duration: 0.6 }}
                                src={prop.image}
                                className="w-full h-full object-cover "
                            />

                            {/* Verified Badge */}
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-sm">
                                <ShieldCheck size={12} className="text-emerald-600" />
                                <span className="text-[10px] font-serif font-bold text-slate-800 uppercase tracking-tighter">Verified</span>
                            </div>

                            {/* AnimatePresence Overlay */}
                            <AnimatePresence>
                                {hoveredId === prop.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex items-center justify-center p-4 gap-2"
                                    >
                                        <button className="flex-1 bg-white text-primary py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 shadow-lg transform hover:scale-105 transition-transform">
                                            Details <ArrowUpRight size={14} />
                                        </button>
                                        <button className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all">
                                            <Heart size={16} />
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Text Content */}
                        <div className="px-1 pb-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-sm font-bold font-serif text-primary truncate flex-1 pr-2 leading-tight">
                                    {prop.title}
                                </h3>
                                <div className="flex items-center gap-0.5 text-primary">
                                    <Star size={10} className="fill-current" />
                                    <span className="text-[11px] font-bold">{prop.rating}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-1 text-slate-400 mb-3">
                                <MapPin size={10} />
                                <span className="text-[10px] font-serif font-medium truncate">{prop.location}</span>
                            </div>

                            <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                                <p className="text-lg font-black text-primary">
                                    ${prop.price}
                                    <span className="text-[10px] font-medium text-slate-400 tracking-normal ml-1">/night</span>
                                </p>
                                <button className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest hover:underline">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AllRentListingPage;