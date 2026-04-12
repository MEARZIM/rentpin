'use client'
 
import { motion } from 'framer-motion'
import { Globe, Share2, Mail } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        marketplace: [
            { name: "Explore Homes", href: "#" },
            { name: "Verified Only", href: "#" },
            { name: "Short-term Stays", href: "#" },
            { name: "Business Rentals", href: "#" },
        ],
        support: [
            { name: "Safety Center", href: "#" },
            { name: "Rental Guide", href: "#" },
            { name: "Host Standards", href: "#" },
            { name: "Help Desk", href: "#" },
        ],
        legal: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" },
            { name: "Disclaimer", href: "#" },
        ]
    };

    return (
        /* Surface Hierarchy: Using surface-container-low (#f0f4f8) 
           to define the section without using a 1px border.
        */
        <footer className="bg-[#f0f4f8] pt-20 pb-10 px-6 md:px-12 border-t border-[#bccac0]/15">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mb-6 transition-opacity hover:opacity-80 cursor-pointer">
                            <div className="w-8 h-8 bg-[#006948] rounded-lg flex items-center justify-center">
                                <Globe size={18} className="text-white" />
                            </div>
                            <span className="font-heading text-xl uppercase font-bold text-[#171c1f]">RentPin.in</span>
                        </div>
                        <p className="text-[#404944] leading-relaxed max-w-xs mb-8 text-sm md:text-base">
                            The premier direct-to-tenant rental marketplace focusing on transparency, safety, and human connection.
                        </p>

                        {/* Social Icons with Surface Hierarchy logic */}
                        <div className="flex gap-3">
                            {[Globe, Share2, Mail].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -3, backgroundColor: "rgba(0, 105, 72, 0.1)" }}
                                    className="w-10 h-10 rounded-full bg-[#171c1f]/5 flex items-center justify-center text-[#006948] transition-colors"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} className="flex flex-col">
                                <h4 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-[#171c1f] mb-6">
                                    {title}
                                </h4>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-[#404944] text-sm md:text-base hover:text-[#006948] transition-colors duration-300"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar: Ambient Depth & Grid Break */}
                <div className="mt-20 pt-8 border-t border-[#171c1f]/5 flex flex-col items-center">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#171c1f]/40 text-center">
                        © {currentYear} THE HOST. ALL RIGHTS RESERVED. BUILT FOR DIRECT LIVING.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer