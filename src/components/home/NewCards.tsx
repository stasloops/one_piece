import {
  animated,
  useSpring,
  useSprings,
  to as interpolate,
  to,
} from "@react-spring/web";
import "../../styles/components/home/cards.css";

const arr: any[] = [1, 2, 3, 4, 5];

// const arr: string[] = [];

// for (let i = 0; i < 5; i++) {
//   arr.push(cardImage);
// }

const NewCards = () => {
  const [props, api] = useSprings(arr.length, (i) => ({
    from: { x: 0, y: -1000, backgroundColor: "#000", scale: 2, rot: 0 },
    to: {
      x: 0,
      y: i * -30,
      backgroundColor: "#922e2e",
      delay: i * 100,
      scale: 1,
      rot: -10 + Math.random() * 20,
    },
  }));

  const trowCard = (index: number) => {
    api.start((i: number) => {
      if (i === index) {
        return {
          x: props[i].x.get() === 200 ? 0 : 200,
        };
      }
    });
  };

  const trans = (r: number, s: number) =>
    `perspective(1500px) rotateX(30deg) rotateY(${
      r / 10
    }deg) rotateZ(${r}deg)  scale(${s})`;

  return (
    <div>
      {props.map(({ x, y, backgroundColor, rot, scale }, i) => (
        <animated.div
          key={i}
          className="deck"
          onClick={() => trowCard(i)}
          style={{
            // border: "1px solid #000",
            width: "40px",
            height: "40px",
            backgroundColor,
            y,
            x,
            transform: interpolate([rot, scale], trans),
          }}
        >
          {i}
        </animated.div>
      ))}
    </div>
  );
};

export default NewCards;
