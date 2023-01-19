import React from "react";
import styles from "./title.css";

interface ITitleProps {
  title: string;
}

export function Title(props: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
        {props.title}
      </a>
    </h2>
  );
}
