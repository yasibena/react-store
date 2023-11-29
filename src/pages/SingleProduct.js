import React, { useState } from "react";

import { useSearchParams } from "react-router-dom";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import { useGlobalContext } from "../context/context";

import "./singleProduct.css";
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useThemeContext} from '../context/ThemContext'


export default function SingleProduct() {
  const {
    state: { products },

    dispatch,

    productState: {
      searchBytext,

      searchByCategory,

      searchByFreeDelivery,

      sortByPrice,

      sortByPriceValue,
    },
  } = useGlobalContext();

  //get id from link

  const params = useParams();

  const Id = parseInt(params.id);

  const mainProduct = products.filter((cartItem) => cartItem.id == Id);

  const arrayOfnumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  const [selectedAmount, setSelectedAmount] = useState(1);

  const [selectedColor, setSelectedColor] = useState("");

  const theme = useThemeContext();
  const darkMode = theme.darkMode;



  function colorChange(event) {
    setSelectedColor(event.target.style.backgroundColor);
  }
  const notify = () =>
    toast.success("محصول به سبدخرید اضافه شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      textAlign: "right",
     
    });

  function addToCart(item) {
    dispatch({
      type: "ADD_TO_CART",

      payload: {
        item,

        selectedAmount,

        selectedColor,
      },
    });
    notify();
  }

  return (
    <>
      {/* <Top /> */}
      <Navbar />
      <div className="product-single-container">
        {mainProduct.map((item) => (
          <>
            <div  className={ darkMode ? "product-left-dark-theme product-left" : "product-left"}>
              <li>
                <Link className={darkMode ? 'mini-menu-dark-theme mini-menu' : 'mini-menu'} to="/">
                  خانه
                </Link>
              </li>
              >
              <li>
                <Link className={darkMode ? 'mini-menu-dark-theme mini-menu' : 'mini-menu'} to="/products">
                  محصولات
                </Link>
              </li>
              <div className="product-left-single-img">
                <img src={item.img} alt="" />
              </div>
            </div>

            <div className="product-right">
              <h1 className="product-right-title">{item.name}</h1>

              <h2 className="product-right-price">{item.price} تومان</h2>

              <p className="product-right-peice-info">{item.info}</p>

              <div className="product-right-colors-container">
                <div classNAme="product-right-colors-title">
                  <h4>رنگ های موجود</h4>
                </div>

                <div className="product-right-colors-colors">
                  {item.colors.map((eachColor) => (
                    // <input

                    //   type="text"

                    //   className="product-right-colors"

                    //   style={{ backgroundColor: eachColor }}

                    //   onClick={(event) => setSelectedColor(event.target.style.backgroundColor)}

                    // ></input>

                    <button
                      type="text"
                      autoFocus
                      className="product-right-colors"
                      style={{ backgroundColor: eachColor }}
                      onClick={(event) => colorChange(event)}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="product-right-input">
                <h4>تعداد</h4>

                <select
                  id={darkMode ? 'mySelect-dark-theme' : 'mySelect'}
                  onChange={(event) => setSelectedAmount(event.target.value)}
                >
                  {arrayOfnumbers.map((num) => (
                    <option>{num}</option>
                  ))}
                </select>
              </div>

              <div className="product-right-btn-add">
                {/* <button onClick={() => addToCart(item.id)}> */}

                <button onClick={() => addToCart(item)} className='btn-add-to-cart'>
                  اضافه کردن به سبد خرید
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
      <ToastContainer/>
    </>
  );
}
