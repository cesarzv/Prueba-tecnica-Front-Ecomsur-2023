import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Cart from "./components/Cart";

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState("");

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/")
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();
  }, []);
  // -------------------------------------------------

  return (
    <div style={{ textAlign: "center" }}>
      {/* <h1> Prueba tecnica front Ecomsur 2021</h1> */}

      {/* Check to see if express server is running correctly */}
      {/* <h5>{response}</h5> */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};

export default App;
