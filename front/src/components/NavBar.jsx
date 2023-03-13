import React from "react";
import s from "./NavBar.module.css";
import cartt from "../img/cart.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={s.navContainer}>
      <NavLink to="/cart">
        <div className={s.carrito}>
          <img style={{ width: "40px", height: "40px" }} src={cartt} alt="" />
          <span>({cart.length})</span>
        </div>
      </NavLink>
    </div>
  );
}
