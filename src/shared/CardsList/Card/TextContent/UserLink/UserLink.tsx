import React from "react";
import styles from "./userlink.css";

interface IUserLinkProps {
  author: string;
}

export function UserLink(props: IUserLinkProps) {
  return (
    <div className={styles.userLink}>
      <img
        src="https://cdn.dribbble.com/users/1507273/screenshots/18041565/media/32eab32adcf12462110b745f4b5f2293.png"
        alt="avatar"
        className={styles.avatar}
      />
      <a href="#user-url" className={styles.username}>
        {props.author}
      </a>
    </div>
  );
}
