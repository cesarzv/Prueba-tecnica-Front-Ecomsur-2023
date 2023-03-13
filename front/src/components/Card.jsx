import React from "react";
import s from "./Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card({ name, image, brand, price, id, rating }) {
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
            <div className={s.ratingCard}>
              {(() => {
                if (rating === 5) {
                  return <h4>★★★★★</h4>;
                } else if (rating === 4 || rating === 4.5) {
                  return <h4>★★★★</h4>;
                } else if (rating === 3 || rating === 3.5) {
                  return <h4>★★★</h4>;
                } else if (rating === 2) {
                  return <h4>★★</h4>;
                } else if (rating === 1) {
                  return <h4>★</h4>;
                } else {
                  return "";
                }
              })()}
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
