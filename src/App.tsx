import "./App.css";
import Home from "./pages/Home";
import cardImage from "./assets/bg.png";
import Top from "./components/top/Top";
import Menu from "./components/menu/Menu";
import Pages from "./pages/Pages";
import { useState } from "react";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(3);
  return (
    <div className="app">
      <Top />
      {/* <img className="app__background_image" src={cardImage} /> */}
      <Pages activeMenuItem={activeMenuItem} />
      <Menu setActiveMenuItem={setActiveMenuItem} />
    </div>
  );
}

export default App;
