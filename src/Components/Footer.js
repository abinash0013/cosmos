import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
// import Logo from "./../../public/images/logo.png";

import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <Wrapper>
            <section>
                <div className="contact-short">
                    <div className="grid grid-two-column">
                        <div>
                            <h3>Ready to Get Started</h3>
                            <h3>Talk to us Today</h3>
                        </div>
                        <div>
                            <Button>
                                <NavLink to="/contact">Get Started</NavLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <footer style={{ backgroundColor: "#07132E" }}>
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <img src="./images/logo.png" alt="site-logo" />
                        <h3 style={{ lineHeight: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi nobis exercitationem hic?
                        </h3>
                    </div>
                    <div className="footer-subscribe">
                        <h3>Subscribe to get Important Updates..</h3>
                        <form action="#">
                            <input
                                type="email"
                                placeholder="Enter your e-mail"
                            />
                            <input type="submit" name="Subscribe" />
                        </form>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Us On</h3>
                        <div className="footer-social--icons">
                            <div className="social-icons">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="social-icons-a"
                                >
                                    <FaDiscord className="icons" />
                                </a>
                                <h3>Discord</h3>
                            </div>
                            <div className="social-icons">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="social-icons-a"
                                >
                                    <FaInstagram className="icons" />
                                </a>
                                <h3>Instagram</h3>
                            </div>
                            <div className="social-icons">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="social-icons-a"
                                >
                                    <FaYoutube className="icons" />
                                </a>
                                <h3>Youtube</h3>
                            </div>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h3>Call Me</h3>
                        {/* <a href="tel:5551234567">+91 8367436235</a> */}
                        <h3>+91 8367436235</h3>
                        <h3>+91 5673473838</h3>
                        <h3>+114 738334463</h3>
                    </div>
                </div>
                {/* bottom footer */}
                <div className="footer-bottom-section">
                    <hr />
                    <div
                        className="container"
                        style={{
                            marginTop: "2rem",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <h3>
                            @{new Date().getFullYear()} ThapaTechnical. All
                            Rights Reserved
                        </h3>
                    </div>
                </div>
            </footer>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .iSIFGq {
        margin: 0;
    }
    .contact-short {
        max-width: 60vw;
        margin: auto;
        padding: 5rem 10rem;
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 1rem;
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        transform: translateY(50%);
        .grid div:last-child {
            justify-self: end;
            align-self: center;
        }
    }
    footer {
        padding: 14rem 0 0 0;
        // background-color: ${({ theme }) => theme.colors.footer_bg};
        background-color: ${({ theme }) => theme.colors.footer_bg};
        h3 {
            color: ${({ theme }) => theme.colors.hr};
            margin-bottom: 2.4rem;
        }
        p {
            // color: ${({ theme }) => theme.colors.white};
            // color: "#fff";
        }
        .footer-social--icons {
            .social-icons {
                display: flex;
                .social-icons-a {
                    padding-right: 1rem;
                }
            }
            // display: flex;
            // gap: 2rem;
            div {
                padding: 1rem;
                border-radius: 50%;
                border: 2px solid ${({ theme }) => theme.colors.white};
                .icons {
                    color: ${({ theme }) => theme.colors.white};
                    font-size: 2.4rem;
                    position: relative;
                    cursor: pointer;
                }
            }
        }
    }
    .footer-bottom--section {
        padding-top: 9rem;
        hr {
            margin-bottom: 2rem;
            color: ${({ theme }) => theme.colors.hr};
            height: 0.1px;
            padding-top: "2rem";
        }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .contact-short {
            max-width: 80vw;
            margin: 4.8rem auto;
            transform: translateY(0%);
            text-align: center;
            .grid div:last-child {
                justify-self: center;
            }
        }
        footer {
            padding: 9rem 0 9rem 0;
        }
        .footer-bottom--section {
            padding-top: 4.8rem;
        }
    }
`;

export default Footer;
