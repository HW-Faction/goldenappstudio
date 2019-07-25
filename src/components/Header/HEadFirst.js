import React from "react";
import "./HEadFirst.css";

export default class HEadFirst extends React.Component {
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
        }
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div onScroll={this.handleScroll}>
        <header
          className="header-std js-header transparent"
          style={
            this.state.isTop
              ? { backgroundColor: "none" }
              : { backgroundColor: "#fff" }
          }
        >
          <div className="inner">
            <a className="" href="/">
              <h1
                id="GAS"
                style={
                  this.state.isTop
                    ? { color: "#fff", fontFamily: "Pacifico" }
                    : { color: "#000" }
                }
              >
                GoldenApp Studio
              </h1>
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
                    <a
                      href="/about"
                      className="desktop-list-link nav-link"
                      style={
                        this.state.isTop ? { color: "none" } : { color: "#000" }
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
                        this.state.isTop ? { color: "none" } : { color: "#000" }
                      }
                    >
                      Services
                    </a>
                  </li>

                  <li className="desktop-list-item-page nav-item">
                    <a
                      href="https://app.dashlane.com"
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                      className="desktop-list-link nav-link"
                      style={
                        this.state.isTop ? { color: "none" } : { color: "#000" }
                      }
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
                      style={
                        this.state.isTop ? { color: "none" } : { color: "#000" }
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

        <section className="std-shared-module std-hero bkg-gradient-teal-skyblue features-hero">
          <div className="inner">
            <div className="row">
              <div className="content">
                <h1 className="title" style={{ marginTop: "80px" }}>
                  We design, build &amp; maintain the super product
                </h1>
                <h5 className="" style={{ marginTop: "10px" }}>
                  Solutions for big teams to achieve big dreams
                </h5>
                <div className="btn style-solid" style={{ marginTop: "22px" }}>
                  <a className="el orange" href="/download">
                    Contact Us
                  </a>
                </div>
                <div
                  className="feature-hero-boxes"
                  style={{ marginTop: "40px" }}
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
                        width: 35,
                        height: 35
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
                        width: 35,
                        height: 35
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
                        width: 35,
                        height: 35
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
                        width: 35,
                        height: 35
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
}
