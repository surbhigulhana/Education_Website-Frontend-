import React from "react";
import { Navbar } from "../Navbar";
import bottom from "../../Images/bottom.png";
import g1 from "../../Images/green1.png";
import g2 from "../../Images/green2.png";
import g3 from "../../Images/green3.png";
import bg1 from "../../Images/image-removebg-preview.png";
import bg2 from "../../Images/Screenshot 2022-07-26 123528.png";
import bg3 from "../../Images/sceen.png";
import bg4 from "../../Images/Screenshot 2022-07-26 131126.png";
import bg5 from "../../Images/Screenshot 2022-07-26 140644.png";
import e1 from "../../Images/e1.jpg";
import e2 from "../../Images/e2.jpg";
import e3 from "../../Images/e3.jpg";
import ThreeCard from "../threeCard";
import sideboy from "../../Images/sideboy.png";

import Footer from "../Footer";
import { Button } from "../Button";
const ThirdEarn = () => {
  return (
    <div>
      <Navbar /><br/><br/>
      <Button/>
      <center style={{ marginTop: "-100px" }}>
        <h1>
          <b>Earn Money By Empowering Millions</b>
        </h1>

        <img src={bottom} style={{ marginLeft: "-400px" }}></img>
      </center>
      <br />
      <div class="card1" style={{ width: "18rem;", float: "left" }}>
        <img class="card-img-top" src={g1} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick
            <br />
            card's content.
          </p><br/>
          <a
            href="#"
            class="btn btn-primary"
            style={{ backgroundColor: "#83c11f", border: "none" }}
          >
            Contact Us
          </a>
        </div>
      </div>
      <div class="card1" style={{ width: "18rem;", float: "left" }}>
        <img class="card-img-top" src={g2} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick
            <br />
            card's content.
          </p><br/>
          <a
            href="#"
            class="btn btn-primary"
            style={{ backgroundColor: "#83c11f", border: "none" }}
          >
            Contact Us
          </a>
        </div>
      </div>
      <div class="card1" style={{ width: "18rem;", float: "left" }}>
        <img class="card-img-top" src={g3} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick
            <br />
            card's content.
          </p>
          <br/>
          <a
            href="#"
            class="btn btn-primary"
            style={{ backgroundColor: "#83c11f", border: "none" }}
          >
            Contact Us
          </a>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          width: "100%",
          backgroundColor: "#F0FDF0",
          marginTop: "330px",
        }}
      >
        {" "}
        <div class="container">
          <div class="row" style={{ marginTop: "100px" }}>
            <div class="col">
              <img src={bg1}></img>
            </div>
            <div class="col">
              <h1>
                <b>Become A Member Of The Alison Affiliate Programme</b>
              </h1>
              <br />
              <br />
              <h5 style={{ textAlign: "left" }}>
                By becoming an Alison Affiliate Programme Member, you can earn
                income for yourself and help empower friends, families,
                companies and communities by introducing them to free learning.
              </h5>
              <br />
              <center>
                <button
                  type="button"
                  class="btn-hover color-5"
                  style={{
                    borderRadius: "30px",
                    backgroundColor: "#83c11f",
                    color: "white",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  Become An Afflicated Memember
                </button>
              </center>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="container">
        <div class="row" style={{ width: "100%" }}>
          <div class="col">
            <h1>
              <b>
                Empower Your Friends & Family By Sharing Free Quality Education
              </b>
            </h1>
            <br />
            <br />
            <h5 style={{ textAlign: "left" }}>
              Refer your friends, family and social network to Alison and earn
              free Digital Certificates and Digital Diplomas. Refer as many
              people as you want to - the more you refer, the more rewards you
              unlock!
            </h5>
          </div>
          <div class="col">
            <img src={bg2}></img>
          </div>
        </div>
        <br />
        <button
          type="button"
          class="btn-hover color-5"
          style={{
            borderRadius: "30px",
            backgroundColor: "#83c11f",
            color: "white",
            border: "none",
            fontWeight: "bold",
            marginLeft: "-650px",
          }}
        >
          Share And Earn Rewards
        </button>
       
      </div>

      <br />
      <br />
      <div
        style={{
          width: "100%",
          backgroundColor: "#F0FDF0",
        }}
      >
        {" "}
        <div class="container">
          <div class="row" style={{ marginTop: "100px" }}>
            <div class="col">
              <img src={bg3}></img>
            </div>
            <div class="col">
              <h1>
                <b>Teach On Alison, Earn Money & Inspire Millions</b>
              </h1>
              <br />
              <br />
              <h5 style={{ textAlign: "left" }}>
                If you are a subject matter expert or a skilled professional who
                wants to create and publish online courses, then you’ve come to
                the right place. Share your knowledge with a global audience and
                earn an income through our shared revenue offering. Join our
                community of self-publishers today!
                <br />
              </h5>
              <br />
              <center>
                <button
                  type="button"
                  class="btn-hover color-5"
                  style={{
                    borderRadius: "30px",
                    backgroundColor: "#83c11f",
                    color: "white",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  Publish Your Course on Alison
                </button>
              </center>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="container">
        <div class="row" style={{ width: "100%" }}>
          <div class="col">
            <h1>
              <b>Become An Alison Course Creator</b>
            </h1>
            <br />
            <br />
            <h5 style={{ textAlign: "left" }}>
              As a Course Creator, you will earn revenue by working with
              Alison’s publishing partners to convert their teaching material to
              online courses for our learners. You will write modules, course
              descriptions and learning outcomes that accurately reflect the
              course content and get online students excited about learning.
            </h5>
          </div>
          <div class="col">
            <img src={bg4}></img>
          </div>
        </div>
        <br />
        <button
          type="button"
              class="btn-hover color-5"
          style={{
            borderRadius: "30px",
            marginLeft: "-700px",
            backgroundColor: "#83c11f",
            color: "white",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Know More About Creating Courses
        </button>
      </div>

      <br />
      <br />
      <img src={bg5} style={{ width: "100%" }}></img>
      <button
        type="button"
        class="btn btn-outline-success"
        style={{
          borderRadius: "30px",
          marginLeft: "220px",
          height: "60px",
          marginTop: "-160px",
          backgroundColor: "white",
          color: "#1dacd6",
          width: "22%",
          border: "none",
          fontWeight: "bold",
        }} id="b1"
      >
        Explore Alison For Bussiness
      </button>

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
      <img src={sideboy} style={{ marginRight: "1008px" }}></img>
      <center style={{ marginTop: "-13pc" }}>
        <h1>
          <b>Not Sure Where To Begin?</b>
        </h1>
        <h6>What is your main goal on Alison?</h6>
        <br />
        <br />
        <ThreeCard />
      </center>
      <br />
      {/* <img src={m7} style={{ width: "100%",height:"125px" }}></img> */}
      <div
        class="flex social-btns"
        style={{
          marginTop: "20px",
          height: "125px",
          width: "100%",
          backgroundColor: "#F0FDF0",
        }}
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
      <Footer />
    </div>
  );
};

export default ThirdEarn;
