import React, { useState } from "react";
import "./searchbar.css";
import { useGlobalContext } from "../context/context";
import { useThemeContext } from "../context/ThemContext";

export default function Searchbar() {
  const {
    state: { products },
    productDispatch
  } = useGlobalContext();

  const [searchBytext, setSearchBytext] = useState("");
  const [searchByFreeDelivery, setSearchByFreeDelivery] = useState(false);
  const [searchByCategory, setSearchByCategory] = useState("همه");
  const [sortByPrice, setSortByPrice] = useState("");
  const [sortByPriceValue, setSortByPriceValue] = useState();


  function handleSearch(event) {
    event.preventDefault();
    console.log("aaaaaaaaaaaaa");
    // const resultsArray = products.filter(product => product.name.includes(searchBytext)
    //     || product.category.includes(searchByCategory)
    // )

    // productDispatch({ type: 'NEW_SEARCH', payload: resultsArray })

    productDispatch({
      type: "NEW_SEARCH",
      payload: {
        searchBytext,
        searchByFreeDelivery,
        searchByCategory,
        sortByPrice,
        sortByPriceValue
      }
    });
  }

   const theme = useThemeContext();
  const darkMode = theme.darkMode;
  const changeTheme = () => {
    theme.setDarkMode(!darkMode);
  };
  // function handleCheckBox(event){
  //     if(event.target.checked){

  //       setSearchByFreeDelivery(event.target.checked)
  //       console.log(searchByFreeDelivery,'searchByFreeDelivery')
  //     }
  //     else{
  //         setSearchByFreeDelivery(false)
  //     }
  // }

  return (
    <form className={darkMode ? 'dark-form' : ''}>
      <div className="input-top">
        <div className="input-top-element search-product-container">
          <label>جست و جو در محصولات</label>
          <input
            type="text"
            value={searchBytext}
            onChange={(event) => setSearchBytext(event.target.value)}
            className={darkMode ? 'input-selecet-dark' : ''}
          />
        </div>

        <div className="input-top-element search-type-product-container">
          <label>انتخاب نوع</label>
          <select
            name=""
            id=""
            value={searchByCategory}
            onChange={(event) => setSearchByCategory(event.target.value)}
            className={darkMode ? 'input-selecet-dark' : ''}
          >
            <option>همه</option>
            <option>تخت</option>
            <option>دکور</option>
            <option>میز </option>
            {/* {
                            allCategories.map((item)=>{
                                
                                return <option value={item} >{item}</option>
                            })
                        } */}
          </select>
        </div>

        <div className="input-top-element search-sort-container">
          <label>مرتب سازی بر اساس</label>
          <select
            name=""
            id=""
            onChange={(event) => setSortByPrice(event.target.value)}
            className={darkMode ? 'input-selecet-dark' : ''}
          >
            <option value="low">کمترین قیمت </option>
            <option value="high">بیشترین قیمت</option>
          </select>
        </div>
      </div>
      <div className="input-bottom">
        <div className="input-bottom-element select-price">
          <div className="select-price-label top-label">
            <label>انتخاب قیمت</label>
            <label>{sortByPriceValue} </label>
          </div>
          <input
            className="range"
            type="range"
            name="price"
            min="11000"
            max="18500"
            class="range range-primary range-sm"
            step="50"
            onChange={(event) => setSortByPriceValue(event.target.value)}
          />
          {/* value={} */}
          <div className="input-bottom-element select-price-label bottom-label">
            <label id="nember-label">0</label>
            <label> بیشترین قیمت </label>
          </div>
        </div>
        <div className="input-bottom-element  input-bottom-checkbox">
          <label className="checkbox-container">
            <div className="checkbox-lable-container">
              <label> ارسال رایگان</label>
            </div>
            <input
              type="checkbox"
              name=""
              id=""
              value={searchByFreeDelivery}
              onChange={(event) =>
                setSearchByFreeDelivery(event.target.checked)
              }
            />
          </label>
        </div>

        <div className="input-bottom-button">
          <button id={darkMode ? 'search-id-dark-theme' : "search-id"} onClick={handleSearch}>
            جست و جو
          </button>
        </div>
        <div className={darkMode ? "input-bottom-button input-theme-dark" : "input-bottom-button"}>
          <button  id={darkMode ? 'cancle-id-dark-theme' : "cancle-id"}>حذف فیلترها</button>
        </div>
      </div>
    </form>
  );
}
