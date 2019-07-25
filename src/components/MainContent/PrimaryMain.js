import React from "react";
import "./PrimaryMain.css";
export default function PrimaryMain() {
  return (
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
            <div class="btn-wrap">
              <a
                class="btn-md"
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
                srcset="https://www.bluehost.com/static/img/special/home/screens-1312.png"
              />
              <source
                media="(min-width: 768px)"
                srcset="https://www.bluehost.com/static/img/special/home/screens-1312.png"
              />
              <source srcset="https://www.bluehost.com/static/img/special/home/screens-800.png" />
              <img
                src="https://www.bluehost.com/static/img/special/home/screens-1312.png"
                alt="Peak Managed WordPress Hosting Performance"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
