import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import EachProducts from "../components/EachProducts";
import { useGlobalContext } from "../context/context";
import Pagination from "../components/Pagination";
import "./product.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import {useThemeContext} from '../context/ThemContext'

export default function Products() {
  const {
    state: { products },
    productState: {
      searchBytext,
      searchByCategory,
      searchByFreeDelivery,
      sortByPrice,
      sortByPriceValue,
    },
  } = useGlobalContext();

  const [currentPage, setCurrentPage] = useState(1);

  const [selectActiveShow, setselectActiveShow] = useState(false);
  const [changeToRowStyle, setChangeToRowStyle] = useState(false);
  const [recordsPerPage] = useState(8);
  const indexOfLastRecord = currentPage * recordsPerPage; //3
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage; //0
  //records to be displayed on the current page




  const filteredProducts = () => {
    let filterP = products;

    if (searchBytext) {
      console.log("d");
      filterP = filterP.filter((prod) => prod.name.includes(searchBytext));
    }

    if (searchByCategory && searchByCategory != "همه") {
      console.log(searchByCategory, "sbc");
      filterP = filterP.filter((prod) => prod.category === searchByCategory);
      console.log(filterP, "fpppppp");
    }

    if (searchByFreeDelivery == true) {
      filterP = filterP.filter(
        (prod) => prod.freeDelivery === searchByFreeDelivery,
      );
    }

    if (sortByPrice) {
      filterP = filterP.sort((a, b) =>
        sortByPrice === "کمترین قیمت" ? a.price - b.price : b.price - a.price,
      );
    }

    if (sortByPriceValue) {
      filterP = filterP.filter(
        (prod) =>
          prod.price == sortByPriceValue || prod.price < sortByPriceValue,
      );
      console.log(filterP);
    }

    return filterP;
  };

  const currentRecords = filteredProducts().slice(
    indexOfFirstRecord,
    indexOfLastRecord,
  );

  // const arrOfProducts=[currentRecords]

  // const allCategories = ['همه', ...new Set(products.map(item => item.category))]

  const nPages = Math.ceil(filteredProducts().length / recordsPerPage);


  const theme = useThemeContext();
  const darkMode = theme.darkMode;



  // const arrOfSelectedP=[]
  // for(let i in cart){
  //   arrOfSelectedP.push(cart[i])
  //   setSelectProducts(arrOfSelectedP)
  //  console.log(selectProducts);
  // }

  // useEffect(()=>{
  //   productDispatch({ type: 'DISPLAY_ITEMS', payload:fetchProductState })
  // })

  return (
    <>
      {/* <Top /> */}
      <Navbar />
      <main>
        <section className="search-container">
          <Searchbar />
        </section>
        <div className="all-product-number">
          <span>
            {" "}
            {filteredProducts().length} <span>محصول</span>{" "}
          </span>
          <span className="svg-container">
          
            <span className={changeToRowStyle ? `${darkMode ?'active-show-dark-theme active-show'  :"active-show " }` : ""}>
              <svg
                onClick={() => setChangeToRowStyle(true)}
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </span>
            <span className={changeToRowStyle ? "" : `${darkMode ? 'active-show-dark-theme active-show'  : "active-show " }`}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                onClick={() => setChangeToRowStyle(false)}
              >
                <path
                  fill="currentColor"
                  d="M4 4h4v4H4V4zM4 10h4v4H4v-4zM8 16H4v4h4v-4zM10 4h4v4h-4V4zM14 10h-4v4h4v-4zM10 16h4v4h-4v-4zM20 4h-4v4h4V4zM16 10h4v4h-4v-4zM20 16h-4v4h4v-4z"
                />
              </svg>
            </span>
          </span>
        </div>

        <hr />
        {/* <section className='all-products-container'> */}
        <section
          className={
            changeToRowStyle
              ?  `${darkMode ? 'all-products-container-row all-products-container-row-dark-theme'  : "all-products-container-row"  }`  
              : "all-products-container"
          }
        >
          {currentRecords.map((prod) => (
            <Link to={`/products/${prod.id}`} className={darkMode ? 'a-dark-theme' : ''}>
              <EachProducts prod={prod} changeToRowStyle={changeToRowStyle} />
            </Link>
          ))}

          {/* {
          filteredProducts().map((prod) => (
            <SingleProduct prod={prod} key={prod.id} />
          ))} */}
        </section>

        <section className="page-numbers-container">
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </section>
      </main>
    </>
  );
}
