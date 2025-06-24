import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row p-5  mx-1">
        <div className="col-4 p-5">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted p-2">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 p-5">
          <div className="row text-center ">
            <div className="col border p-3">
              <h1 className="mb-4">$0</h1>
              <p> Free account opening</p>
            </div>
            <div className="col border p-3">
              <h1 className="mb-4">$20</h1>
              <p> Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
