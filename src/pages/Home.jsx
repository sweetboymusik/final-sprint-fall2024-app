import React, { useEffect } from "react";
import Page from "../components/Page";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return <Page label={"Home"}></Page>;
}

export default Home;
