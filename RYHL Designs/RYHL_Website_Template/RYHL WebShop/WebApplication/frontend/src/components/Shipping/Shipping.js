import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Shippinig.css";
import mobileLogo from "../../image/mobile_logo.png";

const Shipping = () => {
  const [state, setstate] = useState("");
  function handleClick() {
    setstate("responsive_bar");
  }
  function handleClose() {
    setstate("");
  }
  return (
    <div>
      <section id="greater_then_mobile">
        <section class="shipping_page_section">
          <Sidebar />

          <div class="shipping_footer_section_two">
            <div class="shipping_footer">
              <div class="shipping_footer_list_two">
                <Link to="/impressum">impressum</Link>
              </div>
              <div class="shipping_footer_list_two">
                <Link to="/shipping">shipping</Link>
              </div>
            </div>
          </div>

          <section class="shipping_body_section">
            <div class="shipping_container">
              <div class="shipping_section_heading">
                <h3>shipping</h3>
              </div>
              <div class="shipping_section_contact_detail">
                <div class="shipping_section_contact_fields">
                  <p>
                    shipping terms
                    <br />
                    delivery time.
                  </p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>
                    in liechtenstein you will receive the products on the same
                    working day.
                  </p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>
                    (switzerland and eu-foreign countries correspondigle longer)
                  </p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>
                    shipping costs:
                    <br />
                    switzerland
                  </p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>the post office :10 chf</p>
                </div>

                <div class="shipping_section_contact_fields">
                  <p>
                    shipping zone 1-3 (within eu)
                    <br />
                    ups: 20 to 25 chf
                  </p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>
                    for all deliveries within the eu, taxes and customs duties
                    are included in the product price.
                  </p>
                  <p>shipping zone 4-9 (outside eu)</p>
                  <p>fedex: 35 CHF</p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>
                    for all deliveries outside europe, import duties may be
                    charged (fees, import duties, vat), which are determined by
                    the destination country. they are calculated according to
                    the country of manufacture/origin and the classification of
                    the goods and will be charged once your package reaches your
                    country. RYHL does not withhold duties and taxes during the
                    payment process and cannot predict what your possible duties
                    will be: in case such additional duties are incurred, they
                    must be paid in order for your package to be cleared. In
                    this case, the customer is responsible for the costs
                    incurred. please contact your local customs office for more
                    information on your country's policies.
                  </p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>(shipping and returns)</p>
                  <p>letstrasse 24</p>
                  <p>9490 vaduz</p>
                  <p>liechtenstein fl</p>
                </div>
              </div>
            </div>
          </section>
          <div class="shipping_footer_section_one">
            <div class="shipping_footer_section_one_list">
              <Link to="/contact">contact</Link>
            </div>
          </div>
        </section>
      </section>

      <section class="Mobile_home_section">
        <div class="mobile_header">
          <div class="shopping_cart">
            <i class="fas fa-shopping-bag"></i>
          </div>
          <div class="logo">
            <Link to="/">
              <img src={mobileLogo} alt="" />
            </Link>
          </div>
          <div class="nav_icon">
            <a class="open_close_nav">
              <i class="fas fa-bars" onClick={handleClick}></i>
            </a>
          </div>
        </div>

        <section class="shipping_body_section">
          <div class="shipping_container">
            <div class="shipping_section_heading">
              <a href="index.html">
                <i class="fas fa-arrow-left"></i>
              </a>
              <h3>shipping</h3>
            </div>
            <div class="shipping_section_contact_detail">
              <div class="shipping_section_contact_fields">
                <p>
                  shipping terms
                  <br />
                  delivery time.
                </p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>
                  in liechtenstein you will receive the products on the same
                  working day.
                </p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>
                  (switzerland and eu-foreign countries correspondigle longer)
                </p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>
                  shipping costs:
                  <br />
                  switzerland
                </p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>the post office :10 chf</p>
              </div>

              <div class="shipping_section_contact_fields">
                <p>
                  shipping zone 1-3 (within eu)
                  <br />
                  ups: 20 to 25 chf
                </p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>
                  for all deliveries within the eu, taxes and customs duties are
                  included in the product price.
                </p>
                <p>shipping zone 4-9 (outside eu)</p>
                <p>fedex: 35 CHF</p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>
                  for all deliveries outside europe, import duties may be
                  charged (fees, import duties, vat), which are determined by
                  the destination country. they are calculated according to the
                  country of manufacture/origin and the classification of the
                  goods and will be charged once your package reaches your
                  country. RYHL does not withhold duties and taxes during the
                  payment process and cannot predict what your possible duties
                  will be: in case such additional duties are incurred, they
                  must be paid in order for your package to be cleared. In this
                  case, the customer is responsible for the costs incurred.
                  please contact your local customs office for more information
                  on your country's policies.
                </p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>(shipping and returns)</p>
                <p>letstrasse 24</p>
                <p>9490 vaduz</p>
                <p>liechtenstein fl</p>
              </div>
            </div>
          </div>
        </section>

        <div class="shipping_mobile_footer">
          <div class="shipping_mobile_footer_list">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>

      <section class={`responsive_nav_bar ${state}`}>
        <section class="responsive_nav_page_section">
          <div class="responsive_header">
            <div class="responsive_nav_icon">
              <a class="open_close_nav">
                <i class="fas fa-times" onClick={handleClose}></i>
              </a>
            </div>

            <div class="responsive_logo">
              <span>REACH YOUR</span>
              <span class="responsive_logo_middle_part">
                <a href="index.html">
                  <small>R</small>
                  <small>Y</small>
                  <small>H</small>
                  <small>L</small>
                </a>
              </span>
              <span>HIGHEST LEVEL</span>
            </div>

            <div class="responsive_insta_icon">
              <i class="fab fa-instagram"></i>
            </div>
          </div>

          <section class="responsive_nav_details">
            <div class="responsive_nav_details_secion_one">
              <span>
                <a href="index.html">start</a>
              </span>
              <span>
                <a href="raffle.html">RAFFLE</a>
              </span>
              <span>
                {" "}
                <a href="sneaker.html">SNEAKERS</a>
              </span>
              <span>
                {" "}
                <a href="sign_up.html">Sign up</a>
              </span>
              <span>
                {" "}
                <a href="account_setting.html">Account</a>
              </span>
              <span>
                <a href="login.html">login</a>
              </span>
            </div>
            <div class="responsive_nav_details_secion_two">
              <ul>
                <li>
                  <a href="impressum.html">IMPRESSUM</a>
                </li>
                <li>
                  <a href="shipping.html">SHIPPING</a>
                </li>
                <li>
                  <a href="contact.html">CONTACT</a>
                </li>
              </ul>
            </div>
            <div class="responsive_nav_details_secion_three">
              <ul>
                <li>
                  <a href="privacy.html">privacy</a>
                </li>
                <li>
                  <a href="agb.html">agb</a>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Shipping;
