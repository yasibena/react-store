import React from "react";
import "./home.css";
import FeaturedProduct from "../components/FeaturedProduct";
import { useGlobalContext } from "../context/context";
import featureItem from "../info";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Top from "../components/Top";
import { useThemeContext } from "../context/ThemContext";


export default function Home() {
  // const filteredItem= cart.filter(item=>item.featured===true).map(filteredItem=>{
  //  return{

  //  }
  // })

  const {
    state: { products },
    productDispatch
  } = useGlobalContext();

  const theme = useThemeContext();
  const darkMode = theme.darkMode;
  
  return (
    <>
    {/* <Top /> */}
      <Navbar />
    <main >
      
      <section className="top-landing">
        <div className="right">
          <h1>ما روش خرید شما را به بهترین شکل تغییر میدهیم </h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبودد.
          </p>
          <Link to='/products'>
          <button className={darkMode ? 'btn-theme-dark btn-product' : "btn-product"}>محصولات</button>
          </Link>
        </div>
        <div className="left">
          <img
            src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
            alt=""
          />
          <img
            src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"
            alt=""
          />
        </div>
      </section>

      <section className="featured-product">
        <div className="title-featured-product">
          {" "}
          <h2>محصولات پرفروش</h2>
          <hr />
        </div>
        <div className="products-featured-product">
          {products
            .filter((item) => item.featured === true)
            .map((item, index) => (
              <Link className="link-each-product" to={`/products/${item.id}`}>
                <FeaturedProduct {...item} />
              </Link>
            ))}
        </div>
      </section>
    </main>
    </>
  );
}
