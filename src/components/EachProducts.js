import React from "react";
import { useGlobalContext } from "../context/context";
import "./eachProducts.css";
export default function EachProducts({ prod, changeToRowStyle }) {
  return (
    <article className={changeToRowStyle ? "article-row-container" : "article"}>
      <div className={changeToRowStyle ? "product-info-row" : "products-info"}>
        <img
          src={prod.img}
          alt=""
          className={changeToRowStyle ? "article-row-img" : ""}
        />

        <h2
          className={changeToRowStyle ? "product-title-row" : "product-title"}
        >
          {prod.name}
        </h2>
      </div>
      <div className={changeToRowStyle ? "product-price-row" : "product-price"}>
        <h3>{prod.price}</h3>
      </div>
    </article>
  );
}
