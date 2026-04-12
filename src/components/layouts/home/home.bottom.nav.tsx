import {
    Search,
    Heart,
    Map,
    User,
} from 'lucide-react';

const HomeMobileBottomNav = () => {
    return (
        <>
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-[#bccac0]/20 px-10 py-4 flex justify-between items-center z-50" >
                <div className="flex flex-col items-center text-[#006948]">
                    <Search size={24} />
                    <span className="text-[10px] mt-1 font-bold uppercase">Explore</span>
                </div>
                <div className="flex flex-col items-center text-[#404944]/40">
                    <Heart size={24} />
                    <span className="text-[10px] mt-1 font-bold uppercase">Saved</span>
                </div>
                <div className="flex flex-col items-center text-[#404944]/40">
                    <Map size={24} />
                    <span className="text-[10px] mt-1 font-bold uppercase">Map</span>
                </div>
                <div className="flex flex-col items-center text-[#404944]/40">
                    <User size={24} />
                    <span className="text-[10px] mt-1 font-bold uppercase">Profile</span>
                </div>
            </nav >
        </>
    )
}

export default HomeMobileBottomNav
