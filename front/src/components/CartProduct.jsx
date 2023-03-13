import React from "react";
import s from "./CartProduct.module.css";
import {
  removeFromCart,
  addOneToCart,
  removeOneFromCart,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

export default function CartProduct({
  name,
  image,
  price,
  quantity,
  id,
  stock,
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.error("The product was removed from the cart.");
  };

  const handleAddOne = (id) => {
    let producto = cart.find((producto) => producto._id === id);
    producto.countInStock--;
    dispatch(addOneToCart(id));
  };

  const handleRemoveOne = (id) => {
    let producto = cart.find((producto) => producto._id === id);
    producto.countInStock++;
    dispatch(removeOneFromCart(id));
  };
  return (
    <div className={s.cartContainer}>
      <div className={s.cartImg}>
        <img src={`http://localhost:5000/${image}`} alt="" />
      </div>
      <div className={s.cartInfo}>
        <h2>{name}</h2>
        <div className={s.precios}>
          <p className={s.cartPrecio}>${(price * quantity).toFixed(2)}</p>
          <div className={s.btns}>
            <button onClick={() => handleRemoveOne(id)}>-1</button>
            <span>{quantity}</span>
            <button onClick={() => handleAddOne(id)} disabled={stock <= 0}>
              +1
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => handleRemove(id)}>X</button>
      <Toaster />
    </div>
  );
}
