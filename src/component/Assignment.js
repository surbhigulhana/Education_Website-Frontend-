import React from "react";
import "../css/Assignment.css";
import boy from "../Images/image-removebg-preview (3).png";
import girl from "../Images/image1.png";
import { Link } from "react-router-dom";
const Assignment = () => {
  return (
    <div style={{ width: "100%" }}>
      <div class="one" id="one"></div>

      <h3 style={{ marginTop: "-250px", marginLeft: "100px" }}>
        Get to know yourself better!
      </h3>
      <h5 style={{ marginLeft: "100px" }}>
        Discover your career strengths & weaknesses
      </h5>
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
            marginLeft: "-800px",
          }}
        >
          <Link to="/Resume" style={{ color: "white" }}>
            Take Free Personality Assessment
          </Link>
        </button>
      </center>
      <img src={boy} style={{ marginLeft: "440px", marginTop: "-160px" }}></img>
      <h3 style={{ marginTop: "-250px", marginLeft: "800px" }}>
        Get hired for your dream job!
      </h3>
      <h5 style={{ marginTop: "0px", marginLeft: "806px" }}>
        Build your free resumé in minutes!
      </h5>
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
            marginLeft: "600px",
          }}
        >
          <Link to="" style={{ color: "white", textDecoration: "none" }}>
            {" "}
            Create My Professional Resume
          </Link>
        </button>
      </center>
      <img
        src={girl}
        style={{ marginLeft: "1110px", marginTop: "-150px" }}
      ></img>
    </div>
  );
};

export default Assignment;
