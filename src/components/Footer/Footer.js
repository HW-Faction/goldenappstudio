import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="footer" id="contact">
        <div className="address-section">
          <div className="container">
            <div className="row justify-content-center text-align-center py-5">
              <div className="col-12 mt-5">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <h2 className="latoBold heading text-white">Addresses</h2>
                    <ul>
                      <li className="city">
                        <a href="" className="city" target="_blank">
                          <span className="latoRegular">Seattle,</span>&nbsp;
                          <span className="latoBold">USA</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="city" target="_blank">
                          <span className="latoRegular">Toronto,</span>&nbsp;
                          <span className="latoBold">Canada</span>
                        </a>
                      </li>
                      <li className="city">
                        <a href="#" className="city" target="_blank">
                          <span className="latoRegular">Bhiwani,</span>&nbsp;
                          <span className="latoBold">India</span>
                        </a>
                      </li>
                      <li className="city">
                        <a href="#" className="city" target="_blank">
                          <span className="latoRegular">Remote,</span>&nbsp;
                          <span className="latoBold">Earth</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-4 col-md-6 footer_address mb-5">
                    <h2 className="latoBold heading text-white">
                      Come work with us!
                    </h2>
                    <p className="latoRegular description">
                      We are always looking for great people with talent to join
                      our teams.
                    </p>

                    {/*  <!-- <h3 className="latoBold subheading text-white">Join Us</h3> --> */}
                    <a className="latoRegular description careers" href="#">
                      {" "}
                      <b>Careers</b>
                    </a>
                    {/* <!-- <a href="mailto:careers@tintash.com" className="latoRegular description text-green">careers@tintash.com</a> --> */}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottam bar  */}
        <div className="bottom-bar clearfix">
          <div className="container h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-lg-6 col-md-6 col-12">
                <p className="float-left latoBold mb-0 copy-right">
                  Copyright 2019 GoldenApp Studio - All Rights Reserved
                </p>
                <div className="break">
                  <br />
                </div>
                <a className="pl-lg-3 latoBold privacy" href="#">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
