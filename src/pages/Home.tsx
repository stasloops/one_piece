import React, { useEffect } from "react";
import { Deck } from "../components/home/Cards";
import NewCards from "../components/home/NewCards";

const Home = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <Deck />
      {/* <NewCards /> */}
    </div>
  );
};

export default Home;
