import "./App.css";
import Home from "./pages/Home";
import cardImage from "./assets/bg.png";
import Top from "./components/top/Top";
import Menu from "./components/menu/Menu";
import Pages from "./pages/Pages";
import { useState } from "react";
import { useSpring } from "@react-spring/web";

function App() {
  const [props, api] = useSpring(() => ({from: {left: '-200vw'}}))

  return (
    <div className="app">
      <Top />
      {/* <img className="app__background_image" src={cardImage} /> */}
      <Pages props={props} />
      <Menu api={api} />
    </div>
  );
}

export default App;
