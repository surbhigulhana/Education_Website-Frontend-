import React from "react";
import { Navbar } from "./Navbar";
import girl from "../Images/girls.png";
import boy from "../Images/boy.png";
import CardM from "./CardM";
import Slider from "./Slider";
import g from "../Images/google-removebg-preview.png";
import m from "../Images/OIP-removebg-preview (1).png";
import m1 from "../Images/brain-gate-img-000008-removebg-preview.png";
import m2 from "../Images/Cambridge_uni_logo-1024x237-removebg-preview.png";
import m3 from "../Images/OIP-removebg-preview (2).png";
import m4 from "../Images/OIP-removebg-preview.png";
import m5 from "../Images/rocket.png";
import { Link } from "react-router-dom";
import m6 from "../Images/men.png";
import "../css/DownButton.scss";


import Footer from "./Footer";
import CardFoot from "./CardFoot";
import e1 from "../Images/e1.jpg";
import e2 from "../Images/e2.jpg";
import e3 from "../Images/e3.jpg";
import { Button } from "./Button";
import Assignment from "./Assignment";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <br/><br/>
      <Button/>
      <center>
        <h1 style={{ marginTop: "-120px" }}>
          {" "}
          Free Online Courses With Certificates & Diplomas
        </h1>

        <input
          type="search"
          class="searchTerm"
          placeholder="🔎︎ What are you looking for ?"
          style={{
            textAlign: "center",
            fontSize: "20px",
            height: "40px",
            borderRadius: "20px",
            outlineStyle: "solid",
            outlineColor: "black",
            backgroundColor: "white",
            outlineWidth: "1px",
          }}
        ></input>
        <h5>23 Million Learners. 15 Years. 100% Free Courses</h5>
        <img src={girl}></img>
        <img src={boy} style={{ marginLeft: "350px" }}></img>
        <CardM />
       <br/>      <br/>   <br/>   <br/>   <br/>   <br/>   <br/><br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>
        <Slider  />
        <br />
        <br />
        <button
          type="button"
          class="btn-hover color-5"
          style={{ width: "30%", fontSize: "x-large", borderRadius: "40px" }}
        >
          Explore More Information
        </button>
      </center>
      <br />
      <br />
      <div
        style={{ width: "100%", height: "200px", backgroundColor: "#F0FDF0" }}
      >
        <br />
        <center>Learn From The World's Leading Experts</center>
        <br />
        <br />
        <img src={g} style={{ height: "40px", marginLeft: "300px" }}></img>
        <img
          src={m}
          style={{ height: "40px", width: "90px", margin: "20px" }}
        ></img>
        <img
          src={m1}
          style={{ height: "40px", width: "90px", margin: "20px" }}
        ></img>
        <img
          src={m2}
          style={{ height: "40px", width: "90px", margin: "20px" }}
        ></img>
        <img
          src={m3}
          style={{ height: "40px", width: "90px", margin: "20px" }}
        ></img>
        <img
          src={m4}
          style={{ height: "60px", width: "150px", margin: "20px" }}
        ></img>
      </div>
      <br />
      <br />
      <center style={{ marginTop: "100px" }}>
        <h3>
          <b>Advance Your Career. Learn In-demand Skills.</b>
        </h3>
        <h5>
          Upskill in business analytics, health care, graphic design, management
          and more.
        </h5>
      </center>
      <br />
      <br />
      <center>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px",color :"white",border:"#83c11f",backgroundColor:"#83c11f"}}
        >
          Information System
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px",color :"white",border:"#83c11f",backgroundColor:"#83c11f" }}
        >
          Healthcare
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px",color :"white",border:"#83c11f",backgroundColor:"#83c11f" }}
        >
          Management
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px",color :"white",border:"#83c11f",backgroundColor:"#83c11f" }}
        >
          Contract Law
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px",color :"white",border:"#83c11f",backgroundColor:"#83c11f" }}
        >
          CareGiving
        </button>
        <br />
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px",color :"white",border:"#83c11f",backgroundColor:"#83c11f" }}
        >
          Quality Control
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px",color :"white",border:"#83c11f",backgroundColor:"#83c11f" }}
        >
          Accounting
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px",color :"white",border:"#83c11f",backgroundColor:"#83c11f" }}
        >
          Bussiness Management
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px",color :"white",border:"#83c11f",backgroundColor:"#83c11f" }}
        >
          Human resource
        </button>
        <br />
        <Link to="/">
          <h6>
            <b style={{color:"#83c11f"}}>
              View More Skills <i class="fas fa-greater-than"></i>
            </b>
          </h6>
        </Link>
      </center>{" "}
      <br />
      <br />
      <div
        class="row no-gutters"
        style={{ backgroundColor: "#F0FDF0", height: "400px", width: "100%" }}
      >
        <div class="col-12 col-sm-6 col-md-8">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src={e1}
                  alt="First slide"
                  style={{ height: "300px", borderRadius: "20px" }}
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src={e2}
                  alt="Second slide"
                  style={{ height: "300px", borderRadius: "20px" }}
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src={e3}
                  alt="Third slide"
                  style={{ height: "300px", borderRadius: "20px" }}
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <h3 style={{ marginTop: "100px", marginLeft: "40px" }}>
            Over <b style={{ color: "lightgreen" }}>23 Million Learners</b>
            <br /> have used Alison to <br />
            empower themselves
            <br /> through education
          </h3>
        </div>
      </div>
      <br />
      <br />
      <center>
        {" "}
        <hr style={{ width: "70%", height: "70px", color: "lightgreen" }}></hr>
      </center>
      <div class="row no-gutters" style={{ width: "95%" }}>
        <div class="col-10 col-sm-6 col-md-8">
          <h1>
            <b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Faster Way For Your
              Employees
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To Grow And Upskill
            </b>
          </h1>
          <br />
          <br />
          <h5 style={{ textAlign: "justify", marginLeft: "100px" }}>
            Our range of solutions has something to offer all businesses
            <br /> and organizations. Whether you’re a non-profit or a commer-
            <br />
            cial entity, we can tailor a plan for your needs.
          </h5>
          <br />
          <br />
          <center>
            <button
              type="button"
              class="btn-hover color-5"
              style={{ borderRadius: "30px", marginLeft: "-160px" }}
            ><Link to="/Contact" style={{color:"white",textDecoration:"none",}}>
              Information System</Link>
            </button>
          </center>
        </div>
        <div class="col-8 col-md-4">
          <img src={m6} style={{ marginLeft: "-100px" }}></img>
        </div>
      </div>
      <br />
      <br />
  
      <Footer />
    </div>
  );
};
