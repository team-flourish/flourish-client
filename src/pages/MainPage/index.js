import React from "react";
import { Brand } from '../../components'
import Background from '../../images/toa-heftiba-l_ExpFwwOEg-unsplash.jpg';
import './index.css'

const shoot = () => {
  alert("Sign up/in clicked!");
}

var sectionStyle = {
    width: "100vw",
    height:'100vh',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    opacity: 0.4,
    margin:0,
    border:0
}

const MainPage = () => {
    return (
    <>
      <div className="background-img-position">
        <div style={ sectionStyle }> </div>
      </div>
      <Brand/>
      <div className="sign-in-up-buttons-container">

        <section>
          <button className="log-in" onClick={shoot}>  Log in </button>
        </section>

        <section className="sign-up-row">
          <div className="make-me-flex">
          <span> Don't have an account?</span>
          <button className="sign-up" onClick={shoot}>  Sign Up </button>
          </div>
        </section>
        
      </div>
    </>
    );
}

export default MainPage;
