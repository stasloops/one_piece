import React, { useEffect, useState } from "react";
import { $request } from "../api/request";
import "../styles/pages/cards.css";

const Cards = () => {
  const [cards, setCards] = useState<any>([]);

  useEffect(() => {
    const getCards = async () => {
      const res = await $request.get("/cards");
      console.log(res.data, "cards");
      setCards(res.data);
    };
    getCards();
  }, []);

  return (
    <div className="cards__list">
      {cards.map((c: any) => (
        <div  className="cards__list_item">
          <img className="cards__list_item_img" src={c.image_url} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
