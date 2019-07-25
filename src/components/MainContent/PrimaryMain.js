import React from "react";
import "./PrimaryMain.css";
export default function PrimaryMain() {
  return (
    <div>
      <div style={{ backgroundColor: "#fff" }} className="mt-4 mb-4">
        <div className="container ">
          <div
            className="row"
            style={{
              alignSelf: "center",
              alignContent: "center",
              alignItems: "center"
            }}
          >
            <div className="col">
              <h2 style={{ color: "#666" }}>Grow your business with us</h2>
              <p>
                Did you know, by digitalise the system, the growth rate become
                30%+ ?
              </p>
              <div className="btn-wrap">
                <a
                  className="btn-md"
                  href="/wordpress/managed-hosting"
                  data-element-type="link"
                  data-element-label="learn_about_it_introducing_wp_pro"
                >
                  Learn About It
                </a>
              </div>
            </div>

            <div className="col">
              <picture>
                <source
                  media="(min-width: 992px)"
                  srcSet="https://www.bluehost.com/static/img/special/home/screens-1312.png"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="https://www.bluehost.com/static/img/special/home/screens-1312.png"
                />
                <source srcSet="https://www.bluehost.com/static/img/special/home/screens-800.png" />
                <img
                  src="https://www.bluehost.com/static/img/special/home/screens-1312.png"
                  alt="Peak Managed WordPress Hosting Performance"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

      <section class="std-shared-module std-three-boxes about-home-three-boxes-white">
        <div class="inner bkg-white">
          <div class="row" style={{ alignItems: "center" }}>
            <div class="content-header">
              <h2 class="title" style={{ textAlign: "center" }}>
                Be part of the world shifting toward digitalisation
              </h2>
            </div>
          </div>
          <div class="row">
            <div
              class="content-first"
              style={{ margin: 0, padding: 0, marginBottom: 45 }}
            >
              <h3 class="title-first">
                <span id="countUpAnim1">2.7</span> Million
              </h3>
              <p class="description-first">
                apps on <strong>Play Store</strong>
              </p>
            </div>
            <div class="content-second" style={{ margin: 0, padding: 0 }}>
              <h3 class="title-second">
                <span id="countUpAnim2">330.6</span> Million
              </h3>
              <p class="description-second">domain registered worldwide</p>
            </div>
            <div class="content-third" style={{ margin: 0, padding: 0 }}>
              <h3 class="title-third">
                <span id="countUpAnim3">3.8</span> Billion
              </h3>
              <p class="description-third">
                searches on <strong>Google</strong> per day
              </p>
            </div>
          </div>
          <div class="row" />
        </div>
      </section>

      <section className="std-shared-module std-three-boxes about-home-three-boxes-teal">
        <div className="inner bkg-teal">
          <div className="row">
            <div className="content-header">
              <h2 className="title">We always keep three things in mind:</h2>
            </div>
          </div>

          <div className="row">
            <div className="content-first" style={{ margin: 0, padding: 0 }}>
              <h3 className="title-first">Simplicity</h3>
              <p className="description-first">
                Our goal is to integrate seamlessly into your life.
              </p>
            </div>
            <div className="content-second" style={{ margin: 0, padding: 0 }}>
              <h3 className="title-second">Universality</h3>
              <p className="description-second">
                We work everywhere and for everyone
              </p>
            </div>
            <div className="content-third" style={{ margin: 0, padding: 0 }}>
              <h3 className="title-third">Privacy</h3>
              <p className="description-third">
                Your client's data are accessible to you and only you.
              </p>
            </div>
          </div>
          <div className="row" />
        </div>
      </section>
    </div>
  );
}
