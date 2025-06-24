import React from "react";
function Hero() {
  return (
    <section className="container-fluid p-5 " id="supportHero">
      <div className="mt-3" id="supportWrapper">
        <a
          href="/"
          style={{
            textDecoration: "none",
            fontSize: "1.275rem",
            fontWeight: "500",
          }}
        >
          Support Portal
        </a>
        <a
          href="/"
          style={{
            fontSize: "1.1rem",
            fontWeight: "400",
            borderBottom: "1px solid #fff",
            textDecoration: "none",
          }}
        >
          Track tickets
        </a>
      </div>
      <div className="row ">
        <div className="col-6 " id="supportherocol">
          <h4 style={{ lineHeight: "1.5" }}>
            Search for an answer or browse help topics to create a ticket
          </h4>

          <input
            className="mt-4  mb-4 p-3"
            placeholder="Eg:how do i activate F&O ,why is my order getting rejected ..."
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "3px",
              border: "none",
              fontSize: "17px",
            }}
          />
          <div>
            <a
              href="/"
              style={{
                color: "white",
                borderBottom: "1px solid #fff",
                textDecoration: "none",
                fontSize: "1.11rem",
                fontWeight: "400",
              }}
            >
              Track account opening
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="/"
              style={{
                color: "white",
                borderBottom: "1px solid #fff",
                textDecoration: "none",
                fontSize: "1.11rem",
                fontWeight: "400",
              }}
            >
              Track segment activation
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="/"
              style={{
                color: "white",
                borderBottom: "1px solid #fff",
                textDecoration: "none",
                fontSize: "1.11rem",
                fontWeight: "400",
              }}
            >
              Intraday margins
            </a>
            &nbsp;&nbsp;&nbsp;
            <br />
            <a
              className="pt-2"
              href="/"
              style={{
                color: "white",
                borderBottom: "1px solid #fff",
                textDecoration: "none",
                fontSize: "1.11rem",
                fontWeight: "400",
              }}
            >
              Kite user manual
            </a>
          </div>
        </div>

        <div
          className="col-4 mt-4 "
          style={{ padding: "30px 100px 50px 2px", lineHeight: "1.7" }}
        >
          <h4>Featured</h4>
          <ol>
            <li>
              <a href="/" style={{ color: "white", lineHeight: "2.1" }}>
                Latest Intraday leverages and Square-off timings
              </a>
            </li>
            <br />
            <li>
              <a href="/" style={{ color: "white" }}>
                Surveillance measure on scrips - June 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
