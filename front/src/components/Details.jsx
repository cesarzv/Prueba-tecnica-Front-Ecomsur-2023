import React from "react";
import s from "./Details.module.css";
import NavBar2 from "./NavBar2";
import { useParams } from "react-router-dom";
import { getDetails, cleanProduct, addToCart } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import truck from "../img/truck.png";
import arrow from "../img/arrow.png";
import toast, { Toaster } from "react-hot-toast";

export default function Details() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const cart = useSelector((state) => state.cart);
  let { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
    return () => {
      dispatch(cleanProduct());
    };
  }, [dispatch, id]);

  const handleSubmit = (id) => {
    let producto = details.find((producto) => producto._id === id);
    producto.countInStock--;
    dispatch(addToCart(id));
    toast.success("The product was added to the cart");

    // if (!productInCart) {
    //   return toast.success("The product was added to the cart");
    // } else {
    //   return toast.error("The product is already in the cart");
    // }
  };

  console.log(details);

  return (
    <div className={s.contt}>
      <NavBar2 />

      <div className={s.detailCont}>
        {details.length ? (
          <div className={s.detailParent}>
            <div className={s.detHeader}>
              <p>{details[0].brand}</p>
              <p className={s.detName}>{details[0].name}</p>
              <div className={s.rating}>
                {(() => {
                  if (details[0].rating === 5) {
                    return <h4>★★★★★</h4>;
                  } else if (
                    details[0].rating === 4 ||
                    details[0].rating === 4.5
                  ) {
                    return <h4>★★★★</h4>;
                  } else if (
                    details[0].rating === 3 ||
                    details[0].rating === 3.5
                  ) {
                    return <h4>★★★</h4>;
                  } else if (details[0].rating === 2) {
                    return <h4>★★</h4>;
                  } else if (details[0].rating === 1) {
                    return <h4>★</h4>;
                  } else {
                    return "";
                  }
                })()}
                <span>{details[0].rating}</span>
              </div>
            </div>
            <div className={s.detCont}>
              <div className={s.detailImg}>
                <img src={`http://localhost:5000/${details[0].image}`} alt="" />
              </div>
              <div className={s.detailInfo}>
                <div className={s.detailPrecio}>
                  <p>${details[0].price}</p>
                  <span>See the means of payment</span>
                </div>
                <div className={s.envio}>
                  <div className={s.envioIcon}>
                    <img
                      style={{ width: "45px", height: "45px" }}
                      src={truck}
                      alt=""
                    ></img>
                  </div>
                  <div>
                    <p>
                      Free shipping nationwide. <br></br> Know the times and the
                      shipping methods. <br></br>
                      <span>Calculate when it arrives</span>
                    </p>
                  </div>
                </div>

                <div className={s.devolucion}>
                  <div className={s.devolucionIcon}>
                    <img
                      style={{ width: "45px", height: "45px" }}
                      src={arrow}
                      alt=""
                    ></img>
                  </div>
                  <div>
                    <p>
                      Free return. <br></br> You have 30 days from when you you
                      receive. <br></br>
                      <span>Know more</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleSubmit(id)}
                  disabled={details[0].countInStock === 0}
                >
                  Add item to cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <Toaster />
    </div>
  );
}
