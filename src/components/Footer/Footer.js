import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="footer" id="contact">
        {/* bottam bar  */}
        <footer class="footer-std footer-mentions">
          <div class="inner">
            <div class="horizontal-box">
              <div class="column-double">
                <p class="caption" style={{ fontSize: "25px" }}>
                  © 2019 GoldenApp Studio Inc. All rights reserved.
                </p>
                <p class="micro" style={{ fontSize: "15px" }}>
                  GoldenApp Studio and the GoldenApp Studio logo are trademarks
                  of GoldenApp Studio SAS, registered in the India, Australia,
                  USA &amp; UK.
                </p>
              </div>
              <p class="micro">
                <span class="micro-link">
                  <a style={{ fontSize: "18px" }}>Terms</a>
                </span>
                <span class="micro-link sep">
                  <a style={{ fontSize: "18px" }}>Privacy</a>
                </span>

                <span class="micro-link sep">
                  <a
                    class="js-privacy-settings-open"
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
