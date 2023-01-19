import React from "react";
import styles from "./card.css";
import { Controls } from "./Controls";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";

interface ICardProps {
  author: string;
  title: string;
  img?: string | undefined;
  score: number;
  time: number;
}

export function Card(props: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent
        author={props.author}
        title={props.title}
        time={props.time}
      />
      <Preview
        img={
          props.img
            ? props.img
            : "https://cdn.dribbble.com/users/11164888/screenshots/18243569/media/72630edb14fbb22a3f6b33583ea88707.jpg"
        }
      />
      <Menu />
      <Controls score={props.score} />
    </li>
  );
}
