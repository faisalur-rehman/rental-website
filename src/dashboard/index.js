import React from "react";
import DashHead from "./head";
import DashFoot from "./foot";
const Index = ({ type }) => {
  return (
    <>
      <section className="dashboard">
        <section className="dash-content">
          <DashHead type={type} />
          <DashFoot />
        </section>
      </section>
    </>
  );
};

export default Index;
