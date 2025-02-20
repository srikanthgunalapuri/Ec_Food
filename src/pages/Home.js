// import React, {useState} from 'react'
// import Header from '../components/Header';
// import NavBar from '../components/NavBar';
// import Sidebar from '../components/Sidebar';
// import Hero from '../components/Hero';
// import Offers from '../components/Offers';
// import Categories from '../components/Category';
// import LatestProducts from '../components/LatestProducts';
// import DealOfTheDay from '../components/DealOfTheDay';
// import Footer from '../components/Footer';
// import Newslatest from '../components/Newslatest';
// import Contact from '../components/Contact';

// const Home = () => {


//     const [isSidebarActive, setIsSidebarActive] = useState(false);

//     const openSidebar = () => setIsSidebarActive(true);
//     const closeSidebar = () => setIsSidebarActive(false);


//   return (

//    <>
//     <Header />
//    {/* Pass the openSidebar function to NavBar */}
//    <NavBar openSidebar={openSidebar} />

// {/* Pass state and closeSidebar function to Sidebar */}
// <Sidebar
//   isSidebarActive={isSidebarActive}
//   closeSidebar={closeSidebar}
// /> 
// <Hero />
// <Offers />
// <Categories />
// <LatestProducts />
// <DealOfTheDay />

// <Contact /> 
// <Newslatest />
// <Footer />  

//  </>
//   )
// }

// export default Home


import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Categories from "../components/Category";
import LatestProducts from "../components/LatestProducts";
import DealOfTheDay from "../components/DealOfTheDay";
import Footer from "../components/Footer";
import Newslatest from "../components/Newslatest";
import Contact from "../components/Contact";
import { ContactContext } from "../ContactContext";


const Home = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const { tableData } = useContext(ContactContext);

  const location = useLocation();

  // Retrieve the index from the navigation state
  const editIndex = location.state?.index;

  // Retrieve the data for the selected contact if editing
  const editData = editIndex !== undefined ? tableData[editIndex] : null;

  const openSidebar = () => setIsSidebarActive(true);
  const closeSidebar = () => setIsSidebarActive(false);

  return (
    <>
    
      <Header />
      {/* Pass the openSidebar function to NavBar */}
      <NavBar openSidebar={openSidebar} />

      {/* Pass state and closeSidebar function to Sidebar */}
      <Sidebar isSidebarActive={isSidebarActive} closeSidebar={closeSidebar} />
      <Hero />
      <Offers />
      <Categories />
      {/* Display Latest Products */}
      <LatestProducts  />
      <DealOfTheDay />

      {/* Pass edit data to Contact for prefilling */}
      <Contact editData={editData} editIndex={editIndex} />

      <Newslatest />
      <Footer />
    </>
  );
};

export default Home;
