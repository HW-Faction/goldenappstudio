import React, { Component } from "react";
import "./AllCSS.css";
import "./HEadFirst.css";

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
        <header
          className="header-std js-header transparent"
          style={
            this.state.isTop
              ? { backgroundColor: "none" }
              : { backgroundColor: "#000" }
          }
        >
          <div className="inner">
            <a className="" href="/">
              <p
                id="GAS"
                style={
                  this.state.isTop
                    ? { color: "#fff", fontFamily: "Pacifico" }
                    : { color: "#fff" }
                }
              >
                GoldenApp Studio Inc.
              </p>
            </a>
            <img
              id="EARTH5"
              style={{
                width: 40,
                height: 40
              }}
              src="https://image.flaticon.com/icons/svg/744/744480.svg"
            />
            <nav className="navigation navbar navbar-expand-md" id="DoNotShow">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
              >
                <ul className="desktop-list navbar-nav">
                  <li className="desktop-list-item-page nav-item">
                    <a
                      href="/goldenappstudio/about"
                      className="desktop-list-link nav-link"
                      style={
                        this.state.isTop ? { color: "none" } : { color: "#fff" }
                      }
                    >
                      About Us
                    </a>
                  </li>
                  <li className="desktop-list-item-page nav-item">
                    <a
                      href="#services"
                      className="desktop-list-link nav-link"
                      style={
                        this.state.isTop ? { color: "none" } : { color: "#fff" }
                      }
                    >
                      Services
                    </a>
                  </li>

                  <li className="desktop-list-item-page nav-item">
                    <a
                      className="desktop-list-link nav-link"
                      style={
                        this.state.isTop ? { color: "none" } : { color: "#fff" }
                      }
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="desktop-list-item-page nav-item">
                    <a
                      href="/goldenappstudio/contact"
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                      className="desktop-list-link nav-link"
                      style={
                        this.state.isTop ? { color: "none" } : { color: "#fff" }
                      }
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        {/** Alternative header */}
        {/* <header
          className="header-std js-header transparent"
          style={
            this.state.isTop
              ? { backgroundColor: "none" }
              : { backgroundColor: "#8a2be2", width: "100%" }
          }
        >
          <div className="inner">
            <a className="logo" href="/">
              GAS
            </a>
            <nav className="navigation navbar navbar-expand-md">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
              >
                <ul className="desktop-list navbar-nav">
                  <li className="desktop-list-item-page nav-item">
                    <a href="/about" className="desktop-list-link nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="desktop-list-item-page nav-item">
                    <a href="#services" className="desktop-list-link nav-link">
                      Services
                    </a>
                  </li>

                  <li className="desktop-list-item-page nav-item">
                    <a
                      href="https://app.dashlane.com"
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                      className="desktop-list-link nav-link"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="desktop-list-item-page nav-item">
                    <a
                      href="https://app.dashlane.com"
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                      className="desktop-list-link nav-link"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header> */}

        {/** Alternative HEadFirst */}
        {/*  <main className="main">
          <div className="container">
            <div className="heading-container-padding row d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-10 col-lg-12 content-slide-top-container ">
                <div className="content-slide-top">
                  <div className="second-line special-text ">
                    <span className="first-line">We </span>
                    Design
                    <span className="first-line"> &amp;</span>
                  </div>
                  <div className="second-line special-text ">
                    Build Products
                  </div>
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

        {/* <div
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
                              </main> */}
      </div>
    );
  }
}
