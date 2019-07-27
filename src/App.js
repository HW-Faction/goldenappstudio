import React from "react";
import "./App.css";
import "./components/Header/AllCSS.css";
import "./components/Header/HEadFirst.css";
import MainApp from "./components/MainApp/MainApp";
import Footer from "./components/Footer/Footer";
import Contact from "./components/MainApp/Contact/Contact";

class App extends React.Component {
  state = {
    contact: false,
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

  ContactUs = () => {
    this.setState({
      contact: true
    });
  };

  render() {
    return (
      <div>
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
              <a className="" href="/goldenappstudio">
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
              <nav
                className="navigation navbar navbar-expand-md"
                id="DoNotShow"
              >
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
                        href="#LEADERS"
                        className="desktop-list-link nav-link"
                        style={
                          this.state.isTop
                            ? { color: "none" }
                            : { color: "#fff" }
                        }
                      >
                        About Us
                      </a>
                    </li>
                    <li className="desktop-list-item-page nav-item">
                      <a
                        className="desktop-list-link nav-link"
                        style={
                          this.state.isTop
                            ? { color: "none" }
                            : { color: "#fff" }
                        }
                      >
                        Services
                      </a>
                    </li>

                    <li className="desktop-list-item-page nav-item">
                      <a
                        href="https://play.google.com/store/apps/developer?id=GoldenApp+Studio&hl=en"
                        className="desktop-list-link nav-link"
                        style={
                          this.state.isTop
                            ? { color: "none" }
                            : { color: "#fff" }
                        }
                      >
                        Our Apps
                      </a>
                    </li>
                    <li className="desktop-list-item-page nav-item">
                      <a
                        onClick={this.ContactUs}
                        className="desktop-list-link nav-link"
                        style={
                          this.state.isTop
                            ? { color: "none", cursor: "pointer" }
                            : { color: "#fff", cursor: "pointer" }
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

          {this.state.contact ? <Contact /> : <MainApp />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
