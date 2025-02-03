import React from "react";
import LandingHero from "../components/Hero/LandingHero";
import Feature from "../components/Hero/Feature";
import HowWorks from "../components/Hero/HowWorks";
import PricingPlan from "../components/Hero/PricingPlan";
import FAQ from "../components/Hero/FAQ";
import DontMiss from "../components/cta/DontMiss";

function Landing() {
    return (
        <>
            <LandingHero />
            <Feature />
            <HowWorks />
            <PricingPlan />
            <FAQ />
            <DontMiss />
        </>
    );
}

export default Landing;
