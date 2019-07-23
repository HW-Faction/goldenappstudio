import React from "react";
import "./SecondaryMain.css";
export default function SecondaryMain() {
  return (
    <div>
      <main className="main">
        <div className="container">
          <div className="heading-container-padding row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-10 col-lg-12 content-slide-top-container ">
              <div className="content-slide-top">
                <div className="second-line special-text ">
                  <span className="first-line">We </span>
                  Design
                  <span className="first-line"> &amp;</span>
                </div>
                <div className="second-line special-text ">Build Products</div>
              </div>

              <div className="row section-divider-container content-slide-top">
                <div className="section-divider" />
              </div>

              <div className="row content-slide-top">
                <div className="col-lg-12">
                  <div className="description latoRegular">
                    Tintash provides dedicated remote teams that work closely
                    with you to design and build your digital products. Our
                    clients include several{" "}
                    <span className="latoBold">Startups</span>, a{" "}
                    <span className="latoBold">Unicorn</span> and a{" "}
                    <span className="latoBold">Fortune 500</span> company.
                  </div>
                </div>
                <div className="col-lg-2 email-form main__signup">
                  <div className="input-group mb-3">
                    <a href="https://www.tintash.com/contact">
                      <button
                        className="main_contact_button btn signup-btn btn-lg btn-success latoBold"
                        type="submit"
                      >
                        Contact Us
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10">
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      {/* <!-- <p id="preSeedHover" className="text-white latoBold">
                                                Are you pre-seed?
                                </p> --> */}
                    </div>
                    <div
                      id="preSeedDescription"
                      style={{ display: "none" }}
                      className="col-lg-9 col-md-10 col-sm-12"
                    >
                      <p className="text-white latoRegular mb-0" main="">
                        We're always interested in working on ideas we're
                        passionate about, and would love to learn more about
                        what you're working on.{" "}
                        <a
                          style={{ color: "white" }}
                          href="https://www.tintash.com/contact"
                        >
                          <u> Get in touch </u>
                        </a>{" "}
                        with us!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="badges-container content-slide-top" />
      </main>

      <section class="std-shared-module meet home">
        <div class="inner bkg-light-gray-with-border">
          <div class="row intro">
            <div class="content">
              <h2 class="title">Manage things that best for business</h2>
              <p class="description">
                In today's world every organisation need an app and website to
                manage their clients digitally. We provide best solution for
                that in more than fair price
              </p>
            </div>
          </div>
          <div class="row topics">
            <div class="content icon-1">
              <h3 class="subtitle icon-holder">Store</h3>
              <p class="description-small">
                Keep the record of your client for their best experience.
              </p>
            </div>
            <div class="content icon-2">
              <h3 class="subtitle icon-holder">Secure</h3>
              <p class="description-small">
                Secure your business in competetive market
              </p>
            </div>
            <div class="content icon-3">
              <h3 class="subtitle icon-holder">Access</h3>
              <p class="description-small">
                Access to you clients in a better and fast way. Like every one
                is doing in 21st century
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
