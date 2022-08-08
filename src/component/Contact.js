import React from "react";
import { Navbar } from "./Navbar";
import "../css/Contact.css";
import "../css/contact.scss";
import Footer  from './Footer'
const Contact = () => {
  return (
    <div>
      <Navbar />

      <div style={{ width: "100%", marginLeft: "-110px", marginTop: "-21px" }}>
        <div class="container">
          <div class="row">
            <div class="col">
              <header>
                <section class="hero-header-text">
                  <h1>
                    <b style={{ color: "white", marginLeft: "-300px" }}>
                      Need Help ?
                    </b>
                  </h1>
                  <br />
                  <h5 style={{ color: "white", marginLeft: "130px" }}>
                    If you have questions or need technical assistance, please
                    contact us at
                  </h5>
                  <h6 style={{ color: "white", marginLeft: "-380px" }}>
                    sales@alison.com
                  </h6>
                </section>
              </header>
            </div>
            <div class="col">
              <p
                style={{
                  fontSize: "35px",
                  marginLeft: "180px",
                  marginTop: "100px",
                  color:"#83c11f"
                }}
              >
                Send us a message ➤
              </p>
<br/><br/>
              {/* -------------card--------------- */}
              <div class="contact-card" style={{ marginLeft: "120px" }}>
                <div class="contact-card__header-image">
                  <div class="contact-card__avatar"></div>
                </div>
                <p class="contact-card__name">Callum Brown</p>
                <ul>
                  <li class="contact-card__link contact-card__link--email">
                    <a title="Email Callum Brown" href="mailto:">
                      &#128241 cabrown96@live.com
                    </a>
                  </li>
                  <li class="contact-card__link contact-card__link--mobile">
                    <a title="Call Callum Brown" href="tel:">
                      &#128231 +1 123-456-7890
                    </a>
                  </li>
                </ul>
                <ul class="contact-card__footer">
                  <li class="contact-card__footer__link contact-card__footer__link--twitter">
                    <a
                      title="Visit Callum Brown's Twitter profile"
                      href="https://twitter.com/callumbrown___"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="contact-card__footer__link contact-card__footer__link--linkedin">
                    <a
                      title="Visit Callum Brown's LinkedIn profile"
                      href="https://www.linkedin.com/in/callumbrown---/"
                    >
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li class="contact-card__footer__link contact-card__footer__link--codepen">
                    <a
                      title="Visit Callum Brown's Codepen profile"
                      href="https://codepen.io/callumbrown___"
                    >
                      <i class="fa fa-codepen"></i>
                    </a>
                  </li>
                  <li class="contact-card__footer__link contact-card__footer__link--dribbble">
                    <a
                      title="Visit Callum Brown's Dribbble profile"
                      href="https://dribbble.com/callumbrown___"
                    >
                      <i class="fa fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
    
              <div class="contact-card" style={{marginLeft:"340px",marginTop:"-350px"}}>
                <div class="contact-card__header-image">
                  <div class="contact-card__avatar"></div>
                </div>
                <p class="contact-card__name">Callum Brown</p>
                <ul>
                  <li class="contact-card__link contact-card__link--email">
                    <a title="Email Callum Brown" href="mailto:">
                      &#128241 cabrown96@live.com
                    </a>
                  </li>
                  <li class="contact-card__link contact-card__link--mobile">
                    <a title="Call Callum Brown" href="tel:">
                      &#128231 +1 123-456-7890
                    </a>
                  </li>
                </ul>
                <ul class="contact-card__footer">
                  <li class="contact-card__footer__link contact-card__footer__link--twitter">
                    <a
                      title="Visit Callum Brown's Twitter profile"
                      href="https://twitter.com/callumbrown___"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="contact-card__footer__link contact-card__footer__link--linkedin">
                    <a
                      title="Visit Callum Brown's LinkedIn profile"
                      href="https://www.linkedin.com/in/callumbrown---/"
                    >
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li class="contact-card__footer__link contact-card__footer__link--codepen">
                    <a
                      title="Visit Callum Brown's Codepen profile"
                      href="https://codepen.io/callumbrown___"
                    >
                      <i class="fa fa-codepen"></i>
                    </a>
                  </li>
                  <li class="contact-card__footer__link contact-card__footer__link--dribbble">
                    <a
                      title="Visit Callum Brown's Dribbble profile"
                      href="https://dribbble.com/callumbrown___"
                    >
                      <i class="fa fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
