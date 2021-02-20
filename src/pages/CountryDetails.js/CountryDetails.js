import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "../../axios-conf";
import Spinner from "../../components/Spinner/Spinner";
import classes from "./CountryDetails.module.scss";

const CountryDetails = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { countryName } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    axios
      .get(`/name/${countryName}`)
      .then((res) => {
        setCountry(res.data[0]);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [countryName]);

  let content = null;

  if (isLoading) {
    content = <Spinner />;
  } else if (error) {
    content = <div className={classes.Error}>Country not found</div>;
  } else {
    content = (
      <div className={classes.Wrapper}>
        <div className={classes.Wrapper__Item}>
          <img src={country.flag} alt="country flag" />
        </div>
        <div className={classes.Wrapper__Item}>
          <h2>{country.name}</h2>
          <div className={classes.Listing}>
            <div>
              <ul>
                <li>
                  Native name:
                  <span className={classes.Detail}> {country.nativeName}</span>
                </li>
                <li>
                  Population:
                  <span className={classes.Detail}>
                    {" "}
                    {country.population.toLocaleString("en")}
                  </span>
                </li>
                <li>
                  Region:
                  <span className={classes.Detail}> {country.region}</span>
                </li>
                <li>
                  Sub Region:
                  <span className={classes.Detail}> {country.subregion}</span>
                </li>
                <li>
                  Capital:
                  <span className={classes.Detail}> {country.capital}</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  Top Level Domain:{" "}
                  <span className={classes.Detail}> {country.region}</span>
                </li>
                <li>
                  Currencies:{" "}
                  <span className={classes.Detail}>
                    {" "}
                    {country.currencies.map((c) => c.name).join(", ")}
                  </span>
                </li>
                <li>
                  Languages:{" "}
                  <span className={classes.Detail}>
                    {" "}
                    {country.languages.map((lang) => lang.name).join(", ")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.Surroundings}>
            Border Countries:
            {country.border}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <button className={classes.BackButton} onClick={goBack}>
        <i className="fa fa-arrow-left"></i> Back
      </button>
      {content}
    </>
  );
};

export default CountryDetails;
