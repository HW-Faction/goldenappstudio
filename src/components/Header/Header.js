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
        <header
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
        </header>
      </div>
    );
  }
}
