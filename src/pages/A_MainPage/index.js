import React from "react";
import { useNavigate } from "react-router-dom";

import { Brand } from '../../components'
import Background from '../../images/toa-heftiba-l_ExpFwwOEg-unsplash.jpg';
import './style.css'


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

var sectionStyle = {
    width: "100vw",
    height:'100vh',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    opacity: 0.4,
    margin:0,
    border:0
}

const MainPage = () => {

  let navigate = useNavigate();

  async function handleSubmitUp(event) {
    event.preventDefault();
    await delay(400);
    navigate("./signup", {replace: true});
  }

  async function handleSubmitIn(event) {
    event.preventDefault();
    await delay(400);
    navigate("./login", {replace: true});
  }

    return (
    <>
      <div className="background-img-position">
        <div style={ sectionStyle }> </div>
      </div>
      <Brand/>
      <div className="sign-in-up-buttons-container">

        <section>
          <button className="log-in" onClick={handleSubmitIn}>  Log in </button>
        </section>

        <section className="sign-up-row">
          <div className="make-me-flex">
          <span> Don't have an account?</span>
          <button className="sign-up" onClick={handleSubmitUp}>  Sign Up </button>
          </div>
        </section>
        
      </div>
    </>
    );
}

export default MainPage;
