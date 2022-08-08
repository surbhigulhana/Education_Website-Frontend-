import React from "react";
import "../css/button.css";
import { Link } from "react-router-dom";

export const Button = () => {
  return (
    <div>
      <section class="content" style={{marginTop:"-60px"}}>
        <div class="box bg-1">
          <button
          id="b3"
          >
            <Link to="/" style={{ color: "white" ,textDecoration:"none"}}>
            <i class='fas fa-book-reader' style={{fontSize:"20px",color:"white"}}></i>&nbsp; Get Certificates
            </Link>
          </button>
          <button
           id="b1"
            data-text="Build Career"
          >
            <Link to="/Buildyourc" style={{ color: "white",textDecoration:"none" }}>
            <i class="fas fa-briefcase" style={{fontSize:"20px",color:"white"}}></i>&nbsp;
              Build Career
            </Link>
          </button>
          <button
          id="b2"
          >
            <Link to="/ThirdEarn" style={{ color: "white" ,textDecoration:"none"}}>
            <i class='fas fa-dollar-sign' style={{fontSize:"20px",color:"white"}}></i> &nbsp;Earn On Alison
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};
