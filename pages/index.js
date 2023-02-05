import React, { Fragment, useEffect } from "react";
import Agency from "./layouts/agency";

const Home = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#10266b");
    document.body.style.setProperty("--secondary", "#464545");
    document.body.style.setProperty("--light", "#1F357D");
    document.body.style.setProperty("--dark", "#04185B");
  });

  return (
    <Fragment>
      <Agency />
    </Fragment>
  );
};

export default Home;
