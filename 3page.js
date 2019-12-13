import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Menu</h1>
      <hr />
      <ul>
        <li1>
          Monday
          <br />
          We're having:
        </li1>
        <li2>Homemade Meatloaf *a favorite Small $20 Large $30</li2>
        <br />
        <li1>
          Tuesday
          <br />
          We're having:
        </li1>
        <li2>
          Norwegian Roasted Salmon with wild rice and roasted veggies Small $20
          Large $30
        </li2>
        <br />
        <li1>
          Wednesday
          <br />
          We're having:
        </li1>
        <li2>
          {" "}
          Sliced Glazed Spiral Ham with roasted Veggies Small $20 Large $30
        </li2>
        <br />
        <li1>
          Thursday
          <br />
          We're having:
        </li1>
        <li2>
          4 Cheese Manicotti with homeade meatsauce and topped with mozzarella
          and Parmesan Cheese Small $20 Large $30
        </li2>
        <br />
        <li1>
          Friday
          <br />
          We're having:
        </li1>
        <li2>
          Chicken Bacon Ranch Sub Sandwiches Small $15 (4) Large $25 (6)
        </li2>
        <br />

        <li3>The menu will be changed and updated every week</li3>
      </ul>
    </div>
  );
}
<a href="https://9cygz.csb.app/" target="_self">
  3rd page
</a>;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);