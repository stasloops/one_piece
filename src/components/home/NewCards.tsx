import { useSpring, useSprings } from "@react-spring/web";
import "../../styles/components/home/newCards.css";
import CardItem from "./CardItem";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { $request } from "../../api/request";
import { useUser } from "../../hooks/useUser";
import DropDownCard from "./DropDownCard";

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -8 + Math.random() * 16,
  delay: i * 300,
});

const from = (_i: number) => ({ x: 0, rot: 0, scale: 2, y: -1000 });

const NewCards = () => {
  const userData: any = useUser();
  if (!userData) {
    return null;
  }

  const [droppedCardInfo, setDroppedCardInfo] = useState<any>({});
  const [droppedСardProps, droppedСardApi] = useSpring(() => ({
    from: { y: -1000, x: 0, rot: -10 + Math.random() * 10, scale: 1 },
  }));
  const [props, api] = useSprings(5, (i) => ({
    from: from(i),
    ...to(i),
  }));

  const getAdding = async () => {
    const res = await $request.get("/cards/adding");
    if (res.data.message) {
      return console.log(res.data.message);
    }
    userData?.setUser(res.data);
  };

  const openNewCard = useCallback(async () => {
    await getAdding();

    const res = await $request.get("/cards/open");
    if (res.data.message) {
      return console.log(res.data.message);
    }
    console.log("Тебе выпало:", res.data.card);
    setDroppedCardInfo(res.data.card);
    userData?.setUser(res.data.user);
  }, []);

  const cleanupDroppedCard = () => {
    droppedСardApi.start(() => ({ y: 0, x: -500 }));
    setTimeout(() => {
      droppedСardApi.start(() => ({ y: -1000, x: 0 }));
    }, 200);
  };

  return (
    <div className="cards">
      <DropDownCard
        droppedСardProps={droppedСardProps}
        cleanupDroppedCard={cleanupDroppedCard}
        droppedСardApi={droppedСardApi}
        droppedCardInfo={droppedCardInfo}
      />
      {props.map((props, i) => (
        <CardItem
          droppedСardApi={droppedСardApi}
          openNewCard={openNewCard}
          props={props}
          index={i}
          api={api}
          key={i}
        />
      ))}
    </div>
  );
};

export default NewCards;
