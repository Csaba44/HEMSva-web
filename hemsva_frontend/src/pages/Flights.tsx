import React from "react";
import Layout from "../components/Layout";
import CompletedFlight from "../components/flights/CompletedFlight";

function Flights() {
  return (
    <Layout>
      <h1 className="h1">Legutóbbi repüléseim</h1>
      <div className="flex flex-col gap-2 pt-5 px-5">
        <CompletedFlight type="mission" date="2025-09-21"></CompletedFlight>
        <CompletedFlight type="repositioning" date="2025-09-21"></CompletedFlight>

      </div>
    </Layout>
  );
}

export default Flights;
