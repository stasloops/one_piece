import "./App.css";
import Top from "./components/top/Top";
import Menu from "./components/menu/Menu";
import Pages from "./pages/Pages";
import { useSpring } from "@react-spring/web";

function App() {
  const [props, api] = useSpring(() => ({from: {left: '-200vw'}}))

  return (
    <div className="app">
      {/* <Top />
      <Pages props={props} />
      <Menu api={api} /> */}
    </div>
  );
}

export default App;
