import React, { useState, useContext, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import "./cart.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useThemeContext} from '../context/ThemContext'

export default function Cart() {
  const {
    state: { products, amount, cart, allPrice },
    dispatch,
    productState: {
      searchBytext,
      searchByCategory,
      searchByFreeDelivery,
      sortByPrice,
      sortByPriceValue,
    },
  } = useGlobalContext();

  const [selectedAmount, setSelectedAmount] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");

  const theme = useThemeContext();
  const darkMode = theme.darkMode;


  function changeAmount(e, item) {
    const newTarget = e.target.value;
    setSelectedAmount(newTarget);

    // console.log(
    //   item,
    //   "item",
    //   e.target.value,
    //   "e.target.value",
    //   newTarget,
    //   "newta",
    //   item.colors,
    //   "item.colors",
    // );

    dispatch({
      type: "UPDATE_AMOUNT",

      payload: {
        newTarget,
        item,
      },
    });
  }

  const notify = () => toast.error("محصول از سبد خرید شما حذف شد", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  function remove(id, colors) {
    console.log(id, "id", colors, "colors");
    dispatch({
      type: "REMOVE",

      payload: {
        id,
        colors,
      },
    });
    notify()
  }

  useEffect(() => {}, [selectedAmount]);

  const changeAmountEffect = () => {
    const allPrice = cart.map((e) => {
      let temp3,
        newPrice = 0;
      temp3 = e.amount * e.price;
      return (newPrice = temp3);
    });
    // console.log(allPrice, "allprice");
    const initialValue = 0;

    const sumWithInitial = allPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    return sumWithInitial;
  };

  useEffect(() => {
    changeAmountEffect();
    //  allPrice=initialValue
  }, [selectedAmount]);

  // console.log(cart, "cart in cart.js");

  const arrayOfnumbers = Array.from({ length: 1000 }, (_, i) => i + 1);
  return (
    <div className='all-container-cart'>
      {/* <Top /> */}
      <Navbar />
      <section className={darkMode ? 'section-cart-container section-cart-container-dark-theme' : "section-cart-container"}>
        <h1>سبد خرید</h1>
        {cart.length === 0 ? (
          <div className="empty-cart">سبد خرید خالی است</div>
        ) : (
          <div className="cart-container">
            <div className="cart-right-container">
              {cart.map((item) => (
                <div className="each-cart-product">
                  <div className="item-cart-border"></div>
                  <div className="item-cart-container">
                    <div className="item-cart-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="item-cart-name-color">
                      <h2>{item.name}</h2>
                      <h4>رنگ های موجود</h4>
                      <div
                        className="product-right-colors"
                        style={{ backgroundColor: item.colors }}
                      ></div>
                    </div>
                    <div className="item-right-input">
                      <h4>تعداد</h4>
                      {/* <select
                      id="mySelect"
                      onChange={(event) => console.log(event.target.value)}
                    > */}

                      <select
                        id="mySelect"
                        defaultValue={item.amount}
                        onChange={(e) => changeAmount(e, item)}
                        className={darkMode ? 'item-right-input-dark-theme' : ''}
                      >
                        {arrayOfnumbers.map((num) => (
                          <option>{num}</option>
                        ))}
                      </select>
                      <p onClick={() => remove(item.id, item.colors)} className={darkMode ? 'delete-btn-dark-theme' : 'delete-btn'}>حذف</p>
                    </div>
                    <h3 className="item-right-price"> {item.price} تومان</h3>
                  </div>
                  <div >
                   
                  </div>
                </div>
              ))}
            </div>

            <div className="bill-container">
              <div className={darkMode ? 'bill-total bill-total-dark-theme' : "bill-total"}>
                <div className="bill-title">
                  <h3>صورت حساب</h3>
                </div>
                <div className="item-cart-border"></div>
                <div className="bill-price">
                  <span>
                    <b>مبلغ قابل پرداخت</b>
                  </span>
                  <span>:</span>
                  <span>{changeAmountEffect()}</span>
                </div>
              </div>
              <div className="please-login">
                <Link to="/cart/login">
                  <button className={darkMode ? 'login-btn-dark-theme' : ''}>قبل از خرید ثبت نام کنید</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
       <ToastContainer/>
    </div>
  );
}
