import Nav from '@/components/Navbar';
import HomeHeader from '@/components/layouts/home/home.header';
import HomeSurfaceHierarchy from '@/components/layouts/home/home.surface.hierarchy';
import HomeFeature from '@/components/layouts/home/home.featured';
import HomeCtx from '@/components/layouts/home/home.ctx';
import MobileBottomNav from '@/components/Bottom.nav';
import { MountProvider } from '@/providers/MountProvider';
import Footer from '@/components/Footer';

const HomePage = () => {

  return (
    <MountProvider>
      <div className="min-h-screen bg-[#f6fafe] font-sans text-[#171c1f] selection:bg-[#006948]/10">

        <Nav />

        <HomeHeader />

        <HomeSurfaceHierarchy />

        <HomeFeature />

        <HomeCtx />

        {/* MOBILE BOTTOM NAV (Visible only on mobile) */}
        <MobileBottomNav />

        <Footer />
      </div >
    </MountProvider>
  );
};

export default HomePage;