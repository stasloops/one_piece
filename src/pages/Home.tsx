import React from "react";
import AvailableForOpeningCards from "../components/availableForOpeningCards/AvailableForOpeningCards";
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
        flexDirection: "column",
        height: "70vh",
      }}
    >
      {/* <Deck /> */}
      <NewCards />
      <AvailableForOpeningCards />
    </div>
  );
};

export default Home;
