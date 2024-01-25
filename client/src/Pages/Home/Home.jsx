import React from "react";
import Picture from "../../Components/Picture/Picture";
import Service from "../../Components/OurServices/Service";
import Cards from "../../Components/Cards/Cards";
import OurServices from "../../Components/Our/OurServices";
import Upcoming from "../../Components/UpcomingEvents/Upcoming";

const Home = () => {
  return (
    <div>
      <Picture />
      <Cards />
      <OurServices/>
      <Service />
      <Upcoming/>
    </div>
  );
};

export default Home;
