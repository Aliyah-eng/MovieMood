import React, { useState } from "react";
import classes from "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "", // Username or Email
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { identifier, password } = formData;

    if (!identifier || !password) {
      setError("Both fields are required.");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("MovieMoodSignUpData")) || [];

    const matchedUser = storedUsers.find(
      (user) =>
        (user.username.toLowerCase() === identifier.toLowerCase() ||
         user.email.toLowerCase() === identifier.toLowerCase()) &&
        user.password === password
    );

    if (!matchedUser) {
      setError("Invalid username/email or password.");
      return;
    }

    setError(""); // Clear error
    alert("Login successful!");
    localStorage.setItem("MovieMoodCurrentUser", JSON.stringify(matchedUser));
    navigate("/"); // Redirect to your desired page
  };

  return (
    <div className={classes.Loginform}>
      <form className={classes.from} onSubmit={handleSubmit}>
        <div className={classes.Form_Header}>
          <span className={classes.tittleheader}>Login</span>
          <span className={classes.subtittle}>To see your Favourite Movies</span>
        </div>

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <div className={classes.inputs}>
          <div className={classes.identifier} id="inputs">
            <label className={classes.placeholder}>Username or Email</label>
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              placeholder="Enter your username or email"
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.password} id="inputs">
            <label className={classes.placeholder}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit">Login</button>
        <div className={classes.or_Link}><hr className={classes.line}/>OR<hr className={classes.line}/></div>
        <Link  className={classes.signup} to="/signup">signup</Link>
      </form>
    </div>
  );
}

export default LoginPage;
