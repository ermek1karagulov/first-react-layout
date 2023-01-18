import React from "react";
import BasicExample from "./bootsrap/BasicExample";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Btns from "./bootsrap/Btn";
import Img from "../images/Шабданцы.jpg";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <BasicExample />
      <Btns />
      <img className="img-shabdancy" src={Img} alt="" />
      <footer>@First layout</footer>
    </div>
  );
};

export default HomePage;
