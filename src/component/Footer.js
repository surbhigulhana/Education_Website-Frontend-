import React from "react";
import "../css/footer.css";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <div style={{width:"100%",backgroundColor:"#333"}}>
      <footer >
        <div class="footer-wrap">
          <div class="container first_class">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <h3>BE THE FIRST TO KNOW</h3>
                <p>
                  Get all the latest information on Triedge Services, Events,
                  Jobs and Fairs. Sign up for our newsletter today.
                </p>
              </div>
              <div class="col-md-4 col-sm-6">
                <form class="newsletter">
                  <input type="text" placeholder="  ✉ Email Address  " />
                  <button class="newsletter_submit_btn" type="submit">
                  
                  </button>
                </form>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="col-md-12">
                  <div class="standard_social_links">
                    <div>
                      <li class="round-btn btn-facebook">
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li class="round-btn btn-linkedin">
                        <a href="#">
                          <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="round-btn btn-twitter">
                        <a href="#">
                          <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="round-btn btn-instagram">
                        <a href="#">
                          <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="round-btn btn-whatsapp">
                        <a href="#">
                          <i class="fab fa-whatsapp" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="round-btn btn-envelop">
                        <a href="#">
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-md-12">
                  <h3 style={{textAlign: "right"}}>Stay Connected</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="second_class">
            <div class="container second_class_bdr">
              <div class="row">
                <div class="col-md-4 col-sm-6">
                  <div class="footer-logo">
                    
                  </div>
                  <p>
                    Your one-stop career platform to find Jobs, Internships,
                    Professional Trainings, Projects, and Volunteering
                    Opportunities.
                  </p>
                </div>
                <div class="col-md-2 col-sm-6">
                  <h3>Quick LInks</h3>
                  <ul class="footer-links">
                    <li>
                     <Link to="/Buildyourc">Home</Link>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Triedge Partners</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                  <h3>OUR SERVICES</h3>
                  <ul class="footer-category">
                    <li>
                      <a href="#">Fresher Jobs</a>
                    </li>
                    <li>
                      <a href="#">InternEdge - Internships &amp; Projects </a>
                    </li>
                    <li>
                      <a href="#">Resume Edge - Resume Writing Services</a>
                    </li>
                    <li>
                      <a href="#">Readers Galleria - Curated Library</a>
                    </li>
                    <li>
                      <a href="#">Trideus - Campus Ambassadors</a>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <h3>triedge Events</h3>
                  <ul class="footer-links">
                    <li>
                      <a href="#">Triedge Events</a>
                    </li>

                    <li>
                      <a href="#">Jobs &AMP; Internship Fair 2019</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="container-fluid">
              <div class="copyright">
                {" "}
                Copyright 2019 | All Rights Reserved by TRIEDGE Solutions Pvt.
                Ltd.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div></div>
  );
};

export default Footer;
