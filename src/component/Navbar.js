import React,{useState} from "react";
import { useNavigate,Link } from 'react-router-dom'
import "../css/Login.css";
import "../css/DropCard.css";
import cap from "../Images/cap (1).png";
import cert from "../Images/cap (2).png";
import { Button } from "./Button";
import logo from '../Images/download-removebg-preview.png'
import ForgotPasswordModal from "./ForgotPasswordModal";

export const Navbar = (props) => {

  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg " style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",height:"80px",marginTop:"0px"}}>
          <img src={logo} style={{height:"80px",width:"70px",marginTop:"-20px"}}></img>
          <a
            class="navbar-brand"
            href="#"
            style={{ color: "Black", fontWeight: "bold",marginTop:"-30px"  }}
          >
            Alison.com
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria--label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">...</span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <form class="form-inline">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder=" 🔎︎ Search "
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    style={{
                      color: "#1b232e",
                      border: "none",
                      backgroundColor: "#83c11f",
                    }}
                  >
                    Search
                  </button>
                </form>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  style={{ color: "#1b232e", fontWeight: "bold" }}
                >
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{
                        backgroundColor: "transparent",
                        color: "#1b232e",
                        fontWeight: "bold",
                        border: "none",
                        marginTop: "13px",
                        textDecoration: "none"
            
                      }}
                    >
                      Explore Courses
                    </button>
                    <br/><br/><br/>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                      style={{
                        backgroundColor: "white",
                        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
                        border: "solid white 0.1px",
                        height: "550px",
                        width: "450%",borderRadius:"20px"
                      }}
                    >
                      <div class="main-container">
                        <div class="cards" style={{marginTop:"-30px"}}><span>
                          <h4 style={{ fontSize: "large", color: "black" ,marginLeft:"-60px"}}>
                            <b> &nbsp;Course Type</b>
                          </h4></span><br/><br/><br/>
                          <div class="card card-4" style={{ height: "100px", }}>
                            <h6 style={{ color: "black" }}>
                              <b>Diploma Courses</b>
                              <br />
                              <p style={{ fontSize: "small",color:"#2D3942" }}>
                                Explore All Courses →
                              </p>{" "}
                            </h6>

                            <img
                              src={cap}
                              style={{
                                marginLeft: "110px",
                                marginTop: "-10px",
                              }}
                            ></img>
                          </div>
                          <div class="card card-5" style={{ height: "100px" }}>
                            <h6 style={{ color: "black" }}>
                             <b> Certificate Courses</b>
                              <br />
                              <p style={{ fontSize: "small" }}>
                                Explore All Courses →
                              </p>{" "}
                            </h6>

                            <img
                              src={cert}
                              style={{
                                marginLeft: "130px",
                                marginTop: "-19px",
                              }}
                            ></img>
                          </div>
                          <hr></hr>
                          <br />
                          <br />
                          <span style={{ marginTop: "130px" }}>
                            <h4
                              style={{
                                fontSize: "large",
                                color: "black",
                                marginLeft: "-550px",
                              }}
                            >
                              <b>Course Category</b>
                            </h4>
                          </span>
                          <div class="card card-4" style={{ height: "100px"}}>
                            <i
                              class="fas fa-desktop"
                              style={{
                                fontSize: "30px",
                                color: "red",
                                marginTop: "20px",
                              }}
                            ></i>
                            <center>
                              {" "}
                              <h6 style={{ color: "black" }}>
                                IT
                                <br />
                                867 Course →
                              </h6>
                            </center>
                          </div>
                          <div class="card card-4" style={{ height: "100px" }}>
                            <i
                              class="fas fa-heartbeat"
                              style={{ fontSize: "36px", color: "blue" ,
                              marginTop: "20px"}}
                            ></i>
                            <center>
                              {" "}
                              <h6 style={{ color: "black" }}>
                                Health
                                <br />
                                987 Course →
                              </h6>
                            </center>
                          </div>
                          <div class="card card-4" style={{ height: "100px" }}>
                            <i
                              class="fas fa-business-time"
                              style={{ fontSize: "36px", color: "violet",
                              marginTop: "20px", }}
                            ></i>
                            <center>
                              {" "}
                              <h6 style={{ color: "black" }}>
                                Language
                                <br />
                                &nbsp;  &nbsp;  &nbsp;&nbsp;867 Course →
                              </h6>
                            </center>
                          </div>
                          <div class="card card-4" style={{ height: "100px" }}>
                            <i
                              class="fas fa-poll"
                              style={{ fontSize: "36px", color: "green",
                              marginTop: "20px", }}
                            ></i>
                            <center>
                              {" "}
                              <h6 style={{ color: "black" }}>
                                Business
                                <br />
                                107 Course →
                              </h6>
                            </center>
                          </div>
                          <div class="card card-5" style={{ height: "100px" }}>
                            <i
                              class="fas fa-user"
                              style={{ fontSize: "36px", color: "brown",
                              marginTop: "20px", }}
                            ></i>
                            <center>
                              {" "}
                              <h6 style={{ color: "black" }}>
                                Management
                                <br />
                                237 Course →
                              </h6>
                            </center>
                          </div>
                          <div class="card card-4" style={{ height: "100px" }}>
                            <i
                              class="fas fa-graduation-cap"
                              style={{ fontSize: "36px", color: "yellowgreen",
                              marginTop: "20px", }}
                            ></i>
                            <center>
                              {" "}
                              <h6 style={{ color: "black" }}>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development
                                <br />
                                867 Course →
                              </h6>
                            </center>
                          </div>{" "}
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  style={{ color: "#1b232e", fontWeight: "bold" }}
                >
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary "
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{
                        backgroundColor: "transparent",
                        color: "#1b232e",
                        fontWeight: "bold",
                        border: "none",
                        marginTop: "13px",
                      }}
                    >
                      Discover Career
                    </button>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  style={{ color: "#1b232e", fontWeight: "bold" }}
                >
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{
                        backgroundColor: "transparent",
                        color: "#1b232e",
                        fontWeight: "bold",
                        border: "none",
                        marginTop: "13px",
                      }}
                    >
                      Dropdown button
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                      style={{
                        backgroundColor: "white",
                        border: "none",
                        height: "450px",
                      }}
                    >
                      <div class="main-container">
                        <div class="cards">
                          <div class="card card-1"></div>
                          <div class="card card-2"></div>
                          <div class="card card-3"></div>
                          <div class="card card-4"></div>
                          <div class="card card-5"></div>
                          <div class="card card-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              
              
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  style={{ color: "#1b232e", fontWeight: "bold" }}
                >
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary "
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{
                        backgroundColor: "transparent",
                        color: "#1b232e",
                        fontWeight: "bold",
                        border: "none",
                        marginTop: "13px",
                        fontSize:"20px",marginLeft:"400px"
                      }}
                    > <Link to='/Login' style={{ color: "#1b232e",textDecoration:"none"}}>
                    Login/Signup</Link>
                    </button>
                  </div>
                </a>
              </li>
              {/* <li  class="nav-item">  <Link to='/Login'>Login</li> */}
            
            </ul>

           
          </div>
        </nav>
       
        <br />
        
      
      </div>
    </div>
  );
};
