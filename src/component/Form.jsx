import React from "react";
import Logo from "../image/Rectangle 1.png";
import Photo from "../image/Ellipse 1.jpg";
import Cover from "../image/flowers.jpg";
import Footer from "../image/background.png";
import Logo2 from "../image/logo2.png";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Form = () => {
  const [openMenu, setOpenMenu] = useState(true);


  return (
    <div className="form">
      <div className="formContent">
        <div className="container">
          <header>
            <div className="left">
              <img src={Logo} alt="logo" />
              <p>
                Welcome to your personal MBCT Diary <b>Ilham</b>{" "}
              </p>
            </div>

            <div className="right">
              <img src={Photo} alt="" />

              <button
                onClick={() => setOpenMenu((prev) => !prev)}
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                {openMenu ? <GrMenu /> : <GrClose /> }
              </button>
            </div>
          </header>

          <div className="cover">
            <img src={Cover} alt="" />
          </div>

          <div className="input">
            <div className="item">
              <label>What were your mindful practices for today?</label>
              <input type="text" />
            </div>

            <div className="item">
              <label>
                Reflect on your mindful practices.... how did they go and how
                could they be improved?
              </label>
              <input type="text" />
            </div>

            <div className="item">
              <label>
                Reflect on your thoughts throughout the day, which ones need
                further consideration and questioning?
              </label>
              <input type="text" />
            </div>

            <div className="item">
              <label>What is the truth? </label>
              <input type="text" />
            </div>

            <div className="item">
              <label>
                Reflect on the emotions of the day, which ones need further
                consideration and thought?
              </label>
              <input type="text" />
            </div>

            <div className="item">
              <label>How else could you have reacted?</label>
              <input type="text" />
            </div>

            <div className="item">
              <label>
                Reflect on your behaviours of the day, which ones need further
                consideration and improvement?{" "}
              </label>
              <input type="text" />
            </div>

            <div className="item">
              <label>
                How else could you have reacted? What were your achievements of
                the day?
              </label>
              <input type="text" />
            </div>

            <div className="item">
              <label>What were your achievements of the day? </label>
              <input type="text" />
            </div>

            <div className="item">
              <label>What were your mindful practices for today?</label>
              <input type="text" />
            </div>
          </div>

          <div className="send">
            <p>Send</p>
          </div>
        </div>

        <div
          className="footer"
          style={{
            backgroundImage: `url(${Footer})`,
          }}
        >
          <div className="container">
            <h2>For your information</h2>
            <span>
              I have created you a 28-day MBCT and Mindfulness Diary for you to
              print out or write online and use to help with reflecting on your
              mindful practices as well as your thoughts, emotions and
              behaviours.
            </span>
            <span>
              Keeping a record of our mindful practices along with the thoughts,
              emotions and behaviours we exhibit allows us to reflect on them,
              understand them and improve on them if we need to.
            </span>

            <span>
              Follow through with this exercise for just 28 days and you may
              find that you want to keep doing it, you may find it helps you
              grow and become a better version of yourself each and every day.
            </span>

            <span>
              Enjoy the process of mindful meditation and keep practicing with
              me!
            </span>
            <b>With kindness</b>
            <b>
              Your Mindfulness Cognitive
              <br />
              Therapy Coach
            </b>

            <div className="day_logo">
              <b>Days: 21</b>
              <img src={Logo2} alt="" />
            </div>
          </div>
        </div>

      </div>

      <div className="menu" style={{ visibility: openMenu ? "hidden" : "visible"  }}> 
        <div className="menuContent">
          <div className="nav">

          <p> Who we are</p>
          <p>Why we do this</p>
          <p>Contacts</p>
          </div>

          <div className="logout">
          <p>Ilham Kazimov</p>
          <p>Logout</p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Form;
