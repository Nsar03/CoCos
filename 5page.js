import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form action="index.html" method="post">
        <h1>Platter Order Form</h1>
        <form action="/action_page.php">
          Name: <input type="text" name="fullname" />
          <br />
          Email: <input type="text" name="email" />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <label for="color">Platters</label>
        <select id="color" name="shirt_color">
          <option value="red">Meatloaf Small</option>
          <option value="yellow">Meatloaf Large</option>
          <option value="red">Salmon Small</option>
          <option value="red">Salmon Large</option>
          <option value="red">Ham & Veggies Small</option>
          <option value="red">Ham & Veggies Large</option>
          <option value="red">Manicotti Small</option>
          <option value="red">Manicotti Large</option>
          <option value="red">CBR Subs Small</option>
