import { useEffect, useState } from "react";

export const reducer = (state, action) => {
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, products: action.payload, loading: false };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    const findArrDelete = state.cart.find((e) => {
      return e.id === action.payload.id && e.colors === action.payload.colors;
    });

    const indexOfArr = state.cart.indexOf(findArrDelete);
    console.log(indexOfArr);
    // const filteredarr=state.cart.filter(e=> (e.id==findArrDelete.id && e.colors==findArrDelete.colors))
    // console.log(filteredarr,'filteredarr');
    // console.log(
    //   state.cart.filter(function (item) {
    //     return item !== findArrDelete;
    //   }),
    //   "d",
    // );
    return {
      ...state,

      cart: state.cart.filter(function (item) {
        return item !== findArrDelete;
      }),
    };
  }

  if (action.type === "ADD_TO_CART") {
    let newAmount = parseInt(action.payload.selectedAmount);

    let newColor = action.payload.selectedColor;

    const cart2 = state.cart;
    // console.log(state.cart, "state.caftr");

    const result = state.cart.filter(
      (e) =>
        e.id === action.payload.item.id &&
        e.colors === newColor &&
        e.amount >= 1,
    );

    if (newColor.length === 0) {
      console.log("new color doesnt exist");
      newColor = action.payload.item.colors[1];
    }

    if (
      state.cart.some(
        (e) => e.id === action.payload.item.id && e.colors === newColor,
      )
    ) {
      // console.log(newAmount, "newamount");
      let temp = 0;
      let temp2 = 1;
      let temp3 = 0;
      // temp = e.amount + newAmount
      // e.amount = temp

      return {
        ...state,
        cart: state.cart.filter((e) =>
          e.id === action.payload.item.id && e.colors === newColor
            ? ((temp = e.amount + newAmount), (e.amount = temp))
            : e.amount,
        ),
      };
    } else {
      console.log("it soesnt exist");
      return {
        ...state,

        cart: [
          ...state.cart,

          { ...action.payload.item, amount: newAmount, colors: newColor },
        ],
      };
    }
  }

  if (action.type === "UPDATE_AMOUNT") {
    //    console.log(action.payload.selectedAmount,action.payload.item.id);
    // console.log(state.cart, "cart in reducer");
    let newAmount = parseInt(action.payload.newTarget);
    // console.log(newAmount, "mewamoutnt2");
    // if (
    //   state.cart.some(
    //     (e) =>
    //       e.id === action.payload.item.id &&
    //       e.colors === action.payload.item.colors,
    //   )
    // ) {

    // }

    const changeAmountArr = state.cart.map((e) => {
      if (
        e.id === action.payload.item.id &&
        e.colors === action.payload.item.colors
      ) {
        e.amount = newAmount;
        console.log(e, "ee");
        return e;
      } else {
        return e;
      }
    });

    // return {
    //   ...state,
    //     cart: state.cart.filter((e) =>
    //       e.id === action.payload.item.id && e.colors === action.payload.item.colors
    //         ? e.amount=newAmount
    //         : e.amount,
    //     ),

    // };

    return {
      ...state,
      cart: changeAmountArr,
    };
  }

  if (action.type === "CART_AMOUNT") {
    
   
    // return {
    //   ...state,
    //   allAmount: sumWithInitial,
    // };
  }

  return state;
};

export const productReducer = (state, action) => {
  if (action.type === "NEW_SEARCH") {
    console.log(
      action.payload.sortByPriceValue,

      "action.payload.sortByPriceValue",
    );

    return {
      ...state,

      searchBytext: action.payload.searchBytext,

      searchByFreeDelivery: action.payload.searchByFreeDelivery,

      searchByCategory: action.payload.searchByCategory,

      searchByFreeDelivery: action.payload.searchByFreeDelivery,

      sortByPrice: action.payload.sortByPrice,

      sortByPriceValue: action.payload.sortByPriceValue,
    };
  }

  return state;
};
