import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row text-center mt-5  " style={{}}>
        <h1>People</h1>
      </div>
      <div className="row " style={{ padding: "0 100px 0 100px" }}>
        <div className="col-6 text-center mt-5 p-5  ">
          <img
            src="media\images\nithinKamath.jpg"
            alt="founder"
            style={{ borderRadius: "50%", width: "50%", color: "#424242" }}
          />

          <h5
            className="mt-5 mb-3"
            style={{ fontSize: "1.25rem", fontWeight: "400" }}
          >
            Nithin Kamath
          </h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col-6 mt-5 mb-5 p-5" style={{ textDecoration: "none" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              Homepage{" "}
            </a>{" "}
            /
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              TradingQnA{" "}
            </a>
            /
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
