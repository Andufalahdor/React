import React, { useContext } from "react";
import styles from "./cardslist.css";
import { Card } from "./Card/Card";
import { postsContext } from "./../context/postsContext";
import { GenericList } from "./../Content/GenericList/GenericList";
import { generateId } from "./../../utils/react/generateRandomIndex";

export function CardsList() {
  const data = useContext(postsContext);

  const LIST = data
    .map((cv) => {
      return {
        text: (
          <Card
            author={cv.author}
            title={cv.title}
            img={cv.img}
            score={cv.score}
            time={cv.created_utc}
          />
        ),
      };
    })
    .map(generateId);
  return (
    <ul className={styles.cardsList}>
      <GenericList list={LIST} /> :
    </ul>
  );
}
