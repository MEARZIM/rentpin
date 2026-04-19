'use client'

import { use, useState, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
    MapPin, LayoutGrid, Navigation, Home, Building2, Trees, X
} from "lucide-react";

import { CityPropertyCard } from './components/CityPropertyCard';

const localities = ["Kankinara", "Salt Lake", "New Town", "Park Street", "Ballygunge"];

const propertyTypes = [
    { name: "1BHK", icon: <Home size={14} /> },
    { name: "2BHK", icon: <Building2 size={14} /> },
    { name: "3BHK+", icon: <Building2 size={14} /> },
    { name: "Villas", icon: <Trees size={14} /> },
];

const cityProperties = [
    { id: 1, title: "Skyline Heritage Suite", locality: "Kankinara", type: "2BHK", price: 18500, rating: 4.8, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800" },
    { id: 2, title: "The Emerald Penthouse", locality: "Salt Lake", type: "3BHK+", price: 45000, rating: 4.9, image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800" },
    { id: 3, title: "Minimalist Studio", locality: "New Town", type: "1BHK", price: 12000, rating: 4.7, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800" },
    { id: 4, title: "Urban Oasis Loft", locality: "Kankinara", type: "2BHK", price: 22000, rating: 4.6, image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800" },
];

export default function CityRentPage({ params }: { params: Promise<{ city: string }> }) {
    const slug = use(params);

    const [selectedLocality, setSelectedLocality] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const cityName = slug.city.charAt(0).toUpperCase() + slug.city.slice(1);

    const filteredProperties = useMemo(() => {
        return cityProperties.filter(prop => {
            const matchesLocality = !selectedLocality || prop.locality === selectedLocality;
            const matchesType = !selectedType || prop.type === selectedType;
            return matchesLocality && matchesType;
        });
    }, [selectedLocality, selectedType]);

    const resetFilters = () => {
        setSelectedLocality(null);
        setSelectedType(null);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    return (
        <main className="min-h-screen bg-white font-['Manrope'] overflow-x-hidden">
            {/* Hero Section */}
            <section className="px-6 pt-12 pb-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
                >
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-emerald-600 font-bold text-[10px] tracking-[0.3em] uppercase">
                            <MapPin size={12} strokeWidth={3} />
                            <span>Destination Guide</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-primary tracking-tighter">
                            Rent in <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-600">{cityName}</span>
                        </h1>
                        <p className="text-secondary font-medium max-w-md leading-relaxed text-sm">
                            Discover {filteredProperties.length} verified premium sanctuaries across the most coveted pin-codes.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button className="p-3 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all text-primary">
                            <Navigation size={20} />
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-all shadow-xl shadow-primary/20">
                            <LayoutGrid size={18} /> View on Map
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Functional Filters Section */}
            <section className="border-y border-slate-100 bg-white/90 sticky top-0 z-30 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                        {/* Filter Groups Container */}
                        <div className="flex flex-col sm:flex-row md:items-center gap-6 flex-1">

                            {/* Localities Group */}
                            <div className="space-y-3">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">
                                    Select Area
                                </p>
                                <div className="flex flex-wrap items-center gap-2">
                                    {localities.map((loc) => (
                                        <motion.button
                                            key={loc}
                                            layout
                                            whileTap={{ scale: 0.96 }}
                                            onClick={() => setSelectedLocality(selectedLocality === loc ? null : loc)}
                                            className={`px-4 py-2 rounded-xl text-[11px] font-bold transition-all duration-500 border uppercase tracking-wider ${selectedLocality === loc
                                                ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200/50"
                                                : "bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50"
                                                }`}
                                        >
                                            {loc}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            <div className="hidden md:block h-10 w-px bg-slate-100 mx-2" />

                            <div className="space-y-3">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1">
                                    Property Type
                                </p>
                                <div className="flex flex-wrap items-center gap-2">
                                    {propertyTypes.map((type) => (
                                        <motion.button
                                            key={type.name}
                                            layout
                                            whileTap={{ scale: 0.96 }}
                                            onClick={() => setSelectedType(selectedType === type.name ? null : type.name)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-bold transition-all duration-500 border uppercase tracking-wider ${selectedType === type.name
                                                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                                                : "bg-white border-slate-200 text-primary hover:border-slate-300 hover:bg-slate-50"
                                                }`}
                                        >
                                            <span className={selectedType === type.name ? "text-white" : "text-emerald-600"}>
                                                {type.icon}
                                            </span>
                                            {type.name}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Clear All  */}
                        <AnimatePresence>
                            {(selectedLocality || selectedType) && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    onClick={resetFilters}
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-red-50 text-red-600 rounded-2xl border border-red-100 hover:bg-red-100 transition-all group shrink-0"
                                >
                                    <X size={16} className="group-hover:rotate-90 transition-transform duration-300" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Reset Discovery</span>
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Property Grid */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <LayoutGroup>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProperties.map((prop) => (
                                <CityPropertyCard
                                    key={prop.id}
                                    prop={prop}
                                    cityName={cityName}
                                    isHovered={hoveredId === prop.id}
                                    onHover={setHoveredId}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </LayoutGroup>

                {/* Empty State */}
                <AnimatePresence>
                    {filteredProperties.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="py-24 text-center"
                        >
                            <div className="text-slate-200 mb-4 flex justify-center"><X size={48} /></div>
                            <h3 className="text-xl font-bold text-primary uppercase tracking-tight">No Matches Found</h3>
                            <p className="text-sm text-secondary mt-1">Try relaxing your filters to find more properties.</p>
                            <button
                                onClick={resetFilters}
                                className="text-emerald-600 font-bold mt-4 hover:underline text-sm"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </main>
    );
}