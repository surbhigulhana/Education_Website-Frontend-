import React from "react";
import "../../css/Assignment.css";
import r2 from "../../Images/r2.PNG";

import r3 from "../../Images/r3.PNG";
import r4 from "../../Images/r4.PNG";
const Card3 = () => {
  return (
    <div style={{ backgroundColor: "#DCDCDC" ,backgroundImage:" linear-gradient(#DCDCDC,white)",marginTop:"-100px"}}>
      <center>
        <div class="card" id="shadow11">
          <center>
            <img src={r2}></img>
            <h6>Discover your professional<br/><b style={{color:"#83c11f"}}>strengths and weaknesses</b></h6>
          </center>
        </div>
        <div class="card" id="shadow11">
          {" "}
          <img src={r3}></img>
          <h6>Get <b style={{color:"#83c11f"}}>personalised course<br/> recommendations</b> to <b style={{color:"#83c11f"}}>upskill </b><br/>yourself</h6>
        </div>
        <div class="card" id="shadow12">
          {" "}
          <img src={r4}></img>
          <h6>Explore<b style={{color:"#83c11f"}}> careers that match<br/> your personality</b>, your<br/> <b style={{color:"#83c11f"}}>strengths</b></h6>
        </div>
      </center>
    </div>
  );
};

export default Card3;
