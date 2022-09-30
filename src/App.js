import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: pages
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Error from "./Error";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Header from "./Components/Header";

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: style
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

function App() {
    const theme = {
        colors: {
            heading: "rgba(24 24 24)",
            text: "rgba(29,29,29,.8)",
            white: "fff",
            black: "#212529",
            helper: "#8490ff",
            bg: "#F6F8FA",
            footer_bg: "0a1435",
            btn: "rgba(98.64,243)",
            border: "rgba(98,84,243,0.5)",
            hr: "#fff",
            gradient:
                "Linear-gradient(0deg, (rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
            shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px",
            shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
        },
        media: {
            mobile: "768px",
            tab: "998px",
        },
    };
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Router>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                        <Route
                            path="/singleProduct/:id"
                            element={<SingleProduct />}
                        />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
