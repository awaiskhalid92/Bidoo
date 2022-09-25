import React from "react";
import FooterCard from "../component/FooterCard";
import Footer from "../component/Footer";
import Navbar from "../component/Header";
import Header from "../component/Header";
import HeaderPic from "../component/HeaderPic";
import TrendingProducts from "../component/TrendingProducts";
import Login from "./auth/Login";

const Home = () => {
  return (
    <>
      <Header  />
      <HeaderPic/>
      <TrendingProducts/>
      <FooterCard/>
      <Footer/>
    </>
  );
};


export default Home;
