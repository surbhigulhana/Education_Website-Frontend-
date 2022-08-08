import React from "react";
import { Navbar } from "../Navbar";
import r1 from "../../Images/r1.PNG";
import r5 from "../../Images/r5.PNG";
import r6 from "../../Images/r6.PNG";
import r7 from "../../Images/r7.PNG";
import r8 from "../../Images/r8.PNG";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Card3 from "./Card3";
import "./Resume.css";
import capture from "../../Images/image-removebg-preview (4).png";
const Resume = () => {
  return (
    <div>
      <Navbar />
      {/* --------------------------main content---------------------------------- */}
      <div style={{width:"100%",backgroundColor: "white" ,backgroundImage:" linear-gradient(white,#DCDCDC)"}}>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1
              style={{
                marginTop: "100px",
                fontWeight: "1000",
                textAlign: "left",
                font: "52px",
              }}
            >
              <b>
                Understand
                <br />
                who you truly are.
              </b>
            </h1>
            <br />
            <p style={{ color: "Gray", textAlign: "left", fontWeight: "bold" }}>
              Designed by expert psychologists, Alison’s free workplace
              <br /> personality assessment enables you to realise your career
              dreams <br />
              by providing you with an extremely accurate report of who you are
              <br /> and why you do things the way you do.
            </p>
            <br />

            <center>
              <button
                type="button"
                class="btn-hover color-5"
                style={{
                  borderRadius: "30px",
                  backgroundColor: "#83c11f",
                  borderColor: "#83c11f",
                  color: "white",
                  fontWeight: "bold",
                  width: "80%",
                  marginLeft: "-80px",
                }}
              >
                <Link
                  to="/Resume"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Start Your Free Workplace Personality Assessment →
                </Link>
              </button>
            </center>
          </div>
          <div class="col">
            <img src={r1} style={{ marginTop: "-50px", height: "450px" }}></img>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div></div>
      <br />
      <Card3></Card3><br/><br/>
      <div class="container">
        <div class="row">
          <div class="col">
            <img src={r5} style={{ marginLeft: "-100px" }}></img>
          </div>
          <div class="col">
            <h1
              style={{
                marginTop: "100px",
                fontWeight: "1000",
                textAlign: "left",
                font: "52px",
              }}
            >
              <b>Short. Simple. Scientific</b>
            </h1>
            <br />
            <p style={{ color: "Gray", textAlign: "left", fontWeight: "bold" }}>
              Designed by expert psychologists, Alison’s free workplace
              <br /> personality assessment enables you to realise your career
              dreams <br />
              by providing you with an extremely accurate report of who you are
              do.
              <br />
            </p>
            <br />

            <center>
              <button
                type="button"
                class="btn-hover color-5"
                style={{
                  borderRadius: "30px",
                  backgroundColor: "#83c11f",
                  borderColor: "#83c11f",
                  color: "white",
                  fontWeight: "bold",
                  width: "80%",
                  marginLeft: "-80px",
                }}
              >
                <Link
                  to="/Resume"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Discover The Right Career For You →
                </Link>
              </button>
            </center>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      {/* -------------------left side image------------------ */}

      <img src={r6} style={{ marginLeft: "0px" }}></img>
      <center>
        <p style={{ fontSize: "50px", marginTop: "-180px", color: "#465159" }}>
          <b>Benefits</b> of taking the world’s best
          <br />
          <b>free workplace personality assessment.</b>
        </p>

        {/* --------------------icon card--------------------- */}

        <section class="service-categories text-xs-center">
          <div class="container">
            <div class="row">
              <div class="col-md-2" style={{ marginLeft: "60px" }}>
                <a href="#">
                  <div class="carda service-card card-inverse">
                    <div class="card-block">
                      <span class="fa fa-lightbulb-o fa-3x"></span>
                      <h4 class="card-title">Creative</h4>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-2">
                <a href="#">
                  <div class="carda service-card card-inverse">
                    <div class="card-block">
                      <span class="fa fa-bolt fa-3x"></span>
                      <h4 class="card-title">Energetic</h4>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-2">
                <a href="#">
                  <div class="carda service-card card-inverse">
                    <div class="card-block">
                      <span class="fa fa-eye fa-3x"></span>
                      <h4 class="card-title">Focused</h4>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-2">
                <a href="#">
                  <div class="carda service-card card-inverse">
                    <div class="card-block">
                      <span class="fa fa-cloud fa-3x"></span>
                      <h4 class="card-title">Hungry</h4>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3">
                <a href="#">
                  <div class="carda service-card card-inverse">
                    <div class="card-block">
                      <span class="fa fa-heart fa-3x"></span>
                      <h4 class="card-title">Intimate</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <br />
          <center>
            <button
              type="button"
              class="btn-hover color-5"
              style={{
                borderRadius: "30px",
                backgroundColor: "#83c11f",
                borderColor: "#83c11f",
                color: "white",
                fontWeight: "bold",
                width: "30%",
                marginLeft: "-80px",
              }}
            >
              <Link
                to="/Resume"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Get Your Personality Assessment Result →
              </Link>
            </button>
          </center>
        </section>
      </center>
      {/* ---------------right side image------------------ */}
      <img src={r7} style={{ float: "right", marginTop: "-60px" }}></img>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="container">
        <div class="row">
          <div class="col">
            <img src={r8} style={{ marginTop: "-15px" }}></img>
          </div>
          <div class="col">
            <p
              style={{ fontSize: "46px", textAlign: "left", color: "#465159" }}
            >
              <b>Companies value</b>
              <br /> psychometric
              <br />
              <b>assessments</b> when hiring <br />
              new employees.
            </p>
            <p style={{ textAlign: "left" }}>
              Alison’s workplace personality assessment
              <br /> measures key traits that are of interest to employers.
              <br /> Your assessment report is easy to share.
            </p>
            <br />
            <center>
              <button
                type="button"
                class="btn-hover color-5"
                style={{
                  borderRadius: "30px",
                  backgroundColor: "#83c11f",
                  borderColor: "#83c11f",
                  color: "white",
                  fontWeight: "bold",
                  width: "50%",
                  marginLeft: "-80px",
                }}
              >
                <Link
                  to="/Resume"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Stand out from the crowd →
                </Link>
              </button>
            </center>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div style={{ width: "100%", backgroundColor: " #A020F0" }}>
        <div class="container" style={{ backgroundColor: " #A020F0" }}>
          <div class="row">
            <div class="col">
              <img
                src={capture}
                style={{ marginTop: "-15px", marginLeft: "-220px" }}
              ></img>
            </div>
            <div class="col">
              <p
                style={{ fontSize: "46px", textAlign: "left", color: "white" }}
              >
                <br />A scientific approach,
                <br />
                <b>designed by experts.</b>
              </p>
              <br />
              <p style={{ textAlign: "left", color: "white" }}>
                Alison’s Workplace Personality Assessment is
                <br /> produced by experts with decades of industry
                <br /> expertise in creating psychometric tests that help
                <br /> individuals and organisations measure personality
                <br /> traits, cognitive abilities and behavioural styles.
              </p>
              <br />
              <center>
                <button
                  type="button"
                  class="btn-hover color-5"
                  style={{
                    borderRadius: "30px",
                    backgroundColor: "white",
                    borderColor: "white",
                    color: "white",
                    fontWeight: "bold",
                    width: "80%",
                    marginLeft: "-110px",
                  }}
                >
                  <Link
                    to="/Resume"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    Start Your Free Workspace Personality Assessment →
                  </Link>
                </button>
              </center><br/><br/><br/><br/>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default Resume;
