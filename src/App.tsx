import "./App.css";
import Top from "./components/top/Top";
import Menu from "./components/menu/Menu";
import Pages from "./pages/Pages";
import { useSpring } from "@react-spring/web";
import { UserProvider } from "./hooks/useUser";
import {FpsView} from "react-fps";
function App() {
  const [props, api] = useSpring(() => ({ from: { left: "-200vw" } }));

  return (
    <div className="app">
      <FpsView/>
      <UserProvider>
        {/* <Top /> */}
        <Pages props={props} />
        <Menu api={api} />
      </UserProvider>
    </div>
  );
}

export default App;
