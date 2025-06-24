import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <h1 className="mt-4 fs-2 mb-5" style={{ fontSize: "46px" }}>
          Open a Zerodha account
        </h1>
        <p className="mt" style={{ fontSize: "20px" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary fs-5 p-2 mt-4 mb-5   "
          style={{ width: "18%", margin: "auto" }}
        >
          Sign up For Free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
