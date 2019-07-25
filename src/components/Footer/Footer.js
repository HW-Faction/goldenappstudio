import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="footer" id="contact">
        {/* bottam bar  */}
        <footer className="footer-std footer-mentions">
          <div className="inner">
            <div className="horizontal-box">
              <div className="column-double">
                <p className="caption" id="One" style={{ fontSize: "25px" }}>
                  © 2019 GoldenApp Studio Inc. All rights reserved.
                </p>
                <p className="micro" id="Two" style={{ fontSize: "15px" }}>
                  All assets are trademarks of GoldenApp Studio SAS, registered
                  in the India, Australia, USA &amp; UK.
                </p>
              </div>
              <p className="micro">
                <span className="micro-link">
                  <a style={{ fontSize: "18px" }}>Terms</a>
                </span>
                <span className="micro-link sep">
                  <a style={{ fontSize: "18px" }}>Privacy</a>
                </span>

                <span className="micro-link sep">
                  <a
                    className="js-privacy-settings-open"
                    style={{ fontSize: "18px" }}
                  >
                    Cookie Preferences
                  </a>
                </span>
              </p>
            </div>
          </div>
        </footer>
      </footer>
    </div>
  );
}
