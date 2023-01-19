import React from "react";
import styles from "./preview.css";

interface IPreviewProps {
  img: string;
}

export function Preview(props: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img src={props.img} className={styles.previewImg} />
    </div>
  );
}
