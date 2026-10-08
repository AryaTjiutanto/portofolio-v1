'use client';

import ColorThemeSlider from "../components/ui/ColorThemeSlider";
import VerticalGridLines from "../components/ui/VerticalGridLines";
import Footer from "../components/ui/Footer";
import AboutMe from "../components/homepage/AboutMe";
import YoutubeSection from "../components/homepage/YoutubeSection";
import HeroSection from "../components/homepage/HeroSection";
import MySpecialitiesSection from "../components/homepage/MySpecialitiesSection";
import MySkillsSection from "../components/homepage/MySkillsSection";
import Navbar from "../components/ui/Navbar";
import SmoothScroll from "../components/SmoothScroll";
import LoaderWrapper from "../components/ui/loader";
import MyProject from "../components/homepage/MyProjects";

export default function HomePage() {
    return (
        <div className={`bg-neutral-950 selection:bg-indigo-500 w-full min-h-screen relative overflow-x-hidden`}>
            <LoaderWrapper />
            {/* smooth scroll */}
            <SmoothScroll />

            {/* color slider */}
            <ColorThemeSlider />

            {/* vertical grid line */}
            <VerticalGridLines />

            {/* navigation */}
            <Navbar />

            {/* hero section */}
            <HeroSection />

            {/* about me section */}
            <AboutMe />

            {/* My Specialities */}
            {/* <MySpecialitiesSection/> */}

            {/* skills */}
            <MySkillsSection />

            {/* My Projects */}
            {/* <MyProject /> */}

            {/* youtube */}
            <YoutubeSection />

            {/* footer */}
            <Footer />
        </div>
    );
}