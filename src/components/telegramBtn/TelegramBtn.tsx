import axios from "axios";
import React, { useState } from "react";
// import { Helmet } from "react-helmet";

const TelegramBtn = () => {
  const [obj, setobj] = useState<any>();

  const login = async () => {
    const bodyFormData = new FormData();
    bodyFormData.append("origin", "https://one-piece-sigma.vercel.app");
    bodyFormData.append("embed", "1");
    bodyFormData.append("request_access", "write");
    bodyFormData.append("return_to", "https://one-piece-sigma.vercel.app");

    const res = await axios({
      method: "post",
      url: "https://oauth.telegram.org/auth/get?bot_id=5639692684",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    setobj(res.data.html);
    console.log(res);
  };

  const onTelegramAuth = (user: any) => {
    console.log(user);
  };

  return (
    <>
      {/* <Helmet> */}
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?22"
        data-telegram-login="onetest_piece_bot"
        data-size="large"
        data-onauth={(user: any) => onTelegramAuth(user)}
        data-request-access="write"
      ></script>
      <button onClick={login}>Login</button>
      {obj}
    </>
  );
};

export default TelegramBtn;
