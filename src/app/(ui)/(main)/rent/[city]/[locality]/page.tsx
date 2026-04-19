'use client'

import { use, useState } from 'react';
import { motion } from "framer-motion";
import {
    MapPin, Navigation,
    TrainFront, Coffee, School, Info, ChevronDown, SlidersHorizontal, RotateCcw
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

import { LocalityPropertyCard } from './components/LocalityPropertyCard';

const bhkOptions = ["1BHK", "2BHK", "3BHK+", "Villas"];

const cityProperties = [
    { id: 1, title: "Skyline Heritage Suite", locality: "Kankinara", type: "2BHK", price: 18500, rating: 4.8, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800" },
    { id: 2, title: "The Emerald Penthouse", locality: "Salt Lake", type: "3BHK+", price: 45000, rating: 4.9, image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800" },
    { id: 3, title: "Minimalist Studio", locality: "New Town", type: "1BHK", price: 12000, rating: 4.7, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800" },
    { id: 4, title: "Urban Oasis Loft", locality: "Kankinara", type: "2BHK", price: 22000, rating: 4.6, image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800" },
];

export default function LocalityRentPage({ params }: { params: Promise<{ city: string, locality: string }> }) {
    const slug = use(params);
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [selectedBHK, setSelectedBHK] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState([60000]); // Shadcn Slider uses an array

    const cityName = slug.city.charAt(0).toUpperCase() + slug.city.slice(1);
    const localityName = slug.locality.charAt(0).toUpperCase() + slug.locality.slice(1);

    const toggleBHK = (type: string) => {
        setSelectedBHK(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
    };

    const filteredProperties = cityProperties.filter(p =>
        (selectedBHK.length === 0 || selectedBHK.includes(p.type)) && p.price <= priceRange[0]
    );

    return (
        <main className="min-h-screen bg-white font-['Manrope']">
            {/* Hero Header */}
            <section className="px-6 pt-12 pb-10 max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-2">
                        <Badge variant="outline" className="text-emerald-600 border-emerald-100 bg-emerald-50/50 px-3 py-1 text-[10px] tracking-widest uppercase rounded-full">
                            <MapPin size={12} className="mr-1.5" /> Locality Spotlight
                        </Badge>
                        <h1 className="text-5xl md:text-6xl font-black text-primary tracking-tighter">
                            {localityName} <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-600">Sanctuaries</span>
                        </h1>
                        <p className="text-secondary font-medium max-w-md leading-relaxed">
                            Verified premium listings in the heart of {localityName}, {cityName}.
                        </p>
                    </div>
                    <Button size="lg" className="rounded-2xl font-bold shadow-xl shadow-primary/20 gap-2">
                        <Navigation size={18} /> View on Map
                    </Button>
                </motion.div>
            </section>

            {/* Locality Insights Bar */}
            <section className="px-6 mb-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-slate-50/50 rounded-3xl border border-slate-100">
                    <InsightItem icon={<TrainFront size={14} />} label="Transport" value="Near Metro/Station" />
                    <InsightItem icon={<Coffee size={14} />} label="Lifestyle" value="Cafes & Parks" />
                    <InsightItem icon={<School size={14} />} label="Education" value="Top Schools Nearby" />
                    <div className="flex flex-col gap-1 border-l border-slate-200 pl-4 md:pl-6">
                        <div className="flex items-center gap-2 text-primary font-black text-[9px] uppercase tracking-widest opacity-50"><Info size={14} /> Market Rate</div>
                        <p className="text-xs font-bold text-emerald-600">₹15k - ₹45k /mo</p>
                    </div>
                </div>
            </section>

            {/* Sticky shadcn Filter Bar */}
            <section className="border-y border-slate-100 bg-white/80 backdrop-blur-md sticky top-18 z-40">
                <div className="max-w-7xl mx-auto px-6 py-3 flex  items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* Configuration Popover */}
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" size={'lg'} className={`rounded-xl border-slate-200 h-10 text-[11px] w-fit max-w-[25ch] truncate font-bold uppercase tracking-wider ${selectedBHK.length > 0 ? 'bg-primary text-white hover:bg-primary/90 hover:text-white border-primary' : ''}`}>
                                    {selectedBHK.length > 0 ? selectedBHK.join(', ') : 'Property Type'}
                                    <ChevronDown className="ml-2 h-3 w-3 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-56 p-2 rounded-2xl shadow-2xl bg-white border-slate-100" align="start">
                                <div className="p-2 space-y-1">
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Bedrooms</p>
                                    {bhkOptions.map(opt => (
                                        <div key={opt} onClick={() => toggleBHK(opt)} className="flex items-center space-x-3 p-2.5 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                                            <Checkbox checked={selectedBHK.includes(opt)} />
                                            <span className="text-xs font-bold text-primary">{opt}</span>
                                        </div>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>

                        {/* Price Slider Popover */}
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button size={'lg'} variant="outline" className="rounded-xl border-slate-200 w-fit h-10 text-[11px] font-bold uppercase tracking-wider">
                                    Max Rent: ₹{priceRange[0] / 1000}k
                                    <ChevronDown className="ml-2 h-3 w-3 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-6 rounded-2xl shadow-2xl border-slate-100 bg-white" align="start">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Budget Ceiling</span>
                                        <span className="text-sm font-black text-primary">₹{priceRange[0].toLocaleString()}</span>
                                    </div>
                                    <Slider
                                        value={priceRange}
                                        onValueChange={setPriceRange}
                                        max={100000}
                                        min={5000}
                                        step={5000}
                                        className="py-4"
                                    />
                                    <div className="flex justify-between text-[9px] font-bold text-slate-300 uppercase">
                                        <span>₹5k</span>
                                        <span>₹100k+</span>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>

                    {(selectedBHK.length > 0 || priceRange[0] < 60000) && (
                        <Button variant="ghost" onClick={() => { setSelectedBHK([]); setPriceRange([60000]) }} className="text-slate-400 hover:text-red-500 hover:bg-red-50 text-[10px] font-bold uppercase px-3">
                            <RotateCcw className="mr-2 h-3 w-3" /> Reset
                        </Button>
                    )}
                </div>
            </section>

            {/* Property Grid */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProperties.map((prop) => (
                        <LocalityPropertyCard key={prop.id} prop={prop} isHovered={hoveredId === prop.id} onHover={setHoveredId} />
                    ))}
                </div>
                {filteredProperties.length === 0 && (
                    <div className="py-20 text-center space-y-3">
                        <div className="inline-flex p-4 rounded-full bg-slate-50 text-slate-300"><SlidersHorizontal size={32} /></div>
                        <h3 className="text-lg font-bold text-primary">No exact matches found</h3>
                        <p className="text-sm text-secondary">Try adjusting your filters or checking nearby areas.</p>
                    </div>
                )}
            </section>
        </main>
    );
}

function InsightItem({ icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-emerald-600 font-black text-[9px] uppercase tracking-widest opacity-70">
                {icon} {label}
            </div>
            <p className="text-xs font-bold text-primary">{value}</p>
        </div>
    );
}
