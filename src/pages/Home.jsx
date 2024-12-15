import React, { useEffect } from "react";
import Page from "../components/Page";
import HomePage from "../components/HomePage";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <Page label={"Home"}>
      <HomePage />
    </Page>
  );
}

export default Home;
