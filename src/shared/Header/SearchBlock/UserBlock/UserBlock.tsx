import React from "react";
import { EColors, Text } from "../../../Text";
import styles from "./userblock.css";
import { Icon, EIcons } from "../../../Icon";

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a href="https://www.reddit.com/api/v1/authorize?client_id=LU_3Dp8bIkpwwyvzPoqAyA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read identity submit">
      <div className={styles.userBox}>
        <div className={styles.avatarBox}>
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt="user avatar"
              className={styles.avatarImage}
            />
          ) : (
            <Icon name={EIcons.anone} />
          )}
        </div>

        <div className={styles.username}>
          {/* <Break size={12} /> */}
          <Text size={20} color={username ? EColors.black : EColors.gray99}>
            {username || "Аноним"}
          </Text>
        </div>
      </div>
    </a>
  );
}
