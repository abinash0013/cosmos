import React from "react";
import HeroSection from "./Components/HeroSection";

const About = () => {
    const data = {
        name: "My E-comm Store",
    };

    return <HeroSection myDataProps={data} />;
};

export default About;
