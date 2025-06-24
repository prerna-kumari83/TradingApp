import React from "react";
import Awards from "./Awards";
import Education from "./Education";
import Pricing from "./Pricing";
import Stats from "./Stats";

import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import Hero from "./Hero";

function HomePage() {
  return (
    <>
      <Hero />

      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
