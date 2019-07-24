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

      <section className="std-shared-module meet home">
        <div className="inner bkg-light-gray-with-border">
          <div className="row intro">
            <div className="content">
              <h2 className="title">Manage things that best for business</h2>
              <p className="description">
                In today's world every organisation need an app and website to
                manage their clients digitally. We provide best solution for
                that in more than fair price
              </p>
            </div>
          </div>
          <div className="row topics">
            <div className="content icon-1">
              <h3 className="subtitle icon-holder">Store</h3>
              <p className="description-small">
                Keep the record of your client for their best experience.
              </p>
            </div>
            <div className="content icon-2">
              <h3 className="subtitle icon-holder">Secure</h3>
              <p className="description-small">
                Secure your business in competetive market
              </p>
            </div>
            <div className="content icon-3">
              <h3 className="subtitle icon-holder">Access</h3>
              <p className="description-small">
                Access to you clients in a better and fast way. Like every one
                is doing in 21st century
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="std-shared-module std-text-image style-regular business-section">
        <div className="inner bkg-teal js-lazy-bg-image js-fade-in">
          <div className="row">
            <div className="content">
              <h2 className="title">
                Trust GoldenApp Studio and your trust will not fade
              </h2>
              <p className="description">
                GoldenApp Studio is the company-wide solution for app
                development that everyone will actually love using.
              </p>
              <div className="btn style-outline">
                <a className="el white" href="/business">
                  Explore GoldenApp Studio Business
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Third Section of Secondary Main Folks */}

      <section className="std-shared-module getstarted">
        <div className="inner bkg-white">
          <div className="row reviews">
            <div className="content text-content">
              <h2 className="title">Don't wait. Get started today.</h2>
              <p className="description">
                Discover how much better life is when you never forget another
                password.
              </p>
              <div className="btn style-solid-iconless">
                <a className="el orange" href="/plans">
                  See all plans
                </a>
              </div>{" "}
            </div>
            <div className="grouped-content">
              <div className="content">
                <div className="sub-laurel">
                  <div className="store-logo">
                    <img
                      width="36"
                      height="41"
                      src="data:image/svg+xml;base64,PHN2ZwogeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiB3aWR0aD0iMzZweCIgaGVpZ2h0PSI0MXB4Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjUwMiIgZmlsbD0icmdiKDcxLCA3MSwgNzEpIgogZD0iTTM1LjIwMiwyOS44MDMgQzM0LjI1MywzMS45MTggMzMuNzk5LDMyLjg2MSAzMi41NzgsMzQuNzI5IEMzMC44NzMsMzcuMzM4IDI4LjQ3MSw0MC41ODYgMjUuNDk1LDQwLjYxMyBDMjIuODQ5LDQwLjYzNyAyMi4xNzAsMzguODgyIDE4LjU4MCwzOC45MDMgQzE0Ljk5MCwzOC45MjEgMTQuMjQxLDQwLjY0MyAxMS41OTUsNDAuNjE5IEM4LjYxOCw0MC41OTIgNi4zNDIsMzcuNjU5IDQuNjM4LDM1LjA1MSBDLTAuMTMwLDI3Ljc1NyAtMC42MjcsMTkuMTk5IDIuMzEyLDE0LjY0OSBDNC40MDEsMTEuNDE2IDcuNjk2LDkuNTIzIDEwLjc5NSw5LjUyMyBDMTMuOTUwLDkuNTIzIDE1LjkzNCwxMS4yNjIgMTguNTQzLDExLjI2MiBDMjEuMDczLDExLjI2MiAyMi42MTUsOS41MjAgMjYuMjYzLDkuNTIwIEMyOS4wMjAsOS41MjAgMzEuOTQxLDExLjAyOSAzNC4wMjMsMTMuNjM4IEMyNy4yMDMsMTcuMzk2IDI4LjMxMSwyNy4xODcgMzUuMjAyLDI5LjgwMyBaTTE3LjI2OCw5Ljc4NCBDMTYuODM2LDcuNDIzIDE3Ljk0NCw0Ljk5MyAxOS4yODYsMy4zNTQgQzIwLjc2NSwxLjU0OSAyMy4yOTcsMC4xNjQgMjUuNDYyLDAuMDE1IEMyNS44MjcsMi40ODMgMjQuODIwLDQuODk3IDIzLjQ5Niw2LjYwNiBDMjIuMDc2LDguNDM4IDE5LjYzMSw5Ljg1OCAxNy4yNjgsOS43ODQgWiIvPgo8L3N2Zz4K"
                      alt="App Store"
                    />
                  </div>
                  <span className="store-title">App Store</span>
                  <span className="store-description">Editors' Choice</span>
                </div>
              </div>
              <div className="content">
                <div className="sub-laurel">
                  <div className="store-logo">
                    <img
                      width="40"
                      height="40"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+DQogIDxnIHN0cm9rZT0ibnVsbCIgaWQ9InN2Z18xIiBmaWxsPSJyZ2IoNzEsIDcxLCA3MSkiIG9wYWNpdHk9IjAuNSI+DQogICAgPHBhdGggc3Ryb2tlPSJudWxsIiBpZD0ic3ZnXzIiIGQ9Im0yOC4xMSAxMy4xM2wtMTcuOTMtOS42Yy0wLjkzLTAuNS0xLjk0LTAuNTItMi44MS0wLjJsMTUuMjcgMTUuMjcgNS40Ny01LjQ3eiIvPg0KICAgIDxwYXRoIHN0cm9rZT0ibnVsbCIgaWQ9InN2Z18zIiBkPSJtMzQuOCAxNi43MWwtNS4xNi0yLjc2IC01LjgyIDUuODIgNS44MiA1LjgyIDUuMTYtMi43NmMyLjQ1LTEuMyAyLjQ1LTQuODEgMC02LjEyeiIvPg0KICAgIDxwYXRoIHN0cm9rZT0ibnVsbCIgaWQ9InN2Z180IiBkPSJtNS45NyA0LjI3Yy0wLjU1IDAuNi0wLjg5IDEuNDEtMC44OSAyLjMzbDAgMjYuMzVjMCAwLjkyIDAuMzQgMS43MiAwLjg5IDIuMzNsMTUuNS0xNS41IC0xNS41LTE1LjUxeiIvPg0KICAgIDxwYXRoIHN0cm9rZT0ibnVsbCIgaWQ9InN2Z181IiBkPSJtNy4zNyAzNi4yMWMwLjg3IDAuMzIgMS44OCAwLjMgMi44Mi0wLjIxbDE3LjkyLTkuNiAtNS40Ny01LjQ3IC0xNS4yNyAxNS4yN3oiLz4NCiAgPC9nPg0KPC9zdmc+DQo="
                      alt="Google Play"
                    />
                  </div>
                  <span className="store-title">Google Play</span>
                  <span className="store-description">Best App</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row ratings">
            <div className="content">
              <div className="ratings-module white">
                <div className="ratings-stars">
                  <span className="star js-lazy-bg-image js-fade-in" />
                  <span className="star js-lazy-bg-image js-fade-in" />
                  <span className="star js-lazy-bg-image js-fade-in" />
                  <span className="star js-lazy-bg-image js-fade-in" />
                  <span className="star js-lazy-bg-image js-fade-in" />
                </div>
                <p className="ratings-title">
                  50,000 five star reviews and counting.
                </p>
                <p className="ratings-link">
                  <a href="/reviews">Read our customer reviews</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
