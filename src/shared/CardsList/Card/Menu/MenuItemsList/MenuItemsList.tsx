import React from "react";
import { BlockIcon, WarningIcon } from "../../../../Icons";
import styles from "./menuitemslist.css";
import { Text, EColors } from "../../../../Text";

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
        <BlockIcon />
        <Text size={12} color={EColors.gray99}>
          Скрыть
        </Text>
      </li>

      <div className={styles.divider} />

      <li>
        <WarningIcon />
        <Text size={12} color={EColors.gray99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
