import React, { FC } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, to as interpolate } from "@react-spring/web";
import cardImage from "../../assets/card.jpg";
import { useUser } from "../../hooks/useUser";

const arr: string[] = [];
for (let i = 0; i < 15; i++) {
  arr.push(cardImage);
}

interface Props {
  api: any;
  props: any;
  index: number;
  openNewCard: () => void;
  droppedСardApi: any;
}
const CardItem: FC<Props> = ({
  api,
  props,
  index,
  openNewCard,
  droppedСardApi,
}) => {
  const { x, y, rot, scale } = props;
  const userData: any = useUser();

  const bind = useDrag(({ down, movement: [mx], swipe: [swipeX] }) => {
    api.start((i: any) => {
      if (i !== index) {
        return;
      }
      return {
        x: swipeX !== 0 ? (swipeX < 0 ? -500 : 500) : down ? mx : 0,
        scale: down ? 1.1 : 1,
        rot: 0,
      };
    });

    if (!down && swipeX !== 0) {
      openNewCard();
      if (userData.user.card_for_opening) {
        droppedСardApi.start(() => ({
          y: 0,
          x: 0,
          rot: -8 + Math.random() * 16,
          scale: 1,
        }));
      }
    }
  });

  const trans = (r: number, s: number) =>
    `perspective(1500px) rotateX(30deg) rotateY(${
      r / 10
    }deg) rotateZ(${r}deg)  scale(${s})`;

  return (
    <animated.div
      className="cards__item"
      style={{
        y,
        x,
      }}
    >
      <animated.div
        className="cards__item_box"
        {...bind()}
        style={{
          backgroundImage: `url(${arr[index]})`,
          transform: interpolate([rot, scale], trans),
        }}
      ></animated.div>
    </animated.div>
  );
};

export default CardItem;
