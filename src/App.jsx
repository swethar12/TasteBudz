/* eslint-disable no-unused-vars */
import React from "react";
import Featured from "./componets/Featured";
import TopNav from "./componets/TopNav";
import Delivery from "./componets/Delivery";
import 'tailwindcss/tailwind.css'
import TopPicks from "./componets/TopPicks";
import Meal from "./componets/Meal";
import Categories from "./componets/Categories";
import NewsLetter from "./componets/NewsLetter";
import Footer from "./componets/Footer";
import {Link, Route,Routes } from "react-router-dom";
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import Deliver from "./Pages/Deliver";
import Help from "./Pages/Help";
import MyFavourites from "./Pages/MyFavourites";
import MyWallet from "./Pages/MyWallet";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import AboutUs from "./Pages/About";
import MyCart from "./Pages/MyCart";
import Service from "./Pages/Service";

function App() {

  return (
      <>
      <TopNav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/delivery" element={<Deliver/>}/>
        <Route path="/myFavourites" element={<MyFavourites/>}/>
        <Route path="/myWallet" element={<MyWallet/>}/>
        <Route path="/help" element={<Contact/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path='/MyCart' element={<MyCart/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
      
      </>
  )
}

export default App
