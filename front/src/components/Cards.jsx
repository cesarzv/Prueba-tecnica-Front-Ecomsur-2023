import React from "react";
import s from "./Cards.module.css";
import Card from "./Card";

export default function Cards({ productos }) {
  return (
    <div className={s.cardsContainer}>
      {productos.length
        ? productos.map((p) => {
            return (
              <Card
                id={p._id}
                key={p._id}
                name={p.name}
                image={p.image}
                brand={p.brand}
                price={p.price}
              />
            );
          })
        : ""}
    </div>
  );
}
