import React from "react";
import "../css/cardM.css";
import sideboy from "../Images/sideboy.png";
import ThreeCard from "./threeCard";

import { Link } from "react-router-dom";
const CardM = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "lightgreen",
          height: "630px",
          width: "100%",
        }}
        id="div1"
      >
        <br />
        <h1>
          <b>Explore 4000+ Free Online Courses</b>
        </h1>
        <Link to="/IT">
          <div class="zoom" style={{ marginLeft: "200px" }}>
            <i
              class="fas fa-desktop"
              style={{ fontSize: "30px", color: "red" }}
            ></i>
            <center>
              {" "}
              <h6>IT →</h6>
            </center>
          </div>
        </Link>
        <div class="zoom">
          <i
            class="fas fa-heartbeat"
            style={{ fontSize: "36px", color: "blue" }}
          ></i>
          <center>
            <h6>Health →</h6>
          </center>
        </div>
        <div class="zoom">
          <i
            class="fas fa-business-time"
            style={{ fontSize: "36px", color: "violet" }}
          ></i>
          <center>
            <h6>Language →</h6>
          </center>
        </div>
        <div class="zoom">
          <i
            class="fas fa-poll"
            style={{ fontSize: "36px", color: "green" }}
          ></i>
          <center>
            <h6>Business →</h6>
          </center>
        </div>
        <div class="zoom">
          <i
            class="fas fa-user"
            style={{ fontSize: "36px", color: "brown" }}
          ></i>

          <h6>Management →</h6>
        </div>
        <br />
        <br />

        <div class="zoom" style={{ marginLeft: "270px" }}>
          <i
            class="fas fa-graduation-cap"
            style={{ fontSize: "36px", color: "yellowgreen" }}
          ></i>
          <h6>Development →</h6>
        </div>
        <div class="zoom">
          <i
            class="fas fa-group"
            style={{ fontSize: "36px", color: "pink" }}
          ></i>
          <center>
            <h6>Sales →</h6>
          </center>
        </div>
        <div class="zoom">
          <i
            class="fas fa-desktop"
            style={{ fontSize: "36px", color: "darkorange" }}
          ></i>
          <center>
            <h6>Marketing →</h6>
          </center>
        </div>
        <div class="zoom">
          <i class="fas fa-envelope-open" style={{ fontSize: "36px" }}></i>
          <center>
            <h6>Teaching →</h6>
          </center>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgb(240, 253, 240)",
          marginTop: "-20px",
          overflow: "hidden",
        }}
      >
        <br />
        <img src={sideboy} style={{ marginRight: "1426px" }}></img>
        <center style={{ marginTop: "-13pc" }}>
          <h1>
            <b>Not Sure Where To Begin?</b>
          </h1>
          <h6>What is your main goal on Alison?</h6>
          <br />
          <br />
          <ThreeCard />
        </center>
      </div>
      <div
        style={{
          height: "55px",
          width: "35%",
          backgroundColor: "white",
          marginLeft: "-700px",
          borderRadius: "20px",
          marginTop: "-340px",
          border: "3px solid gray",
          fontSize: "16px"
        }}
      >
        <br />@ 159,061 people are learning on Alison today
      </div>
    </div>
  );
};

export default CardM;
