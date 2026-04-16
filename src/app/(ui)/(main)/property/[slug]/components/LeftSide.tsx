'use client'

import { motion } from 'motion/react'
import {
    ShieldCheck, MapPin,
    ChefHat, Zap,
    Wifi, Car, Waves, CheckCircle2
} from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    } as const,
};

const LeftSide = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);

    useEffect(() => {
        const initLeafletIcon = () => {
            delete (L.Icon.Default.prototype as any)._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
            });
        };

        initLeafletIcon();

        if (mapContainerRef.current && !mapInstanceRef.current) {
            const map = L.map(mapContainerRef.current, {
                center: [-28.6474, 153.6334],
                zoom: 13,
                scrollWheelZoom: false,
            });
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; OpenStreetMap'
            }).addTo(map);

            L.marker([-28.6474, 153.6334]).addTo(map);

            mapInstanceRef.current = map;
        }

        return () => {
            mapInstanceRef.current?.remove();
            mapInstanceRef.current = null;
        };
    }, []);


    return (
        <div className="flex-1 w-full space-y-12">
            <motion.section {...fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-[#00855d]/10 text-[#00855d] rounded-md text-[11px] font-bold uppercase tracking-wider">
                        Verified Listing
                    </span>
                    <div className="flex items-center text-slate-500 text-sm font-medium">
                        <MapPin className="w-4 h-4 mr-1 text-[#006948]" /> Byron Bay, Australia
                    </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                    Coastal Modern Sanctuary
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                    An architectural masterpiece nestled between the rainforest and the ocean.
                    Designed for privacy and seamless indoor-outdoor living.
                </p>
            </motion.section>

            {/* Host Profile */}
            <div className="p-8 rounded-4xl bg-white border border-slate-100 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="relative">
                        <img src="https://api.dicebear.com/8.x/avataaars/svg?seed=Elena" className="w-14 h-14 rounded-full bg-slate-50 shadow-sm" alt="Host" />
                        <div className="absolute -bottom-1 -right-1 bg-[#00855d] rounded-full p-1 border-2 border-white">
                            <ShieldCheck className="w-3 h-3 text-white" />
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-lg text-slate-900">Hosted by Elena Rodriguez</p>
                        <p className="text-slate-500 text-xs font-semibold">Superhost · 128 Reviews</p>
                    </div>
                </div>
                <button className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors">
                    Message
                </button>
            </div>

            <motion.section
                className="space-y-8 pt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-slate-900">Curated Amenities</h3>
                    <button className="text-[#006948] text-sm font-bold hover:underline transition-all">
                        View all 42 amenities
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                    {[
                        { icon: Waves, label: "Private Infinity Pool", desc: "Heated year-round with ocean views" },
                        { icon: Wifi, label: "Fiber Optic Wi-Fi", desc: "600 Mbps up/down for remote work" },
                        { icon: ChefHat, label: "Chef's Kitchen", desc: "Sub-Zero appliances & marble island" },
                        { icon: Car, label: "EV Charging", desc: "Tesla Supercharger available in garage" },
                        { icon: Zap, label: "Solar Powered", desc: "100% renewable energy sanctuary" },
                        { icon: CheckCircle2, label: "Verified Clean", desc: "Hospital-grade cleaning protocols" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="flex items-start gap-4 group cursor-default"
                        >
                            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm group-hover:bg-[#00855d]/5 group-hover:border-[#00855d]/20 group-hover:shadow-md transition-all duration-300">
                                <item.icon className="w-6 h-6 text-slate-600 group-hover:text-[#00855d] transition-colors" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold text-slate-900 group-hover:text-[#00855d] transition-colors">
                                    {item.label}
                                </p>
                                <p className="text-sm text-slate-500 leading-tight">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>


                <motion.div
                    variants={itemVariants}
                    className="mt-4 p-6 bg-slate-50 rounded-4xl border border-dashed border-slate-200 flex flex-col md:flex-row items-center gap-4"
                >
                    <div className="bg-[#00855d] p-2 rounded-full shadow-lg shadow-emerald-900/20">
                        <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm text-slate-600 font-medium text-center md:text-left">
                        This property has been inspected and verified by our local team for quality and safety.
                    </p>
                </motion.div>
            </motion.section>

            {/* Map Section */}
            <section className="space-y-6 pt-4">
                <h3 className="text-2xl font-bold text-slate-900">The Location</h3>
                <div ref={mapContainerRef} className="w-full h-112.5 rounded-[2.5rem] bg-slate-100 border border-slate-200 overflow-hidden z-0" />
            </section>
        </div>
    )
}

export default LeftSide
