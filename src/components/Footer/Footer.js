import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="footer" id="contact">
        <div class="initial-section">
          <div class="container">
            <div class="row content-row">
              <div class="col-12 col-md-8">
                <h1 class="heading latoBlack mt-2">
                  We have worked with some great clients and all of them are
                  happy. So want to be happy ?
                </h1>
              </div>
              <div class="col-12 col-md-4">
                <a
                  href="#"
                  class="portfolio-link btn btn-outline-light latoRegular px-lg-5"
                >
                  See Our Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*contact section */}

        <div class="pt-4 signup-section">
          <div class="container">
            <form
              id="footer-form"
              class="email-form-footer footer__signup px-3 px-md-0"
              autocomplete="off"
            >
              <h4 class="latoBlack heading text-white">Contact Us</h4>

              <div class="form-row">
                <div class="col-md-12 col-lg-4">
                  <input
                    id="footer__email-input"
                    class="form-control footer-input mb-3"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div class="col-md-12 col-lg-4">
                  <input
                    id="footer__email-input"
                    class="form-control footer-input email-input mb-3"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div class="col-md-12 col-lg-4">
                  <select
                    name="source"
                    class="form-control footer-input source-input-select"
                    id="source"
                    placeholder="Source"
                    required=""
                  >
                    <option value="" disabled="" selected="">
                      How did you hear about us
                    </option>
                    <option value="Google">Google</option>
                    <option value="Clutch.co">Facebook.com</option>
                    <option value="Referral/Word of Mouth">
                      Referral/Word of Mouth
                    </option>
                    <option value="Twitter">Twitter</option>
                    <option value="Conference">Conference</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="col-md-12 col-lg-4">
                  <input
                    id="footer__email-input"
                    class="form-control footer-input email-input mb-3"
                    type="text"
                    name="company"
                    placeholder="Company"
                    required=""
                  />
                </div>
                <div class="col-md-12 col-lg-8">
                  <input
                    id="footer__email-input"
                    class="form-control footer-input email-input mb-3"
                    type="text"
                    name="about"
                    placeholder="How can we help?"
                    required=""
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 col-lg-8">
                  <div class="form-group">
                    <div class="form-check pl-0">
                      <input
                        type="checkbox"
                        name="checkbox"
                        id="nda"
                        value="value"
                      />
                      <label class="text-white mb-0" for="nda">
                        Please send me a Non Disclosure Agreement for a
                        Confidential Consultation
                      </label>
                    </div>
                  </div>
                  <div
                    id="recaptcha"
                    class="g-recaptcha mb-3"
                    data-sitekey="6LdRyI8UAAAAAFZ7xNVZGrR3KEYcXoVr5mx8CSHl"
                    data-callback="onSubmission"
                  >
                    <div style={{ width: "304px", height: "78px" }}>
                      <div>
                        <iframe
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdRyI8UAAAAAFZ7xNVZGrR3KEYcXoVr5mx8CSHl&amp;co=aHR0cHM6Ly93d3cudGludGFzaC5jb206NDQz&amp;hl=en-GB&amp;v=v1562567553145&amp;size=normal&amp;cb=6sm05tcfbae"
                          width="304"
                          height="78"
                          role="presentation"
                          name="a-hbyxgi5pqtz7"
                          frameborder="0"
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                        />
                      </div>
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        class="g-recaptcha-response"
                        style={{
                          width: "250px",
                          height: "40px",
                          border: "1px solid rgb(193, 193, 193)",
                          margin: "10px 25px",
                          padding: "0px",
                          resize: "none",
                          display: "none"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-4">
                  <input
                    type="submit"
                    class="btn btn-block btn-success signup-btn"
                    value="Get Started"
                  />
                </div>
              </div>
            </form>
            <div class="signup__success_footer  proximaNovaLight col-12 text-center">
              <div class="row mw-100">
                <div class="col-12 pl-3">
                  Thank you, our team will be in touch soon
                </div>
              </div>
            </div>{" "}
            <div class="signup__error proximaNovaLight">
              <i class="fa fa-check text-white mr-3" />
              Oops, we ran into an error, please try again.
            </div>
          </div>
        </div>

        {/* address section  */}
        <div class="address-section">
          <div class="container">
            <div class="row justify-content-center text-align-center py-5">
              <div class="col-12 mt-5">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <h2 class="latoBold heading text-white">Addresses</h2>
                    <ul>
                      <li class="city">
                        <a href="" class="city" target="_blank">
                          <span class="latoRegular">Seattle,</span>&nbsp;
                          <span class="latoBold">USA</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="city" target="_blank">
                          <span class="latoRegular">Toronto,</span>&nbsp;
                          <span class="latoBold">Canada</span>
                        </a>
                      </li>
                      <li class="city">
                        <a href="#" class="city" target="_blank">
                          <span class="latoRegular">Bhiwani,</span>&nbsp;
                          <span class="latoBold">India</span>
                        </a>
                      </li>
                      <li class="city">
                        <a href="#" class="city" target="_blank">
                          <span class="latoRegular">Remote,</span>&nbsp;
                          <span class="latoBold">Earth</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-4 col-md-6 footer_address mb-5">
                    <h2 class="latoBold heading text-white">
                      Come work with us!
                    </h2>
                    <p class="latoRegular description">
                      We are always looking for great people with talent to join
                      our teams.
                    </p>

                    {/*  <!-- <h3 class="latoBold subheading text-white">Join Us</h3> --> */}
                    <a class="latoRegular description careers" href="#">
                      {" "}
                      <b>Careers</b>
                    </a>
                    {/* <!-- <a href="mailto:careers@tintash.com" class="latoRegular description text-green">careers@tintash.com</a> --> */}
                    <br />
                  </div>

                  <div class="col-lg-4 col-md-6 footer_address social-icons">
                    <h2 class="latoBold heading text-white">Social</h2>

                    <a href="#" target="_blank">
                      <img
                        src="https://www.tintash.com/images/header-footer/social/facebook-icon.svg"
                        alt="Tintash facebook"
                      />
                    </a>

                    <a class="px-3" href="#" target="_blank">
                      <img
                        src="https://www.tintash.com/images/header-footer/social/twitter-Icon.svg"
                        alt="Tintash twitter"
                      />
                    </a>

                    <a href="#" target="_blank">
                      <img
                        src="https://www.tintash.com/images/header-footer/social/linkedin-Icon.svg"
                        alt="Tintash linkedin"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottam bar  */}
        <div class="bottom-bar clearfix">
          <div class="container h-100">
            <div class="row justify-content-center align-items-center h-100">
              <div class="col-lg-6 col-md-6 col-12">
                <p class="float-left latoBold mb-0 copy-right">
                  Copyright 2019 GoldenApp Studio - All Rights Reserved
                </p>
                <div class="break">
                  <br />
                </div>
                <a class="pl-lg-3 latoBold privacy" href="#">
                  Privacy Policy
                </a>
              </div>
              <div class="col-6 col-md-6 col-12">
                <p id="Top" class="latoBold text-white mb-0 back-top">
                  Back To Top
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
