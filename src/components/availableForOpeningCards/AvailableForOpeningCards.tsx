import React, { useEffect, useState } from "react";
import { $request } from "../../api/request";
import { useUser } from "../../hooks/useUser";

const USER_GAP = 60;
const AvailableForOpeningCards = () => {
  const userData: any = useUser();
  const [leftTime, setLeftTime] = useState(0);
  const [secondsPassed, setSecondsPassed] = useState(0);

  const getAdding = async () => {
    const res = await $request.get("/cards/adding");
    if (res.data.message) {
      return console.log(res.data.message);
    }
    userData?.setUser(res.data);
  };

  useEffect(() => {
    if (leftTime < 2) {
      setTimeout(() => {
        getAdding();
      }, 1000);
    }
  }, [leftTime]);



  const beforeTime = userData?.user?.latest_card_adding;
  const splitTime = beforeTime?.split(" ") || [];
  const transformatedTime = {
    day: Number(splitTime[0]),
    hours: Number(splitTime[1]),
    minutes: Number(splitTime[2]),
    seconds: Number(splitTime[3]),
  };

  const timeToSeconds = (time: any) => {
    const dayToSeconds = time.day * 24 * 60 * 60;
    const hoursToSeconds = time.hours * 60 * 60;
    const minutesToSeconds = time.minutes * 60;
    const sum = dayToSeconds + hoursToSeconds + minutesToSeconds + time.seconds;
    return sum;
  };

  useEffect(() => {
    function getNowTime() {
      const day = new Date().getDate();
      const hours = new Date().getHours();
      const minutes = new Date().getMinutes();
      const seconds = new Date().getSeconds();
  
      return {
        string: `${day} ${hours} ${minutes} ${seconds}`,
        numbers: { day: day, hours: hours, minutes: minutes, seconds: seconds },
      };
    }

    const interval = setInterval(() => {
      const time = getNowTime();
      setSecondsPassed(
        timeToSeconds(time.numbers) - timeToSeconds(transformatedTime)
      );
    }, 900);

    if (userData?.user?.card_for_opening > 4) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [userData?.user?.card_for_opening]);

  useEffect(() => {
    setLeftTime(USER_GAP - secondsPassed);
  }, [secondsPassed]);

  return (
    <div className="available">
      <div className="available__from">
        Доступно для открытия: {userData?.user?.card_for_opening}/5
      </div>
      {userData?.user?.card_for_opening > 4 ? null : (
        <div className="available__after">+1 Через: {leftTime}сек</div>
      )}
    </div>
  );
};

export default AvailableForOpeningCards;
