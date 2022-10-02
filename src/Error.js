import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const Error = () => {
    return (
        <Wrapper>
            <div className="container">
                <div>
                    <h2>404</h2>
                    <h2>UH OH.! You're lost..</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Facere voluptates doloribus, quasi et rem
                        voluptatem soluta eaque optio? Quos accusamus corporis,
                        aliquam porro voluptatibus rerum eius aspernatur veniam
                        sed voluptatem!
                    </p>
                    <NavLink to="/">
                        <Button>Go Back to Home</Button>
                    </NavLink>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .container {
        padding: 9rem 0;
        text-align: center;
        h2 {
            font-size: 10rem;
        }
        h3 {
            font-size: 4.2rem;
        }
        p {
            margin: 2rem 0;
        }
    }
`;

export default Error;
