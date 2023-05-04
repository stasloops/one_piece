import React from "react";
import Bounty from "./Bounty";
import Gem from "./Gem";
import "../../styles/components/top/top.css";

const Top = () => {
  return (
    <div className="top">
      <Bounty />
      <Gem />
      <Gem />
    </div>
  );
};

export default Top;
