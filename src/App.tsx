import "./App.css";
import Top from "./components/top/Top";
import Menu from "./components/menu/Menu";
import Pages from "./pages/Pages";
import { useSpring } from "@react-spring/web";
import TelegramBtn from "./components/telegramBtn/TelegramBtn";

function App() {
  const [props, api] = useSpring(() => ({ from: { left: "-200vw" } }));
  const isAuth = false;
  return (
    <div className="app">
      {
        isAuth ?
        <>
          <Top />
          <Pages props={props} />
          <Menu api={api} />
        </>
        :
        <TelegramBtn />
      }
    </div>
  );
}

export default App;
