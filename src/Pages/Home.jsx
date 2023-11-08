import React from "react";
import "./Home.css";
import Men from "./Men";
import Collections from "./Collection";

function Home() {
  return (
    <div  style={{ backgroundColor: "rgb(241,241,239)" }}>
      <div className="home">
        <h1 className="text-light">PLASHOE</h1>
      </div>
      <div className="container">
      <hr />
        <Collections />
      </div>
    </div>
  );
}

export default Home;