import "./App.css";
import Home from "./pages/Home";
import cardImage from "./assets/bg.png";
import Top from "./components/top/Top";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div>
      <Top />
      {/* <img className="app__background_image" src={cardImage} /> */}
      <Home />
      <Menu />
    </div>
  );
}

export default App;
