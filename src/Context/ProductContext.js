// create a context
// provider
// consumer => useContext Hooks

import { createContext, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
    const getProducts = async (url) => {
        const res = await axios.get(url);
        const products = await res.data;
        console.log("products", products);
    };
    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ myName: "Abinash" }}>
            {children}
        </AppContext.Provider>
    );
};

// custom Hooks
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
