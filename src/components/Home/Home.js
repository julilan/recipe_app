import React from "react";
import Banner from "../Banner/Banner";
import LandingCard from "../UI/LandingCard/LandingCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <h2>Looking for recipes?</h2>
      <div className="card_wrapper">
        <LandingCard
          heading="Browse recipes"
          info="Find your favourites in this collection. You can search recipes based on or country"
          link="/recipes"
          linktext="All recipes"
        />
        <LandingCard
          heading="Add recipes"
          info="Recipe from your country is missing? No worries, add one!"
          link="/add-new"
          linktext="Add recipes"
        />
        <LandingCard
          heading="Want to know more about our projects?"
          info="Visit our programme homepage"
          link="https://en.bc.fi/qualifications/full-stack-web-developer-program/"
          linktext="Business College Helsinki homepage"
        />
      </div>
    </div>
  );
};

export default Home;
