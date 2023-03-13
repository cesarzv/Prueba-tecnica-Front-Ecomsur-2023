import React from "react";
import s from "./Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card({ name, image, brand, price, id }) {
  return (
    <div>
      <NavLink to={`/details/${id}`} style={{ textDecoration: "none" }}>
        <div className={s.cardContainer}>
          <div className={s.cardImg}>
            <img src={`http://localhost:5000/${image}`} alt="" />
          </div>
          <div className={s.cardInfo}>
            <p className={s.nombre}>{name}</p>
            <p className={s.precio}>${price}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
