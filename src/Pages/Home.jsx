/* eslint-disable no-unused-vars */
import React from "react";
import TopNav from "../componets/TopNav";
import Featured from "../componets/Featured";
import Delivery from "../componets/Delivery";
import TopPicks from "../componets/TopPicks";
import Meal from "../componets/Meal";
import Categories from "../componets/Categories";
import NewsLetter from "../componets/NewsLetter";
import Footer from "../componets/Footer";

function Home() {
  return (
    <div>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default Home;