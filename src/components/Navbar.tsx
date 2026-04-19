'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import RentPinLogo from '@/components/icons/logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Nav = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    const navItems = [
        { name: 'Explore', href: '/' },
        { name: 'Saved', href: '#' },
        { name: 'Find Rentals', href: '/rent' },
        { name: 'Profile', href: '/profile' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#bccac0]/15 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300">
            {/* Brand Logo */}
            <div className="flex items-center gap-3 font-bold tracking-tight">

                <div className="flex items-center justify-center shrink-0">
                    <RentPinLogo className="w-10 h-10 md:w-12 md:h-12" />
                </div>

                <span className="font-heading text-xl md:text-2xl text-[#171c1f] leading-none">
                    Rent Pin
                </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium text-[#404944]">
                {navItems.map((item) => {
                    const active = isActive(item.href);

                    return <Link
                        key={item.name}
                        href={item.href}
                        className={cn("hover:text-[#006948] transition-colors relative group ", active ? 'text-[#006948]' : 'text-[#171c1f]/40')}
                    >
                        {item.name}
                        <span className={cn("absolute -bottom-1 left-0 w-0 h-0.5 bg-[#006948] transition-all group-hover:w-full", active && 'w-full')} />
                    </Link>
                })}
                {/* Signature Primary CTA */}
                <Link href={'/login'} className="bg-linear-to-br from-[#006948] to-[#00855d] text-white px-7 py-2.5 rounded-full font-semibold hover:shadow-xl hover:opacity-95 transition-all active:scale-95">
                    Become a Host
                </Link>
            </div>

            {/* Mobile Drawer  */}
            <div className="md:hidden flex items-center gap-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-[#404944] hover:bg-[#f0f4f8]">
                            <Menu size={24} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-75 p-4 bg-[#f6fafe] border-l border-[#bccac0]/15 sm:w-100">
                        <SheetHeader className="text-left mb-12">
                            <SheetTitle className="font-heading font-bold text-2xl flex items-center gap-2">
                                <RentPinLogo className="w-10 h-10 md:w-12 md:h-12" />
                                Rent Pin
                            </SheetTitle>
                            <SheetDescription className="text-base mt-2">
                                Pin your next move. Discover and secure your perfect rental with ease.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-heading font-semibold text-[#171c1f] hover:text-[#006948] transition-colors flex items-center justify-between"
                                >
                                    {item.name}
                                    <span className="text-[#bccac0]/40">→</span>
                                </Link>
                            ))}
                            <hr className="border-[#bccac0]/15" />
                            <Link href={'/login'} className="w-full bg-[#006948] text-white text-center py-4 rounded-2xl font-bold shadow-lg shadow-[#006948]/10 active:scale-[0.98] transition-transform">
                                Become a Host
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}

export default Nav;