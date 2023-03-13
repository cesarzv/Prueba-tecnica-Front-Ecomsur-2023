import React from "react";
import s from "./NavBar2.module.css";
import { NavLink } from "react-router-dom";
import arrow2 from "../img/arrow2.png";
import cartt from "../img/cart.png";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={s.navContainer}>
      <NavLink to="/">
        <img
          className={s.back}
          style={{ width: "40px", height: "40px" }}
          src={arrow2}
          alt=""
        ></img>
      </NavLink>
      <NavLink to="/cart">
        <div className={s.carrito}>
          <img style={{ width: "40px", height: "40px" }} src={cartt} alt="" />
          <span>({cart.length})</span>
        </div>
      </NavLink>
    </div>
  );
}
