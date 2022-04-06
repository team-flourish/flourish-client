import React from "react";
import { useNavigate } from "react-router-dom";
import { Brand } from '../../components'
import './style.css'


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const MainPage = () => {

  let navigate = useNavigate();

  async function handleSubmitUp(event) {
    //console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB----------------------------------')
    event.preventDefault();
    // await delay(400);
    //console.log('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC---------------------------------')
    navigate("./signup");
    //console.log('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD---------------------------------')
  }

  async function handleSubmitIn(event) {
    //console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE----------------------------------')
    event.preventDefault();
    //console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF----------------------------------')
    //await delay(400);
    navigate("./login");
    //console.log('GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG----------------------------------')
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
