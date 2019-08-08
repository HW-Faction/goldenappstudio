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
                  style={{ width: 180, height: 200, marginLeft: 10 }}
                  src="https://scontent.fdel13-1.fna.fbcdn.net/v/t1.0-9/67813321_2403606083210322_9198366080127467520_n.jpg?_nc_cat=108&_nc_oc=AQkiv5znWrjEtRtHS7X8nD7aGQdMRKTwACWpZBxhaVM3377LMjW87UjhsebvnKxmzmo&_nc_ht=scontent.fdel13-1.fna&oh=4ea05fe39f8aad97ca66bb0f520cd258&oe=5DCF76A4"
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
                  style={{ width: "200px", height: "200px" }}
                  src="https://scontent.fdel13-1.fna.fbcdn.net/v/t1.0-9/67686910_2396505037253760_3159845188134764544_n.jpg?_nc_cat=101&_nc_oc=AQntDEbnUONoszYNYlnsTQ3-MK8tSVTQSzK2_qeL07w2PcbjDc8ivFdhk3RzSbIHnwc&_nc_ht=scontent.fdel13-1.fna&oh=def0f5559f2cfb7cccd416ea9e2ba4e2&oe=5DB1FDDF"
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
                  style={{ width: 180, height: 200, marginLeft: 10 }}
                  src="https://scontent.fdel13-1.fna.fbcdn.net/v/t1.0-9/67753140_2403606119876985_2414383760565862400_n.jpg?_nc_cat=109&_nc_oc=AQl9gJ2dIWU9D57iOkU4VjqbXCl5MtXX7sLmQXFmukth67wclLT-sPHzuytK_kshH5w&_nc_ht=scontent.fdel13-1.fna&oh=759aeabdee91ca396db76a2f1864e9ac&oe=5DE44F1B"
                  alt="Card image cap"
                />
                <h5
                  className="card-title text-center"
                  style={{ marginTop: 10 }}
                >
                  <strong>Pankaj Attri</strong>
                </h5>
                <p className="card-text text-center">Chief Financial Officer</p>
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
