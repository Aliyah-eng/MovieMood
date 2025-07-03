import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./FormPageHeader.module.css";

function FormPageHeader() {
  const location = useLocation(); // ✅ Get current path

  return (
    <div className={classes.container}>
      <div className={classes.form_header}>
        <Link to="/" className={classes.sitename}>
          <h1>MovieMood</h1>
        </Link>
        <div className={classes.button}>
          <Link
            to="/signup"
            className={`${classes.Signup_nav_link} ${
              location.pathname === "/signup" ? classes.active : ""
            }`}
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className={`${classes.Signup_nav_link} ${
              location.pathname === "/login" ? classes.active : ""
            }`}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FormPageHeader;
