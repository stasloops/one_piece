import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import cardImage from "./assets/bg.png";

function App() {
  return (
    <div>
      <h1 style={{margin: 0}}>One Piece Card</h1>
      <img className="app__background_image" src={cardImage} />
      <Home />
    </div>
  );
}

export default App;
