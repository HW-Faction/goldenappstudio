import React, { Component } from "react";
import "./AllCSS.css";

export default class Header extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    setInterval(() => {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
          this.setState({
            isTop: false
          });
        } else {
          this.setState({
            isTop: true
          });
        }
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <div className="container-fluid px-0">
          <div className="nav-position navbar-transparent">
            <div
              className="container"
              style={
                this.state.isTop
                  ? { backgroundColor: "none" }
                  : { backgroundColor: "#8a2be2" }
              }
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-12">
                  {/*  <nav
                id="nav"
                className="navbar navbar-expand-lg sticky-top navbar-light bg-white px-0"
              > */}
                  <nav
                    id="nav"
                    className="navbar navbar-expand-lg sticky-top navbar-light px-0"
                  >
                    <h1 style={{ color: "orange" }}>Golden App Studio</h1>
                    {/*  <div className="head-top " /> */}
                    {/*  <a
                      className="navbar-brand nav-width py-md-0"
                      href="https://www.tintash.com"
                    >
                      <img
                        width="140"
                        id="logo-sticky"
                        className="img-fluid navbar-logo hide"
                        src="https://www.tintash.com/images/header-footer/Tintash Logo.png"
                        alt="Tintash Logo"
                      />
                      <img
                        width="140"
                        id="logo"
                        className="img-fluid navbar-logo show"
                        src="https://www.tintash.com/images/header-footer/Tintash-logo-hd.png"
                        alt="Tintash Logo"
                      />
                    </a> */}
                    {/*  <a
                  className="btn btn-success idea latoRegular mobile ml-auto mr-2"
                  style={{ color: "#ffffff" }}
                >
                  <img
                    width="25px"
                    height="25px"
                    src="https://www.tintash.com/images/header-footer/budget.svg"
                  />
                </a> */}
                    <button
                      className="navbar-toggler collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarToggler"
                      aria-controls="navbarTogglerDemo03"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon " />
                    </button>
                    <div
                      className="navbar-collapse collapse"
                      id="navbarToggler"
                      style={{ height: 0 }}
                      aria-expanded="false"
                    >
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-lg-0 ml-md-3 mr-md-3 mt-md-0 ml-sm-0 mr-sm-0 mt-sm-0 latoBold">
                          <a
                            className="nav-link nav-link-text"
                            href="https://www.tintash.com/about-us"
                          >
                            About Us
                          </a>
                        </li>
                        <li className="nav-item ml-lg-0 ml-md-3 mr-md-3 mt-md-0 ml-sm-0 mr-sm-0 mt-sm-0">
                          <a
                            className="nav-link nav-link-text"
                            href="#services"
                          >
                            Services
                          </a>
                        </li>
                        <li className="nav-item ml-lg-0 ml-md-3 mr-md-3 mt-md-0 ml-sm-0 mr-sm-0 mt-sm-0">
                          <a className="nav-link nav-link-text" href="#">
                            Portfolio
                          </a>
                        </li>
                        <li className="nav-item ml-lg-0 ml-md-3  mt-md-0 ml-sm-0 mr-sm-0 mt-sm-0">
                          <a
                            className="nav-link nav-link-text"
                            style={{ color: "#0EC573" }}
                            href="#contact"
                          >
                            Contact Us
                          </a>
                        </li>
                        {/*  <li className="nav-item desktop">
                      <a
                        className="btn btn-success idea latoRegular"
                        style={{ color: "#ffffff" }}
                      >
                        Get an Instant Ballpark
                      </a>
                    </li> */}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
