import React from "react";
import s from "./Cart.module.css";
import NavBar2 from "./NavBar2";
import { useSelector, useDispatch } from "react-redux";
import CartProduct from "./CartProduct";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  let totalProd = 0;
  cart.map((prod) => (totalProd += prod.quantity * prod.price));

  return (
    <div>
      <NavBar2 />
      <div className={s.cartCont}>
        {cart.length ? (
          cart.map((c) => {
            return (
              <CartProduct
                id={c._id}
                key={c._id}
                name={c.name}
                image={c.image}
                price={c.price}
                quantity={c.quantity}
                stock={c.countInStock}
              />
            );
          })
        ) : (
          <p>You have no items in your cart</p>
        )}
      </div>
      <div className={s.totalProd}>
        <span>Total : ${totalProd.toFixed(2)}</span>
      </div>
    </div>
  );
}
