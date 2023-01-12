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
import { Icon, EIcons } from "../../../../Icon";

interface IMenuItemsListProps {
  postId?: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.MenuItemsList}>
      <li className={styles.menuItem}>
        <Icon name={EIcons.comment} />
        <Text size={14} color={EColors.gray99}>
          Комментарии
        </Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.shared} />
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
        <Icon name={EIcons.hide} />
        <Text size={14} color={EColors.gray99}>
          Скрыть
        </Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.save} />
        <Text size={14} color={EColors.gray99}>
          Сохранить
        </Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.warning} />
        <Text size={14} color={EColors.gray99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
