import React from "react";
import "../../../css/s.css";


const ItSlider = () => {
  return (
    <div>
      <div
        class="container-xxl"
       
      >
        <div  style={{
          height: "400px",
          marginLeft: "27px",
          marginTop:"-40px",
          width: "90%",
          backgroundColor: "lightgrey",
        }}>
        <div class="row" style={{ width: "100%" }}>
          <div class="col-md-12">
            <h2>
              Related Objects
            </h2>
            <div
              id="myCarousel"
              class="carousel slide"
              data-ride="carousel"
              data-interval="0"
            >
              <ol class="carousel-indicators" style={{display:"none"}}>
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  class="active"
                  style={{ color: "black" }}
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="item carousel-item active">
                  <div class="row">
                    <div class="col-sm-3">
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Comptia
                      </button>
                      &nbsp;
                      <br />
                      <br />
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Security
                      </button>
                      &nbsp;
                    </div>
                    <div class="col-sm-3">
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Computer Networking
                      </button>
                      &nbsp;
                      <br />
                      <br />
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Network Security{" "}
                      </button>
                      &nbsp;
                    </div>
                    <div class="col-sm-3">
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Information Systems
                      </button>
                      &nbsp;
                      <br />
                      <br />
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Microsoft
                      </button>
                      &nbsp;
                    </div>
                    <div class="col-sm-3">
                      <button id="bt2" type="button" class="btn btn-secondary">
                        CCNA
                      </button>
                      &nbsp;
                      <br />
                      <br />
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Bussiness Management
                      </button>
                      &nbsp;
                    </div>
                  </div>
                </div>
                <div class="item carousel-item">
                  <div class="row">
                    <div class="col-sm-3">
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Databases
                      </button>
                      &nbsp;
                      <br />
                      <br />
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Programming
                      </button>
                      &nbsp;
                    </div>
                    <div class="col-sm-3">
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Server
                      </button>
                      &nbsp;
                      <br />
                      <br />
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Data Security
                      </button>
                      &nbsp;
                    </div>
                    <div class="col-sm-3">
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Management
                      </button>
                      &nbsp;
                      <br />
                      <br />
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Data Science
                      </button>
                      &nbsp;
                    </div>
                    <div class="col-sm-3">
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Administration
                      </button>
                      &nbsp;
                      <br />
                      <br />
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Cryptocurrency
                      </button>
                      &nbsp;
                    </div>
                  </div>
                </div>
                <div class="item carousel-item">
                  <div class="row">
                    <div class="col-sm-3">
                      <button id="bt2" type="button" class="btn btn-secondary">
                        Engineering
                      </button>
                      &nbsp;
                      <br />
                      <br />
                    </div>{" "}
                    <div class="col-sm-3">
                      <button id="bt2" type="button" class="btn btn-secondary">
                        DevOps
                      </button>
                      &nbsp;
                      <br />
                      <br />
                    </div>
                    <div class="col-sm-3">
                      <button id="bt2" type="button" class="btn btn-secondary">
                        AWS
                      </button>
                      &nbsp;
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              &nbsp;&nbsp;
              <a
                class="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
                style={{
                  backgroundColor: "gray",
                  marginTop: "85px",
                  marginLeft: "20px",
                }}
              >
                <i class="fa fa-angle-left"></i>
              </a>
              <a
                class="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
                style={{ backgroundColor: "gray", marginTop: "85px" }}
              >
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div><br/>
    </div>
  );
};

export default ItSlider;
