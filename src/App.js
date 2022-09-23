import "./App.css";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: pages
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Error from "./Error";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";

function App() {
    return (
        <div className="App">
            <Router>
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
            <h1>Cosmos</h1>
        </div>
    );
}

export default App;
