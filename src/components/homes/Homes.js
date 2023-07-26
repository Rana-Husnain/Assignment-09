import React from 'react'
import "@/styles/homes/Homes.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import TrendingSection from '../trendingSection/TrendingSection'
import HomeSection from '../homeSection/HomeSection'
import CreaterSection from '../createrSection/CreaterSection'
import DiscoverSection from '../discoverSection/DiscoverSection'
import BrowseSection from '../browseSection/BrowseSection'
import HowSection from '../howSection/HowSection'
import JoinSection from '../joinSection/JoinSection'
import Footer from '../footer/Footer'

export default function Homes() {
    return (
        <>
            <HomeSection />
            <TrendingSection />
            <CreaterSection />
            <DiscoverSection />
            <BrowseSection />
            <HowSection />
            <JoinSection />
            <Footer />
        </>
    )
}
