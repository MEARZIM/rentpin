"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Heart, Map, User } from 'lucide-react';

const MobileBottomNav = () => {
    const pathname = usePathname();

    // Utility to determine if a link is active
    const isActive = (path: string) => pathname === path;

    const navItems = [
        { label: 'Explore', icon: Search, href: '/' },
        { label: 'Map', icon: Map, href: '/map' },
        { label: 'Saved', icon: Heart, href: '/#' },
        { label: 'Profile', icon: User, href: '/##' },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-[#bccac0]/15 px-6 py-3 flex justify-between items-center z-5000">
            {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex flex-col items-center transition-all duration-300 ${active ? 'text-[#006948]' : 'text-[#171c1f]/40'
                            }`}
                    >
                        <item.icon
                            size={22}
                            strokeWidth={active ? 2.5 : 2}
                            className={active ? 'drop-shadow-[0_0_8px_rgba(0,105,72,0.2)]' : ''}
                        />
                        <span className={`text-[9px] mt-1.5 font-extrabold uppercase tracking-widest ${active ? 'opacity-100' : 'opacity-70'
                            }`}>
                            {item.label}
                        </span>

                        {/* Organic Selection Indicator */}
                        {active && (
                            <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#006948]" />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
};

export default MobileBottomNav;