import React, { useState, useEffect } from "react";
import classes from "./SignupPage.module.css";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem("MovieMoodSignUpData");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("MovieMoodSignUpData", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const [data, setData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, fullname, email, phone, gender } = data;

    if (!fullname || !email || !phone || !gender) return alert("Please fill in all fields.");

    const isDuplicate = items.some(
      (item) =>
        item.username.toLowerCase() === username.toLowerCase() ||
        item.email.toLowerCase() === email.toLowerCase()
    );

    if (isDuplicate) {
      alert("Username or email already exists.");
      return;
    }

    addItem(data); // Add to the items list
    alert("Registration successful!");

    setData({
      username: "",
      fullname: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
    });

    // Redirect to the login page after successful registration
    navigate("/login");
  };

  return (
    <div>
      <form className={classes.from} onSubmit={handleSubmit}>
        <div className={classes.Form_Header}>
          <span className={classes.tittleheader}>Signup</span>
          <span className={classes.subtittle}>
            To see your Favourite Movies
          </span>
        </div>

        <div className={classes.inputs}>
          <div className={classes.username} id="inputs">
            <label className={classes.placeholder}> Username </label>
            <input
              type="text"
              name="username"
              value={data.username}
              placeholder="username"
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.FirstName} id="inputs">
            <label className={classes.placeholder}> Full Name </label>
            <input
              type="text"
              name="fullname"
              value={data.fullname}
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.E_Mail} id="inputs">
            <label className={classes.placeholder}> Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="Email (e.g adelekealiyah@gmail.com)"
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.password} id="inputs">
            <label className={classes.placeholder}> Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="Password (e.g. yourpassword)"
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.Gender} id="inputs">
            <label className={classes.placeholder}>Gender</label>
            <select
              id="gender"
              name="gender"
              value={data.gender}
              onChange={handleChange}
              className={classes.genderinput}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className={classes.phonenumber} id="inputs">
            <label className={classes.placeholder}>Phone number</label>
            <input
              type="tel"
              name="phone"
              value={data.phone}
              placeholder="Phone Number (e.g. +2349159052549)"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignupPage;
