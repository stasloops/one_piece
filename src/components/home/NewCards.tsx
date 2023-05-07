import { animated, useSpring, useSprings } from "@react-spring/web";
import "../../styles/components/home/newCards.css";
import cardImage from "../../assets/card.jpg";
import CardItem from "./CardItem";
import { useState } from "react";
import { $request } from "../../api/request";
import { useUser } from "../../hooks/useUser";

const arr: string[] = [];

for (let i = 0; i < 5; i++) {
  arr.push(cardImage);
}

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 10,
  delay: i * 150,
});

const from = (_i: number) => ({ x: 0, rot: 0, scale: 2, y: -1000 });

const NewCards = () => {
  const userData: any = useUser();

  const [droppedCardInfo, setDroppedCardInfo] = useState<any>({});
  const [droppedСardProps, droppedСardApi] = useSpring(() => ({
    from: { y: -1000 },
  }));
  const [props, api] = useSprings(arr.length, (i) => ({
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

  const openNewCard = async () => {
    await getAdding();

    const res = await $request.get("/cards/open");
    if (res.data.message) {
      return console.log(res.data.message);
    }
    console.log("Тебе выпало:", res.data.card);
    setDroppedCardInfo(res.data.card);
    userData?.setUser(res.data.user);
  };

  const cleanupDroppedCard = () => {
    droppedСardApi.start(() => ({ y: 0, x: -1000 }));
  };

  return (
    <div className="cards">
      <animated.div
        onClick={cleanupDroppedCard}
        className="cards__dropdown_card"
        style={{ ...droppedСardProps }}
      >
        {droppedCardInfo.name} - {droppedCardInfo.rarity} - {droppedCardInfo.id}
      </animated.div>
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
