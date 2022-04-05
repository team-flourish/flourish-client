import React from "react";
import { useNavigate } from "react-router-dom";
import { Brand } from '../../components'
import './style.css'


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const MainPage = () => {

  let navigate = useNavigate();

  async function handleSubmitUp(event) {
    event.preventDefault();
    await delay(400);
    navigate("./signup");
  }

  async function handleSubmitIn(event) {
    event.preventDefault();
    await delay(400);
    navigate("./login");
  }

    return (
    <>
    
 
        <div className="bg-img">  
           <Brand/>
          <div className="sign-in-up-buttons-container">

            <section>
              <button className="log-in" onClick={handleSubmitIn}>  Log in </button>
            </section>

            <section className="sign-up-row">
              <div className="make-me-flex">
              <span className="span-signin"> Don't have an account?</span>
              <button className="sign-up" onClick={handleSubmitUp}>  Sign Up </button>
              </div>
            </section>        

          </div>
        
        </div>

      
      
    </>
    );
}

export default MainPage;
