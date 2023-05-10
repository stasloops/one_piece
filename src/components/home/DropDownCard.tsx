import { animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import React, { FC } from "react";
import cardImage from "../../assets/card.jpg";

interface Props {
  droppedCardInfo: any;
  droppedСardProps: any;
  droppedСardApi: any;
  cleanupDroppedCard: () => void;
}
const DropDownCard: FC<Props> = ({
  droppedCardInfo,
  droppedСardProps,
  droppedСardApi,
  cleanupDroppedCard,
}) => {
  const trans = (r: number, s: number) =>
    `perspective(1500px) rotateX(30deg) rotateY(${
      r / 10
    }deg) rotateZ(${r}deg)  scale(${s})`;

  const bind = useDrag(({ down, movement: [mx], swipe: [swipeX] }) => {
    droppedСardApi.start(() => {
      return {
        x: down ? mx : 0,
        scale: down ? 1.1 : 1,
        rot: 0,
      };
    });

    // if (!down && swipeX !== 0) {
    //   openNewCard();
    //   if (userData.user.card_for_opening) {
    //     droppedСardApi.start(() => ({
    //       y: 0,
    //       x: 0,
    //       rot: -8 + Math.random() * 16,
    //       scale: 1,
    //     }));
    //   }
    // }
  });

  return (
    <animated.div
      className="cards__item"
      style={{ zIndex: 20, ...droppedСardProps }}
    >
      <animated.div
        className="cards__item_box"
        onClick={cleanupDroppedCard}
        {...bind()}
        style={{
          backgroundImage: `url(${droppedCardInfo.image_url})`,
          transform: interpolate(
            [droppedСardProps.rot, droppedСardProps.scale],
            trans
          ),
        }}
      >
        {droppedCardInfo.name} - {droppedCardInfo.rarity} - {droppedCardInfo.id}
      </animated.div>
    </animated.div>
  );
};

export default DropDownCard;
