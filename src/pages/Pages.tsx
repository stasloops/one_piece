import React, { FC } from "react";
import Home from "./Home";
import "../styles/pages/pages.css";

const pages = [
  { id: 1, page: <Home /> },
  { id: 2, page: <Home /> },
  { id: 3, page: <Home /> },
  { id: 4, page: <Home /> },
  { id: 5, page: <Home /> },
];

interface Props {
  activeMenuItem: number;
}

const Pages: FC<Props> = ({ activeMenuItem }) => {
  return (
    <div className="pages">
      <div
        style={{ left: `-${activeMenuItem - 1}00vw` }}
        className="pages__box"
      >
        {pages.map((page) => (
          <div className="pages__item">
            {page.id}
            {page.page}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pages;
