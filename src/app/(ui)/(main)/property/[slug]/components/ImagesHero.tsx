import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';

const ImagesHero = () => {
    const mobileImages = [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?sig=1",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?sig=2",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?sig=3",
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {

        if (scrollRef.current) {

            const width = scrollRef.current.offsetWidth;
            const scrollPosition = scrollRef.current.scrollLeft;

            const index = Math.round(scrollPosition / width);
            setActiveIndex(index);
        }
    };

    return (
        <section className="bg-background p-4 md:p-0">
            {/* --- MOBILE VIEW --- */}
            <div className="md:hidden relative">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar rounded-2xl"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {mobileImages.map((src, i) => (
                        <div key={i} className="min-w-full snap-center h-[50vh]">
                            <img
                                src={src}
                                className="w-full h-full object-cover"
                                alt="Property"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex gap-1.5 my-6 justify-center">
                    {mobileImages.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex
                                ? 'w-6 bg-slate-800'
                                : 'w-1.5 bg-slate-200'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* --- DESKTOP VIEW --- */}
            <div className="hidden md:grid grid-cols-2 gap-4 h-150 max-w-7xl mx-auto px-6 py-12">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg group">
                    <img src={mobileImages[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Main" />
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    {mobileImages.slice(1, 5).map((src, i) => (
                        <div key={i} className="relative rounded-3xl overflow-hidden shadow-sm">
                            <img src={src} className="w-full h-full object-cover" alt="Detail" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImagesHero;