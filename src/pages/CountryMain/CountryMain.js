import React, { useEffect, useState } from "react";
import CountryList from "../../components/CountryList/CountryList";
import classes from "./CountryMain.module.scss";
import axios from "../../axios-conf";
import Spinner from "../../components/Spinner/Spinner";

const CountryMain = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("Europe");
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountries = (name, region) => {
    setIsLoading(true);
    let url = `/region/${region}?fields=name;flag;population;region;capital;numericCode`;
    axios
      .get(url)
      .then((res) => {
        const newCountries = res.data.filter((country) => {
          const regexp = new RegExp(name.trim(), "gi");
          return regexp.test(country.name);
        });
        setCountries(newCountries);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const waitTimeout = setTimeout(() => {
      fetchCountries(search, region);
    }, 500);
    return () => {
      clearTimeout(waitTimeout);
    };
  }, [search,region]);

  const handleInputChange = (value) => {
    setSearch(value);
  };

  const handleSelectChange = (value) => {
    setRegion(value);
  };

  let content = null;
  if (isLoading) {
    content = <Spinner />;
  } else if (countries.length <= 0) {
    content = `There are no countries that contain "${search}" in ${region}.`;
  } else {
    content = <CountryList countries={countries} />;
  }

  return (
    <>
      <div className={classes.Filter}>
        <div className={classes.SearchWrapper}>
          <i className="fa fa-search"></i>
          <input
            placeholder="Search for a country ..."
            type="text"
            value={search}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <select
          name="continent"
          value={region}
          onChange={(e) => handleSelectChange(e.target.value)}
        >
          <option value="Europe">Europe</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      {content}
    </>
  );
};

export default CountryMain;
