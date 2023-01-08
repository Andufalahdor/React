import React from "react";
import { BlockIcon, WarningIcon } from "../../../../Icons";
import styles from "./menuitemslist.css";

interface IMenuItemsListProps {
  postId?: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.MenuItemsList}>
      <li
        className={styles.menuItem}
        onClick={() => {
          console.log(postId);
        }}
      >
        <BlockIcon /> <span>Скрыть</span>
        {/* <Text size={12} color={EСolors.grey99}>Скрыть</Text> */}
      </li>

      <div className={styles.divider} />

      <li>
        <WarningIcon /> <span>Пожаловаться</span>
        {/* <Text size={12} color={EСolors.grey99}>Пожаловаться</Text> */}
      </li>
    </ul>
  );
}
