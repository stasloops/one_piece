import React, { useEffect } from "react";
import { Deck } from "../components/home/Cards";
import NewCards from "../components/home/NewCards";

const Home = () => {
  // function onTelegramAuth(user) {
  //   alert(
  //     "Logged in as " +
  //       user.first_name +
  //       " " +
  //       user.last_name +
  //       " (" +
  //       user.id +
  //       (user.username ? ", @" + user.username : "") +
  //       ")"
  //   );
  // }

  useEffect(() => {
    const request = async () => {
      const res = await fetch(
        "https://oauth.telegram.org/embed/one%20piece?origin=http%3A%2F%2Flocalhost%3A3000&return_to=http%3A%2F%2Flocalhost%3A3000%2F&size=medium&request_access=write"
      );
      console.log(await res.json());
    };
    request();
  }, []);

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
      {/* <script
        async
        src="https://telegram.org/js/telegram-widget.js?22"
        data-telegram-login="one piece"
        data-size="medium"
        data-onauth="onTelegramAuth(user)"
        data-request-access="write"
      ></script> */}
      <script type="text/javascript"></script>
      {/* <Deck /> */}
      {/* <NewCards /> */}
    </div>
  );
};

export default Home;
