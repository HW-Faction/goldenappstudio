import React from "react";
import "./SecondaryMain.css";
import "./PrimaryMain.css";

import PrimaryMain from "./PrimaryMain";

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
              <p className="description" style={{ color: "#eee" }}>
                GoldenApp Studio is the company-wide solution for app
                development that everyone will actually love using.
              </p>
              <div className="btn style-outline">
                <a className="el white" id="BUTTON1">
                  Explore GoldenApp Studio Business
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** Primary Main */}
      <PrimaryMain />
      <section>
        <div id="LEADERS" />
      </section>

      {/** We are Leaders babyyyyyy... */}
      <section className="leadership-section py-5 " style={{ marginTop: 40 }}>
        <h1 className="text-left latoBlack heading pt-3 pb-2 text-center">
          Our Leadership
        </h1>
        <p
          className="latoRegular description mb-5 pt-1 text-center"
          style={{ marginLeft: 50, marginRight: 50 }}
        >
          Together we are smarter than each of us. We disagree passionately,
          learn continuously, and commit relentlessly as we lead our team
          towards becoming the most preferred tech partner for our growing set
          of clients.
        </p>
        <div className="row">
          <div className="col-sm-4" id="ANDCARD">
            <div
              className="card"
              style={{ marginLeft: 180, width: 240 }}
              id="CARD6"
            >
              <div className="card-body">
                <img
                  className="card-img-top text-center"
                  style={{ width: 200, height: 200 }}
                  src="https://scontent.fdel13-1.fna.fbcdn.net/v/t1.0-9/26168397_2023638257873775_8812651868354436867_n.jpg?_nc_cat=103&_nc_oc=AQl-_YyMXf6YhB58BLZi95xHAS4l4KPKogWBmsmVVAW6HyZspttrGS625k9iHE--wdQ&_nc_ht=scontent.fdel13-1.fna&oh=b03cceb5a62ce26211650b8ea0c06fa9&oe=5DB2D081"
                  alt="Card image cap"
                />
                <h5
                  className="card-title text-center"
                  style={{ marginTop: 10 }}
                >
                  <strong>Ranbir Sharma</strong>
                </h5>
                <p className="card-text text-center">
                  Co-Founder &amp; Chairman
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ marginLeft: 95, width: 240 }}
              id="CARD6"
            >
              <div className="card-body">
                <img
                  className="card-img-top text-center"
                  style={{ width: 200, height: 200 }}
                  src="https://github.com/HW-Faction/Auto-Email-Sender/blob/master/IMG-20190727-WA0027%20(copy).jpg?raw=true"
                  alt="Card image cap"
                />
                <h5
                  className="card-title text-center"
                  style={{ marginTop: 10 }}
                >
                  <strong>Aman Kaushik</strong>
                </h5>
                <p className="card-text text-center">Co-Founder &amp; CEO</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card" style={{ width: 240 }} id="CARD6">
              <div className="card-body">
                <img
                  className="card-img-top text-center"
                  style={{ width: 200, height: 200 }}
                  src="https://scontent.fdel13-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/43604370_302515393667736_7542026949040799744_n.jpg?_nc_cat=106&_nc_oc=AQnpslqEfhs9DIHga4XiR0nBziwlqDiDKQDF0eZT0qd07YjO12OhjRtYLL0sEDCL0uU&_nc_ht=scontent.fdel13-1.fna&oh=3ede0ac2792ec35b8fc8cd69263ae0ce&oe=5DA23FCC"
                  alt="Card image cap"
                />
                <h5
                  className="card-title text-center"
                  style={{ marginTop: 10 }}
                >
                  <strong>Pankaj Attri</strong>
                </h5>
                <p className="card-text text-center">Chief Operating Officer</p>
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
              backgroundColor: "#fff",
              backgroundSize: "cover",
              color: "#222",
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
                  borderTop: "1px solid #000",
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
                  border: "4px solid #000",
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
                  <h1
                    style={{
                      fontFamily: "Pacifico"
                    }}
                  >
                    Inc.
                  </h1>
                </h1>
              </div>

              <div className="line" style={{ borderTop: "1px solid #000" }} />
            </div>
            {/** HELLO WORLD... */}
            <div className="main-header-container center-alignment">
              <header>
                <h1
                  id="Earth"
                  style={{
                    fontStyle: "italic"
                  }}
                >
                  "We made software for creatures living on Earth."
                </h1>
              </header>
            </div>
            {/** Get in touch */}
          </div>
        </div>
      </div>

      {/** What WE DO to SUrviVE */}
    </div>
  );
}
