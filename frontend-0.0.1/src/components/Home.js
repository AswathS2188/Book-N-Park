import React from "react";
import Dashboard from "./DashBoard";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="Home">
      <div className="Nav">
        <Navbar />
      </div>
      <div className="Dashboard">
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
