import React from "react";
import "./HEadFirst.css";
export default function HEadFirst() {
  return (
    <div>
      <section className="std-shared-module std-hero bkg-gradient-teal-skyblue features-hero">
        <div className="inner">
          <div className="row">
            <div className="content">
              <h1 className="title" style={{ marginTop: "150px" }}>
                We design, build and maintain the super product
              </h1>
              <div className="btn style-solid" style={{ marginTop: "38px" }}>
                <a className="el orange" href="/download">
                  Contact Us
                </a>
              </div>
              <div className="feature-hero-boxes" style={{ marginTop: "80px" }}>
                <a
                  href="#"
                  className="feature-hero-boxes-box"
                  name="Password storage &amp; autofill"
                  data-link-to="features-fill-personal-info"
                  data-slide-item="store-autofill"
                >
                  <img
                    width="30"
                    height="30"
                    className="image-icon"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0NFNUVBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxwYXRoIGQ9Ik0yNS40NTMgNS41NjhjMCAyLjg1Ni01LjYxIDUuMTctMTIuNTI4IDUuMTdTLjM5OCA4LjQyNC4zOTggNS41NjhjMC0yLjg1NCA1LjYxLTUuMTcgMTIuNTI3LTUuMTcgNi45MTggMCAxMi41MjggMi4zMTYgMTIuNTI4IDUuMTd6TTE0LjcxNSAxNS40NDRjLS42MzYuMDQzLTEuMjg5LjA2Ni0xLjk1Mi4wNjYtNi44MjggMC0xMi4zNjUtMi4zMTMtMTIuMzY1LTUuMTdNMTIuNzI2IDIxLjQ3NmMtNi44MDggMC0xMi4zMjgtMi4zMTQtMTIuMzI4LTUuMTciLz4KICAgICAgICA8cGF0aCBkPSJNMTIuNzI2IDI3LjQ0MWMtNi44MDggMC0xMi4zMjgtMi4zMDMtMTIuMzI4LTUuMTQ2VjUuNTY4TTI1LjQ1MyA1LjU2OHY3LjE1OE0xNi44MjEgMjcuNDA3aDkuNTR2LTYuNjA0aC05LjU0ek0yNC44ODIgMjAuODAzdi0yLjUyN2MwLS45MjQtLjM2OS0xLjc2LS45NjUtMi4zNjZhMy4yNjggMy4yNjggMCAwIDAtNC42NjMgMCAzLjM2MyAzLjM2MyAwIDAgMC0uOTY2IDIuMzY2djIuNTI3Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                    alt="Password storage &amp; autofill"
                  />
                  <span className="box-text">Android App Development</span>
                  <span className="box-arrow" />
                </a>
                <a
                  href="#"
                  className="feature-hero-boxes-box"
                  name="Secure notes &amp; documents"
                  data-link-to="features-fill-personal-info"
                  data-slide-item="secure-docs"
                >
                  <img
                    width="20"
                    height="25"
                    className="image-icon"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDIwIDI1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0NFNUVBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxwYXRoIGQ9Ik0xMC44MiAxNC4xNjd2LTMuMzM0SDkuMTUxIi8+CiAgICAgICAgPHBhdGggZD0iTTE0LjE4MS44MzNMOS42MTMuODRsLTMuMTkuMDA4LTMuMTkuMDA3TC44NDguODMzbC4wMDYgNi4yNzItLjAyMSA0LjU3Ny4wMDggNi4yNDEuMDA3IDYuMjQ0SDE5LjE4VjYuNzE4eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                    alt="Secure notes &amp; documents"
                  />
                  <span className="box-text">Android App Maintaing</span>
                  <span className="box-arrow" />
                </a>
                <a
                  href="#"
                  className="feature-hero-boxes-box"
                  name="Breach alerts &amp; monitoring"
                  data-link-to="monitoring"
                >
                  <img
                    width="25"
                    height="30"
                    className="image-icon"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDI1IDMwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0NFNUVBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxwYXRoIGQ9Ik0yMi4zNjYgMjMuNjk3YTEuOSAxLjkgMCAwIDAgMS45MDEtMS45MDFjMC0zLjgwNC0zLjUxLTEuNjEtMy44MDItMTEuNDEtLjA3Mi0yLjM3Ny0uNzc0LTUuNTk0LTIuODE3LTcuNjEtMS4xNTktMS4xNC0yLjcyNi0xLjg5OC00Ljc5LTEuODk4LTIuMDcgMC0zLjY0Ljc1OC00LjggMS45LTIuMDM0IDIuMDEtMi43MzQgNS4yMTItMi44MDYgNy42MDgtLjI5MyA5LjgtMy44MDQgNy42MDYtMy44MDQgMTEuNDEgMCAxLjA1Ljg1MiAxLjkgMS45MDMgMS45aDE5LjAxNXpNMTYuMDEzIDI3LjI4NmEzLjc2NiAzLjc2NiAwIDAgMS0uNDY1LjU2MiAzLjc0NyAzLjc0NyAwIDAgMS0xLjIxLjgxNiAzLjczNCAzLjczNCAwIDAgMS0xLjQ4LjI5OCAzLjkzIDMuOTMgMCAwIDEtLjc2NS0uMDc3IDMuNzEyIDMuNzEyIDAgMCAxLTEuMzYtLjU3MiAzLjY3NSAzLjY3NSAwIDAgMS0uNTY0LS40NjUgMy43NjYgMy43NjYgMCAwIDEtLjQ2NS0uNTYyIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                    alt="Breach alerts &amp; monitoring"
                  />
                  <span className="box-text">Web Development</span>
                  <span className="box-arrow" />
                </a>
                <a
                  href="#"
                  className="feature-hero-boxes-box"
                  name="Secure sharing &amp; contacts"
                  data-link-to="sharing-emergency"
                >
                  <img
                    width="29"
                    height="29"
                    className="image-icon"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIyOSIgdmlld0JveD0iMCAwIDI5IDI5Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTUiLz4KICAgICAgICA8ZyBzdHJva2U9IiNDQ0U1RUEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNy43MjggMjIuNjg3VjIwLjI3OWMwLS42MzctLjA4LTEuMjA1LS4yMjUtMS43MTNhNS4wODYgNS4wODYgMCAwIDAtLjYxMy0xLjM1OCA1LjczIDUuNzMgMCAwIDAtLjkwMS0xLjA3MyA4LjUgOC41IDAgMCAwLTEuMDk2LS44NjNjLTEuNjI4LTEuMTQ2LTMuODYtMS4yNS0zLjg5Mi0yLjY2OC0uMDQ1LS4yMTQuMDI1LTEuNDQyIDAtMS42OTItLjAyNy0uMjUzIDEuNjg2LTEuNjcgMS42ODYtMS42N1Y1Ljg4M2MwLS44MzItLjEwOC0xLjU2My0uMzA4LTIuMTkyYTQuMzc2IDQuMzc2IDAgMCAwLS44NjItMS41NzYgMy41NyAzLjU3IDAgMCAwLTEuMzI3LS45NTQgNC40MjkgNC40MjkgMCAwIDAtMS43MDQtLjMyYy0uNjIyIDAtMS4xOTUuMTA4LTEuNzA2LjMyTTcuNTYyIDI3LjcyOGgxNS4xMjV2LTIuNTkzYzAtMi43NDYtMS4yOS00LjA4OC0yLjgzNS01LjIwNi0xLjU0My0xLjExNy00LjU1LTEuMTcxLTUuNTY4LTIuMjg0LS4yNjQtLjI4OS0uMzM2LTIuNTg2LS4zMzYtMi41ODZsMi4wMTctMS44MDhWOS4yNDNjMC0zLjU4MS0xLjcxOC01LjA0Mi00LjIwMS01LjA0Mi0yLjQ4NiAwLTQuMjAyIDEuNDYtNC4yMDIgNS4wNDJ2NC4wMDhsMi4wMTcgMS44MDhzLS4yMjUgMi40NjQtLjMzNiAyLjU4NmMtMS4wMzQgMS4xMjgtNC4wMzggMS4xNzgtNS41OCAyLjI5LTEuNTQgMS4xMTItMi44MjMgMi40NDQtMi44MjMgNS4ydjIuNTkzaDYuNzIyeiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    alt="Secure sharing &amp; contacts"
                  />
                  <span className="box-text">Web DevOps</span>
                  <span className="box-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
