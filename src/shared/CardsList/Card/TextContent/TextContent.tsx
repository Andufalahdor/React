import React from "react";
import styles from "./textcontent.css";
import { UserLink } from "./UserLink";
import { Title } from "./Title/Title";

interface ITextContentProps {
  author: string;
  title: string;
  time: number;
}

export function TextContent(props: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink author={props.author} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {props.time}
        </span>
      </div>
      <Title title={props.title} />
    </div>
  );
}
