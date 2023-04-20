import React from "react";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Globe from "../components/Globe";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Platform from "../components/Platform";
import Reason from "../components/Reason";
import GlobalScale from "../components/GlobalScale";
import Sponsors from "../components/Sponsors";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Banner />
      <Sponsors />
      <Platform />
      <Reason />
      <Globe />
      <GetStarted />
      <GlobalScale />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
