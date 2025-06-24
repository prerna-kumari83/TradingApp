import React from "react";
import OpenAccount from "../OpenAccount";
function Hero() {
  return (
    <div className="container p-5 ">
      <div className="row p-5 mt-2 text-center">
        <h1
          className="mb-2"
          style={{
            fontSize: "2.75rem",
            lineHeight: "1.25",
            fontWeight: "500",
            color: "#424242",
          }}
        >
          {" "}
          Charges
        </h1>
        <p
          className="mb-5"
          style={{
            fontSize: "1.25rem",
            fontWeight: "400",
            color: "#9b9b9b",
          }}
        >
          List of all charges and taxes
        </p>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-4 text-center">
          <img style={{ width: "70%" }} src="\media\images\pricing0.svg" />
          <h2
            className="mt-4 mb-3"
            style={{
              fontSize: "1.75rem",
              lineHeight: "1.6",
              fontWeight: "500",
              color: "#424242",
            }}
          >
            Free equity delivery
          </h2>
          <p
            className=""
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              fontWeight: "400",
              color: "#666",
            }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center">
          <img
            style={{ width: "70%" }}
            src="\media\images\intradayTrades.svg"
          />
          <h2
            className="mt-4 mb-3"
            style={{
              fontSize: "1.75rem",
              lineHeight: "1.6",
              fontWeight: "500",
              color: "#424242",
            }}
          >
            Intraday and F&O trades
          </h2>
          <p
            className=""
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              fontWeight: "400",
              color: "#666",
            }}
          >
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center">
          <img style={{ width: "70%" }} src="\media\images\pricing0.svg" />
          <h2
            className=" mt-4 mb-3"
            style={{
              fontSize: "1.75rem",
              lineHeight: "1.6",
              fontWeight: "500",
              color: "#424242",
            }}
          >
            Free direct MF
          </h2>
          <p
            className=""
            style={{
              fontSize: "1rem",
              lineHeight: "1.8",
              fontWeight: "400",
              color: "#666",
            }}
          >
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
