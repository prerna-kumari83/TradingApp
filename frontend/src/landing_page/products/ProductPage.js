import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media\images\kite.png"
        topic="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      <RightSection
        imageUrl="media\images\console.png"
        topic="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnmore=""
      />
      <LeftSection
        imageUrl="\media\images\coin.png"
        topic="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      <RightSection
        imageUrl="media\images\kiteconnect.png"
        topic="Kite Connect API"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnmore=""
      />
      <LeftSection
        imageUrl="media\images\varsity.png"
        topic="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      <p
        className="text-center mt-5  p-5"
        style={{
          fontSize: "1.25rem",
          fontWeight: "400",
        }}
      >
        Want to know more about our technology stack? Check out the{" "}
        <a href="/" style={{ textDecoration: "none" }}>
          {" "}
          Zerodha.tech{" "}
        </a>
        blog.
      </p>

      <Universe />
    </>
  );
}

export default ProductPage;
