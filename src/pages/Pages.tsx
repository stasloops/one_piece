import React, { FC } from "react";
import Home from "./Home";
import "../styles/pages/pages.css";
import { animated } from "@react-spring/web";

const pages = [
  { id: 1, page: <Home />, bg: 'red' },
  { id: 2, page: <Home />, bg: 'blue'},
  { id: 3, page: <Home />, bg: 'orange' },
  { id: 4, page: <Home />, bg: 'green' },
  { id: 5, page: <Home />, bg: 'yellow' },
];

interface Props {
  props: any;
}

const Pages: FC<Props> = ({ props }) => {
  return (
    <div className="pages">
      <animated.div
        style={{ ...props }}
        className="pages__box"
      >
        {pages.map((page) => (
          <div style={{backgroundColor: page.bg}} className="pages__item">
            {page.id}
            {page.page}
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default Pages;
