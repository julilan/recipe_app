import React from "react";
import { Link } from "react-router-dom";
import classes from "./LandingCard.module.css";

const LandingCard = ({ heading, info, linktext, link }) => {
  const isExternalLink = link.startsWith("http");

  return (
    <div className={classes.landing_card}>
      <h3>{heading}</h3>
      <p>{info}</p>
      {isExternalLink ? (
        <a href={link} target="_blank" rel="noreferrer">
          {linktext}
        </a>
      ) : (
        <Link to={link}>{linktext}</Link>
      )}
    </div>
  );
};

export default LandingCard;
