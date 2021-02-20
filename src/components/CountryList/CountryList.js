import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard/CountryCard";
import classes from "./CountryList.module.scss";

const CountryList = ({ countries }) => {
  return (
    <div className={classes.CountryList}>
      {countries &&
        countries.map((country) => {
          return <CountryCard key={country.name} country={country} />;
        })}
    </div>
  );
};

export default CountryList;
