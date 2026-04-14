'use client';

import { motion } from 'framer-motion';
import {
    Star,
    ShieldCheck,
    BriefcaseBusiness,
    Languages,
    Check
} from 'lucide-react';

const motionDefaults = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const
    }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const HostProfilePage = () => {
    const listings = [
        {
            title: "The Obsidian Glass House",
            description: "Architectural masterpiece",
            location: "Catskills, New York",
            price: "$450",
            rating: 4.95,
            image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Minimalist Desert Sanctuary",
            description: "Serene adobe retreat",
            location: "Joshua Tree, California",
            price: "$320",
            rating: 4.99,
            image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Loft de l'Artiste",
            description: "Historic light-filled studio",
            location: "Paris, France",
            price: "$285",
            rating: 5.0,
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
        }
    ];

    const reviews = [
        { name: "Sarah Jenkins", date: "October 2023", content: "Marcus was an incredible host. The house in the Catskills exceeded every expectation. His attention to detail—from the welcome basket to the curated guide—made our stay unforgettable.", avatar: "https://api.dicebear.com/8.x/avataaars/svg?seed=Sarah" },
        { name: "David Chen", date: "September 2023", content: "Staying at Marcus's desert sanctuary was a dream. The architecture is stunning and Marcus was very responsive and helpful with any questions we had. Five stars all around.", avatar: "https://api.dicebear.com/8.x/avataaars/svg?seed=David" },
        { name: "Elena Rodriguez", date: "August 2023", content: "The Paris loft was perfectly located and styled so beautifully. Marcus has a real eye for design. Communication was seamless and the check-in process was very straightforward.", avatar: "https://api.dicebear.com/8.x/avataaars/svg?seed=Elena" },
        { name: "James Wilson", date: "July 2023", content: "Superb hosting. Marcus clearly cares deeply about his guests' experience. The house was spotless and the aesthetic was very inspiring. Highly recommend any of his properties.", avatar: "https://api.dicebear.com/8.x/avataaars/svg?seed=James" }
    ];

    return (
        <div className="min-h-screen bg-background font-sans text-foreground pb-20 selection:bg-primary/10">
            {/* Header */}
          
            <div className="max-w-350 mx-auto px-6 lg:px-12 pt-8 lg:pt-16 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-24 items-start">

                {/* Sidebar */}
                <motion.aside
                    className="lg:sticky lg:top-32 space-y-8"
                    {...motionDefaults}
                >
                    <div className="flex flex-col items-center lg:items-start space-y-6">
                        <div className="relative">
                            <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                <img src="https://api.dicebear.com/8.x/avataaars/svg?seed=Marcus" alt="Marcus Thorne" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-2 right-4 bg-[#006948] text-white p-1.5 rounded-full border-4 border-white">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="text-center lg:text-left space-y-2">
                            <h2 className="text-3xl font-heading font-bold">Marcus Thorne</h2>
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <Star className="w-4 h-4 fill-foreground" />
                                <span className="text-sm font-bold uppercase tracking-wider">Superhost</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 py-8 border-y border-border">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Reviews</span>
                            <span className="font-bold">412</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Rating</span>
                            <span className="font-bold flex items-center gap-1">4.98 <Star className="w-3 h-3 fill-foreground" /></span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Host for</span>
                            <span className="font-bold">5 years</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-[#006948] text-white rounded-xl font-bold shadow-lg shadow-emerald-900/10">
                            Message Marcus
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-muted text-foreground rounded-xl font-bold border border-border">
                            Contact Support
                        </motion.button>
                    </div>

                    <div className="space-y-4 pt-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Marcus's Confirmed Info</h4>
                        <ul className="space-y-3">
                            {['Identity', 'Email address', 'Phone number'].map(item => (
                                <li key={item} className="flex items-center gap-3 text-sm font-medium">
                                    <Check className="w-4 h-4 text-[#006948]" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.aside>

                {/* Main Content */}
                <motion.div
                    className="space-y-20"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {/* About Section */}
                    <motion.section className="space-y-8" variants={motionDefaults}>
                        <h3 className="text-3xl font-heading font-bold">About Marcus</h3>
                        <div className="bg-[#f8f9f8] p-8 lg:p-12 rounded-[2.5rem] border border-border space-y-8">
                            <p className="text-xl leading-relaxed text-foreground/80">
                                Welcome to my collection of curated stays. As an architectural photographer by trade and a traveler by heart, I focus on spaces that blend modern design with natural environments. My goal is to provide more than just a place to sleep; I want to offer a sanctuary where you can truly disconnect.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border/50">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white rounded-2xl shadow-sm border border-border">
                                        <Languages className="w-6 h-6 text-[#006948]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Languages</p>
                                        <p className="font-bold">English, French, Italian</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white rounded-2xl shadow-sm border border-border">
                                        <BriefcaseBusiness className="w-6 h-6 text-[#006948]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Profession</p>
                                        <p className="font-bold">Architectural Photographer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Listings Section */}
                    <motion.section className="space-y-10" variants={motionDefaults}>
                        <div className="flex items-end justify-between">
                            <h3 className="text-3xl font-heading font-bold">Marcus's listings</h3>
                            <button className="text-sm font-bold underline underline-offset-4 decoration-[#006948] text-[#006948]">View all 12 listings</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {listings.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="group cursor-pointer space-y-4"
                                    whileHover={{ y: -8 }}
                                >
                                    <div className="relative aspect-4/5 rounded-4xl overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 text-xs font-bold shadow-sm">
                                            <Star className="w-3 h-3 fill-foreground" /> {item.rating}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.location}</p>
                                        <p className="text-base font-bold mt-2"><span className="text-[#006948]">{item.price}</span> / night</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Reviews Section */}
                    <motion.section className="space-y-12" variants={motionDefaults}>
                        <div className="flex items-center gap-4">
                            <Star className="w-8 h-8 fill-[#006948] text-[#006948]" />
                            <h3 className="text-3xl font-heading font-bold">4.98 · 412 reviews</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {reviews.map((rev, idx) => (
                                <div key={idx} className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full border border-border" />
                                        <div>
                                            <p className="font-bold">{rev.name}</p>
                                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{rev.date}</p>
                                        </div>
                                    </div>
                                    <p className="text-foreground/80 leading-relaxed">"{rev.content}"</p>
                                </div>
                            ))}
                        </div>
                        <button className="px-8 py-4 border-2 border-foreground rounded-xl font-bold hover:bg-foreground hover:text-white transition-all duration-300">
                            Show all 412 reviews
                        </button>
                    </motion.section>
                </motion.div>
            </div>

        </div>
    );
};

export default HostProfilePage;