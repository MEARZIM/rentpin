"use client";

import "leaflet/dist/leaflet.css";
import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import { Search, ShieldCheck, Heart, Map as MapIcon, List, Bell, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const MapComponent = dynamic(() => import('./components/MapComponent'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-[#f0f4f8] animate-pulse" />
});

const properties = [
    { id: 1, title: "Pacific Heights Modern Villa", location: "Pacific Heights, SF", price: 420, rating: 4.92, coords: [37.7925, -122.4382], image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000" },
    { id: 2, title: "Emerald Heights Loft", location: "Nob Hill, SF", price: 310, rating: 4.85, coords: [37.7932, -122.4145], image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000" },
    { id: 3, title: "The Glass Sanctuary", location: "Sausalito, CA", price: 550, rating: 4.98, coords: [37.8591, -122.4853], image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000" }
];

export default function CuratedSanctuary() {
    const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
    const [activeProperty, setActiveProperty] = useState<any>(null);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const listRefs = useRef<any>({});

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth > 0 && windowWidth < 768;

    const handleMarkerClick = (prop: any) => {
        setActiveProperty(prop);
        if (!isMobile && listRefs.current[prop.id]) {
            listRefs.current[prop.id].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="flex flex-col h-screen bg-[#f6fafe] text-[#171c1f] font-['Inter'] overflow-hidden">


            <main className="flex flex-1 relative overflow-hidden">
                {/* --- MAP SECTION --- */}
                <motion.div
                    animate={{ x: isMobile && viewMode === 'list' ? '-100%' : '0%' }}
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    className="absolute inset-0 md:relative md:w-[60%] h-full z-10"
                >
                    {/* Floating Search - Glassmorphism */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-1000 w-[90%] max-w-lg">
                        <div className="bg-white/80 backdrop-blur-xl rounded-full p-2 shadow-2xl border border-white/50 flex items-center gap-2">
                            <div className="pl-4 flex-1 flex items-center gap-2">
                                <Search size={18} className="text-[#006948]" />
                                <input placeholder="San Francisco, CA" className="bg-transparent border-none outline-none text-sm font-medium w-full" />
                            </div>
                            <button className="px-6 py-2.5 rounded-full bg-linear-to-br from-[#006948] to-[#00855d] text-white text-sm font-bold shadow-lg shadow-[#006948]/20">Search</button>
                        </div>
                    </div>

                    <MapComponent
                        properties={properties}
                        onMarkerClick={handleMarkerClick}
                        activeId={activeProperty?.id}
                    />

                    {/* MOBILE PREVIEW CARD */}
                    <AnimatePresence>
                        {isMobile && activeProperty && (
                            <motion.div
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "100%", opacity: 0 }}
                                className="absolute top-80 left-4 right-4 z-2000 bg-white rounded-3xl p-3 shadow-2xl flex gap-4"
                            >
                                <div className="w-32 h-24 rounded-[16px] overflow-hidden shrink-0">
                                    <img src={activeProperty.image} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 py-1 relative">
                                    <button onClick={() => setActiveProperty(null)} className="absolute -top-1 -right-1 p-1"><X size={16} className="text-[#171c1f]/30" /></button>
                                    <h4 className="font-bold text-sm leading-tight mb-1">{activeProperty.title}</h4>
                                    <p className="text-[10px] text-[#171c1f]/40 font-medium mb-2">{activeProperty.location}</p>
                                    <p className="font-black text-[#006948] text-sm">${activeProperty.price} <span className="text-[10px] font-normal text-[#171c1f]/30">/night</span></p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/*  LISTINGS SIDEBAR  */}
                <motion.div
                    animate={{ x: isMobile && viewMode === 'map' ? '100%' : '0%' }}
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    className="absolute inset-0 md:relative md:w-[40%] bg-[#f6fafe] overflow-y-auto px-6 py-8 md:px-10 z-20 custom-scrollbar"
                >
                    <div className="mb-10">
                        <h2 className="text-2xl font-extrabold font-['Manrope'] mb-1">Stays in San Francisco</h2>
                        <p className="text-sm text-[#171c1f]/40 font-medium tracking-tight">32 high-end sanctuaries</p>
                    </div>

                    <div className="space-y-12 pb-32">
                        {properties.map((prop, i) => (
                            <motion.div
                                key={prop.id}
                                ref={el => { if (el) listRefs.current[prop.id] = el; }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`group cursor-pointer p-4 -m-4 rounded-3xl transition-colors duration-500 ${activeProperty?.id === prop.id ? 'bg-[#006948]/5' : ''}`}
                                onClick={() => setActiveProperty(prop)}
                            >
                                <div className="relative aspect-16/10 rounded-[20px] overflow-hidden mb-5 shadow-sm group-hover:shadow-xl transition-all duration-500">
                                    <img src={prop.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2">
                                        <ShieldCheck size={14} className="text-[#006948]" />
                                        <span className="text-[10px] font-bold tracking-widest text-[#006948] uppercase">Verified Owner</span>
                                    </div>
                                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all"><Heart size={20} /></button>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-bold font-['Manrope'] group-hover:text-[#006948] transition-colors">{prop.title}</h3>
                                        <p className="text-xs text-[#171c1f]/40 font-medium">{prop.location}</p>
                                        <p className="text-xl font-black text-[#006948] pt-2">${prop.price} <span className="text-xs font-medium text-[#171c1f]/30">/night</span></p>
                                    </div>
                                    <div className="flex flex-col items-end gap-8">
                                        <span className="text-sm font-bold">★ {prop.rating}</span>
                                        <button className="px-5 py-2.5 bg-[#171c1f] text-white text-[10px] font-bold uppercase rounded-lg hover:bg-[#006948] transition-all">Details</button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/*  MOBILE TOGGLE  */}
                {windowWidth > 0 && (
                    <div className="fixed bottom-22 left-1/2 -translate-x-1/2 z-50 md:hidden">
                        <div className="bg-[#171c1f] p-1 rounded-full flex gap-1 shadow-2xl border border-white/10">
                            <button onClick={() => setViewMode('map')} className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase transition-all duration-300 ${viewMode === 'map' ? 'bg-[#006948] text-white' : 'text-white/40'}`}>
                                <MapIcon size={14} /> Map
                            </button>
                            <button onClick={() => setViewMode('list')} className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase transition-all duration-300 ${viewMode === 'list' ? 'bg-[#006948] text-white' : 'text-white/40'}`}>
                                <List size={14} /> List
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}