import React from "react";
import { Link } from "react-router-dom";
import LandingCard from "../UI/LandingCard/LandingCard";
import video from "../../assets/video.mp4";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <video id="bg-video" src={video} autoPlay loop muted />
        <h4>Realm of Recipes</h4>
        <p>
          Recipe app - Final task for React Basics course for REACT23K group
        </p>
        <Link to="/recipes">Browse recipes</Link>
      </div>
      <h2 id="landingCards_heading">Looking for recipes?</h2>
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
