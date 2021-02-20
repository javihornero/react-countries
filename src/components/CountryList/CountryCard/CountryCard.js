import React from "react";
import { Link } from "react-router-dom";

import classes from "./CountryCard.module.scss";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/${country.name}`}>
      <div className={classes.CountryCard}>
        <img src={country.flag} alt="country flag" />
        <div className={classes.Details}>
          <h4>{country.name}</h4>
          <ul>
            <li>
              Population: <span>{country.population.toLocaleString("en")}</span>
            </li>
            <li>
              Region: <span>{country.region.toLocaleString("en")}</span>
            </li>
            <li>
              Capital: <span>{country.capital.toLocaleString("en")}</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
