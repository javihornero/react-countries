import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import { Moon } from "react-ionicons";
import { Link } from "react-router-dom";

const colors = { dark: "#fff", light: "#000" };

const Navbar = () => {
  const [moonColor, setMoonColor] = useState(colors.light);

  const changeTheme = () => {
    if (moonColor === colors.light) {
      setMoonColor(colors.dark);
      document.body.classList.add("dark");
    } else {
      setMoonColor(colors.light);
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className={classes.wrapper}>
      <header className={classes.Navbar}>
        <Link to="/">
          <h3>Where in the world?</h3>
        </Link>
        <button className={classes.ThemeSwitcher} onClick={changeTheme}>
          <Moon color={moonColor} />
          Dark mode
        </button>
      </header>
    </div>
  );
};

export default Navbar;
