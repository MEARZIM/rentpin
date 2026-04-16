'use client';

import ImagesHero from './components/ImagesHero';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';


const SanctuaryPropertyPage = () => {
    return (
        <div className="min-h-screen bg-[#F9FBFA] text-[#1A1A1A] font-sans">
            <ImagesHero />
            <main className="max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-12">

                {/* MAIN CONTENT WRAPPER */}
                <div className="flex flex-col-reverse lg:flex-row gap-12 xl:gap-20 items-start">
                    <LeftSide />

                    <RightSide />
                </div>
            </main>
        </div>
    );
};

export default SanctuaryPropertyPage;