'use client'

import { use, useState, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    Zap, CircleDollarSign, LayoutDashboard, SearchX,
    ChevronDown, List
} from "lucide-react";
import Link from "next/link";


import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { TypePropertyCard } from './components/TypePropertyCard';


const ALL_PROPERTIES = [
    { id: 1, title: "Skyline Heritage Suite", locality: "Salt Lake", type: "2BHK", price: 18500, rating: 4.8, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800" },
    { id: 2, title: "The Emerald Penthouse", locality: "New Town", type: "2BHK", price: 45000, rating: 4.9, image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800" },
    { id: 3, title: "Urban Oasis Loft", locality: "Kankinara", type: "2BHK", price: 22000, rating: 4.6, image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800" },
    { id: 4, title: "Minimalist Corner", locality: "Sector V", type: "2BHK", price: 15000, rating: 4.5, image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800" },
];

export default function PropertyTypePage({ params }: { params: Promise<{ city: string, type: string }> }) {
    const slug = use(params);

    // --- State Management ---
    const [priceRange, setPriceRange] = useState([100000]);
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [isGridView, setIsGridView] = useState(true); // Toggle logic for the LayoutDashboard icon
    const [favorites, setFavorites] = useState<number[]>([]);

    const typeLabel = decodeURIComponent(slug.type).toUpperCase();
    const cityLabel = slug.city.charAt(0).toUpperCase() + slug.city.slice(1);

    // --- Functional Logic ---
    const filteredProperties = useMemo(() => {
        return ALL_PROPERTIES.filter(p => p.price <= priceRange[0]);
    }, [priceRange]);

    const toggleFavorite = (id: number, e: React.MouseEvent) => {
        e.preventDefault();
        setFavorites(prev => prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]);
    };

    return (
        <main className="min-h-screen bg-white font-['Manrope']">
            {/* Hero Header */}
            <section className="relative px-6 pt-8 pb-12 max-w-7xl mx-auto">
                <Link href={`/rent/${slug.city}`} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to {cityLabel}
                </Link>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                        <Badge variant="outline" className="text-[10px] font-black tracking-[0.2em] uppercase border-slate-200 py-1 px-3">
                            {cityLabel} • Verified Collection
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-none">
                            {typeLabel} <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-400">Sanctuaries.</span>
                        </h1>
                    </motion.div>

                    {/* Stats Card */}
                    <div className="w-full lg:w-72 p-6 bg-primary rounded-[2.5rem] text-white shadow-2xl shadow-primary/30">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Inventory</span>
                            <Zap className="text-emerald-400" size={18} />
                        </div>
                        <p className="text-3xl font-black">{filteredProperties.length}</p>
                        <p className="text-[10px] font-bold text-white/50 uppercase">Matching listings available</p>
                    </div>
                </div>
            </section>

            {/* Sticky Filter & View Bar */}
            <section className="sticky top-18 z-50 border-y border-slate-100 bg-white/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="rounded-2xl border-slate-200 h-11 px-6 text-[11px] font-bold uppercase tracking-widest">
                                    <CircleDollarSign size={14} className="mr-2 text-emerald-600" />
                                    Under ₹{priceRange[0] / 1000}k
                                    <ChevronDown className="ml-2 h-3 w-3 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-6 rounded-4xl shadow-2xl border-slate-100 bg-white z-50" align="start">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Budget ceiling</span>
                                        <span className="text-sm font-black text-primary">₹{priceRange[0].toLocaleString()}</span>
                                    </div>
                                    <Slider
                                        value={priceRange}
                                        onValueChange={setPriceRange}
                                        max={100000}
                                        min={10000}
                                        step={5000}
                                        className="py-4"
                                    />
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>

                    {/* View Toggle Functionality */}
                    <Button
                        variant="outline"
                        onClick={() => setIsGridView(!isGridView)}
                        className="rounded-2xl border-slate-200 h-11 w-11 p-0 hover:bg-slate-50 transition-all active:scale-95"
                    >
                        {isGridView ? (
                            <LayoutDashboard size={18} className="text-primary" />
                        ) : (
                            <List size={18} className="text-primary" />
                        )}
                    </Button>
                </div>
            </section>

            {/* Results Grid */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    layout
                    className={`grid gap-8 ${isGridView
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        : "grid-cols-1 lg:grid-cols-2"
                        }`}
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProperties.map((prop) => (
                            <TypePropertyCard
                                key={prop.id}
                                prop={prop}
                                isHovered={hoveredId === prop.id}
                                isFavorite={favorites.includes(prop.id)}
                                onHover={setHoveredId}
                                onFavorite={(e: any) => toggleFavorite(prop.id, e)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProperties.length === 0 && (
                    <div className="py-32 text-center">
                        <SearchX size={48} className="text-slate-200 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-primary">No listings found</h3>
                        <Button onClick={() => setPriceRange([100000])} variant="link" className="text-emerald-600 font-bold">
                            Clear Filters
                        </Button>
                    </div>
                )}
            </section>
        </main>
    );
}

