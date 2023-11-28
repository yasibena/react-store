import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import "./App.css";
import SingleProduct from "./pages/SingleProduct";
import Top from "./components/Top";
import Login from "./components/Login";
import Signin from "./components/Signin";
import { useThemeContext } from "./context/ThemContext";

const App = () => {
  const theme = useThemeContext();
  const darkMode = theme.darkMode;

  return (
    <div className={darkMode ? "background-dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/login" element={<Login />} />
          <Route path="/cart/register" element={<Signin />} />
          {/* <Route path="*" element={<Error/>}/> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
