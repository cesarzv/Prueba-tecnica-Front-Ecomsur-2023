import React from "react";
import { useEffect, useState } from "react";
import { getProducts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import s from "./Home.module.css";
import NavBar from "./NavBar";
import Cards from "./Cards";

export default function Home() {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={s.homeContainer}>
      <NavBar />
      <Cards productos={productos} />
    </div>
  );
}
