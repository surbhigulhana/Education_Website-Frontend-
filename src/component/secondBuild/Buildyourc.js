import React from "react";
import { Navbar } from "../Navbar";
import bottom from "../../Images/bottom.png";
import "../../css/buildcard.css";
import g1 from "../../Images/green1.png";
import g2 from "../../Images/green2.png";
import g3 from "../../Images/green3.png";
import p1 from "../../Images/path1.png";
import p2 from "../../Images/path2.png";
import p3 from "../../Images/path3.png";
import one from '../../Images/one.png'
import two from '../../Images/two.png'
import m5 from '../../Images/rocket.png'
import { Link } from "react-router-dom";
import three from '../../Images/three.png'
import e1 from '../../Images/e1.jpg'
import e2 from '../../Images/e2.jpg'
import e3 from '../../Images/e3.jpg'
import ThreeCard from "../threeCard";
import sideboy from "../../Images/sideboy.png";

import Footer from "../Footer";
import { Button } from "../Button";
const Buildyourc = () => {
  return (
    <div>
      <Navbar /><br/><br/>
      <Button/>

      <center>
        <h1 style={{ marginTop: "-100px" }}>
          Build Your Career In 3 Easy Steps
        </h1>
        <img src={bottom} style={{ marginLeft: "260px" }}></img>{" "}
      </center>
      <br />
     <div class="card1" style={{ width: "16rem;", float: "left" }}>
        <img class="card-img-top" src={g1} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to
            <br /> build on the card title <br />
            and make up the bulk of the
            <br /> card's content.
          </p><br/>
          <a href="#" class="btn btn-primary" style={{backgroundColor:"#83c11f",border:"none"}}
          >
            Contact Us
          </a>
        </div>
      </div> 
       <div class="card1" style={{ width: "16rem;", float: "left" }}>
        <img class="card-img-top" src={g2} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to
            <br /> build on the card title <br />
            and make up the bulk of the <br />
            card's content.
          </p><br/>
          <a href="#" class="btn btn-primary" style={{backgroundColor:"#83c11f",border:"none"}}>
            Contact Us
          </a>
        </div>
      </div> 
      <div class="card1" style={{ width: "16em;", float: "left" }}>
        <img class="card-img-top" src={g3} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to
            <br /> build on the card title
            <br /> and make up the bulk of the <br />
            card's content.
          </p><br/>
          <a href="#" class="btn btn-primary" style={{backgroundColor:"#83c11f",border:"none"}}>
            Contact Us
          </a>
        </div>
      </div> 
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
       <div style={{ marginTop: "200px" }}>
        <div class="container" style={{width:"80%"}}>
          <div class="row" style={{ marginTop: "200px" }}>
            <div class="col">
              <img src={one}></img><br/>
              <h1><b>
                Free Personality Assessment, Understand Who You Truly Are!</b>
              </h1>
              <br />
              <h5 style={{color:"646464",textAlign:"left",letterSpacing:"1"}}>
                Alison’s free Workplace Personality Assessment gives you a
                simple scientific report of your top skills & strengths in just
                12 minutes. Take the recommended free courses to boost your
                strengths!
              </h5>{" "}<br/><br/>
              <center>
                <button
                  type="button"
                  class="btn-hover color-5"
                  style={{
                    borderRadius: "30px",
                    backgroundColor: "#83c11f",
                    color: "white",fontWeight:"bold",  borderColor:"#83c11f",
                  }}
                >
                  Start Your Free Personality Assessment
                </button>
              </center>
            </div>
            <div class="col">
              <img src={p1}></img>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br /><br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col">
              <img src={p2}></img>
            </div>
            <div class="col">
            <img src={two}></img><br/>
              <h1>Fast Track Your Career With Alison's Career Guide</h1><br/>
              <h5 style= {{color:"646464",textAlign:"left"}} >
                From software developer and business manager to head nurse and
                chef, browse 600+ exciting careers and the courses you need to
                achieve them. Discover all you need to know about job
                responsibilities, the experience you require, and get suggested
                courses to learn the skills to succeed!
              </h5>
              <br />
              <br />
              <center>
                <button
                  type="button"
                  class="btn-hover color-5"
                  style={{
                    borderRadius: "30px",
                    backgroundColor: "#83c11f",
                    color: "white",fontWeight:"bold",  borderColor:"#83c11f",
                  }}
                >
                  Create My Professional Resume
                </button>
              </center>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br /><br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col">
            <img src={three} ></img><br/>
              <h1>Get Hired, Create a Job-Winning Resumé</h1><br/>
              <h5 style= {{color:"646464",textAlign:"left"}} >
                Create a job-winning Resumé with Alison’s Resumé Builder and
                apply for your dream job
              </h5>{" "}
              <br />
              <br />{" "}
              <center>
                <button
                  type="button"
                  class="btn-hover color-5"
                  style={{
                    borderRadius: "30px",
                    backgroundColor: "#83c11f",
                    borderColor:"#83c11f",
                    color: "white",fontWeight:"bold"
                  }}
                >
                  Discover Career Now
                </button>
              </center>
            </div>
            <div class="col">
              <img src={p3}></img>
            </div>
          </div>
        </div>
      </div>
       <br/><br/><br/><center><hr style={{height:"40px",width:"70%"}}></hr></center>
      <img src={m5}></img>
      <center style={{ marginTop: "-200px" }}>
        <h3>
          <b>Advance Your Career. Learn In-demand Skills.</b>
        </h3>
        <h5>
          Upskill in business analytics, health care, graphic design, management
          and more.
        </h5>
      </center>
      <br />
       <center>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px" }}
        >
          Information System
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px" }}
        >
          Healthcare
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px" }}
        >
          Management
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px" }}
        >
          Contract Law
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px" }}
        >
          CareGiving
        </button>
        <br />
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px" }}
        >
          Quality Control
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px" }}
        >
          Accounting
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px" }}
        >
          Bussiness Management
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "20px", borderRadius: "30px" }}
        >
          Human raesource
        </button>
        <br />
        <Link to="/">
          <h6>
            <b>
              View More Skills <i class="fas fa-greater-than"></i>
            </b>
          </h6>
        </Link>
      </center>{" "}
      <br />
      <div class="row no-gutters" style={{backgroundColor:"#F0FDF0",height:"400px",width:"100%"}}>
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
      <img src={sideboy} style={{ marginRight: "1006px" }}></img>
      <center style={{marginTop:"-13pc"}}>
        <h1>
          <b>Not Sure Where To Begin?</b>
        </h1>
        <h6>What is your main goal on Alison?</h6>
        <br/><br/>
        <ThreeCard/>
      </center><br/>
      {/* <img src={m7} style={{ width: "100%",height:"125px" }}></img> */}
       <div
        class="flex social-btns"
        style={{ marginTop: "20px",height:"125px",width:"100%",backgroundColor:"#F0FDF0"}}
      >
        <a class="app-btn blu flex vert" href="http:apple.com">
          <i class="fab fa-apple"></i>
          <p>
            Available on the <br /> <span class="big-txt">App Store</span>
          </p>
        </a>

        <a class="app-btn blu flex vert" href="http:google.com">
          <i class="fab fa-google-play"></i>
          <p>
            Get it on <br /> <span class="big-txt">Google Play</span>
          </p>
        </a>

        <a class="app-btn blu flex vert" href="http:alphorm.com">
          <i class="fas fa-desktop"></i>
          <p>
            Application <br /> <span class="big-txt">Desktop</span>
          </p>
        </a>
      </div>
      <Footer/>
    </div>
  );
};

export default Buildyourc;
