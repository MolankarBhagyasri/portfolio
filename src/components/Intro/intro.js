import React from "react";
import hireme from "../../assets/hireme.png";


import "./intro.css";

const Intro = () => {
  return (
    <section className="intro">
    
      <div className="introContent">
        <span className="hello">Hello,</span>

        <h1 className="introText">
          I’m <span className="highlight">Bhagyasri</span>
          <br />
          Web Developer
        </h1>

        <p className="introPara">
          I am a skilled and passionate web developer with experience in
          creating visually appealing and user-friendly websites.
        </p>

        <button className="hireBtn">
          <img src={hireme} alt="" className="hireImg" />
          Hire Me
        </button>
      </div>

     
    </section>
  );
};

export default Intro;

