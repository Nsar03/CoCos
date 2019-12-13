import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>About us continued</h1>
      <h2>Services</h2>
      <p>
        our services include catering,delivery,good for groups,good for
        kids,take out,and walk-ins welcome
      </p>
      <h2>Specialities</h2>
      <p>
        we serve breakfast,lunch,dinner, and drinks // sit in or take it to
        go,you pick
      </p>
      <h3>Facebook Page</h3>
      <p>
        <a href="https://www.facebook.com/pg/MedinaTNCoCos/about/?ref=page_internal">
          Facebook
        </a>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
