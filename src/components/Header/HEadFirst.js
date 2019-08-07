import React from "react";
import "./HEadFirst.css";
import { Modal, Button } from "react-bootstrap";

export default class HEadFirst extends React.Component {
  state = {
    showModal: false
  };

  getInitialState = () => {
    return { showModal: false };
  };

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div>
        <section className="std-shared-module std-hero bkg-gradient-teal-skyblue features-hero">
          <div className="inner">
            <div className="row">
              <div className="content">
                <h1
                  id="TITLE11"
                  className="title"
                  style={{ textAlign: "center" }}
                >
                  We design, build &amp; maintain the super product
                </h1>
                <h5
                  id="TITLE1"
                  className=""
                  style={{ marginTop: "15px", textAlign: "center" }}
                >
                  Solutions for big teams to achieve big dreams
                </h5>
                <div className="btn style-solid" style={{ marginTop: "25px" }}>
                  <button
                    color="primary"
                    type="button"
                    onClick={this.open}
                    id="CONTaCT"
                    className="btn btn-primary el orange"
                    bsStyle="primary"
                    bsSize="large"
                  >
                    Get In Touch
                  </button>
                </div>
                <div
                  id="BOXES"
                  className="feature-hero-boxes"
                  style={{ marginTop: "50px", marginBottom: "85px" }}
                >
                  <a
                    href="#"
                    className="feature-hero-boxes-box"
                    name="Password storage &amp; autofill"
                    data-link-to="features-fill-personal-info"
                    data-slide-item="store-autofill"
                    style={{ marginLeft: "35px" }}
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

        {/** Pop up modal  */}
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showModal}
          onHide={this.close}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Contact Info
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6 style={{ fontFamily: "monospace" }}>
              <strong>Email: studiogoldenapp@gmail.com</strong>
            </h6>
            <h6 style={{ fontFamily: "monospace" }}>
              <strong>Phone: +91 9518822841</strong>
            </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
