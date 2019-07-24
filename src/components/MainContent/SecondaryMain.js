import React from "react";
import "./SecondaryMain.css";
export default function SecondaryMain() {
  return (
    <div>
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
      <div
        id="competitors_page"
        style={{
          textAlign: "center"
        }}
      >
        <div
          className="wrapper"
          style={{
            textAlign: "center"
          }}
        >
          <div
            id="main-header"
            className="main-header"
            style={{
              backgroundImage:
                "url(" +
                "https://www.acunetix.com/wp-content/uploads/2018/05/competitors-background.png" +
                ")",
              backgroundSize: "cover",
              color: "#ffffff",
              paddingTop: 0,
              textAlign: "center"
            }}
          >
            <div
              className="logo"
              style={{
                padding: "25px 0 40px",

                margin: "0 auto",
                alignItems: "center",
                justifyContent: "stretch",
                textAlign: "center"
              }}
            >
              <div
                className="line"
                style={{
                  display: "block",
                  borderTop: "1px solid #fff",
                  minWidth: "10px",
                  margin: "auto auto auto 0",
                  textAlign: "center",
                  alignItems: "center",
                  flex: 1
                }}
              />
              <div
                className="logo__container"
                style={{
                  border: "1px solid #ffffff",
                  display: "inline-block",
                  padding: "25px 35px"
                }}
              >
                <p>
                  <a href="//www.acunetix.com" target="_blank" rel="noopener" />
                </p>
                <h1 className="competitor-title">
                  <h1 id="GAS0" style={{ fontFamily: "Pacifico" }}>
                    GoldenApp Studio
                  </h1>{" "}
                  vs{" "}
                  <h1
                    style={{
                      fontFamily: "Pacifico"
                    }}
                  >
                    Market
                  </h1>
                </h1>
              </div>
              <div className="line" />
            </div>
            {/** HELLO WORLD... */}
            <div className="main-header-container center-alignment">
              <header>
                <h1>We made software for creatures living on Earth</h1>
              </header>
              <p>We do your work as our own</p>
            </div>
            {/** Hats OFF */}
          </div>
        </div>
      </div>
    </div>
  );
}
