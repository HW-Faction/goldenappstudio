import React from "react";
import "./HEadFirst.css";

export default function HEadFirst() {
  return (
    <div>
      <section className="std-shared-module std-hero bkg-gradient-teal-skyblue features-hero">
        <div className="inner">
          <div className="row">
            <div className="content">
              <h1 className="title" style={{ marginTop: "100px" }}>
                We design, build &amp; maintain the super product
              </h1>
              <h5 className="" style={{ marginTop: "15px" }}>
                Solutions for big teams to achieve big dreams
              </h5>
              <div className="btn style-solid" style={{ marginTop: "25px" }}>
                <a className="el orange" href="/contact">
                  Contact Us
                </a>
              </div>
              <div
                className="feature-hero-boxes"
                style={{ marginTop: "50px", marginBottom: "85px" }}
              >
                <a
                  href="#"
                  className="feature-hero-boxes-box"
                  name="Password storage &amp; autofill"
                  data-link-to="features-fill-personal-info"
                  data-slide-item="store-autofill"
                >
                  <img
                    width="30"
                    height="30"
                    className="image-icon"
                    src="https://image.flaticon.com/icons/svg/25/25374.svg"
                    alt="Password storage &amp; autofill"
                    style={{
                      width: 50,
                      height: 50
                    }}
                  />
                  <span className="box-text">Android App Development</span>
                  <span className="box-arrow" />
                </a>
                <a
                  href="#"
                  className="feature-hero-boxes-box"
                  name="Secure notes &amp; documents"
                  data-link-to="features-fill-personal-info"
                  data-slide-item="secure-docs"
                >
                  <img
                    width="20"
                    height="25"
                    className="image-icon"
                    src="https://image.flaticon.com/icons/svg/1508/1508788.svg"
                    alt="Secure notes &amp; documents"
                    style={{
                      width: 50,
                      height: 50
                    }}
                  />
                  <span className="box-text">Software Testing</span>
                  <span className="box-arrow" />
                </a>
                <a
                  href="#"
                  className="feature-hero-boxes-box"
                  name="Breach alerts &amp; monitoring"
                  data-link-to="monitoring"
                >
                  <img
                    width="25"
                    height="30"
                    className="image-icon"
                    src="https://image.flaticon.com/icons/svg/69/69045.svg"
                    alt="Breach alerts &amp; monitoring"
                    style={{
                      width: 50,
                      height: 50
                    }}
                  />
                  <span className="box-text">Web Development</span>
                  <span className="box-arrow" />
                </a>
                <a
                  href="#"
                  className="feature-hero-boxes-box"
                  name="Secure sharing &amp; contacts"
                  data-link-to="sharing-emergency"
                >
                  <img
                    width="29"
                    height="29"
                    className="image-icon"
                    src="https://www.flaticon.com/premium-icon/icons/svg/1674/1674613.svg"
                    alt="Secure sharing &amp; contacts"
                    style={{
                      width: 50,
                      height: 50
                    }}
                  />
                  <span className="box-text">URL Shortning</span>
                  <span className="box-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
