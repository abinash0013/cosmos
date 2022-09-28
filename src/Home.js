import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";
// import styled from "styled-components";

const Home = () => {
    const data = {
        name: "My Store",
    };
    return <HeroSection myDataProps={data} />;
    // return <Wrapper className="test">Home</Wrapper>;
};

// const Wrapper = styled.section`
//     background-color: ${({ theme }) => theme.colors.bg};
//     width: 20rem;
//     height: 20rem;
// `;

export default Home;
