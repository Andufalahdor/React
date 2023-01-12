import React from "react";
import {
  BlockIcon,
  WarningIcon,
  CommentIcon,
  HideIcon,
  SharedIcon,
  SaveIcon,
} from "../../../../Icons";
import styles from "./menuitemslist.css";
import { Text, EColors } from "../../../../Text";

interface IMenuItemsListProps {
  postId?: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.MenuItemsList}>
      <li className={styles.menuItem}>
        <CommentIcon />
        <Text size={14} color={EColors.gray99}>
          Комментарии
        </Text>
      </li>
      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <SharedIcon />
        <Text size={14} color={EColors.gray99}>
          Поделиться
        </Text>
      </li>

      <div className={styles.divider} />
      <li
        className={styles.menuItem}
        onClick={() => {
          console.log(postId);
        }}
      >
        <HideIcon />
        <Text size={14} color={EColors.gray99}>
          Скрыть
        </Text>
      </li>

      <div className={styles.divider} />
      <li className={styles.menuItem}>
        <SaveIcon />
        <Text size={14} color={EColors.gray99}>
          Сохранить
        </Text>
      </li>

      <div className={styles.divider} />
      <li className={styles.menuItem}>
        <WarningIcon />
        <Text size={14} color={EColors.gray99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
