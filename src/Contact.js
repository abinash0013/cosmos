import styled from "styled-components";

const Contact = () => {
    const Wrapper = styled.section`
        padding: 9rem 0 5rem 0;
        text-align: center;
        .container {
            margin-top: 6rem;
            .contact-form {
                max-width: 50rem;
                margin: auto;
                .contact-inputs {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                    input[type="submit"] {
                        cursor: pointer;
                        transition: all 0.2s;
                        &:hover {
                            background-color: ${({ theme }) =>
                                theme.colors.white};
                            border: 1px solid ${({ theme }) => theme.colors.btn};
                            color: ${({ theme }) => theme.colors.btn};
                            transform: scale(0.9);
                        }
                    }
                }
            }
        }
    `;
    return (
        <Wrapper>
            <h2 className="common-heading">Contact Page</h2>
            <div className="container">
                <div className="contact-form">
                    <form
                        action="https://formspree.io/f/xzbwgzba"
                        method="POST"
                        className="contact-inputs"
                    >
                        <input
                            type="text"
                            placeholder="Enter Username"
                            name="username"
                            autoComplete="off"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="useremail"
                            autoComplete="off"
                            required
                        />
                        <textarea
                            placeholder="Enter your message...!"
                            name="usermessage"
                            autoComplete="off"
                            cols="30"
                            rows="10"
                            required
                        />
                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24417.096227693477!2d75.852248133068!3d26.827017305476602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc82d4eddb99f%3A0xba02e69ea6ae5a7e!2sB-296%2C%20Vigyan%20Nagar%2C%20Ramnagariya%2C%20Jaipur%2C%20Rajasthan%20302017!5e0!3m2!1sen!2sin!4v1664536885822!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, margin: "3rem 0 0 0" }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </Wrapper>
    );
};

export default Contact;
