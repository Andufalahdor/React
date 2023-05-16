import React, { useState } from "react";
import styles from "./title.css";
import { Post } from "../../../../Post";

interface ITitleProps {
  title: string;
}

export function Title(props: ITitleProps) {

  const [isModalOpened, setIsModalOpened] = useState(false)

  return (
    <h2 className={styles.title}>
      <a href="#" className={styles.postLink} onClick={() => {setIsModalOpened(true)}}>
        {props.title}
      </a>

      {isModalOpened && (
        <Post onClose={() => { setIsModalOpened(false) }}/>
      )}
    </h2>
  );
}
