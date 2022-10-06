import HeroSection from "./Components/HeroSection";
import { useProductContext } from "./Context/ProductContext";

const About = () => {
    const { myName } = useProductContext();

    const data = {
        name: "My E-comm Store",
    };

    return (
        <>
            {myName}
            <HeroSection myDataProps={data} />
        </>
    );
};

export default About;
