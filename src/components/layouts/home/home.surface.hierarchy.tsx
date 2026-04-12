'use client'

import { motion } from 'framer-motion'
import { Search, MessageSquare, ShieldCheck } from 'lucide-react'

const HomeSurfaceHierarchy = () => {

    const steps = [
        {
            id: "01",
            icon: <Search className="text-[#006948]" size={24} />,
            title: "Discover Homes",
            desc: "Browse unique, verified properties listed directly by owners. No hidden listings, no stale ads."
        },
        {
            id: "02",
            icon: <MessageSquare className="text-[#006948]" size={24} />,
            title: "Connect Directly",
            desc: "Message owners through our secure platform. Schedule tours and ask questions without any pressure."
        },
        {
            id: "03",
            icon: <ShieldCheck className="text-[#006948]" size={24} />,
            title: "Move In Safely",
            desc: "Sign verified digital contracts and pay securely. Save thousands on brokerage fees every single year."
        }
    ];

    return (
        <section className="mt-24 md:mt-40 bg-[#f0f4f8] py-24 md:py-40">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header with Display-sm Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <span className="text-[#006948] text-xs font-bold uppercase tracking-[0.2em] block mb-4">The Process</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#171c1f] leading-[1.1] tracking-tight max-w-2xl">
                        Renting reimagined for the <br /> modern resident
                    </h2>
                </motion.div>

                {/* Grid with Organic Asymmetry */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -1 : 1 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{
                                y: -15,
                                rotate: index % 2 === 0 ? 1 : -1,
                                transition: { duration: 0.4 }
                            }}
                            transition={{
                                type: "spring", stiffness: 40, damping: 20 ,
                                delay: index * 0.15
                            }}
                            /* Surface Hierarchy: surface-container-lowest (#ffffff) card on surface-container-low (#f0f4f8) */
                            className="relative bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(23,28,31,0.06)] overflow-hidden group"
                        >
                            {/* Ambient Icon Treatment */}
                            <div className="relative w-16 h-16 rounded-2xl bg-[#006948]/5 flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#006948]/10">
                                {step.icon}
                            </div>

                            <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#171c1f] mb-6">
                                {step.title}
                            </h3>

                            <p className="text-[#404944] leading-[1.7] text-base md:text-lg opacity-80">
                                {step.desc}
                            </p>

                            {/* Watermark ID for Editorial Depth */}
                            <span className="absolute -bottom-6 -right-4 font-heading text-[120px] font-black text-[#171c1f]/3 select-none pointer-events-none">
                                {step.id}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeSurfaceHierarchy;