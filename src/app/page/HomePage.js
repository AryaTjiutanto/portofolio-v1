'use client';

import { useState } from "react";
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

export default function HomePage () {
    // code
    const colorThemeData = [
        {
        backgroundColor: 'bg-neutral-900',
        headingTextColor: 'text-neutral-100',
        descriptionTextColor: 'text-neutral-200',
        borderColor: 'border-neutral-100',

        codeSectionBackgroundColor : '',
        codeSectionborderColor : 'border-neutral-600',

        textHoverSlateColor : 'hover:text-slate-400',
        textHoverSkyBlueColor : 'hover:text-sky-400',
        textHoverEmeraldColor : 'hover:text-emerald-500',
        textHoverRedColor : 'hover:text-red-500',
        textHoverIndigoColor : 'hover:text-indigo-400',

        gradientLaravel: 'from-red-500 to-orange-500',
        gradientTailwind: 'from-cyan-400 to-teal-500',
        gradientReact: 'from-sky-400 to-blue-500',
        gradientNext: 'from-gray-300 to-gray-400',

        display1BackgroundColor : 'bg-white',
        display1HeadingColor : 'text-neutral-900',
        display1DescriptionColor : 'text-neutral-600',
        display1BoxColor : 'bg-neutral-200'
        }
    ];

    const [activeColorThemeIndex, setActiveColorThemeIndex] = useState(0);

    const [colorTheme, setColorTheme] = useState(colorThemeData);

    return (
        <div className={`${colorTheme[activeColorThemeIndex].backgroundColor} selection:bg-indigo-500 w-full min-h-screen relative overflow-x-hidden`}>
            <LoaderWrapper/>
            {/* smooth scroll */}
            <SmoothScroll/>

            {/* color slider */}
            <ColorThemeSlider/>

            {/* vertical grid line */}
            <VerticalGridLines/>

            {/* navigation */}
            <Navbar/>
            
            {/* hero section */}
            <HeroSection colorThemeData={colorTheme[activeColorThemeIndex]}/>

            {/* about me section */}
            <AboutMe colorThemeData={colorTheme[activeColorThemeIndex]}/>

            {/* My Specialities */}
            <MySpecialitiesSection colorThemeData={colorTheme[activeColorThemeIndex]}/>

            {/* skills */}
            <MySkillsSection colorThemeData={colorTheme[activeColorThemeIndex]}/>
            
            {/* youtube */}
            <YoutubeSection colorThemeData={colorTheme[activeColorThemeIndex]}/>

            {/* footer */}
            <Footer colorThemeData={colorTheme[activeColorThemeIndex]}/>
        </div>
    );
}