import React from "react";

function Universe() {
  return (
    <div className="container " style={{ padding: " 0 150px 30px 150px " }}>
      <div className="row text-center  p-5">
        <h2 style={{ fontSize: "2rem", lineHeight: "1.5", color: "#424242" }}>
          The Zerodha Universe
        </h2>
        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4  p-5 text-center">
          <img
            src="\media\images\zerodhaFundhouse.png"
            style={{ height: "55px" }}
          />
          <p
            className="mt-3"
            style={{
              color: "#9b9b9b",
              fontSize: "0.75rem",
              lineHeight: "20px",
            }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4  p-5   text-center">
          <img
            src="\media\images\sensibullLogo.svg"
            style={{ height: "55px", width: "90%" }}
          />
          <p
            className="mt-3"
            style={{
              color: "#9b9b9b",
              fontSize: "0.75rem",
              lineHeight: "20px",
            }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-5  text-center">
          <img src="\media\images\tijori.png" style={{ height: "55px" }} />
          <p
            className="mt-3"
            style={{
              color: "#9b9b9b",
              fontSize: "0.75rem",
              lineHeight: "20px",
            }}
          >
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4   p-5 text-center">
          <img src="media\images\streakLogo.png" style={{ height: "55px" }} />
          <p
            className="mt-3"
            style={{
              color: "#9b9b9b",
              fontSize: "0.75rem",
              lineHeight: "20px",
            }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4  p-5 text-center">
          <img
            src="media\images\smallcaseLogo.png"
            style={{ height: "55px" }}
          />
          <p
            className="mt-3"
            style={{
              color: "#9b9b9b",
              fontSize: "0.75rem",
              lineHeight: "20px",
            }}
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4  p-5 text-center">
          <img src="media\images\dittoLogo.png" style={{ height: "55px" }} />
          <p
            className="mt-3"
            style={{
              color: "#9b9b9b",
              fontSize: "0.75rem",
              lineHeight: "20px",
            }}
          >
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <button
          className="btn btn-primary fs-5 p-2  mb-3"
          style={{ width: "18%", margin: "auto" }}
        >
          Sign up For Free
        </button>
      </div>
    </div>
  );
}

export default Universe;
