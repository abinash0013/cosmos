import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";

const Home = () => {
    const data = {
        name: "My Store",
    };
    return (
        <>
            <HeroSection myDataProps={data} />
            <Services />
            <Trusted />
        </>
    );
    // return <Wrapper className="test">Home</Wrapper>;
};

// const Wrapper = styled.section`
//     background-color: ${({ theme }) => theme.colors.bg};
//     width: 20rem;
//     height: 20rem;
// `;

export default Home;
