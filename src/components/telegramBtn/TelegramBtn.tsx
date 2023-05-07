// @ts-nocheck
import axios from "axios";
import React, { useState } from "react";
import TelegramLoginButton from "react-telegram-login";
import { $request } from "../../api/request";

const TelegramBtn = () => {
  const login = async (loginData: any) => {
    const data = {
      name: loginData.first_name,
      hash: loginData.hash,
      telegram_id: loginData.id,
      photo_url: loginData.photo_url,
    };
    $request.post("/user/login", data);
  };

  const handleTelegramResponse = (response: any) => {
    console.log(response);
    login(response);
  };

  return (
    <TelegramLoginButton
      dataOnauth={handleTelegramResponse}
      botName="onetest_piece_bot"
    />
  );
};

export default TelegramBtn;
