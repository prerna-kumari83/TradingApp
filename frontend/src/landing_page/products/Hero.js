import React from "react";
function Hero() {
  return (
    <div className="container mt-5 border-bottom mb-5">
      <div className="row text-center">
        <h1
          className="mt-5 mb-3"
          style={{
            fontSize: "2.75rem",
            color: "#424242",
          }}
        >
          Zerodha Products
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            fontWeight: "400",
          }}
        >
          Sleek, modern, and intuitive trading platforms
        </p>

        <p
          className="mb-5"
          style={{ fontSize: "1rem", lineHeight: "1.8", marginBottom: "15px" }}
        >
          Check out our{" "}
          <a href="/" style={{ textDecoration: "none" }} className="mb-5">
            investment offerings{" "}
            <i class="fa fa-long-arrow-right " aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
