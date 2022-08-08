import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../Navbar";
import "../../../css/It.css";
import it1 from "../../../Images/it1.png";
import ItSlider from "./ItSlider";
import '../../../css/Pagination.css'
import Footer from "../../Footer";
import { Button } from "../../Button";
const Page2 = () => {
  return (
    <div style={{backgroundColor:"#f2f2f2"}}>
      <Navbar /><br/>
    {/* ----------------------button----------------- */}
    <section class="content" style={{marginTop:"-30px",backgroundColor:"rgb(242, 242, 242)"}}>
        <div class="box bg-1" style={{backgroundColor:"rgb(242, 242, 242)"}}>
          <button
          id="b3"
          >
            <Link to="/" style={{ color: "white" }}>
              Get Certificates
            </Link>
          </button>
          <button
           id="b1"
            data-text="Build Career"
          >
            <Link to="/Buildyourc" style={{ color: "white" }}>
              Build Career
            </Link>
          </button>
          <button
          id="b2"
          >
            <Link to="/ThirdEarn" style={{ color: "white" }}>
              Earn On Alison
            </Link>
          </button>
        </div>
      </section>
      {/* -------------------end button-------------------------- */}
      {/* -----------------------------------one card----------------------- */}
      <div id="container">
        <div class="product-details">
          <h1>CHRISTMAS TREE</h1>
          <span class="hint-star star">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
          </span>

          <p class="information" style={{ width: "100%" }}>
            " Let's spread the joy , here is Christmas , the most awaited day of
            the year.Christmas Tree is what one need the most. Here is the
            correct tree which will enhance your Christmas." Let's spread the
            joy  , the most awaited day of the year.Christmas
            Tree is what one need the most. Here is the correct tree which will
            enhance your Christmas.
          </p>

          <div class="control">
            <button class="btn" id="bt1">
              <span class="price">$250</span>
              <span class="shopping-cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span class="buy">Get now</span>
            </button>
          </div>
        </div>

        <div class="product-image">
          <img src={it1} alt="" />

          <div class="info">
            <h2> Description</h2>
            <ul>
              <li>
                <strong>Height : </strong>5 Ft{" "}
              </li>
              <li>
                <strong>Shade : </strong>Olive green
              </li>
              <li>
                <strong>Decoration: </strong>balls and bells
              </li>
              <li>
                <strong>Material: </strong>Eco-Friendly
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* --------------------------slider------------------------- */}

      <ItSlider />
    
      <div style={{ backgroundColor: "#f2f2f2" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
   
      <div
        style={{
          height: "2500px",
          width: "90%",
          backgroundColor: "lightgrey",
          marginLeft: "30px",marginTop:"-100px"
        }}
      >
       <h4>Courses 1-10</h4>
        <div class="containe" id="con1" style={{ marginTop: "-20px" }}>
          <div class="d-lg-flex" style={{ width: "100%", marginTop: "-200px" }}>
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6">
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                <img
                  class=""
                  src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <div class="date">
                  <span class="day">26</span>
                  <span class="month">June</span>
                  <span class="year">2019</span>
                </div>
              </div>
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More  →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                    <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6">
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                <img
                  class=""
                  src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <div class="date">
                  <span class="day">26</span>
                  <span class="month">June</span>
                  <span class="year">2019</span>
                </div>
              </div>
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                    <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6">
              {" "}
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                {" "}
                <img
                  class=""
                  src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />{" "}
                <div class="date">
                  {" "}
                  <span class="day">
                    26
                  </span> <span class="month">June</span>{" "}
                  <span class="year">2019</span>{" "}
                </div>{" "}
              </div>{" "}
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 mb-lg-0 mb-4" id="card6">
              {" "}
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                {" "}
                <img
                  class=""
                  src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />{" "}
                <div class="date">
                  {" "}
                  <span class="day">
                    26
                  </span> <span class="month">June</span>{" "}
                  <span class="year">2019</span>{" "}
                </div>{" "}
              </div>{" "}
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <br />
          </div>{" "}
        </div>{" "}
        <div class="containe" id="con1" style={{ marginTop: "-300px" }}>
          <div class="d-lg-flex" style={{ width: "100%" }}>
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6">
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                <img
                  class=""
                  src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <div class="date">
                  <span class="day">26</span>
                  <span class="month">June</span>
                  <span class="year">2019</span>
                </div>
              </div>
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6">
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                <img
                  class=""
                  src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <div class="date">
                  <span class="day">26</span>
                  <span class="month">June</span>
                  <span class="year">2019</span>
                </div>
              </div>
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6">
              {" "}
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                {" "}
                <img
                  class=""
                  src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />{" "}
                <div class="date">
                  {" "}
                  <span class="day">
                    26
                  </span> <span class="month">June</span>{" "}
                  <span class="year">2019</span>{" "}
                </div>{" "}
              </div>{" "}
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 mb-lg-0 mb-4" id="card6">
              {" "}
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                {" "}
                <img
                  class=""
                  src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />{" "}
                <div class="date">
                  {" "}
                  <span class="day">
                    26
                  </span> <span class="month">June</span>{" "}
                  <span class="year">2019</span>{" "}
                </div>{" "}
              </div>{" "}
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <br />
          </div>{" "}
        </div>
        <div class="containe" id="con1" style={{ marginTop: "-200px" }}>
          <div class="d-lg-flex" style={{ width: "100%" }}>
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6">
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                <img
                  class=""
                  src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <div class="date">
                  <span class="day">26</span>
                  <span class="month">June</span>
                  <span class="year">2019</span>
                </div>
              </div>
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6">
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                <img
                  class=""
                  src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <div class="date">
                  <span class="day">26</span>
                  <span class="month">June</span>
                  <span class="year">2019</span>
                </div>
              </div>
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6">
              {" "}
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                {" "}
                <img
                  class=""
                  src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />{" "}
                <div class="date">
                  {" "}
                  <span class="day">
                    26
                  </span> <span class="month">June</span>{" "}
                  <span class="year">2019</span>{" "}
                </div>{" "}
              </div>{" "}
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 mb-lg-0 mb-4" id="card6">
              {" "}
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                {" "}
                <img
                  class=""
                  src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />{" "}
                <div class="date">
                  {" "}
                  <span class="day">
                    26
                  </span> <span class="month">June</span>{" "}
                  <span class="year">2019</span>{" "}
                </div>{" "}
              </div>{" "}
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                    <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <br />
          </div>{" "}
        </div>
        <div class="containe" id="con1" style={{ marginTop: "-200px" }}>
          <div class="d-lg-flex" style={{ width: "100%" }}>
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6">
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                <img
                  class=""
                  src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <div class="date">
                  <span class="day">26</span>
                  <span class="month">June</span>
                  <span class="year">2019</span>
                </div>
              </div>
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6">
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                <img
                  class=""
                  src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <div class="date">
                  <span class="day">26</span>
                  <span class="month">June</span>
                  <span class="year">2019</span>
                </div>
              </div>
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6">
              {" "}
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                {" "}
                <img
                  class=""
                  src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />{" "}
                <div class="date">
                  {" "}
                  <span class="day">
                    26
                  </span> <span class="month">June</span>{" "}
                  <span class="year">2019</span>{" "}
                </div>{" "}
              </div>{" "}
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 mb-lg-0 mb-4" id="card6">
              {" "}
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                {" "}
                <img
                  class=""
                  src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />{" "}
                <div class="date">
                  {" "}
                  <span class="day">
                    26
                  </span> <span class="month">June</span>{" "}
                  <span class="year">2019</span>{" "}
                </div>{" "}
              </div>{" "}
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <br />
          </div>{" "}
        </div>
        <div class="containe" id="con1" style={{ marginTop: "-200px" }}>
          <div class="d-lg-flex" style={{ width: "100%" }}>
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6" style={{width:"247px"}}>
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                <img
                  class=""
                  src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <div class="date">
                  <span class="day">26</span>
                  <span class="month">June</span>
                  <span class="year">2019</span>
                </div>
              </div>
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 me-lg-4 mb-lg-0 mb-4" id="card6"  style={{width:"247px"}}>
              {" "}
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                {" "}
                <img
                  class=""
                  src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />{" "}
                <div class="date">
                  {" "}
                  <span class="day">
                    26
                  </span> <span class="month">June</span>{" "}
                  <span class="year">2019</span>{" "}
                </div>{" "}
              </div>{" "}
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                      <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="cardf border-0 mb-lg-0 mb-4" id="card6"  style={{width:"247px"}}>
              {" "}
              <div class="backgroundEffect"></div>{" "}
              <div class="pic">
                {" "}
                <img
                  class=""
                  src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />{" "}
                <div class="date">
                  {" "}
                  <span class="day">
                    26
                  </span> <span class="month">June</span>{" "}
                  <span class="year">2019</span>{" "}
                </div>{" "}
              </div>{" "}
              <div class="content">
                {" "}
                <p class="h-1 mt-4">
                  Finance And Legal Working Streams Occur Throughout
                </p>{" "}
                <p class="text-muted mt-3">
                  Far far away, behind the word mountains, far from the
                  countries
                </p>{" "}
                <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                  {" "}
                  <div class="btn btn-primary">
                    Read More →
                  </div>{" "}
                  <div class="d-flex align-items-center justify-content-center foot">
                    {" "}
                    <p class="admin">Admin</p>{" "}&nbsp;&nbsp;
                    <p class="ps-3 icon text-muted">
                      <span class="fas fa-comment-alt pe-1"></span>&nbsp;3
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <br />
          </div>{" "}
        </div>
        {/* -----------------------pagination slider------------- */}
        <nav aria-label="Page navigation example" style={{marginTop:"-70px",marginLeft:"400px",width:"18%"}}>
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="">
                <Link to="/IT">Previous</Link>{" "}
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                <Link to='/IT'>1</Link>
                
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" >    
               <Link to='/Page2'>2</Link>
              
              </a>
            </li>
           
            <li class="page-item">
              <a class="page-link" href="#">
              <Link to='/Page3'>Next</Link>
               
              </a>
            </li>
          </ul>
        </nav>
    
      </div>
    </div>
      <br/>
      <Footer/>
    </div>
  );
};

export default Page2;
