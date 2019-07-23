import React from "react";
import "./PrimaryMain.css";
export default function PrimaryMain() {
  return (
    <div style={{ color: "#8a2be2" }}>
      <section className="services-section py-5" id="services">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12">
              <h1
                className="heading mt-4 wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                Core Services
              </h1>
              <p
                className="description wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                We offer end-to-end product development solutions, tailor-made
                to fit your product's unique requirements.
              </p>
              <div className="row mt-4">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 px-2">
                  <div
                    className="card card-web h-100 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <img
                      className="image pt-4 ml-4"
                      src="https://www.tintash.com/images/home-page/core-services/web-development.svg"
                      alt="web"
                    />
                    <img
                      className="image pt-4 ml-4"
                      src="https://www.tintash.com/images/home-page/core-services/web-development-hover.svg"
                      alt="web"
                    />
                    <div className="card-body pl-4">
                      <h5 className="card-title">
                        Web <br /> Development
                      </h5>
                      <p className="card-text description">
                        We work with the latest tech stacks to engineer
                        front-end and back-end solutions, custom-made for your
                        project, whilst ensuring code quality and security.
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-0 pb-3">
                      <a
                        href="https://www.tintash.com/services/web-development"
                        className="pull-right link btn btn-sm btn-outline-primary"
                      >
                        <span>Learn More</span>
                        &nbsp;
                        <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 px-2">
                  <div
                    className="card card-mobile h-100 wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInUp",
                      animationDelay: 0.2
                    }}
                  >
                    <img
                      className="image pt-4 ml-4"
                      src="https://www.tintash.com/images/home-page/core-services/mobile-development.svg"
                      alt="mobile"
                    />
                    <img
                      className="image pt-4 ml-4"
                      src="https://www.tintash.com/images/home-page/core-services/mobile-development-hover.svg"
                      alt="mobile"
                    />
                    <div className="card-body pl-4">
                      <h5 className="card-title">
                        Mobile App <br /> Development
                      </h5>
                      <p className="card-text description">
                        With engaging interfaces and responsive designs, we have
                        crafted a multiplex of native and cross platform mobile
                        applications, creating exceptional digital experiences
                        for user satisfaction.
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-0 pb-3">
                      <a
                        href="https://www.tintash.com/services/mobile-app-development"
                        className="pull-right link btn btn-sm btn-outline-primary"
                      >
                        <span>Learn More</span>
                        &nbsp;
                        <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
