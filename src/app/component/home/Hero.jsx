import React from "react";
import HeroBgVideo from "../common/HeroBgVideo";
import Header from "../common/Header";

const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">

            <HeroBgVideo />
            <Header/>

            {/* Hero content can go here */}
        </div>
    );
};

export default Hero;
