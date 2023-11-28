import React, { useState, useEffect } from "react";

import "./navbar.css";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemContext";

export default function Navbar() {
  const [fixedColor, setFixedColor] = useState(false);
  const [allAmountState, setAllAmountState] = useState(0);
  const {
    state: { products, amount, cart, allPrice },
    changeAmount,
    dispatch,
    productState: {
      searchBytext,
      searchByCategory,
      searchByFreeDelivery,
      sortByPrice,
      sortByPriceValue,
    },
  } = useGlobalContext();
  const [showMenu, setShowMenu] = useState(true);

  //for change theme
  const theme = useThemeContext();
  const darkMode = theme.darkMode;
  const changeTheme = () => {
    theme.setDarkMode(!darkMode);
  };

  function allAmountCa() {
    console.log(cart, "cartttttttttttt");
    const allAmount = cart.map((e) => {
      return parseInt(e.amount);
    });
    console.log(allAmount, "allAmount");
    const initialValue = 0;
    const sumWithInitial = allAmount.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    console.log(sumWithInitial, "sumWithInitial");
    return sumWithInitial;
  }

  useEffect(() => {
    allAmountCa();
  });

  return (
    <nav className={darkMode ? "nav-back-dark " : ""}>
      <div className={darkMode ? 'icons icons-dark' : 'icons'}>
        <Link className={darkMode ? 'icons-link-dark' : "icons-link"} to="/cart">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.8em"
            width="1.8em"
          >
            <path d="M21.5 15a3 3 0 00-1.9-2.78l1.87-7a1 1 0 00-.18-.87A1 1 0 0020.5 4H6.8l-.33-1.26A1 1 0 005.5 2h-2v2h1.23l2.48 9.26a1 1 0 001 .74H18.5a1 1 0 010 2h-13a1 1 0 000 2h1.18a3 3 0 105.64 0h2.36a3 3 0 105.82 1 2.94 2.94 0 00-.4-1.47A3 3 0 0021.5 15zm-3.91-3H9L7.34 6H19.2zM9.5 20a1 1 0 111-1 1 1 0 01-1 1zm8 0a1 1 0 111-1 1 1 0 01-1 1z" />
          </svg>
        </Link>
        <span className="shop-number">{allAmountCa()}</span>
        {darkMode ? (
          <svg
            fill="currentColor"
            className='change-theme-transition'
            viewBox="0 0 16 16"
            height="1.5em"
            width="1.5em"
            onClick={changeTheme}
          
          >
            <path d="M8 12a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className='change-theme-transition'
            fill="currentColor"
            height="1.5em"
            width="1.5em"
            onClick={changeTheme}
          >
            <path d="M12 11.807A9.002 9.002 0 0110.049 2a9.942 9.942 0 00-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 002.735-5.119A9.003 9.003 0 0112 11.807z" />
          </svg>
        )}
      </div>

<div className={darkMode ? 'ul-dark' : ''}>
      <ul className={showMenu ? "menu-list " : `${darkMode ?'ul-dark show-menu'  :"show-menu " }`}>
        <li onClick={()=>setFixedColor(true)} className={fixedColor ? 'fixed-color' : ''}>
          <Link className={darkMode ? 'links links-dark' : "links "} to="/">
            خانه
          </Link>
        </li>
        <li>
          <Link  className={darkMode ? 'links links-dark' : "links"} to="/about">
            درباره
          </Link>
        </li>
        <li>
          <Link className={darkMode ? 'links links-dark' : "links"} to="/products">
            محصولات
          </Link>
        </li>
        <li>
          <Link className={darkMode ? 'links links-dark' : "links"} to="/cart">
            سبدخرید
          </Link>
        </li>
      </ul>
</div>
      <span id="menu-icon">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          onClick={() => setShowMenu(!showMenu)}
        >
          <path
            fill="currentColor"
            d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM4 18a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM5 11a1 1 0 100 2h8a1 1 0 100-2H5z"
          />
        </svg>
      </span>
      <span className={darkMode ? 'logo logo-dark' : 'logo'}>C</span>
    </nav>
  );
}
