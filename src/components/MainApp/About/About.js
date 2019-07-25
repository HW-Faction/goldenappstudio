import React from "react";
import "./About.css";
import "../../MainContent/SecondaryMain.css";
export default function About() {
  return (
    <div>
      <section class="main-signup-heading">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-12 py-3">
              <h1 class="latoBlack text-white heading">
                Leading the way to a better internet
              </h1>
              <p class="latoRegular text-white description">
                Our leadership team combines the best of business experience,
                industry prowess, and forward thinking.
                <br /> Together with our wider team, they help guide GoldenApp
                Studio Inc into the future to create a safer, simpler internet
                for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="leadership-section py-5 ">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-12 my-5">
              <h1 class="text-left latoBlack heading pt-3 pb-2">
                Our Leadership
              </h1>
              <p class="latoRegular description mb-5 pt-1">
                Together we are smarter than each of us. We disagree
                passionately, learn continuously, and commit relentlessly as we
                lead our team towards becoming the most preferred tech partner
                for our growing set of clients.
              </p>
              <div class="row mt-4">
                <div class="col-lg-4 col-sm-12 col-md-6 mb-4">
                  <div
                    class="card founders "
                    onclick="location.href='https://www.linkedin.com/in/muradakhter/'"
                    style={{ cursor: "pointer" }}
                  >
                    <div class="text-center">
                      <img
                        style={{ marginLeft: 12, width: 250, height: 200 }}
                        class="img-fluid px-5 pt-5 pb-0"
                        src="https://scontent.fdel13-1.fna.fbcdn.net/v/t1.0-9/26168397_2023638257873775_8812651868354436867_n.jpg?_nc_cat=103&_nc_oc=AQl-_YyMXf6YhB58BLZi95xHAS4l4KPKogWBmsmVVAW6HyZspttrGS625k9iHE--wdQ&_nc_ht=scontent.fdel13-1.fna&oh=b03cceb5a62ce26211650b8ea0c06fa9&oe=5DB2D081"
                        alt="Murad"
                      />
                    </div>
                    <div class="card-body text-center link">
                      <h5 class="latoRegular name">Ranbir Sharma</h5>
                      <p class="latoRegular designation">
                        Co-Founder, Chairman &amp; CTO
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12 col-md-6 mb-4">
                  <div class="card founders" style={{ cursor: "pointer" }}>
                    <div class="text-center">
                      <img
                        style={{ marginLeft: 12, width: 250, height: 200 }}
                        class="img-fluid px-5 pt-5 pb-0 text-center"
                        src="https://scontent.fdel13-1.fna.fbcdn.net/v/t1.0-9/26219635_2026224770948457_8779295547659615860_n.jpg?_nc_cat=109&_nc_oc=AQnqy9TUpawVEzVotoEIYoEedhVIF_F0WFdVL1nXNQiNpGi4NuvKd5FshPcowTh_qIw&_nc_ht=scontent.fdel13-1.fna&oh=36802fc72eac069bec67417588ef5b2c&oe=5DB019BB"
                        alt="Mannan"
                      />
                    </div>
                    <div class="card-body text-center link">
                      <h5 class="latoRegular name">Aman Kaushik</h5>
                      <p class="latoRegular designation">
                        Co-Founder &amp; CEO
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12 col-md-6 mb-4">
                  <div class="card founders" style={{ cursor: "pointer" }}>
                    <div class="text-center">
                      <img
                        style={{ marginLeft: 18, width: 250, height: 200 }}
                        class="img-fluid px-5 pt-5 pb-0"
                        src="https://scontent.fdel13-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/43604370_302515393667736_7542026949040799744_n.jpg?_nc_cat=106&_nc_oc=AQnpslqEfhs9DIHga4XiR0nBziwlqDiDKQDF0eZT0qd07YjO12OhjRtYLL0sEDCL0uU&_nc_ht=scontent.fdel13-1.fna&oh=3ede0ac2792ec35b8fc8cd69263ae0ce&oe=5DA23FCC"
                        alt="Mannan"
                      />
                    </div>
                    <div class="card-body text-center link">
                      <h5 class="latoRegular name">Pankaj Attri</h5>
                      <p class="latoRegular designation">
                        Chief Financial Officer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
}
