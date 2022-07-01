import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/services");
  };
  return (
    <main>
      <section className="text-section">
        <h1>
          Welcome to<span>Jules'.Store</span>
        </h1>
        <p>
          <em>...your one stop shop for everything skincare</em>
        </p>
        <button className="btn" onClick={clickHandler}>
          View Our Services
        </button>
      </section>
      {/* <section className="img-section">
        <img src="images/hero_pic1.webp" alt="hero pic" className="hero_pic1" />
        <img src="images/heropic2.jpg" alt="hero pic" className="heropic2" />
      </section> */}
    </main>
  );
};

export default Home;
